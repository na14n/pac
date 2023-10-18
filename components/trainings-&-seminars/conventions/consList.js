'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import EventCard from "../eventCard";
import { idFormatter } from "@/lib/helpers";
import { startTransition } from "react";
import Button from "@/components/button";

export default function ConsList() {

    const query = gql`
    query FetchConventions($after: String, $first: Int) {
        conventions(first: $first, after: $after) {
          nodes {
            id
            eventName
            location
            shortDescription
            banner{
              sourceUrl
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `

    const { data, fetchMore } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
            variables: {
                first: 6,
            }
        }
    )

    function handleFetchMore() {
        startTransition(() => {
            fetchMore({
                variables: {
                    first: 3,
                    after: data?.conventions?.pageInfo?.endCursor
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                        return prev;
                    }
                    return {
                        conventions: {
                            ...prev,
                            nodes: [
                                ...prev.conventions.nodes, ...fetchMoreResult.conventions.nodes
                            ],
                            pageInfo: {
                                ...fetchMoreResult.conventions.pageInfo
                            }
                        }
                    }
                }
            })
        })
    }

    // const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <section className="flex flex-col items-center gap-8">
            <div className='w-[18rem] md:w-[40rem] lg:w-[60rem] xl:w-[64rem] 2xl:w-[76rem] h-full grid justify-items-center gap-4 grid-auto-fit-xl'>
                {data?.conventions?.nodes.map((d, index) => (
                    <EventCard
                        key={index}
                        title={d.eventName}
                        location={d.location}
                        link={idFormatter(d.id)}
                        type={"conventions"}
                        date={d.shortDescription}
                        mediaUrl={d.banner.sourceUrl}
                    />
                ))}
            </div>
            {data?.events?.pageInfo?.hasNextPage ?
                <button
                    onClick={() => handleFetchMore()}
                >
                    <Button
                        name={"Load More"}
                        type={1}
                    />
                </button>
                : ``}
        </section>
    )
}