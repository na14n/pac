'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Link from "next/link";
import { idFormatter, sortByAttribute } from "@/lib/helpers";
import Button from "../button";
import { startTransition, useEffect, useState } from "react";
import CategorySearchBar from "./searchbar";
import CategoryListSidebar from "./categoryList";
import { Icon } from "@iconify-icon/react";
import RecommendedProductCard from "../products/recProductCard";

const query = gql`
query SearchProducts($after: String, $first: Int, $search: String) {
    products(
      first: $first
      after: $after
      where: {orderby: {field: DATE, order: DESC}, search: $search}
    ) {
      nodes {
        id
        name
        cardImage {
          sourceUrl
        }
        bestSelling
        brand {
          node {
            name
          }
        }
        itemCategories {
          nodes {
            name
            parent {
              node {
                name
              }
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`

export default function CategoryProducts({ searchTerm }) {

    const { data, fetchMore, } = useSuspenseQuery(
        query,
        {
            variables: {
                "first": 8,
                "search": `${searchTerm}`,
            },
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            }
        }
    );

    return(data ?
        <div className="w-full h-fit flex flex-col gap-4">
            <div className="w-full grid xl:grid-cols-4 min-[1920px]:grid-cols-5 gap-4 mb-8">
                {data?.products?.nodes?.length > 0 ? data?.products?.nodes?.map((p, i) => (
                    <RecommendedProductCard
                        key={i}
                        name={p.name}
                        brand={p.brand.node.name}
                        best={p.bestSelling}
                        category={p.itemCategories.nodes}
                        media={p.cardImage.sourceUrl}
                        slug={idFormatter(p.id)}
                    />
                ))
                    :
                    <div className="w-full h-fit flex flex-col gap-2 items-center justify-center p-8">
                        <p className="text-[#121212]/75">No Products Found.</p>
                    </div>
                }
            </div>
            {data?.products?.pageInfo?.hasNextpage ?
                <button onClick={() => handleLoadMore()}>
                    <Button type={1} name={'Load More'} />
                </button>
                : <></>
            }
        </div>
        :
        <div className="w-full h-fit flex flex-col gap-2 items-center justify-center p-8">
            <p className="text-[#121212]/75">No Products Found.</p>
        </div>
    )

}