'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { sortByAttribute } from "@/lib/helpers";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";

const query = gql`
    query FetchAboutContentS07a {
        aboutContents(where: {name: "section-07a"}) {
            nodes {
                    sectionTitle
                    sectionHeading
                    sectionSubheading
                    contentLine1
                    mediaLine1{
                        link
                    }
                }
            }
    }
`

export default function AboutS07a() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        })

    return (
        <section className="flex flex-col md:flex-row-reverse gap-8 xl:gap-12 2xl:gap-24 w-full h-fit justify-between 2xl:justify-center">
            <div className="flex flex-col max-md:items-center">
                <h3 className="max-md:w-full mb-1 text-[#EFEFEF] text-2xl 2xl:text-3xl uppercase tracking-wide">
                    {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.sectionHeading[0] : ''}
                </h3>
                <div className="max-md:w-full w-fit h-fit mb-3">
                    <h1 className="mb-1 text-nav-orange text-5xl 2xl:text-6xl font-bold uppercase">
                        {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.sectionHeading[1] : ''}
                    </h1>
                    <div className="w-full h-[2px] bg-[#FCFCFC] rounded-full" />
                </div>
                <h2 className="max-md:w-full text-[#FCFCFC] text-2xl lg:text-3xl 2xl:text-4xl uppercase tracking-wider mb-6">
                    {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.sectionSubheading : ''}
                </h2>
                <div className="h-[16rem] w-[12rem] md:hidden rounded-sm shadow-md relative shrink-0 mb-2">
                    <Image src={data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.mediaLine1[0]?.link : ''} fill={true} className="object-cover object-center" />
                </div>
                <span>
                    <Icon icon="el:quotes" width={56} height={56} className="text-[#FCFCFC]" />
                    <p className=" text-[#EFEFEF] 2xl:text-lg 2xl:max-w-[75ch] text-justify">
                        {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.contentLine1 : ''}
                    </p>
                </span>
            </div>
            <div className="h-[16rem] w-[12rem] max-md:hidden md:h-[24rem] md:w-[18rem] xl:h-[32rem] xl:w-[24rem] 2xl:h-[40rem] 2xl:w-[30rem] rounded-sm shadow-md relative shrink-0">
                <Image src={data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.mediaLine1[0]?.link : ''} fill={true} className="object-cover object-center" />
            </div>
        </section>
    )
}