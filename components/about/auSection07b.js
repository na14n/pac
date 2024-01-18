'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import parse from "html-react-parser"

const query = gql`
    query FetchAboutContentS07b {
        aboutContents(where: {name: "section-07b"}) {
            nodes {
                    sectionTitle
                    sectionHeading
                    contentLine1
                }
            }
    }
`

export default function AboutS07b() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        })

    return (
        <section className="flex flex-col w-full h-fit items-center justify-center gap-8 py-16">
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl 2xl:text-6xl xl:text-5xl text-[#FCFCFC] font-bold uppercase tracking-wider">
                    {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.sectionHeading[0] : ''}
                </h1>
                <div className="w-full h-[2px] bg-nav-orange rounded-full" />
            </div>
            <div className="flex flex-col gap-6">
                {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.contentLine1.map((c, i) => (
                    <p key={i} className="2xl:text-lg text-[#EFEFEF] max-w-fit md:max-w-[75ch] 2xl:max-w-[85ch] text-justify">
                        {parse(c)}
                    </p>
                )) : ''}
            </div>
        </section>
    )
}