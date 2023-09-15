'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery, useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Link from "next/link";
import { idFormatter } from "@/lib/helpers";
import Button from "../button";

const queryA = gql` query FetchBigPicture {
    newsFeatures(where: {name: "Big picture"}) {
      nodes {
        newsAndUpdates {
          nodes {
            id
          }
        }
      }
    }
  }
`

const queryB = gql` query FetchFeatured {
    newsFeatures(where: {name: "featured"}) {
      nodes {
        newsAndUpdates {
          nodes {
            id
          }
        }
      }
    }
  }
`

const query = gql` query FetchAllNewsAndUpdates($after: String, $before: String, $first: Int, $last: Int) {
    newsAndUpdates(
      where: {orderby: {field: DATE, order: DESC}}
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    edges {
      node {
        id
        name
        mediaLine {
          title
          sourceUrl
          altText
        }
      }
    }
  }
}
`

export default function AllNewsList({ searchParams }) {

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
            variables: {
                after: searchParams?.a,
                before: searchParams?.b,
                first: parseInt(searchParams?.f),
                last: parseInt(searchParams?.l),
            }
        }
    );

    return (
        <section className="h-fit w-full flex flex-col gap-8 py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
            <div className="w-full h-fit relative grid grid-auto-fit-xl gap-4 ">
                {data ? data?.newsAndUpdates?.edges?.map((n, i) => (
                    <div key={i} className="h-fit w-full rounded-md">
                        <Link href={data ? `/news-&-updates/${idFormatter(n?.node?.id, true)}` : ``} className="w-fit h-fit">
                            <div className="w-full four-to-three relative">
                                <Image src={data ? n?.node?.mediaLine[0].sourceUrl : ``} alt={data ? n?.node?.mediaLine[0].altText : ``} fill={true} className="object-contain object-center" />
                            </div>
                        </Link>
                        <Link href={data ? `/news-&-updates/${idFormatter(n?.node?.id, true)}` : ``} className="w-full landscape-banner p-2">
                            <h4 className="text-[#121212] transition-all ease-in-out duration-300 hover:underline">{n?.node?.name}</h4>
                        </Link>
                    </div>
                )) : ``}
            </div>
            <div className="w-full h-fit p-4 flex items-center justify-center ">
                {data?.newsAndUpdates?.pageInfo?.hasPreviousPage === true ?
                    <Button name={'Browse Previous Page'} link={`/news-&-updates/all?l=9&b=${data?.newsAndUpdates?.pageInfo?.startCursor}`} type={1} />
                    : ``}
                {data?.newsAndUpdates?.pageInfo?.hasNextPage === true ?
                    <Button name={'Browse Next Page'} link={`/news-&-updates/all?f=9&a=${data?.newsAndUpdates?.pageInfo?.endCursor}`} type={1} />
                    : ``}
            </div>
        </section>
    )
}