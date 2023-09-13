'use client'

export const dynamic = 'force-dynamic'

import Image from "next/image"
import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import CsrSlider from "../embla/csrSlider";

const query = gql`
    query FetchAllCSR {
        cSRs {
        nodes {
            name
            mediaLine1 {
            altText
            title
            sourceUrl
            }
        }
        }
    }
  `

export default function CsrList() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        });

    return (
        <section className="w-full h-fit  justify-items-center px-4 md:px-8 lg:px-16 xl:px-32 2l:px-48 grid py-16 gap-4 md:grid-auto-fit-[480px]">
            {data ? data?.cSRs?.nodes.map((n, i) => (
                <div key={i} className="h-fit w-full rounded-sm overflow-hidden flex flex-col bg-[#FCFCFC] shadow-sm">
                    <div className="relative w-full h-fit ">
                        <CsrSlider media={data?.cSRs?.nodes ? n.mediaLine1 : []} />
                    </div>
                    <div className="flex flex-col px-4 py-2 h-20 ">
                        <h3 className="text-[#121212] font-semibold">
                            {data?.cSRs?.nodes ? n.name : `Title`}
                        </h3>
                    </div>
                </div>
            )) : ``}
        </section>
    )
}