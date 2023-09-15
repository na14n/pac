'use client'

export const dynamic = 'force-dynamic'

import { idFormatter } from "@/lib/helpers";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import parse from 'html-react-parser'

export default function NewsPageContent({id}){

    // const query = gql`query fetchNewsHeader {
    //     newsAndUpdate(id: "${id}=") {
    //       content
    //     }
    //   }
    // `

    const { data } = useSuspenseQuery(query);

    return(
        <section className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
            <p className="b">
                {parse(data?.newsAndUpdate?.content)}
            </p>
        </section>
    )
}