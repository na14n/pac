'use client'

export const dynamic = 'force-dynamic'

import Image from "next/image"
import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import CsrSlider from "../embla/csrSlider";
import { useState, startTransition, useEffect } from "react";
import Button from "../button";

export default function CsrList({params}) {

    const query = gql`
        query FetchCSRs($after: String, $first: Int) {
            cSRs(first: $first, after: $after) {
            pageInfo {
                endCursor
                hasNextPage
            }
            nodes {
                cSRDate
                name
                mediaLine1 {
                sourceUrl
                }
            }
            }
        }
    `

    const { data, fetchMore } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
            variables: {
                first: 2,
                // after: params
            }
        });

    // setCsr([...csr, data]);
    // setAfter(data?.cSRs?.pageInfo?.endCursor);
    // setHasMore(data?.cSRs?.pageInfo?.hasNextPage)

    function handleLoadMore() {
        startTransition(() => {
            fetchMore({
                variables: {
                    first: 2,
                    after: data?.cSRs?.pageInfo?.endCursor
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                        return prev;
                    }
                    return {
                        cSRs: {
                            ...prev,
                            nodes: [
                                ...prev.cSRs.nodes, ...fetchMoreResult.cSRs.nodes
                            ],
                            pageInfo: {
                                ...fetchMoreResult.cSRs.pageInfo
                            }
                        }
                    }
                }
            })
        })
    }

    // console.log("PARAMS: ", params);

    return (
        <section className="w-full h-fit px-4 md:px-8 lg:px-16 xl:px-32 2l:px-48 flex flex-col gap-2">
            <div className="w-full h-fit justify-items-center grid pt-16 pb-8 gap-4 md:grid-auto-fit-[480px]">
                {data ? data?.cSRs?.nodes.map((n, i) => (
                    <div key={i} className="h-fit w-full rounded-sm overflow-hidden flex flex-col bg-[#FCFCFC] shadow-sm">
                        <div className="relative w-full h-fit ">
                            <CsrSlider media={data?.cSRs?.nodes ? n.mediaLine1 : []} />
                        </div>
                        <div className="flex flex-col px-4 py-2 h-24 ">
                            <h3 className="text-[#121212] font-semibold xl:text-lg">
                                {data?.cSRs?.nodes ? n.name : `Title`}
                            </h3>
                            <h5 className="text-[#373737] max-xl:text-sm">
                                {data?.cSRs?.nodes ? n.cSRDate : ``}
                            </h5>
                        </div>
                    </div>
                )) : ``}
            </div>
            <div className="w-full h-fit flex justify-center pb-16">
                {data?.cSRs?.pageInfo?.hasNextPage ?
                    <button
                        onClick={() => handleLoadMore()}
                    >
                        <Button name={'Load More'} type={1} />
                    </button>
                    : ``}
            </div>
        </section>
    )
}