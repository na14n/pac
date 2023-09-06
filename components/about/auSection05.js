'use client';

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import parse from 'html-react-parser'

const query = gql`
    query GetAboutContentS05 {
        aboutContents(where: {name: "section-05"}) {
            nodes {
                    sectionTitle
                    sectionHeading
                    contentLine2
                    mediaLine1{
                        link
                    }
                }
            }
    }
`

export default function AboutS05() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        })

    return (
        <section className="w-full xl:h-fit max-h-fit px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-col xl:flex-row items-center justify-center relative gap-0 py-16">
            <Image src={data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.mediaLine1[0]?.link : 'https://picsum.photos/1600/1600'} fill={true} alt="dental-company-background" className="object-cover object-center" />
            <span className="w-full items-stretch z-20 flex place-items-center justify-center">
                {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.sectionHeading.
                    map((h, i) => (
                        <div key={i} className="z-20 w-[30ch] 2xl:w-[40ch] p-4 items-stretch max-h-fit flex flex-col gap-4 bg-gradient-to-b first:from-[#F0892B]/90 first:to-[#E66204]/90 from-[#077232]/90 to-[#063013]/90 last:from-[#3E3E3E]/90 last:to-[#2A2A2A]/90">
                            <h4 className="text-[#FCFCFC] font-bold text-xl 2xl:text-2xl">{h}</h4>
                            <div className="w-full h-[2px] bg-[#FCFCFC]" />
                            <p className="text-justify text-[#EFEFEF] oranged__bold">{parse(data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.contentLine2[i] : '')}</p>
                        </div>
                    ))
                    : 'https://picsum.photos/1600/1600'}
            </span>
        </section>
    )
}