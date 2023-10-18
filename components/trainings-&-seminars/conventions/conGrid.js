'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { startTransition } from "react";
import Image from "next/image";
import ConGridItem from "./conGridItem";
import { Icon } from "@iconify-icon/react";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, FacebookMessengerIcon, FacebookMessengerShareButton, ViberIcon, ViberShareButton } from "react-share"
import { usePathname } from 'next/navigation'

const query = gql`query FetchConvention($id: ID!) {
    convention(id: $id) {
      id
      images {
        sourceUrl
        title
      }
    }
  }`

export default function ConGrid({ id }) {

    const pathname = `${process.env.NEXT_PUBLIC_BASE_URL}${usePathname()}`

    const { data } = useSuspenseQuery(query,
        {
            variables: {
                "id": id
            },
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        })

    return (
        <section className="w-full h-fit flex items-center justify-center py-16">

            {/* {data ?
                data.convention.images.map((a, i) => (
                    <div className="w-full h-fit grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <ConGridItem key={i} position={i} data={a} />
                    </div>
                ))
                :
                <div className="w-full h-full flex items-center justify-center">
                    <Icon icon="svg-spinners:270-ring" className="text-3xl" />
                </div>
            } */}
            <div className="w-fit h-fit grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {data.convention.images.map((a, i) => (
                    <ConGridItem key={i} position={i} data={a} />
                ))}
                <div className="flex flex-col w-full aspect-video p-2">
                    <h5 className="font-semibold text-black/70">Share this Event</h5>
                    <div className="w-full flex flex-wrap gap-2">
                        <FacebookShareButton url={pathname}>
                            <FacebookIcon size={32} className="rounded-md" />
                        </FacebookShareButton>
                        <TwitterShareButton url={pathname}>
                            <TwitterIcon size={32} className="rounded-md" />
                        </TwitterShareButton>
                        <ViberShareButton url={pathname}>
                            <ViberIcon size={32} className="rounded-md" />
                        </ViberShareButton>
                        <button
                            onClick={() => { navigator.clipboard.writeText(pathname) }}
                            className=" px-2 rounded-md square bg-gray-600 text-white flex items-center justify-center"
                        >
                            <Icon icon="material-symbols:link" size={32} />
                        </button>
                    </div>
                </div>
            </div>
        </section >
    )
}