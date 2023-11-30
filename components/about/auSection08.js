'use client';

export const dynamic = 'force-dynamic'

import Button from "../button";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { sortByAttribute } from "@/lib/helpers";
import Image from "next/image";

const query = gql`
    query FetchAboutContentS08 {
        aboutContents(where: {name: "section-08"}) {
            nodes {
                    sectionTitle
                    sectionHeading
                    sectionSubheading
                    contentLine1
                    contentLine2
                    mediaLine1{
                        title
                        link
                    }
                }
            }
    }
`


export default function AboutS08() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        })

    const assets = sortByAttribute(data?.aboutContents?.nodes[0]?.mediaLine1, 'title')

    // console.log('ASSETS: ', assets);

    return (
        <section className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 max-md:pt-16 flex items-end gap-8 2xl:gap-8 relative">
            <div className="w-full h-full absolute top-0 left-0 z-0">
                <Image src={data?.aboutContents?.nodes[0] ? assets[0].link : ''} fill={true} className="object-cover object-bottom " />
            </div>
            <div className="h-[12rem] w-[9rem] md:h-[16rem] md:w-[12rem] max-md:hidden lg:h-[24rem] lg:w-[18rem] xl:h-[32rem] xl:w-[24rem] 2xl:h-[40rem] 2xl:w-[30rem] z-10 relative">
                <Image src={data?.aboutContents?.nodes[0] ? assets[1].link : ''} fill={true} className="object-contain object-bottom" />
            </div>
            <div className="z-10 flex flex-col gap-12 pb-16 w-fit items-center self-center">
                <h1 className=" text-2xl lg:text-4xl 2xl:text-5xl text-center text-[#e34100] font-bold uppercase">
                    {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.sectionHeading : ''}
                </h1>
                <p className="2xl:text-2xl xl:text-xl max-w-[40ch] 2xl:max-w-[55ch] text-[#171717] text-justify">
                {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.sectionSubheading : ''}
                </p>
                <span className="flex flex-col items-center gap-2">
                    <p className="2xl:text-2xl xl:text-xl text-center text-[#121212]">
                    {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.contentLine1 : ''}
                    </p>
                    <Button type={1} name={data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.contentLine2 : ''} link={`/resources/sales-agent-search`} />
                </span>
            </div>
        </section>
    )
}