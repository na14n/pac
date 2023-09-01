'use client';

import { gql } from "@apollo/client";
import { useState } from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Button from "../button";
import parse from 'html-react-parser'

const query = gql`
    query GetAboutContentS04 {
        aboutContents(where: {name: "section-04"}) {
            nodes {
                    sectionTitle
                    sectionHeading
                    contentLine1
                    contentLine2
                }
            }
    }
`

export default function AboutS04() {

    const { data } = useSuspenseQuery(query)

    const [selected, setSelected] = useState(0)

    return (
        <section className="w-full min-h-screen  h-fit p-4 md:p-8 lg:p-16 xl:p-32 2xl:p-48 flex flex-col items-center justify-center relative gap-8 2xl:gap-16">
            <div className="w-full h-full absolute z-10 bg-gradient-to-b from-[#272727]/90 to-[#121212]/90" />
            <Image src={'https://picsum.photos/1600/1600'} fill={true} alt="dental-company-background" className="object-cover object-center" />
            <div className="z-20 ">
                <h1 className="uppercase text-xl 2xl:text-5xl font-bold text-[#FCFCFC]">our story</h1>
                <div className="w-full h-[2px] bg-pac-orange" />
            </div>
            <div className=" z-20 w-fit flex flex-col items-center justify-center gap-4 2xl:gap-12">
                <div className=" relative w-fit flex items-center justify-center max-[1440px]:justify-around gap-8 2xl:gap-12">
                    {data?.aboutContents?.nodes ?
                        data?.aboutContents?.nodes[0]?.contentLine1.
                            map((c, index) => (
                                <div className="w-fit h-fit flex flex-col gap-2 items-center justify-around transition-all duration-300">
                                    <button key={index}
                                        className={`hover:text-nav-orange font-semibold ${selected === index ? `text-nav-orange` : `text-[#EFEFEF]/90 `} `}
                                        onClick={() => setSelected(index)}
                                    >
                                        {c}
                                    </button>
                                    <button className={`w-4 h-4 z-30 bg-gradient-to-b rounded-full hover:from-nav-orange hover:to-pac-orange ${selected === index ? ` from-nav-orange to-pac-orange` : `from-[#EFEFEF] to-[#FCFCFC]`}`} 
                                    onClick={() => setSelected(index)}
                                    />
                                </div>
                            ))
                        : ``}
                    <div className="absolute bottom-2 left-0 w-full rounded-full h-[2px] bg-[#E1E1E1]/50" />
                </div>
                <div className="w-fit h-[8rem] 2xl:h-[32rem] max-h-fit p-1 2xl:p-8 rounded-md shadow-md bg-[#FCFCFC] flex justify-between gap-4 2xl:gap-8">
                    <div className="w-fit h-full flex flex-col gap-4">
                        <h3 className="font-bold text-xl 2xl:text-4xl text-pac-green">{data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.contentLine1[selected] : ''}</h3>
                        <p className="text-[#373737] max-w-[40ch] 2xl:max-w-[75ch] text-justify">{parse(data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.contentLine2[selected] : '')}</p>
                    </div>
                    <div className="h-full w-full">
                                (pictures)
                    </div>
                </div>
            </div>
        </section>
    )
}