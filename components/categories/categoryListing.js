'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";

const query = gql`
query FetchProductCategories {
    productCategories(first: 999) {
      nodes {
        name
        icon {
          sourceUrl
        }
      }
    }
  }
`

export default function CategoryListing() {

    const { data, } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            }
        }
    );

    return (
        <section className="w-full h-fit">
            {data ? (
                data.productCategories.nodes.length > 0 ?
                    <section className="w-full h-fit grid xl:grid-cols-6 py-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 gap-4">
                        {data?.productCategories?.nodes?.map((p, index) => (
                            <a
                                key={index}
                                className="w-full aspect-square flex flex-col p-2 gap-2 items-center bg-[#EFEFEF] rounded-sm shadow-md hover:shadow-lg group transition-all hover:-translate-y-2"
                                href={`/categories?category=${p.name.toLowerCase()}`}
                            >
                                <div className="aspect-square w-24 relative">
                                    <Image src={p.icon.sourceUrl} fill className="object-contain object-center" />
                                </div>
                                <h1 className="text-[#373737] group-hover:text-pac-orange transition-colors font-bold text-xl 2xl:text-3xl text-center">{p.name}</h1>
                            </a>
                        ))}
                    </section>
                    :
                    <></>
            ) : <></>}
        </section>
    )
}
