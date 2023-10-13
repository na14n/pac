'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image"



export default function ConHero({ id }) {

    const query = gql`
    query fetchCovention($id: ID!) {
        convention(id: $id) {
          eventName
          location
          shortDescription
          banner {
            sourceUrl
          }
        }
      }
    `

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
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-[#171717]/60 to-[#000000]/80 z-10" />
            <Image src={data ? data?.convention?.banner?.sourceUrl : `https://picsum.photos/seed/${data?.convention?.id}/1920/360`} fill={true} className="object-cover object-center z-0" />
            <div className="w-fit flex flex-col gap-2 z-20">
                <h1 className="text-[#FCFCFC] text-3xl xl:text-4xl 2xl:text-5xl font-bold">{data?.convention?.eventName}</h1>
                <div className="w-full h-[3px] bg-pac-orange rounded-full" />
                <h5 className="text-[#EFEFEF] 2xl:text-lg">{data?.convention?.location}</h5>
                <h5 className="text-[#EFEFEF] 2xl:text-lg">{data?.convention?.shortDescription}</h5>
            </div>
        </section>
    )
}