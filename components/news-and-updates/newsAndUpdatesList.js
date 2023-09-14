'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Link from "next/link";
import { idFormatter } from "@/lib/helpers";

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

const query = gql` query FetchNewsAndUpdates {
    newsAndUpdates(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        name
        id
        mediaLine {
          sourceUrl
          title
          altText
        }
      }
    }
  }
`

export default function NewsAndUpdatesList() {

    const bigPicture = useSuspenseQuery(
        queryA,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
            variables: {
                offset: 0,
                limit: 6
            },
        }
    );

    const featured = useSuspenseQuery(
        queryB,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    );

    const { data, fetchMore } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },

        }
    );

    return (
        <section className="h-fit w-full relative grid grid-auto-fit-xl gap-4 py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
            {data ? data.newsAndUpdates.nodes.map((n, i) => (
                <div key={i} className="four-to-three-p w-full">
                    <Link href={data ? `/news-&-updates/${idFormatter(n?.id, true)}` : ``} className="w-fit h-fit">
                        <div className="w-full four-to-three relative">
                            <Image src={data ? n.mediaLine[0].sourceUrl : ``} alt={data ? n.mediaLine[0].altText : ``} fill={true} className="object-contain object-center" />
                        </div>
                    </Link>
                    <Link href={data ? `/news-&-updates/${idFormatter(n?.id, true)}` : ``} className="w-full landscape-banner p-2">
                        <h4 className="text-[#121212]">{n.name}</h4>
                    </Link>
                </div>
            )) : ``}
        </section>
    )
}