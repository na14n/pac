
import { gql } from "@apollo/client"
import client from "@/lib/apollo"

export default function ConHero({ id }) {
    return (
        <section className="w-full max-md:aspect[16/9] aspect-[16/3] flex flex-col py-8 items-start justify-end px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 relative">
            <div className="absolute w-full h-full top-0 left-0 bg-[#000000]/80 z-0" />
            <div className="w-fit flex flex-col gap-2 z-20">
                <h1 className="text-[#FCFCFC] text-3xl xl:text-4xl 2xl:text-5xl font-bold">{id}</h1>
                <div className="w-full h-[3px] bg-pac-orange rounded-full" />
                <h5 className="text-[#EFEFEF] 2xl:text-lg">Location thing</h5>
            </div>
        </section>
    )
}