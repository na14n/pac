'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import ProductCard from "./productCard";
import { idFormatter } from "@/lib/helpers";
import RecommendedProductCard from "./recProductCard";

const query = gql`
query FetchRecommendedProducts($search: String, $notIn: [ID]) {
    products(where: {search: $search, notIn: $notIn}) {
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
    }
  }
`

export default function Recommended({ tags, id }) {

    const { data } = useSuspenseQuery(
        query,
        {
            variables: {
                "notIn": [id],
                "search": `${tags}`
            },
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    );

    return (
        <div className=" w-full grid xl:grid-cols-5 min-[1080px]:grid-cols-6 gap-4">
            {data ? data?.products?.nodes?.map((p, i) => (
                <RecommendedProductCard
                    key={i}
                    name={p.name}
                    brand={p.brand.node.name}
                    best={p.bestSelling}
                    category={p.itemCategories.nodes}
                    media={p.cardImage.sourceUrl}
                    slug={idFormatter(p.id)}
                />
            )) : ``}
        </div>
    )
}