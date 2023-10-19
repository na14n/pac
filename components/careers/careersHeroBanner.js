'use client'

export const dynamic = 'force-dynamic'

import Image from "next/image"
import { gql } from "@apollo/client";
import { useSuspenseQuery, useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
query FetchCareersHero($search: String) {
    contactUsContents(where: {title: $search}) {
      nodes {
        title
        sectionHeading
        mediaLine1 {
          sourceUrl
          title
        }
      }
    }
  }
`

export default function CareersHeroBanner() {

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
            variables: {
                search: "careers-hero"
            }
        }
    );

    return (
        <section className="w-full h-fit bg-white flex flex-col md:flex-row md:items-center">
            <div className="flex flex-col items-center justify-center gap-2 w-fit h-fit px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 shrink-0">
                <span>
                    <h1 className="text-3xl 2xl:text-5xl text-[#121212] font-semibold">
                        {data?.contactUsContents?.nodes[0]?.sectionHeading[0]}
                    </h1>
                    <h1 className="text-5xl 2xl:text-6xl text-pac-green uppercase font-bold">
                        {data?.contactUsContents?.nodes[0]?.sectionHeading[1]}
                    </h1>
                    <h1 className="text-5xl 2xl:text-6xl text-pac-green uppercase font-bold">
                        {data?.contactUsContents?.nodes[0]?.sectionHeading[2]}
                    </h1>
                </span>

            </div>
            <div className="w-full h-full square relative">
                <Image fill className="object-center object-fill" src={data?.contactUsContents?.nodes[0]?.mediaLine1[0].sourceUrl} />
            </div>
        </section>
    )
}