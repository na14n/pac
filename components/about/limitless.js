"use client"
export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import VerticalSlider from "../embla/verticalSlider";
import AboutHorizontalSlider from "../embla/aboutHorizontalSlider";
import Image from "next/image"
import { sortByAttribute } from "@/lib/helpers";

const query = gql`
    query GetAboutContent02 {
        aboutContents(where: {name: "limitless"}) {
        nodes {
                sectionTitle
                sectionHeading
                sectionSubheading
                mediaLine1 {
                    title
                    sourceUrl
                }
                mediaLine2 {
                    title
                    sourceUrl
                }
            }
        }
    }
`

export default function Limitless(){
    
    const { data } = useSuspenseQuery(query,
        {
          context: {
            fetchOptions: {
              next: { revalidate: 60 },
            },
          },
        });

    return(
        <section className="w-full max-md:h-fit md:aspect-[4/1] relative flex flex-col max-xl:items-center justify-between bg-[#EFEFEF] md:flex-row overflow-hidden">
            <div className="w-4/5 md:w-[38%] max-md:h-96 h-full relative p-8">
                <Image fill src={data?.aboutContents?.nodes[0]?.mediaLine1[0]?.sourceUrl} className="object-contain object-center"/>
            </div>
            <div className="w-full md:w-[62%] h-96 md:h-full relative flex flex-col gap-8 items-center justify-center">
                <Image fill src={sortByAttribute(data?.aboutContents?.nodes[0]?.mediaLine2, "title")[1]?.sourceUrl} className="z-0 object-cover object-left block max-md:hidden"/>
                <Image fill src={sortByAttribute(data?.aboutContents?.nodes[0]?.mediaLine2, "title")[0]?.sourceUrl} className="z-0 object-cover object-left block md:hidden"/>
                <div className="flex flex-col items-center justify-center gap-4 ml-16 xl:ml-32 max-md:px-8">
                    {data?.aboutContents?.nodes[0]?.sectionHeading?.map((heading, index) => (
                        <h2 key={index} className='z-10 text-white font-bold text-2xl xl:text-5xl uppercase text-center'>{heading}</h2>
                    ))}
                    <a href="/about-us/limitless" className="bg-white px-6 py-3 rounded-full flex items-center justify-center text-xl z-10 uppercase font-bold text-[#6800b1] hover:text-[#6800b1]/80 shadow-sm hover:shadow-lg">
                        {data?.aboutContents?.nodes[0]?.sectionSubheading.map((text, index) => (<h1 key={index}>{text}</h1>))}
                    </a>
                </div>
            </div>
        </section>
    )
}