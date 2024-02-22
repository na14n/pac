'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import Image from "next/image";

const query = gql`
    query FetchOrderBottomBanner {
        contactUsContents(where: {search: "order-bottom-banner"}) {
            nodes {
                title
                sectionHeading
                sectionSubheading
                mediaLine1{
                    altText
                    sourceUrl
                }
            }
        }
    }
`

export default function OrderBottomBanner() {

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
        <section className="relative w-full h-fit flex flex-col gap-8 items-center justify-center overflow-hidden z-0">
            <section className="relative w-full aspect-[8/3]  flex flex-col items-center overflow-hidden z-0">
                <div className="w-full h-full z-0 absolute top-0 left-0">
                    <Image fill src={data?.contactUsContents?.nodes[0]?.mediaLine1[0]?.sourceUrl} className="object-cover object-top" />
                </div>
                <div className="w-full h-full flex flex-col justify-center gap-4 z-10 py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
                    {data?.contactUsContents?.nodes[0]?.sectionHeading?.map((text, index) => (
                        <h2 key={index} className="z-30 text-3xl 2xl:text-5xl text-[#FF6001] font-bold max-w-[15ch]">{text}</h2>
                    ))}
                </div>
                <div className="absolute bottom-4 left- w-full h-3 bg-[#047F3C]" />
                <div className="absolute bottom-0 left-0  w-full h-4 bg-[#FF6600]" />
            </section>
        </section>
    )
}