'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import EventCard from "../eventCard";
import { idFormatter } from "@/lib/helpers";
import { startTransition } from "react";
import Button from "@/components/button";

export default function TrsList() {

    const query = gql`
        query FetchTrainings($after: String,  $first: Int) {
            events(where: {search: "workshops"}, first: $first, after: $after) {
                nodes {
                    id
                    eventName
                }
                pageInfo{
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
                    after: data?.events?.pageInfo?.endCursor
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                        return prev;
                    }
                    return {
                        events: {
                            ...prev,
                            nodes: [
                                ...prev.events.nodes, ...fetchMoreResult.events.nodes
                            ],
                            pageInfo: {
                                ...fetchMoreResult.events.pageInfo
                            }
                        }
                    }
                }
            })
        })
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <section className="flex flex-col items-center gap-8">
            <div className='w-[18rem] md:w-[40rem] lg:w-[60rem] xl:w-[64rem] 2xl:w-[76rem] h-full grid justify-items-center gap-4 grid-auto-fit-xl'>
                {data?.events?.nodes.map((d, index) => (
                    <EventCard
                        key={index}
                        title={d.eventName}
                        location={d.location}
                        link={idFormatter(d.id)}
                        type={"workshops"}
                        date={d.shortDescription}
                        month={monthNames[new Date(d.date).getMonth() + 1]}
                        day={new Date(d.date).getDate()}
                    // log={new Date(d.date).getMonth()+1}
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