'use client';

export const dynamic = 'force-dynamic'

import BlogCard from "./blogCard";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Button from "../button";
import { startTransition } from "react";

const query = gql`
  query FetchBlogsList($after: String, $first: Int) {
    blogs(
      first: $first
      after: $after
      where: {orderby: {field: DATE, order: DESC}}
    ) {
      nodes {
        id
        mediaLine1 {
          title
          sourceUrl
        }
        name
        uploadDate
        shortDescription
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`

export default function BlogsList() {

    const { data, fetchMore, } = useSuspenseQuery(
        query,
        {
            variables: {
                "first": 6,
            },
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            }
        }
    );

    function handleLoadMore() {
        startTransition(() => {
            fetchMore({
                variables: {
                    "first": 3,
                    "after": data?.blogs?.pageInfo?.endCursor
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                        return prev;
                    }
                    return {
                        blogs: {
                            ...prev,
                            nodes: [
                                ...prev.blogs.nodes, ...fetchMoreResult.blogs.nodes
                            ],
                            pageInfo: {
                                ...fetchMoreResult.blogs.pageInfo
                            }
                        }
                    }
                }
            })
        })
    }

    return (
        <section className="h-fit w-full flex flex-col gap-8 py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
            <div className="w-full h-fit relative grid grid-auto-fit-xl gap-4 ">
                {data ? data?.blogs?.nodes?.map((b, i) => (
                    <BlogCard key={i} name={b.name} id={b.id} media={b.mediaLine1} text={b.shortDescription} date={b.uploadDate} />
                )) : ``}
            </div>
            {data?.blogs?.pageInfo?.hasNextPage ?
                <button
                    onClick={() => handleLoadMore()}
                >
                    <Button name={'Load More'} type={1} />
                </button>
                : ``}
        </section>
    )
}