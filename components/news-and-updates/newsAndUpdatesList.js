'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Link from "next/link";
import { idFormatter } from "@/lib/helpers";
import Button from "../button";
import { startTransition } from "react";


export default function NewsAndUpdatesList() {

  const query = gql`
  query FetchNewsList($after: String, $first: Int) {
    newsAndUpdates(
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
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`

  const { data, fetchMore, } = useSuspenseQuery(
    query,
    {
      variables: {
        "first": 3,
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
          "after": data?.newsAndUpdates?.pageInfo?.endCursor
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }
          return {
            newsAndUpdates: {
              ...prev,
              nodes: [
                ...prev.newsAndUpdates.nodes, ...fetchMoreResult.newsAndUpdates.nodes
              ],
              pageInfo: {
                ...fetchMoreResult.newsAndUpdates.pageInfo
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
        {data ? data?.newsAndUpdates?.nodes?.map((n, i) => (
          <div key={i} className="h-fit w-full ">
            <a href={data ? `/news-&-updates/${idFormatter(n?.id, true)}` : ``} className="w-fit h-fit">
              <div className="w-full four-to-three relative">
                <Image src={data ? n?.mediaLine1[0].sourceUrl : ``} alt={data ? n?.mediaLine1[0].altText : ``} fill={true} className="object-contain object-center" />
              </div>
            </a>
            <a href={data ? `/news-&-updates/${idFormatter(n?.id, true)}` : ``} className="w-full landscape-banner p-2">
              <h4 className="text-[#121212]">{n?.name}</h4>
            </a>
          </div>
        )) : ``}
        {/* <pre>
          {JSON.stringify(data, null, 2)}
        </pre> */}
      </div>
      <div className="w-full h-fit p-4 flex items-center justify-center ">
        {/* {data?.newsAndUpdates?.pageInfo?.hasPreviousPage === true ?
          <Button name={'See All News & Updates'} link={'/news-&-updates/all?f=9'} type={1} />
          : ``} */}
        {data?.newsAndUpdates?.pageInfo?.hasNextPage ?
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