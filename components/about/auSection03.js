'use client';

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Button from "../button";

const query = gql`
    query GetAboutContentS04 {
        aboutContents(where: {name: "section-03"}) {
        nodes {
                sectionTitle
                sectionHeading
                sectionSubheading
                contentLine1
            }
        }
    }
`

export default function AboutS03() {

    const { data } = useSuspenseQuery(query,
        {
          context: {
            fetchOptions: {
              next: { revalidate: 60 },
            },
          },
        });

    return (
        <section className="w-full h-[16rem] md:h-[30vh] flex flex-col items-center justify-center relative">
            <div className="absolute flex items-center justify-center w-full h-full bg-[#575757] z-0" />
            <span className="z-10 flex flex-col items-center justify-center gap-4">
                <span className="w-fit h-fit flex gap-2 flex-wrap">
                    {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionHeading.
                        map((h, i) => (
                            <h1 key={i} className="w-fit h-fit max-xl:text-center text-[#FCFCFC] text-lg md:text-2xl xl:text-3xl even:font-bold">
                                {h}
                            </h1>
                        ))
                        : ``}
                </span>
                <Button type={1} name={data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionSubheading : ``} link={data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.contentLine1 : ``} />
            </span>
        </section>
    )
}