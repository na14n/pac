
import { gql } from "@apollo/client"
import client from "@/lib/apollo"
import Image from "next/image"

export default function ConHero({ id }) {
    return (
        <section className="w-full aspect-video lg:aspect-[16/3] flex flex-col py-8 items-start justify-end px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 relative">
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-[#171717]/60 to-[#000000]/80 z-10" />
            <Image src={`https://picsum.photos/seed/${id}/1920/360`} fill={true} className="object-cover object-bottom z-0" />
            <div className="w-fit flex flex-col gap-2 z-20">
                <h1 className="text-[#FCFCFC] text-3xl xl:text-4xl 2xl:text-5xl font-bold">{id}</h1>
                <div className="w-full h-[3px] bg-pac-orange rounded-full" />
                <h5 className="text-[#EFEFEF] 2xl:text-lg">Location thing</h5>
                <h5 className="text-[#EFEFEF] 2xl:text-lg">Month Day to Month Day Year</h5>
            </div>
        </section>
    )
}