'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import SalesAgentCard from "./salesAgentCard";
import Button from "../button";
import { startTransition } from "react";

const query = gql`
query QueryAllSalesAgentsByTeams($search: String, $first: Int, $after: String) {
  salesAgents(where: {search: $search}, first: $first, after: $after) {
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
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`

export default function SalesForceAgentsList({ team, search }) {

  const { data, fetchMore } = useSuspenseQuery(query,
    {
      context: {
        fetchOptions: {
          next: { revalidate: 60 },
        },
      },
      variables: {
        "search": `${team ? team : ''} ${search ? search : ''}`,
        "first": 10
      }
    });

  function handleLoadMore() {
    startTransition(() => {
      fetchMore({
        variables: {
          "first": 5,
          "search": `${team ? team : ''} ${search ? search : ''}`,
          "after": data?.salesAgents?.pageInfo?.endCursor
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }
          return {
            salesAgents: {
              ...prev,
              nodes: [
                ...prev.salesAgents.nodes, ...fetchMoreResult.salesAgents.nodes
              ],
              pageInfo: {
                ...fetchMoreResult.salesAgents.pageInfo
              }
            }
          }
        }
      })
    })
  }


  return (
    data ? (
      data?.salesAgents?.nodes?.length > 0 ?
        <section className="w-full h-fit flex flex-col gap-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 min-[1920px]:grid-cols-5 px-4 md:px-8 lg:px-16 2xl:px-48 place-items-center gap-4">
            {data?.salesAgents?.nodes?.map((s, index) => (
              <SalesAgentCard key={index} i={s} />
            ))}
          </div>
          {data?.salesAgents?.pageInfo?.hasNextPage ?
            <button onClick={() => handleLoadMore()}>
              <Button type={1} name={'Load More'} />
            </button>
            : <></>
          }
        </section>
        : <p className="w-full h-full text-center">No Sales Agent Found</p>
    ) :
      (
        <p className="w-full h-full text-center">Data Failed to Load. Please Refresh the Page and try again</p>
      )
  )
}