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
            tags
            bestSelling
            cardImage{
            title
            sourceUrl
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
    //             "search": "",
    //         },
    //         context: {
    //             fetchOptions: {
    //                 next: { revalidate: 60 },
    //             },
    //         }
    //     }
    // );

    const HandleSearchBar = () => {
        setSearch(category);
        if (searchTerm) {
            setSearch(`${category}, ${searchTerm}`);
        }
    }

    const ClearFilters = () => {
        setSearchTerm("");
        setSelected("");
        setSearch(category);
        setHasFilters(false);
    }

    return (
        <section className="w-full h-full flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16 2xl:px-32">
            <CategorySearchBar setSearch={setSearch} setSearchTerm={setSearchTerm} searchTerm={searchTerm} category={category} setHasFilters={setHasFilters} clearFilters={ClearFilters} hasFilters={hasFilters} />
            <div className="w-full h-full flex gap-8 mt-12">
                <CategoryListSidebar setSearch={setSearch} setSelected={setSelected} selected={selected} category={category} setHasFilters={setHasFilters} />
                <div className="w-full h-fit">{JSON.stringify(search, null, 2)}</div>
            </div>
        </section>
    )
}