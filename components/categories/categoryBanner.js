'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";

const query = gql`
query FetchProductCategory($search: String) {
    productCategories(first: 1, where: {search: $search}) {
      nodes {
        name
        icon {
          sourceUrl
        }
      }
    }
  }
`

export default function CategoryBanner({ category }) {

    const { data } = useSuspenseQuery(
        query,
        {
            variables: {
                "search": `${category}`
            },
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            }
        }
    );

    return (
        <section className="h-72 w-full bg-[#153f00] flex flex-col items-center justify-end py-8 gap-2">
            <div className="square w-32 relative">
                <Image src={data?.productCategories?.nodes[0]?.icon?.sourceUrl} fill className="object-center object-contain" />
            </div>
            <h1 className="text-3xl 2xl:text-5xl font-bold text-white capitalize">{data?.productCategories?.nodes[0]?.name}</h1>
        </section>
    )
}