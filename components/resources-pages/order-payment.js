'use client'

export const dynamic = 'force-dynamic'

import { sortByAttribute } from "@/lib/helpers";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import Image from "next/image";

const page = gql`
    query FetchOrderPaymentChannels {
        contactUsContents(where: {search: "order-payment"}) {
    nodes {
      title
      sectionHeading
      sectionSubheading
      contentLine1
    }
  }
    }
`
const gateway = gql`
    query FetchOrderPaymentChannels {
        contactUsContents(where: {search: "payment-gateway"}) {
            nodes {
                title
                sectionHeading
                sectionSubheading
                contentLine1
                mediaLine1{
                    altText
                    title
                    sourceUrl
                }
                mediaLine2{
                    altText
                    title
                    sourceUrl
                }
            }
        }
    }
`


export default function OrderPayment() {

    const pageData = useSuspenseQuery(
        page,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        },
    );

    const { data } = useSuspenseQuery(
        gateway,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        },
    );

    return (
        <section className="relative w-full h-fit flex flex-col items-center justify-center gap-8 overflow-hidden z-0 py-16 px-4 lg:px-16 md:px-8 xl:px-32 2xl:px-48 bg-[#F1F1F1]">
            {pageData &&
                <h1 className="text-3xl xl:text-5xl text-[#F16805] uppercase font-bold">{pageData.data.contactUsContents.nodes[0].sectionHeading}</h1>}
            <div className="w-full h-[2px] rounded-full bg-[#F16805]" />
            <div className="flex items-center justify-center flex-col">
                {pageData &&
                    pageData?.data?.contactUsContents?.nodes[0]?.sectionSubheading?.map((subheading, index) => (
                        <h3 key={index} className="text-xl xl:text-2xl text-black font-bold">{subheading}</h3>))}
                {pageData &&
                    pageData?.data?.contactUsContents?.nodes[0]?.contentLine1?.map((content, index) => (
                        <div key={index} className="text-xl xl:text-2xl text-[#373737] max-w-[50ch] text-center">{parse(content)}</div>))}
            </div>
            <div className="w-full flex items-center justify-center flex-wrap">
                {data && data?.contactUsContents?.nodes?.map((node, index) => (
                    <div key={index} className="w-full xl:w-1/2 self-stretch flex items-center justify-center p-8">
                        <div className=" w-full h-full flex items-center gap-8 flex-col bg-[#E2E2E2] rounded-lg p-8">
                            <div className="w-full flex items-center justify-center gap-4">
                                <div className="w-[100px] aspect-square relative">
                                    <Image fill src={node?.mediaLine1[0]?.sourceUrl} className="object-contain object-center" />
                                </div>
                                <h3 className="text-xl xl:text-2xl font-black uppercase text-black">{node?.sectionHeading}</h3>
                            </div>
                            <p className="text-sm font-bold text-[#272727] text-center max-w-[40ch]">{node?.sectionSubheading}</p>
                            {node.contentLine1.map((content, index) => (
                                <div className=" w-full h-fit self-stretch flex items-center justify-center">
                                    <div key={index} className="relative w-full aspect-[3/2]">
                                        <Image fill src={node?.mediaLine2[index].sourceUrl} className="object-contain object-center" />
                                    </div>
                                    <div className="p b a link list  w-[30ch] shrink-0">{parse(content)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}