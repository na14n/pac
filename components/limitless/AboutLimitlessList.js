"use client";

export const dynamic = 'force-dynamic'

import Image from "next/image";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from 'html-react-parser'
import { sortByAttribute } from "@/lib/helpers";

export default function AboutLimitlessList(){

    const query = gql` query FetchLimitlessList {
        aboutContents(where: {search: "limitless-page-abtlist"}) {
          nodes {
            sectionTitle
            sectionSubheading
            mediaLine1 {
                sourceUrl
                title
            }
            contentLine1
          }
        }
      }
    `;

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    );

    return(
        <section className="relative w-full h-fit bg-[#efefef] py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-wrap items-center justify-center overflow-hidden gap-8">
            {sortByAttribute(data?.aboutContents?.nodes[0]?.mediaLine1, "title").map((image, index) => (
                <div key={index} className="w-80 aspect-[1/2] max-h-[40rem] flex flex-col items-center gap-4 grow-0">
                    <div className="w-full aspect-square relative shrink-0">
                        <Image fill src={image.sourceUrl} className="object-center object-contain" />
                    </div>
                    <h5 className="w-full h-24 text-center font-black text-[#37005d] text-2xl shrink-0">{data?.aboutContents?.nodes[0]?.sectionSubheading[index]}</h5>
                    <div className="text-justify w-full mt-4">
                        {parse(data?.aboutContents?.nodes[0]?.contentLine1[index])}
                    </div>
                </div>
            ))}
        </section>
    )
}