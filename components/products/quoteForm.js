'use client'

import Button from "../button";
import { useAtom, Provider } from "jotai";
import { BasketAtom } from "@/lib/stores/basketAtom";
import { useState, useRef, useEffect } from "react";
import { VerifyCaptcha } from '@/lib/serverActions';
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from 'react-toastify';

export default function QuoteForm() {

    const [form, setForm] = useState({
        name: '',
        contact: '',
        email: '',
        id: '',
        address: ''
    })

    const [basketItems, setBasketItems] = useAtom(BasketAtom);
    const [basket, setBasket] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [loading, setLoading] = useState(false)
    const [verified, setVerified] = useState(false)

    const recaptchaRef = useRef(null);

    useEffect(() => {
        if (basketItems) {
            setBasket(basketItems);
        }
    }, [basketItems, basket])

    useEffect(() => {

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const isValid = emailRegex.test(form.email)

        if (form.name.length > 0 && form.email.length > 0 && form.contact.length > 0 && isValid && verified && basket) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [form, verified, basket])

    async function handleCaptchaSubmission(token) {
        try {
            const response = await VerifyCaptcha(token);
            console.log("CAPTCHA RESPONSE: ", response);
            setVerified(response);
        } catch (error) {
            setVerified(false);
            console.log("CAPTCHA FAILED: ", error.message);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target)
        console.log("BASKET: ", basket);
        // basket.forEach((item) => formData.append("items[]", item))
        formData.append("basket", JSON.stringify(basket))
        try {
            setLoading(true);
            const response = await fetch('/api/email/quotation', {
                method: 'post',
                body: formData
            })
            // console.log(response.body.json());
            if (response.ok) {
                setLoading(false);
                setForm({
                    name: '',
                    email: '',
                    contact: '',
                    id: '',
                    address: ''
                })
                toast.success(`Quote Sent Successfully:`, {
                    position: toast.POSITION.TOP_CENTER
                });
                setVerified(false);
                recaptchaRef.current.reset()
            } else {
                throw new Error("Something wrong happenned, please try again...")
            }

        } catch (error) {
            toast.error("Something wrong happenned, please try again.", {
                position: toast.POSITION.TOP_LEFT
            });
            console.log("Oops! Something wrong happenned... ", error.message);
            setLoading(false)
            setForm({
                name: '',
                email: '',
                contact: '',
                id: '',
                address: ''
            })
            setVerified(false);
            recaptchaRef.current.reset()
        }
    }

    return (
        <section className="w-fit h-full p-4 rounded-sm shadow-md bg-[#FCFCFC] shrink-0">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 w-full h-fit"
            >
                <h2 className="pb-2 text-lg text-pac-orange font-bold">Inquiry Form</h2>
                <div className="flex flex-col gap-1 w-full h-fit">
                    <label className="font-semibold text-sm text-[#121212]">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-60 h-fit border-2 border-[#575757]/20 text-[#373737] rounded-sm focus:border-nav-orange/80 px-2 py-1 outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1 w-full h-fit">
                    <label className="font-semibold text-sm text-[#121212]">
                        Contact Number
                    </label>
                    <input
                        type="text"
                        name="contact"
                        value={form.contact}
                        onChange={(e) => setForm({ ...form, contact: e.target.value })}
                        placeholder="Mobile/Landline Number"
                        className="w-60 h-fit border-2 border-[#575757]/20 text-[#373737] rounded-sm focus:border-nav-orange/80 px-2 py-1 outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1 w-full h-fit">
                    <label className="font-semibold text-sm text-[#121212]">
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-60 h-fit border-2 border-[#575757]/20 text-[#373737] rounded-sm focus:border-nav-orange/80 px-2 py-1 outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1 w-full h-fit">
                    <label className="font-semibold text-sm text-[#121212]">
                        PRC ID <span className="font-normal italic opacity-60">(optional)</span>
                    </label>
                    <input
                        type="text"
                        placeholder="PRC ID number"
                        className="w-60 h-fit border-2 border-[#575757]/20 text-[#373737] rounded-sm focus:border-nav-orange/80 px-2 py-1 outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1 w-full h-fit">
                    <label className="font-semibold text-sm text-[#121212]">
                        Clinic Address <span className="font-normal italic opacity-60">(optional)</span>
                    </label>
                    <textarea
                        type="text"
                        rows="3"
                        placeholder="Clinic Address"
                        className="w-60 h-fit border-2 border-[#575757]/20 text-[#373737] rounded-sm focus:border-nav-orange/80 px-2 py-1 outline-none resize-none"
                    />
                </div>
                <ReCAPTCHA
                    sitekey="6Ldp5nwoAAAAAJxjk_cq_Fmr-e86simj4O6SR-L8"
                    ref={recaptchaRef}
                    onChange={handleCaptchaSubmission}
                />
                <div>
                    {loading ?
                        <button
                            disabled={true}
                            type='submit'
                            className="group w-fit h-fit bg-size-200 shadow-md bg-gradient-to-r from-[#E05B25] via-[#FD8F29] to-[#E05B25] py-2 px-3 rounded-md hover:bg-pos-100 grow-0 shrink-0 xs:text-sm 2xl:text-lg font-semibold text-[#F1F1F1] transition-all duration-50"
                        >
                            Loading...
                        </button>
                        :
                        <button
                            disabled={disabled}
                            type='submit'
                            className={`group w-fit h-fit bg-size-200 shadow-md bg-gradient-to-r  py-2 px-3 rounded-md hover:bg-pos-100 grow-0  shrink-0 xs:text-sm 2xl:text-lg font-semibold  transition-all duration-50 ${disabled ? ` from-[#272727]/20 via-[#171717]/20 to-[#272727]/20 text-red-600` : `from-[#E05B25] via-[#FD8F29] to-[#E05B25] text-[#FFF]`}`}
                        >
                            {disabled ? `Please fill the form properly` : `Request Quotation`}
                        </button>
                    }
                </div>
            </form>
        </section>
    )
} 