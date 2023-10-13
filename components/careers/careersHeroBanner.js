'use client'

import Image from "next/image"

export default function CareersHeroBanner(){
    return(
        <section className="w-full aspect-video md:aspect-[16/3] test relative flex flex-col justify-center">
            <Image fill className="object-center object-cover" src={"/"} />
        </section>
    )
}