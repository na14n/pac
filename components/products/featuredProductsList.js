'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import ProductCard from "./productCard";
import { idFormatter } from "@/lib/helpers";

const query = gql`query FetchProducts {
    products {
      nodes {
        id
        name
        brand {
          node {
            name
          }
        }
        bestSelling
        cardImage {
          link
        }
        itemCategories {
            nodes {
              parent {
                node {
                  name
                }
              }
              name
            }
        }
      }
    }
  }
`

const FeaturedProductsList = () => {

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    );

    console.log(data);

    return (
        <div className="w-full h-full xs:px-4 lg:px-32 2xl:px-48 flex flex-col items-center justify-center py-16 max-lg:py-8" >
            <h1 className='w-fit py-2 uppercase text-pac-orange text-2xl font-semibold `'>
                Featured Products
            </h1>
            <div className='w-4/5 h-[2px] bg-pac-orange' />
            <div className="w-full h-full pt-16 max-lg:pt-8 grid gap-4 grid-auto-fit-xs max-lg:grid-auto-fit-[150px] ">
                {data ? data?.products?.nodes?.map((p, i) => (
                    <ProductCard
                        key={i}
                        name={p.name}
                        brand={p.brand.node.name}
                        best={p.bestSelling}
                        category={p.itemCategories.nodes}
                        media={p.cardImage.link}
                        slug={idFormatter(p.id)}
                    />
                )) : ``}
            </div>
        </div>
    )
}

export default FeaturedProductsList;