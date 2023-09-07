'use client';

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";

const query = gql`
    query GetAboutContentHero {
        aboutContents(where: {name: "hero"}) {
        nodes {
                sectionTitle
                sectionHeading
                mediaLine1 {
                    title
                    link
                }
            }
        }
    }
`

export default function AboutHero() {

    const { data } = useSuspenseQuery(query);

    return (
        <section className="h-[16rem] md:h-[30vh] xl:h-[50vh] relative flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full">
                <Image src={data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.mediaLine1[0]?.link : ``} fill={true} className="object-cover object-center z-10" />
                <div className="w-full h-full bg-[#f06b00]/75 z-20 absolute top-0 left-0" />
            </div>
            <h1 className="uppercase text-3xl xl:text-5xl text-[#FCFCFC] font-bold z-30">{data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionHeading : ``}</h1>
        </section>
    )
}