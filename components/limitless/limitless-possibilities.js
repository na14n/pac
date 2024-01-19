"use client";

export const dynamic = 'force-dynamic'

import Image from "next/image";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from 'html-react-parser'

export default function LimitlessPossibilities(){

    const query = gql` query FetchLimitlessPossibilities {
        aboutContents(where: {search: "limitless-page-possibilities"}) {
          nodes {
            sectionTitle
            sectionHeading
            sectionSubheading
            mediaLine1 {
                sourceUrl
            }
            textLine1
            textLine2
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
        <section className="relative w-full h-fit md:h-screen bg-[#0c0a1f] flex flex-col items-center overflow-hidden py-8 md:py-16">
            <div className="absolute top-0 right-0 w-full h-full z-0">
                <Image fill src={data?.aboutContents?.nodes[0]?.mediaLine1[0]?.sourceUrl} className="object-center object-cover"/>
            </div>
            <div className="w-full h-full z-10 flex flex-col items-center justify-center gap-8 md:gap-16">
                <span>
                    <h1 className="text-3xl md:text-5xl xl:text-6xl font-black text-white uppercase text-center">{data?.aboutContents?.nodes[0]?.sectionHeading}</h1>
                </span>
                <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-2 px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-48 place-items-center">
                    {data?.aboutContents?.nodes[0]?.sectionSubheading.map((text, index) => (
                        <h5 key={index} className={`w-full max-w-[32rem] text-center text-lg md:text-3xl text-black bg-white font-bold px-4 py-2 rounded-full ${index === 0 ? 'text-[#7b2fd0]' : index === 1 ? 'text-[#7b2fd0]' : index === 2 ? 'text-[#a40aa0]' : index === 3 ? 'text-[#a40aa0]' : 'text-white'}`}>{text}</h5>
                    ))}
                </div>
            </div>
            <div className="w-full h-1/5 shrink-0 flex flex-col items-center justify-end gap-4 z-10 pt-12">
                <div className="h-fit max-md:w-full w-1/2 flex flex-col items-center justify-center gap-2 text-center">
                    {data?.aboutContents?.nodes[0]?.textLine1.map((text, index) => (
                        <h5 key={index} className="md:text-3xl text-white">{text}</h5>
                    ))}
                </div>
                <div className="h-fit w-1/2 flex flex-col items-center justify-center gap-2 text-center">
                    {data?.aboutContents?.nodes[0]?.textLine2.map((text, index) => (
                        <h6 key={index} className="text-xs xl:text-lg uppercase tracking-widest text-white">{text}</h6>
                    ))}
                </div>
            </div>
        </section>
    )
}