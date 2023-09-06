'use client';

export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';
import Button from '../button';
import Image from 'next/image';
import { Icon } from '@iconify-icon/react';

const query = gql`
    query GetContactUsInformationS3 {
        contactUsInformations(where: {name: "section-3"}) {
            nodes {
                sectionTitle
                sectionHeading
                sectionSubheading
                contentLine1
                contentLine2
            }
        }
    }
    `

export default function MessageUs() {

    const { data } = useSuspenseQuery(query);

    return (
        <div className="relative w-full h-fit overflow-hidden flex justify-center items-center md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-8">
            <div className="absolute z-10 t-0 bg-gradient-to-b from-[#077232]/95 via-[# 063013]/95 to-[#063013]/95 w-full h-full"></div >
            <div className="absolute z-0 t-0 w-full h-full">
                {/* <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/2400'} alt="dental-website-banner" className="object-cover object-center" /> */}
            </div>
            <div className="z-40 text-2xl w-full h-full flex max-md:flex-col-reverse justify-center items-center lg:gap-12 2xl:gap-16 lg:px-34  ">
                <div className="w-fit self-stretch flex flex-col justify-around xs:gap-4 lg:gap-8 2xl:gap-12 py-8 ">
                    <div className="w-full h-full items-stretch grow max-md:hidden flex flex-col gap-2 ">
                        <h1 className="md:text-3xl xl:text-4xl 2xl:text-5xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">
                            {data?.contactUsInformations?.nodes ? data?.contactUsInformations?.nodes[0]?.sectionHeading[0] : ''}
                        </h1>
                        <p className="text-[#E1E1E1] w-fit md:max-w-[50ch] text-sm 2xl:text-lg text-left">
                            {data?.contactUsInformations?.nodes ? data?.contactUsInformations?.nodes[0]?.sectionSubheading[0] : ''}
                        </p>
                    </div>
                    <div className="w-full h-fit flex flex-col shrink-0 gap-2">
                        <h1 className="md:text-3xl xl:text-4xl 2xl:text-5xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">
                            {data?.contactUsInformations?.nodes ? data?.contactUsInformations?.nodes[0]?.sectionHeading[1] : ''}
                        </h1>
                        <p className="text-[#E1E1E1] w-fit md:max-w-[50ch] text-sm 2xl:text-lg text-left">
                            {data?.contactUsInformations?.nodes ? data?.contactUsInformations?.nodes[0]?.sectionSubheading[1] : ''}
                        </p>
                        <div className="flex items-center justify-center gap-4 mt-4 max-md:w-full w-fit">
                            {data?.contactUsInformations?.nodes ?
                                data?.contactUsInformations?.nodes[0]?.contentLine1.map(
                                    (c, i) => (
                                        <a key={i} className="text-[#EFEFEF]/90 underline-offset-2 hover:underline hover:text-nav-orange" href={data?.contactUsInformations?.nodes ? data?.contactUsInformations?.nodes[0]?.contentLine2[i] : ''}>
                                            <Icon icon={c} width="48" height="48" />
                                        </a>
                                    ))
                                : ''}
                        </div>
                    </div>
                </div>
                <form className="h-fit grow self-start flex flex-col lg:w-fit xs:w-full 2xl:max-w-[600px] py-8 lg:gap-4 xs:gap-8 ">
                    <div className="w-full h-fit md:hidden flex flex-col gap-2">
                        <h1 className="md:text-3xl xl:text-4xl 2xl:text-5xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">
                            {data?.contactUsInformations?.nodes ? data?.contactUsInformations?.nodes[0]?.sectionHeading[0] : ''}
                        </h1>
                        <p className="text-[#E1E1E1] w-fit md:max-w-[50ch] text-sm 2xl:text-lg text-left">
                            {data?.contactUsInformations?.nodes ? data?.contactUsInformations?.nodes[0]?.sectionSubheading[0] : ''}
                        </p>
                    </div>
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
}
