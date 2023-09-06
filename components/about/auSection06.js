'use client';

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { sortByAttribute } from "@/lib/helpers";
import Image from "next/image";

const query = gql`
    query FetchAboutContentS06 {
        aboutContents(where: {name: "section-06"}) {
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

export default function AboutS06() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        })

    return (
        <section className="w-full xl:h-fit max-h-fit px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-col items-center justify-center relative gap-6 2xl:gap-12 py-16">
            <span>
                <h2 className="text-xl 2xl:text-5xl font-bold text-[#121212]">
                    {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.sectionHeading : ''}
                </h2>
                <div className="w-full h-[2px] bg-pac-orange rounded-full" />
            </span>
            <span className="flex flex-col gap-4">
                {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.contentLine1.map((c, i) => (
                    <p key={i} className="max-w-[40ch] 2xl:max-w-[75ch] text-justify text-[#272727]">
                        {c}
                    </p>
                )) : ''}
            </span>
            <div className="flex gap-8 items-center justify-center">
                {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.sectionSubheading.map((s, i) => (
                    <span key={i} className="w-[16rem] h-[9rem] 2xl:w-[24rem] 2xl:h-[13.5rem] flex flex-col items-center justify-end p-2 shadow-sm rounded-md hover:shadow-md cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-[#373737]/25 to-[#272727]/75" />
                        <Image src={data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.mediaLine1[i]?.link : ''} alt="pros-apac-facility" fill={true} className="object-cover object-center z-0" />
                        <h4 className="uppercase font-semibold text-[#FCFCFC] text-xl z-20">{s}</h4>
                    </span>
                )) : ''}
            </div>
        </section>
    )
}