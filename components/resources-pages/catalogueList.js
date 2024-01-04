"use client";

export const dynamic = "force-dynamic";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Link from "next/link";
import { idFormatter, sortByAttribute } from "@/lib/helpers";
import Button from "../button";
import { startTransition } from "react";
import CatalogueCard from "./catalogueCard";

export default function CatalogueList() {
  const query = gql`
    query FetchBrandCatalogues($after: String, $first: Int) {
      productCatalogs(
        first: $first
        after: $after
        where: { orderby: { field: DATE, order: DESC } }
      ) {
        nodes {
          id
          name
          brand {
            node {
              name
            }
          }
          thumbnail {
            sourceUrl
          }
          file {
            link
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `;

  const { data, fetchMore } = useSuspenseQuery(query, {
    variables: {
      first: 10,
    },
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });

  function handleLoadMore() {
    startTransition(() => {
      fetchMore({
        variables: {
          first: 4,
          after: data?.productCatalogs?.pageInfo?.endCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }
          return {
            productCatalogs: {
              ...prev,
              nodes: [
                ...prev.productCatalogs.nodes,
                ...fetchMoreResult.productCatalogs.nodes,
              ],
              pageInfo: {
                ...fetchMoreResult.productCatalogs.pageInfo,
              },
            },
          };
        },
      });
    });
  }

  return (
    <section className="h-fit w-full flex flex-col gap-8 py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
      <div className="w-full h-fit relative grid grid-auto-fit-[15rem] gap-4 ">
        {data
          ? data?.productCatalogs?.nodes?.map((n, i) => (
              <CatalogueCard
                key={i}
                name={n?.name}
                img={n?.thumbnail.sourceUrl}
                link={n?.file?.link}
                brand={n?.brand?.node?.name}
              />
            ))
          : ``}
        {/* <pre>
          {JSON.stringify(data, null, 2)}
        </pre> */}
      </div>
      <div className="w-full h-fit p-4 flex items-center justify-center ">
        {data?.productCatalogs?.pageInfo?.hasNextPage ? (
          <button onClick={() => handleLoadMore()}>
            <Button name={"Load More"} type={1} />
          </button>
        ) : (
          ``
        )}
      </div>
    </section>
  );
}
