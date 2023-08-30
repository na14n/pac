'use client';

// export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';
import { Button } from "@/components"
import Image from "next/image";
import { Icon } from "@iconify-icon/react";

const query = gql`
        query GetBranchesInformation {
            branchesInformation {
            nodes {
                branchName
                addressLine1
                addressLine2
                addressLine3
                landlineNumber  
                mobileNumber
                email
                googleMapsSourceLink
                officeHours
                date
            }
            }
        }
    `

export default function MessageUsForm() {

    return (
        <div className="relative w-full h-full overflow-hidden flex justify-center items-center md:px-8 lg:px-16 xl:px-32 2xl:px-48">
            <div className="absolute z-10 t-0 bg-gradient-to-b from-[#077232]/95 via-[# 063013]/95 to-[#063013]/95 w-full h-full"></div >
            <div className="absolute z-0 t-0 w-auto h-auto">
                {/* <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/2400'} alt="dental-website-banner" /> */}
            </div>
            <div className="z-40 text-2xl w-full h-full flex max-md:flex-col-reverse justify-center items-center lg:gap-2 2xl:gap-16 lg:px-34  ">
                {/* <div className="h-full flex flex-col justify-around xs:p-8 2xl:py-16 xs:gap-4 lg:gap-8 2xl:gap-12  ">
                    <div className="w-full h-fit max-md:hidden flex flex-col gap-2">
                        <h1 className="md:text-3xl xl:text-4xl 2xl:text-5xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">send us a message</h1>
                        <p className="text-[#E1E1E1] text-sm 2xl:text-lg text-left">Our Customer Support are happy to respond to your inquiries. Please leave a message and we will answer your questions as soon as possible.</p>
                    </div>
                    <div className="w-full h-fit flex flex-col gap-2">
                        <h1 className="max-md:text-center md:text-3xl xl:text-4xl 2xl:text-5xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">Connect with Us</h1>
                        <p className="text-[#E1E1E1] text-sm 2xl:text-lg text-left max-md:text-center">Contact us through our Social Media accounts.</p>
                        <div className="flex items-center justify-center gap-4 mt-4 max-md:w-full w-fit">
                            {placeholder.map((link, index) => (
                                <a key={index} className="text-[#EFEFEF]/90 underline-offset-2 hover:underline hover:text-nav-orange" href={link.link}>
                                    <Icon icon={link.name} width="48" height="48" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div> */}
                {/* <form className="flex flex-col lg:w-content xs:w-full 2xl:max-w-[600px] py-8 2xl:px-8 lg:px-20 xs:px-8 lg:gap-4 xs:gap-8 ">
                    <div className="w-full h-fit md:hidden flex flex-col gap-2">
                        <h1 className="md:text-3xl text-center xl:text-4xl 2xl:text-5xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">send us a message</h1>
                        <p className="text-[#E1E1E1] text-sm 2xl:text-lg text-left max-md:text-center">Our Customer Support are happy to respond to your inquiries. Please leave a message and we will answer your questions as soon as possible.</p>
                    </div>
                    <input placeholder="Your Name" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                    <input placeholder="E-mail Address" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                    <input placeholder="Contact Number" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                    <input placeholder="Location" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                    <textarea placeholder="Your Message" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" rows={5} />
                    <div>
                        <Button name={'Send Message'} type={'submit'} />
                    </div>
                </form> */}
            </div>
        </div >
    )
}
