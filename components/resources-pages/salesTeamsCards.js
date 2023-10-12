'use client'

export const dynamic = 'force-dynamic'

import { sortByAttribute } from "@/lib/helpers";
import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";


const query = gql`
query QuerySalesAgentsTeams {
    salesAgentsTeams {
      nodes {
        name
        position
        image {
          sourceUrl
        }
      }
    }
  }
`

export default function SalesTeamsCards() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        });

    return (data ?
        sortByAttribute(data?.salesAgentsTeams?.nodes, "position").map((d, index) => (
            <a
                key={index}
                className="w-full h-fit flex flex-col gap-2 border-2 hover:border-pac-orange hover:shadow-lg border-[#DDD]/0 transition-all p-2 group"
                href={`/resources/sales-agent-search/${d.name}`}
            >
                <h1 className="uppercase text-xl 2xl:text-3xl font-bold group-hover:text-pac-orange">
                    {d.name} sales force
                </h1>
                <div className="w-full aspect-[3/2] relative shadow-md group-hover:shadow-lg">
                    <Image fill src={d.image.sourceUrl} className="object-cover object-center" />
                </div>
            </a>
        ))
        : <></>


    )
}

