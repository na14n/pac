'use client'

export const dynamic = 'force-dynamic'

import { idFormatter } from "@/lib/helpers";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Link from "next/link";
import CsrSlider from "../embla/csrSlider";



export default function NewsPageHeader({ id }) {
    const query = gql`query fetchNewsHeader {
        newsAndUpdate(id: "${id}=") {
          id
          name
          mediaLine {
            altText
            title
            sourceUrl
          }
        }
      }
    `

    const { data } = useSuspenseQuery(query);

    return (
        <section className="flex w-full h-fit px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 gap-8 pt-8 pb-16 bg-[#153f00]">
            <div className="w-2/5 aspect-[3/2] shrink-0">
                <CsrSlider media={data ? data?.newsAndUpdate?.mediaLine : []} />
            </div>
            <div className="w-full self-stretch flex items-center justify-center">
                <h1 className="text-[#FCFCFC] font-bold text-3xl self-center text-justify">{data ? data?.newsAndUpdate?.name : ``}</h1>
            </div>
        </section>
    )
}