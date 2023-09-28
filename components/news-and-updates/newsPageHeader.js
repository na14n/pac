'use client'

export const dynamic = 'force-dynamic'

import { idFormatter } from "@/lib/helpers";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Link from "next/link";
import CsrSlider from "../embla/csrSlider";
import parse from 'html-react-parser'
import NewsPageRec from "./newsPageRec";


export default function NewsPageHeader({ id }) {
    const query = gql`query fetchNewsHeader {
        newsAndUpdate(id: "${id}=") {
          id
          name
          mediaLine1 {
            title
            sourceUrl
          }
          content
          relatedTags
        }
      }
    `

    const { data } = useSuspenseQuery(query);

    return (
        <>
            <section className="flex flex-col px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 bg-[#153f00]">
                <a href="/news-&-updates/all?f=9" className="text-[#EFEFEF]/90 hover:text-[#FCFCFC]/90 hover:underline">View All News & Updates</a>
            </section>
            <section className="flex flex-col md:flex-row justify-center w-full h-fit px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 gap-8 pt-8 pb-16 bg-[#153f00]">
                <div className="w-full md:w-2/5 aspect-[3/2] shrink-0 rounded-sm shadow-sm overflow-hidden">
                    <CsrSlider media={data ? data?.newsAndUpdate?.mediaLine1 : []} />
                </div>
                <div className="w-fit self-stretch flex items-center justify-center">
                    <h1 className="text-[#FCFCFC] font-bold text-3xl self-center lg:max-w-[20ch] xl:max-w-[24ch]">{data ? data?.newsAndUpdate?.name : ``}</h1>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row w-full h-fit px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 gap-8 pt-8 pb-16 justify-center">
                {/* <p className="b text-[#272727] max-w-[75ch] text-justify"> */}
                <div className="b text-[#272727] max-w-[75ch] text-justify flex flex-col gap-4">
                    {parse(data?.newsAndUpdate?.content)}
                    {/* {data?.newsAndUpdate?.content} */}
                </div>
                {/* </p> */}
                <NewsPageRec id={id} rec={data?.newsAndUpdate?.relatedTags} />
            </section>
        </>
    )
}