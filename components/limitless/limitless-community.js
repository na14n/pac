"use client";

export const dynamic = 'force-dynamic'

import Image from "next/image";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from 'html-react-parser'
import { sortByAttribute } from "@/lib/helpers";

export default function LimitlessCommunity(){

    const query = gql` query FetchLimitlessCommunity {
        aboutContents(where: {search: "limitless-page-community"}) {
          nodes {
            sectionTitle
            sectionHeading
            sectionSubheading
            mediaLine1 {
                sourceUrl
                title
            }
            mediaLine2 {
                sourceUrl
                title
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
        <section className="relative w-full h-fit bg-white flex max-md:flex-col items-center overflow-hidden">
            <div className="w-1/2 max-md:w-full h-fit flex flex-col items-center justify-center max-md:p-8 max-md:gap-12 gap-8 xl:gap-16 py-16">
                <div className="flex flex-col gap-0 w-4/5 max-md:w-full h-fit items-center">
                    <h2 className="text-3xl xl:text-5xl font-black text-center text-[#43058c]">{data?.aboutContents?.nodes[0]?.sectionHeading}</h2>
                </div>
                <div className="flex flex-col gap-0 w-4/5 max-md:w-full h-fit items-center">
                    <h2 className="text-xl xl:text-3xl text-[#4c5799] text-center">{data?.aboutContents?.nodes[0]?.sectionSubheading}</h2>
                </div>
            </div>
            <div className="w-1/2 max-md:w-full flex flex-col gap-2 items-center justify-center p-4 md:p-16 max-md:aspect-square self-stretch relative overflow-auto bg-[#e0e4ff]">
                <div className="w-2/3 2xl:w-1/3 aspect-[16/5] md:aspect-[16/3] relative">
                    <Image fill src={data?.aboutContents?.nodes[0]?.mediaLine1[0]?.sourceUrl} className="object-center object-cover" />
                </div>
                <div className="w-1/2 2xl:w-1/5 aspect-square relative">
                    <Image fill src={data?.aboutContents?.nodes[0]?.mediaLine2[0]?.sourceUrl} className="object-center object-contain" />
                </div>
            </div>
        </section>
    )
}