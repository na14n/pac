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

const query = gql` query FetchNewsAndUpdates($cursor: String) {
  newsAndUpdates(
    last: 3
    before: $cursor
    where: {orderby: {field: DATE, order: ASC}}
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
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

  const { data } = useSuspenseQuery(
    query,
    {
      context: {
        fetchOptions: {
          next: { revalidate: 60 },
        },
      },
      variables: {
        cursor: null
      }
    }
  );

  return (
    <section className="h-fit w-full flex flex-col gap-8 py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
      <div className="w-full h-fit relative grid grid-auto-fit-xl gap-4 ">
        {data ? data?.newsAndUpdates?.edges?.map((n, i) => (
          <div key={i} className="h-fit w-full ">
            <Link href={data ? `/news-&-updates/${idFormatter(n?.node?.id, true)}` : ``} className="w-fit h-fit">
              <div className="w-full four-to-three relative">
                <Image src={data ? n?.node?.mediaLine[0].sourceUrl : ``} alt={data ? n?.node?.mediaLine[0].altText : ``} fill={true} className="object-contain object-center" />
              </div>
            </Link>
            <Link href={data ? `/news-&-updates/${idFormatter(n?.node?.id, true)}` : ``} className="w-full landscape-banner p-2">
              <h4 className="text-[#121212]">{n?.node?.name}</h4>
            </Link>
          </div>
        )) : ``}
      </div>
      <div className="w-full h-fit p-4 flex items-center justify-center ">
        {data?.newsAndUpdates?.pageInfo?.hasPreviousPage === true ?
          <Button name={'See All News & Updates'} link={'/news-&-updates/all?f=9'} type={1} />
          : ``}
      </div>
    </section>
  )
}