"use client";

export const dynamic = 'force-dynamic'

import Image from "next/image";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from 'html-react-parser'
import { sortByAttribute } from "@/lib/helpers";

export default function LimitessMerch(){

    const query = gql` query FetchLimitlessMerch {
        aboutContents(where: {search: "limitless-page-merch"}) {
          nodes {
            sectionTitle
            sectionHeading
            mediaLine1 {
                sourceUrl
            }
            mediaLine2 {
                sourceUrl
                altText
            }
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
        <section className="relative w-full md:min-h-screen h-fit bg-gradient-to-br from-[#2c0087] to-[#b818a0] flex max-md:flex-col-reverse items-center overflow-hidden">
            <div className="w-1/2 max-md:w-full h-full gap-4 grid md:grid-cols-3 md:grid-rows-3 p-4 md:p-16">
                {sortByAttribute(data?.aboutContents?.nodes[0]?.mediaLine2, "altText").map((image, index) => 
                <div className={`${index === 0 ? "h-full md:row-span-3 md:col-span-2 max-md:aspect-[9/16]" : "aspect-square"} w-full relative bg-white`}>
                    <Image fill src={image.sourceUrl} className="object-cover object-center" />
                </div>
                )}
            </div>
            <div className="w-1/2 max-md:w-full max-md:aspect-square self-stretch relative overflow-auto flex items-center justify-center flex-col">
                <div className="relative w-3/5 aspect-[16/9]">
                    <Image fill src={data?.aboutContents?.nodes[0]?.mediaLine1[0]?.sourceUrl} className="object-center object-contain" />
                </div>
                <h3 className="text-3xl md:text-4xl xl:text-6xl font-black text-white uppercase shrink-0 z-10 -mt-4">{data?.aboutContents?.nodes[0]?.sectionHeading}</h3>
            </div>
        </section>
    )
}