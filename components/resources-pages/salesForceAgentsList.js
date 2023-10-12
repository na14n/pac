'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import SalesAgentCard from "./salesAgentCard";



const query = gql`
query QueryAllSalesAgentsByTeams($search: String) {
  salesAgents(where: {search: $search}) {
    nodes {
      name
      mobileNumber
      email
      specificLocations
      position
      image {
        sourceUrl
      }
      division
    }
  }
}
`

export default function SalesForceAgentsList({ team, search }) {

  const { data } = useSuspenseQuery(query,
    {
      context: {
        fetchOptions: {
          next: { revalidate: 60 },
        },
      },
      variables: {
        "search": `${team ? team : ''} ${search ? search : ''}`,
      }
    });


  return (
    data ? (
      data?.salesAgents?.nodes?.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 min-[1920px]:grid-cols-5 pb-16 px-4 md:px-8 lg:px-16 2xl:px-48 place-items-center gap-4">
          {data?.salesAgents?.nodes?.map((s, index) => (
            <SalesAgentCard key={index} i={s} />
          ))}
        </div>
        : <p className="w-full h-full text-center">No Sales Agent Found</p>
    ) :
      (
        <p className="w-full h-full text-center">Data Failed to Load. Please Refresh the Page and try again</p>
      )
  )
}