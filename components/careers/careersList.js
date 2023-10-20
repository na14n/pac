'use client'

export const dynamic = 'force-dynamic'

import Image from "next/image"
import { gql } from "@apollo/client";
import { useSuspenseQuery, useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import { sortByAttribute } from "@/lib/helpers";
import CareerItem from "./careerItem";
import Button from "../button";
import { startTransition } from "react";

const query = gql`
query FetchCareerOpenings($after: String, $first: Int) {
    careers(first: $first, after: $after) {
      nodes {
        jobTitle
        location
        jobStatus
        requirement
        description
        benefits
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export default function CareersList() {

    const { data, fetchMore } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
            variables: {
                first: 5
            }
        }
    );

    function handleLoadMore() {
        startTransition(() => {
          fetchMore({
            variables: {
              "first": 3,
              "after": data?.careers?.pageInfo?.endCursor
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                return prev;
              }
              return {
                careers: {
                  ...prev,
                  nodes: [
                    ...prev.careers.nodes, ...fetchMoreResult.careers.nodes
                  ],
                  pageInfo: {
                    ...fetchMoreResult.careers.pageInfo
                  }
                }
              }
            }
          })
        })
      }

    return (
        <section id="list" className="w-full h-fit flex flex-col items-center px-4 md:px-8 gap-12 lg:px-16 xl:px-32 2xl:px-48 py-12 bg-gradient-to-b from-[#f9a03c] to-[#ef6703] overflow-hidden transition-all">
            <h1 className="text-white font-bold text-3xl 2xl:text-4xl uppercase">
                Current Openings
            </h1>
            <div className="w-full h-fit flex flex-col items-center gap-4">
                {data?.careers?.nodes?.map((c, index) => (
                    <CareerItem
                        key={index}
                        title={c.jobTitle}
                        location={c.location}
                        tags={c.jobStatus}
                        requirement={c.requirement}
                        description={c.description}
                        benefits={c.benefits}
                    />
                ))}
                {data?.careers?.pageInfo?.hasNextPage ?
                    <button className="mt-4"
                        onClick={() => handleLoadMore()}
                    >
                        <Button type={1} color={"white-green"} name={"Load More"} />
                    </button>
                    : <></>
                }
            </div>
        </section>
    )
}