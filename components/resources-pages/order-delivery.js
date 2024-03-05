'use client'

export const dynamic = 'force-dynamic'

import { sortByAttribute } from "@/lib/helpers";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import Image from "next/image";

const query = gql`
    query FetchOrderGuideHeaderDesc {
        contactUsContents(where: {search: "order-delivery"}) {
            nodes {
                title
                sectionHeading
                contentLine1
                mediaLine1{
                    altText
                    title
                    sourceUrl
                }
            }
        }
    }
`

export default function OrderingDelivery() {

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
        <>
            <section className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-16 flex items-center justify-center bg-white">
                <h1 className="text-[#414141] font-black text-4xl text-center">{data?.contactUsContents?.nodes[0]?.sectionHeading}</h1>
            </section>
            <section className="relative w-full h-fit flex flex-wrap items-center justify-center overflow-hidden z-0">
                {data?.contactUsContents?.nodes[0]?.contentLine1.map((content, index) => (
                    <div key={index} className="w-full lg:w-1/3 self-stretch bg-[#FFF2D8] group first:bg-[#E1FFDB] last:bg-[#E5E5E5] py-16 flex flex-col gap-8 items-center">
                        <div className="relative w-1/3 aspect-square">
                            <Image fill src={sortByAttribute(data?.contactUsContents?.nodes[0]?.mediaLine1, "altText")[index].sourceUrl} className="object-contain object-center" />
                        </div>
                        <div className="p list b max-w-[35ch] px-4 group-first:text-[#2B6934] text-[#C9702C] group-last:text-[#414141]">
                            {parse(content)}
                        </div>
                    </div>
                ))}
            </section>
        </>

    )
}