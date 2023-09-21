'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Link from "next/link"
import { breadcrumbsFormatter, slugFormatter } from "@/lib/helpers";
import Image from "next/image";

export default function Breadcrumbs(props) {

    const query = gql`query FetchBreadCrumbs {
        product(id: "${props.id}") {
            id
            name
            brand {
              node {
                name
                logo {
                  link
                }
              }
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
    `

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

    const breadcrumbs = data ? breadcrumbsFormatter(data?.product?.itemCategories?.nodes) : {}


    return (
        <section className="w-full h-fit flex items-center justify-between pt-6 lg:px-32 2xl:px-48 ">
            <div className="w-fit h-fit flex text-pac-orange capitalize gap-2 text-sm xl:text-lg">
                <a className="hover:underline hover:text-nav-orange font-bold" href={'/products'}>
                    <p>Products</p>
                </a>
                <span className="text-[#121212]">&gt;</span>
                <a className="hover:underline hover:text-nav-orange font-bold" href={`/categories/${breadcrumbs.parent}`}>
                    <p>{breadcrumbs.parent}</p>
                </a>
                <span className="text-[#121212]">&gt;</span>
                <a className="hover:underline hover:text-nav-orange font-bold" href={`/categories/${breadcrumbs.child}`}>
                    <p>{breadcrumbs.child}</p>
                </a>
                <span className="text-[#121212]">&gt;</span>
                <p className="text-[#121212]">{data.product.name}</p>
            </div>
            <Link href={`/brands/${data ? slugFormatter(data?.product?.brand?.node?.name, false, true) : ``}`} className="h-32 square relative">
                <Image fill={true} className="object-contain" src={data ? data?.product?.brand?.node?.logo?.link : ``} />              
            </Link>
        </section>
    )
}