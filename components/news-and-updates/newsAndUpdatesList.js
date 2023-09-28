'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery, useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Link from "next/link";
import { idFormatter } from "@/lib/helpers";
import Button from "../button";
import { startTransition } from "react";

// const queryA = gql` query FetchBigPicture {
//     newsFeatures(where: {name: "Big picture"}) {
//       nodes {
//         newsAndUpdates {
//           nodes {
//             id
//           }
//         }
//       }
//     }
//   }
// `

// const queryB = gql` query FetchFeatured {
//     newsFeatures(where: {name: "featured"}) {
//       nodes {
//         newsAndUpdates {
//           nodes {
//             id
//           }
//         }
//       }
//     }
//   }
// `

// const query = gql` query FetchNewsAndUpdates($cursor: String) {
//   newsAndUpdates(
//     last: 3
//     before: $cursor
//     where: {orderby: {field: DATE, order: ASC}}
//   ) {
//     pageInfo {
//       hasPreviousPage
//       hasNextPage
//       startCursor
//     }
//     edges {
//       node {
//         id
//         name
//         mediaLine {
//           title
//           sourceUrl
//           altText
//         }
//       }
//     }
//   }
// }
// `

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
        altText
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

export default function NewsAndUpdatesList() {

  // const bigPicture = useSuspenseQuery(
  //   queryA,
  //   {
  //     context: {
  //       fetchOptions: {
  //         next: { revalidate: 60 },
  //       },
  //     },
  //     variables: {
  //       offset: 0,
  //       limit: 6
  //     },
  //   }
  // );

  // const featured = useSuspenseQuery(
  //   queryB,
  //   {
  //     context: {
  //       fetchOptions: {
  //         next: { revalidate: 60 },
  //       },
  //     },
  //   }
  // );

  // const { data } = useSuspenseQuery(
  //   query,
  //   {
  //     context: {
  //       fetchOptions: {
  //         next: { revalidate: 60 },
  //       },
  //     },
  //     variables: {
  //       cursor: null
  //     }
  //   }
  // );

  const { data, fetchMore } = useSuspenseQuery(
    query,
    {
      context: {
        fetchOptions: {
          next: { revalidate: 60 },
        },
      },
      variables: {
        first: 1
      }
    }
  );

  function handleLoadMore() {
    startTransition(() => {
      fetchMore({
        variables: {
          first: 1,
          after: data?.newsAndUpdates?.pageInfo?.endCursor
        },
        fetchOptions: {
          mode: 'no-cors'
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
        {/* {data ? data?.newsAndUpdates?.edges?.map((n, i) => (
          <div key={i} className="h-fit w-full ">
            <a href={data ? `/news-&-updates/${idFormatter(n?.node?.id, true)}` : ``} className="w-fit h-fit">
              <div className="w-full four-to-three relative">
                <Image src={data ? n?.node?.mediaLine[0].sourceUrl : ``} alt={data ? n?.node?.mediaLine[0].altText : ``} fill={true} className="object-contain object-center" />
              </div>
            </a>
            <a href={data ? `/news-&-updates/${idFormatter(n?.node?.id, true)}` : ``} className="w-full landscape-banner p-2">
              <h4 className="text-[#121212]">{n?.node?.name}</h4>
            </a>
          </div>
        )) : ``} */}
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