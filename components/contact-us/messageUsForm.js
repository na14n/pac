import { Button } from "@/components"
import Image from "next/image";
import { Icon } from "@iconify-icon/react";

const MessageUsForm = ({ mediaUrl, type, social }) => {

    const placeholder = [
        {
            name: 'ri:facebook-circle-fill',
            link: '#',
            group: 'soc-med',
        },
        {
            name: 'ri:instagram-fill',
            link: '#',
            group: 'soc-med',
        },
        {
            name: 'ri:tiktok-fill',
            link: '#',
            group: 'soc-med',
        },
        {
            name: 'basil:viber-solid',
            link: '#',
            group: 'soc-med',
        },
    ]



    return (type === 1) ? (
        (
            <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#077232]/95 via-[# 063013]/95 to-[#063013]/95 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-auto h-auto">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/2400'} alt="dental-website-banner" />
                </div>
                <div className="z-40 text-2xl w-full h-content flex flex-col justify-center items-center lg:gap-2 2xl:gap-16 lg:px-32">
                    <div className="flex flex-col justify-center items-center  xs:p-8 xs:gap-4 lg:gap-0">
                        <div className="lg:text-3xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">send us a message</div>
                        <div className="text-[#E1E1E1] text-sm  text-center">Our Customer Support are happy to respond to your inquiries. Please leave a message and we will answer your questions as soon as possible.</div>
                    </div>
                    <form className="flex flex-col lg:w-content xs:w-full py-8 lg:px-40 xs:px-8 lg:gap-4 xs:gap-8 ">
                        <div className="flex lg:flex-row xs:flex-col justify-between gap-8">
                            <input placeholder="Your Name" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                            <input placeholder="E-mail Address" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                            <input placeholder="Contact Number" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                        </div>
                        <textarea placeholder="Your Message" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" rows={5} />
                        <div>
                            <Button name={'Send Message'} type={'submit'} />
                        </div>
                    </form>
                </div>
            </div>
        )

    ) : (
        (
            // Add Connect With Us through FB, IG, Tiktok, Viber
            // Add Time on Cards
            <div className="relative w-full h-full overflow-hidden flex justify-center items-center lg:px-32 2xl:px-48">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#077232]/95 via-[# 063013]/95 to-[#063013]/95 w-full h-full"></div >
                <div className="absolute z-0 t-0 w-auto h-auto">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/2400'} alt="dental-website-banner" />
                </div>
                <div className="z-40 text-2xl w-full h-full flex justify-center items-center lg:gap-2 2xl:gap-16 lg:px-34  ">
                    <div className="h-full flex flex-col justify-around xs:p-8 2xl:py-16 xs:gap-4 lg:gap-8 2xl:gap-12  ">
                        <div className="w-full  flex flex-col gap-2">
                            <div className="lg:text-4xl 2xl:text-5xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">send us a message</div>
                            <div className="text-[#E1E1E1] text-sm  text-left">Our Customer Support are happy to respond to your inquiries. Please leave a message and we will answer your questions as soon as possible.</div>
                        </div>
                        <div className="w-full  flex flex-col gap-2">
                            <div className="lg:text-4xl 2xl:text-5xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">Connect with Us</div>
                            <div className="text-[#E1E1E1] text-sm  text-left">Contact us through our Social Media accounts.</div>
                            <div className="flex items-center gap-4 mt-4">
                                {placeholder.map((link, index) => (
                                    <a key={index} className="text-[#EFEFEF]/90 underline-offset-2 hover:underline hover:text-nav-orange" href={link.link}>
                                        <Icon icon={link.name} width="48" height="48" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <form className="flex flex-col lg:w-content xs:w-full 2xl:max-w-[600px] py-8 2xl:px-8 lg:px-20 xs:px-8 lg:gap-4 xs:gap-8 ">
                        <input placeholder="Your Name" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                        <input placeholder="E-mail Address" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                        <input placeholder="Contact Number" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                        <input placeholder="Location" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                        <textarea placeholder="Your Message" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" rows={5} />
                        <div>
                            <Button name={'Send Message'} type={'submit'} />
                        </div>
                    </form>
                </div>
            </div >
        )
    )
}

export default MessageUsForm;