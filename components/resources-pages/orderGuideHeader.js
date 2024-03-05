'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import Image from "next/image";

const query = gql`
    query FetchOrderGuideHeader {
        contactUsContents(where: {search: "order-banner"}) {
            nodes {
                title
                sectionHeading
                sectionSubheading
                mediaLine1{
                    sourceUrl
                    altText
                }
            }
        }
    }
`

export default function OrderGuideHeader() {

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        },
    );

    return (
        <section className="relative w-full h-fit aspect-[2/2] md:aspect-[16/4] flex items-center justify-center overflow-hidden z-0">
            <div className="absolute z-0 t-0 bg-[#ff6100] w-full h-full"></div>
            <div className="w-full h-full z-10 flex max-md:flex-col-reverse items-center justify-center max-md:mt-40">
                <div className="self-stretch w-full h-full relative max-md:mt-4">
                    <Image fill src={data?.contactUsContents?.nodes[0]?.mediaLine1[0] ? data?.contactUsContents?.nodes[0]?.mediaLine1[0]?.sourceUrl : 'https://picsum.photos/1920/1080'} className='object-cover md:object-cover object-left-bottom md:object-center' alt="dental-website-banner" />
                </div>
                <div className="md:w-1/2 shrink-0 flex flex-col md:gap-2 items-center justify-center">
                    <h2 className="text-[#FCFCFC] text-3xl xl:text-5xl 2xl:text-7xl uppercase w-fit">
                        {data?.contactUsContents?.nodes[0] ? data?.contactUsContents?.nodes[0]?.sectionHeading : 'Nationwide'}
                    </h2>
                    <h1 className="font-bold text-[#FCFCFC] text-4xl xl:text-6xl 2xl:text-8xl tracking-wide uppercase w-fit">
                        {data?.contactUsContents?.nodes[0] ? data?.contactUsContents?.nodes[0]?.sectionSubheading : 'Delivery'}
                    </h1>
                </div>
            </div>
        </section>
    )
}