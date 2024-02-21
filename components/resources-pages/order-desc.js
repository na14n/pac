'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import Image from "next/image";

const query = gql`
    query FetchOrderGuideHeaderDesc {
        contactUsContents(where: {search: "order-banner"}) {
            nodes {
                title
                contentLine1
                contentLine2
            }
        }
    }
`

export default function OrderingDescription() {

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
        <section className="relative w-full h-fit py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-col gap-8 items-center justify-center overflow-hidden z-0">
            {data?.contactUsContents?.nodes[0]?.contentLine1.map((content, index) => (
                <span className="p text-justify" key={index}>
                    {parse(content)}
                </span>
            ))}
            {data?.contactUsContents?.nodes[0]?.contentLine2.map((content, index) => (
                <span className="text-center font-bold" key={index}>
                    {parse(content)}
                </span>
            ))}
        </section>
    )
}