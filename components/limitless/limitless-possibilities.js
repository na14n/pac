"use client";

export const dynamic = 'force-dynamic'

import Image from "next/image";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from 'html-react-parser'

export default function LimitlessPossibilities(){

    const query = gql` query FetchAboutLimitless {
        aboutContents(where: {search: "limitless-page-possibilities"}) {
          nodes {
            sectionTitle
            sectionHeading
            mediaLine1 {
                sourceUrl
            }
            mediaLine2 {
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
        <section className="relative w-full min-h-screen h-fit bg-white pl-0 md:pl-8 lg:pl-16 xl:pl-32 2xl:pl-48 flex max-md:flex-col items-center overflow-hidden">
            <div className="w-1/2 max-md:w-full h-full max-md:p-8 flex flex-col justify-center gap-8 xl:gap-16 max-md:pt-16">
                <div className="flex flex-col gap-0 w-4/5 max-md:w-full h-fit items-center">
                    <h2 className="text-5xl font-black uppercase text-[#504ea1]">{data?.aboutContents?.nodes[0]?.sectionHeading}</h2>
                    <div className="w-full aspect-[16/7] relative">
                        <Image fill src={data?.aboutContents?.nodes[0]?.mediaLine1[0]?.sourceUrl} className="object-cover object-center" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-4/5 h-fit max-md:w-full">
                    {data?.aboutContents?.nodes[0]?.contentLine1?.map((content, index) => (
                        <span key={index} className="text-justify xl:text-lg 2xl:text-xl">
                            {parse(content)}
                        </span>
                    ))}
                    
                </div>
            </div>
            <div className="w-1/2 max-md:w-full max-md:rotate-90 max-md:aspect-square self-stretch relative overflow-auto">
                <Image fill src={data?.aboutContents?.nodes[0]?.mediaLine2[0]?.sourceUrl} className="object-center" />
            </div>
        </section>
    )
}