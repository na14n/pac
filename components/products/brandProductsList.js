'use client'

import { useEffect, useState } from "react"
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import ProductCard from "./productCard";
import { idFormatter } from "@/lib/helpers";

export default function BrandProductsList({ queryVariables, brand }) {

    const [qv, setQv] = useState(null)

    const query = gql`
        query GetBrandProducts($search: String) {
            products(where: {search: $search}) {
            nodes {
                id
                name
                cardImage {
                sourceUrl
                }
                bestSelling
                itemCategories {
                nodes {
                    parent {
                    node {
                        name
                    }
                    }
                }
                }
            }
            }
        }
    `

    useEffect(() => {
        if (queryVariables == undefined || brand) {
            setQv(`${brand}`);
        }
        if (queryVariables && brand) {
            setQv(`${queryVariables}, ${brand}`);
        }
    }, [queryVariables, brand])

    const { data, refetch } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
            variables: {
                search: `${qv}`
            },
        }
    );


    return (
        <section className="w-full h-fit py-8 bg-[#EFEFEF] flex flex-col items-center">
            <div className="max-w-[24rem] md:max-w-[48rem] xl:max-w-[60rem] h-full max-lg:pt-8 grid justify-items-center gap-4 max-xl:grid-auto-fit-[9rem] grid-auto-fit-[12rem]">
                {data ? data.products.nodes.map((p, i) => (
                    // w-48 max-xl:w-36
                    <ProductCard
                        key={i}
                        name={p.name}
                        best={p.bestSelling}
                        category={p.itemCategories.nodes}
                        media={p.cardImage.sourceUrl}
                        slug={idFormatter(p.id)}
                    />
                )) : ``}
            </div>
        </section>
    )
}