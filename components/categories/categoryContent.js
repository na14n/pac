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
import CategoryProducts from "./categoryProducts";

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
            cardImage{
              sourceUrl
            }
            bestSelling
            brand{
              node{
                name
              }
            }
            itemCategories{
              nodes{
                name
                parent{
                  node{
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

export default function CategoryContent({ category }) {

    const [search, setSearch] = useState(null)
    const [searchTerm, setSearchTerm] = useState(null)
    const [selected, setSelected] = useState(null)
    const [hasFilters, setHasFilters] = useState(false)

    useEffect(() => {
        setSearch(category)
    }, [category])

    // const { data, fetchMore, } = useSuspenseQuery(
    //     query,
    //     {
    //         variables: {
    //             "first": 8,
    //             "search": `${search}`,
    //         },
    //         context: {
    //             fetchOptions: {
    //                 next: { revalidate: 60 },
    //             },
    //         }
    //     }
    // );

    // const HandleSearchBar = () => {
    //     setSearch(category);
    //     if (searchTerm) {
    //         setSearch(`${category}, ${searchTerm}`);
    //     }
    // }

    // function handleLoadMore() {
    //     startTransition(() => {
    //         fetchMore({
    //             variables: {
    //                 "first": 4,
    //                 "after": data?.products?.pageInfo?.endCursor
    //             },
    //             updateQuery: (prev, { fetchMoreResult }) => {
    //                 if (!fetchMoreResult) {
    //                     return prev;
    //                 }
    //                 return {
    //                     products: {
    //                         ...prev,
    //                         nodes: [
    //                             ...prev.products.nodes, ...fetchMoreResult.products.nodes
    //                         ],
    //                         pageInfo: {
    //                             ...fetchMoreResult.products.pageInfo
    //                         }
    //                     }
    //                 }
    //             }
    //         })
    //     })
    // }

    const ClearFilters = () => {
        setSearchTerm("");
        setSelected("");
        setSearch(category);
        setHasFilters(false);
    }

    return (
        <section className="w-full h-full flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16 2xl:px-32">
            <CategorySearchBar setSearch={setSearch} setSearchTerm={setSearchTerm} searchTerm={searchTerm} category={category} setHasFilters={setHasFilters} clearFilters={ClearFilters} hasFilters={hasFilters} />
            <p className="text-sm text-black/50  my-2">{search}</p>
            <div className="w-full h-full flex gap-8 mt-12">
                <CategoryListSidebar setSearch={setSearch} setSelected={setSelected} selected={selected} category={category} setHasFilters={setHasFilters} />
                <div className="w-full h-fit">
                    {search ?
                        <CategoryProducts searchTerm={search} />
                        :
                        <div className="w-full h-fit flex flex-col gap-2 items-center justify-center p-8">
                            <Icon icon="svg-spinners:90-ring-with-bg" />
                            <p className="text-[#121212]/75">Loading...</p>
                        </div>}
                </div>
            </div>
        </section>
    )
}