'use client';

export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';
import Button from '../button';
import Image from 'next/image';
import { Icon } from '@iconify-icon/react';
import parse from "html-react-parser"
import { pTagRemover } from '@/lib/helpers';
import { useEffect, useState, useRef } from 'react';
import { VerifyCaptcha } from '@/lib/serverActions';
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from 'react-toastify';

const query = gql`
    query GetcontactUsContents3 {
        contactUsContents(where: {name: "section-3"}) {
            nodes {
                title
                sectionHeading
                sectionSubheading
                contentLine1
                textLine1
            }
        }
    }
    `

export default function MessageUs() {

    const { data } = useSuspenseQuery(query);

    const [form, setForm] = useState({
        name: '',
        email: '',
        contact: '',
        location: '',
        message: ''
    })
    const [disabled, setDisabled] = useState(true)
    const [loading, setLoading] = useState(false)
    const [verified, setVerified] = useState(false)

    const recaptchaRef = useRef(null);

    useEffect(() => {

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const isValid = emailRegex.test(form.email)

        if (form.name.length > 0 && form.email.length > 0 && form.contact.length > 0 && form.location.length > 0 && form.message.length > 0 && isValid && verified) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [form, verified])


    async function handleCaptchaSubmission(token) {
        try {
            const response = await VerifyCaptcha(token);
            // console.log(response);
            setVerified(response);
        } catch (error) {
            setVerified(false);
            console.log("CAPTCHA FAILED: ", error.message);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target)

        try {
            setLoading(true);
            const response = await fetch('/api/email/inquiry', {
                method: 'post',
                body: formData
            })
            if (response.ok) {
                setLoading(false);
                setForm({
                    name: '',
                    email: '',
                    contact: '',
                    location: '',
                    message: ''
                })
                toast.success("Email Sent Successfully.", {
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
                location: '',
                message: ''
            })
            setVerified(false);
            recaptchaRef.current.reset()
        }
    }

    return (
        <div className="relative w-full h-fit overflow-hidden flex justify-center items-center md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-8">
            <div className="absolute z-10 t-0 bg-gradient-to-b from-[#077232]/95 via-[# 063013]/95 to-[#063013]/95 w-full h-full"></div >
            <div className="absolute z-0 t-0 w-full h-full">
                {/* <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/2400'} alt="dental-website-banner" className="object-cover object-center" /> */}
            </div>
            <div className="z-40 text-2xl w-full h-full flex max-md:flex-col-reverse justify-center items-center lg:gap-12 2xl:gap-16 lg:px-34  ">
                <div className="w-fit self-stretch flex flex-col justify-around px-4 xs:gap-4 lg:gap-8 2xl:gap-12 py-8 ">
                    <div className="w-full h-full items-stretch grow max-md:hidden flex flex-col gap-2 ">
                        <h1 className="md:text-3xl xl:text-4xl 2xl:text-5xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">
                            {data?.contactUsContents?.nodes ? data?.contactUsContents?.nodes[0]?.sectionHeading[0] : ''}
                        </h1>
                        <p className="text-[#E1E1E1] w-fit md:max-w-[50ch] text-sm 2xl:text-lg text-left">
                            {data?.contactUsContents?.nodes ? pTagRemover(data?.contactUsContents?.nodes[0]?.contentLine1[1]) : ''}
                        </p>
                    </div>
                    <div className="w-full h-fit flex flex-col shrink-0 gap-2">
                        <h1 className="md:text-3xl xl:text-4xl 2xl:text-5xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">
                            {data?.contactUsContents?.nodes ? data?.contactUsContents?.nodes[0]?.sectionHeading[1] : ''}
                        </h1>
                        <p className="text-[#E1E1E1] w-fit md:max-w-[50ch] text-sm 2xl:text-lg text-left">
                            {data?.contactUsContents?.nodes ? pTagRemover(data?.contactUsContents?.nodes[0]?.contentLine1[1]) : ''}
                        </p>
                        <div className="flex items-center justify-center gap-4 mt-4 max-md:w-full w-fit">
                            {data?.contactUsContents?.nodes ?
                                data?.contactUsContents?.nodes[0]?.sectionSubheading.map(
                                    (c, i) => (
                                        <a key={i} className="text-[#EFEFEF]/90 underline-offset-2 hover:underline hover:text-nav-orange" href={data?.contactUsContents?.nodes ? data?.contactUsContents?.nodes[0]?.textLine1[i] : ''}>
                                            <Icon icon={c} width="48" height="48" />
                                        </a>
                                    ))
                                : ''}
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="h-fit grow self-start flex flex-col lg:w-fit xs:w-full 2xl:max-w-[600px] px-4 py-8 lg:gap-4 xs:gap-8 ">
                    <div className="w-full h-fit md:hidden flex flex-col gap-2"
                    >
                        <h1 className="md:text-3xl xl:text-4xl 2xl:text-5xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">
                            {data?.contactUsContents?.nodes ? data?.contactUsContents?.nodes[0]?.sectionHeading[0] : ''}
                        </h1>
                        <p className="text-[#E1E1E1] w-fit md:max-w-[50ch] text-sm 2xl:text-lg text-left">
                        {data?.contactUsContents?.nodes ? pTagRemover(data?.contactUsContents?.nodes[0]?.contentLine1[0]) : ''}
                        </p>
                    </div>
                    <input
                        placeholder="Your Name"
                        value={form.name}
                        name='name'
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]"
                    />
                    <input
                        placeholder="E-mail Address"
                        value={form.email}
                        name='email'
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]"
                    />
                    <input
                        placeholder="Contact Number"
                        value={form.contact}
                        name='contact'
                        onChange={(e) => setForm({ ...form, contact: e.target.value })}
                        className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]"
                    />
                    <input
                        placeholder="Location"
                        value={form.location}
                        name='location'
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]"
                    />
                    <textarea
                        placeholder="Your Message"
                        value={form.message}
                        name='message'
                        className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" rows={5}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                    <ReCAPTCHA
                        sitekey="6Ldp5nwoAAAAAJxjk_cq_Fmr-e86simj4O6SR-L8"
                        ref={recaptchaRef}
                        onChange={handleCaptchaSubmission}
                    />
                    <div>
                        {loading ?
                            <button
                                disabled={true}
                                // onClick={handleSubmit}
                                type='submit'
                                className="group w-fit h-fit bg-size-200 shadow-md bg-gradient-to-r from-[#E05B25] via-[#FD8F29] to-[#E05B25] py-2 px-3 rounded-md hover:bg-pos-100 grow-0 shrink-0 xs:text-sm 2xl:text-lg font-semibold text-[#F1F1F1] transition-all duration-50"
                            >
                                Loading...
                            </button>
                            :
                            <button
                                disabled={disabled}
                                // onClick={handleSubmit}
                                type='submit'
                                className="group w-fit h-fit bg-size-200 shadow-md bg-gradient-to-r from-[#E05B25] via-[#FD8F29] to-[#E05B25] py-2 px-3 rounded-md hover:bg-pos-100 grow-0 shrink-0 xs:text-sm 2xl:text-lg font-semibold text-[#F1F1F1] transition-all duration-50"
                            >
                                {disabled ? `Please complete the form properly` : `Send Message`}
                            </button>
                        }
                    </div>
                </form>
            </div>
        </div >
    )
}
