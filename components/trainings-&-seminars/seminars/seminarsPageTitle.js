'use client'

import { gql } from '@apollo/client';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";


const query = gql`
query fetchWorkshopsPage {
    events(where: {title: "landing-sem"}) {
      nodes {
        name
        eventName
        shortDescription
      }
    }
  }
`

export default function SeminarsPageTitle() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        })

    return (
        <section className="w-full h-fit bg-gradient-to-b from-[#007811] to-[#153f00] pt-24 pb-16 flex flex-col justify-end items-center">
            <h1 className="text-[#FCFCFC] font-bold uppercase text-3xl xl:text-4xl 2xl:text-5xl pt-8 pb-4">
                {data?.events?.nodes[0]?.eventName}
            </h1>
            <div className="w-32 h-[4px] rounded-full bg-[#ef6703]" />
            <div className="flex flex-col gap-2 mt-8">
                {data?.events?.nodes[0] ? data?.events?.nodes[0]?.shortDescription.map((s, i) => (
                    <p key={i} className="text-[#EFEFEF] 2xl:text-lg pt-8 max-w-[35ch] xl:max-w-[75ch] text-justify">
                        {s}
                    </p>
                )) : ``}
            </div>
        </section>
    )
}