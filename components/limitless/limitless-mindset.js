"use client";

export const dynamic = 'force-dynamic'

import Image from "next/image";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from 'html-react-parser'

export default function LimitlessMindset(){

    const query = gql` query FetchLimitlessMindset{
        aboutContents(where: {search: "limitless-page-mindset"}) {
          nodes {
            sectionTitle
            sectionHeading
            sectionSubheading
            mediaLine1 {
                sourceUrl
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
        <section className="relative w-full min-h-screen h-fit bg-white flex max-md:flex-col items-center overflow-hidden">
            <div className="w-1/2 max-md:w-full max-md:aspect-square self-stretch relative overflow-auto flex items-center justify-center">
                <Image fill src={data?.aboutContents?.nodes[0]?.mediaLine1[0]?.sourceUrl} className="object-center object-cover z-0" />
                <div className="flex flex-col gap-4">
                    {data?.aboutContents?.nodes[0]?.sectionHeading.map((text, index) => (
                        <h1 key={index} className="z-10 text-5xl xl:text-7xl font-black text-white">
                            {text}
                        </h1>
                    ))}
                </div>
            </div>
            <div className="w-1/2 max-md:w-full h-full max-md:p-8 flex flex-col justify-center gap-8 xl:gap-16 p-16">
                    {data?.aboutContents?.nodes[0]?.sectionSubheading?.map((content, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <h3 className={`w-full max-md:text-center font-bold text-3xl xl:text-5xl ${index === 0 ? 'text-[#7c30d1]' : index === 1 ? 'text-[#a50b9f]' : index === 2 ? 'text-[#6201a0]' : 'text-white'}`}>
                                {content}
                            </h3>
                            <span className="text-justify xl:text-lg">{parse(data?.aboutContents?.nodes[0]?.contentLine1[index])}</span>
                        </div>
                    ))}
            </div>
        </section>
    )
}