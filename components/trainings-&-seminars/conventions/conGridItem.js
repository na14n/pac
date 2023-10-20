'use client'

import { useState } from "react"
import Image from "next/image"
import Button from "@/components/button"

export default function ConGridItem({ data, position }) {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                className={`relative flex items-center justify-center
                        aspect-video shadow-md max-md:w-full md:h-36  rounded-sm hover:shadow-lg transition-all ease-in-out duration-150 cursor-pointer ${position === 0 ? `xl:h-full xl:col-span-2 xl:row-span-2` : `2xl:h-48`} 
                    `}
                onClick={() => setOpen(!open)}
            >
                {/* <Image src={`https://picsum.photos/seed/${data.title}/1920/1080`} fill={true} className="object-center object-contain" /> */}
                <Image src={data.sourceUrl} fill={true} className="object-center object-contain" />
            </div>
            <div
                onClick={() => setOpen(!open)}
                className={`top-0 left-0 bg-black/80 fixed w-full h-full z-[60] px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64 flex items-end justify-center flex-col cursor-pointer gap-4  ${open ? `` : `hidden`}`}
            >
                <Button type={1} color={"white-green"} name={"Close"} onClick={() => setOpen(false)} />
                <div className="w-full relative aspect-video bg-white rounded-sm shadow-md cursor-default overflow-hidden">
                    {/* <Image src={`https://picsum.photos/seed/${data.title}/1920/1080`} fill={true} className="object-center object-contain" /> */}
                    <Image src={data.sourceUrl} fill={true} className="object-center object-contain" />
                </div>
            </div>
        </>
    )
}