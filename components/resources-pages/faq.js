'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import { Icon } from "@iconify-icon/react";
import FaqItem from "./faqItem";

const query = gql`
    query FetchOrderingFaq {
        contactUsContents(where: {search: "faq"}) {
            nodes {
                title
                sectionHeading
                sectionSubheading
                contentLine1
            }
        }
    }
`

const Faq = () => {

    // const placeholder = [
    //     {
    //         q: 'Question One?',
    //         a: 'Answer One'
    //     },
    //     {
    //         q: 'Question Two?',
    //         a: 'Answer Two'
    //     },
    //     {
    //         q: 'Question Three?',
    //         a: 'Answer Three'
    //     },
    //     {
    //         q: 'Question Four?',
    //         a: 'Answer Four'
    //     },
    // ]

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
        <div className="w-full h-fit xs:px-4 lg:px-28 2xl:px-48 flex flex-col gap-16 lg:py-32 items-center py-16">
            <h1 className="text-3xl 2xl:text-5xl text-center text-pac-orange uppercase font-bold">
                {data?.contactUsContents?.nodes[0]?.sectionHeading}
            </h1>
            <div className="w-full h-fit flex flex-col items-center gap-8">
                {data?.contactUsContents?.nodes[0]?.sectionSubheading.map((s,index) => (
                    <FaqItem key={index} question={s} answer={data?.contactUsContents?.nodes[0]?.contentLine1[index]} />
                ))}
            </div>
        </div>
    )
}

export default Faq;