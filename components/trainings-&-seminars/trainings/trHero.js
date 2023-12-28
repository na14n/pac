'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image"
import { Icon } from "@iconify-icon/react"

const query = gql`
    query fetchWorkshop($id: ID!) {
        workshop(id: $id) {
          eventName
          eventBanner {
            sourceUrl
          }
        }
      }
    `


export default function TrHero({id}) {

    const { data } = useSuspenseQuery(
        query,
        {
            variables: {
                "id": `${id}=`
            },
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            }
        }
    )

    return (
        <section className="w-full aspect-video lg:aspect-[16/3] flex flex-col py-8 items-start justify-end px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 relative">
            <div className="absolute w-full aspect-video md:aspect-[16/7] xl:aspect-[16/3] top-0 left-0 bg-gradient-to-b from-[#ff890c] to-[#fe7200]" />
            <div className="w-full max-md:aspect-video aspect-[16/7] z-10 mt-24 flex flex-col gap-4">
                <div className="flex items-center flex-wrap gap-2 text-white/75 ml-4">
                    <a className="font-semibold text-sm text-white/90 hover:text-white hover:underline transition-all " href="/trainings-&-seminars/workshops">
                        Training & Workshops
                    </a>
                    /
                    <p className="font-semibold text-sm text-white">
                        {data?.workshop?.eventName}
                    </p>
                </div>
                <div className="h-full w-full relative rounded-md shadow-md overflow-hidden">
                    <Image fill className="object-center object-cover" src={data?.workshop.eventBanner.sourceUrl} />
                </div>
            </div>
        </section>
    )
}