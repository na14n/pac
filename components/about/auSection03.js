'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Button from "../button";

const query = gql`
    query GetAboutContentS03 {
        aboutContents(where: {name: "section-03"}) {
        nodes {
                sectionTitle
                sectionHeading
                sectionSubheading
                textLine1
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

        console.log(data);

    return (
        <section className="w-full h-[16rem] md:h-[30vh] flex flex-col items-center justify-center relative">
            <div className="absolute flex items-center justify-center w-full h-full bg-[#757575] z-0" />
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
                <Button type={1} name={data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionSubheading : ``} link={data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.textLine1 : ``} />
            </span>
        </section>
    )
}