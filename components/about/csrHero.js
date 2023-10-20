'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";

const query = gql`
    query GetCsrInfo {
        aboutContents(where: {name: "csr"}) {
        nodes {
                sectionTitle
                sectionHeading
                sectionSubheading
                mediaLine1 {
                    title
                    sourceUrl
                }
            }
        }
    }
`

export default function CsrHero() {

    const { data } = useSuspenseQuery(query,
        {
          context: {
            fetchOptions: {
              next: { revalidate: 60 },
            },
          },
        });

    return (
        <section className="relative flex flex-col items-center justify-center">
            <div className="relative w-full h-[16rem] md:h-[32vh] xl:h-[48vh] flex flex-col items-center justify-center gap-4">
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image src={data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.mediaLine1[0]?.sourceUrl : ``} fill={true} className="object-cover object-center z-10" />
                    {/* <div className="w-full h-full bg-[#121212]/50 z-20 absolute top-0 left-0" /> */}
                </div>
                <h1 className="uppercase text-3xl xl:text-5xl text-[#FCFCFC] font-bold z-30 text-center">{data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionHeading[0] : ``}</h1>
                <div className="z-30 w-16 xl:w-32 h-[2px] rounded-full bg-[#ef6703]" />
            </div>
            <div className="w-full py-12 bg-[#046d30] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 relative flex flex-col items-center justify-center">
                <p className=" text-[#EFEFEF] 2xl:text-lg text-center z-30">
                    {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionSubheading[0] : ``}
                    </p>
            </div>
        </section>
    )
}