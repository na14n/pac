'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useState } from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import OurStorySlider from "../embla/aboutOurStorySlider";

const query = gql`
    query FetchAboutContentS04 {
        aboutContents(where: {name: "section-04"}) {
            nodes {
                    sectionTitle
                    sectionHeading
                    contentLine1
                    contentLine2
                    mediaLine1{
                        link
                    }
                    mediaLine2{
                        title
                        sourceUrl
                    }
                }
            }
    }
`

export default function AboutS04() {

    const { data } = useSuspenseQuery(query,
        {
          context: {
            fetchOptions: {
              next: { revalidate: 60 },
            },
          },
        });

    const [selected, setSelected] = useState(0);

    return (
        <section className="w-full min-h-screen h-fit px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-col items-center justify-center relative gap-8 xl:gap-12 2xl:gap-16 py-16">
            <div className="w-full h-full absolute z-10 bg-gradient-to-b from-[#272727]/90 to-[#121212]/90" />
            <Image src={data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.mediaLine1[0]?.link : 'https://picsum.photos/1600/1600'} fill={true} alt="dental-company-background" className="object-cover object-center" />
            <div className="z-20 ">
                <h1 className="uppercase text-3xl md:text-5xl xl:text-4xl 2xl:text-5xl font-bold text-[#FCFCFC]">our story</h1>
                <div className="w-full h-[2px] bg-pac-orange" />
            </div>
            <div className=" z-20 w-full flex flex-col items-center justify-center gap-6 xl:gap-8 2xl:gap-12">
            <OurStorySlider data={data?.aboutContents?.nodes[0]} media={data?.aboutContents?.nodes[0]?.mediaLine2} />
                {/* <div className=" relative w-fit flex flex-wrap items-center justify-center max-[1440px]:justify-around gap-4 lg:gap-8 2xl:gap-12">
                    {data?.aboutContents?.nodes ?
                        data?.aboutContents?.nodes[0]?.contentLine1.
                            map((c, index) => (
                                <div key={index} className="w-fit h-fit flex flex-col gap-2 items-center justify-around transition-all duration-300">
                                    <button key={index}
                                        className={`hover:text-nav-orange font-semibold max-md:rounded-md max-md:px-2 max-md:py-1 ${selected === index ? `text-nav-orange max-md:bg-[#FCFCFC]` : `text-[#EFEFEF]/90 max-md:bg-[#EFEFEF]/20 `} `}
                                        onClick={() => setSelected(index)}
                                    >
                                        {c}
                                    </button>
                                    <button className={`w-4 h-4 z-30 bg-gradient-to-b rounded-full hover:from-nav-orange hover:to-pac-orange max-md:hidden ${selected === index ? ` from-nav-orange to-pac-orange` : `from-[#EFEFEF] to-[#FCFCFC]`}`} 
                                    onClick={() => setSelected(index)}
                                    />
                                </div>
                            ))
                        : ``}      
                    <div className="absolute bottom-2 left-0 w-full rounded-full h-[2px] max-md:hidden bg-[#E1E1E1]/50" />
                </div> */}
                {/* <div className="w-full h-fit xl:h-[26rem] 2xl:h-[28rem] max-h-fit p-10 xl:p-4 2xl:p-8 rounded-md shadow-md bg-[#FCFCFC] flex justify-between flex-col xl:flex-row gap-4 2xl:gap-8 grow ">
                    <div className="w-full lg:w-[45ch] xl:w-[55ch] 2xl:w-[65ch] h-full flex flex-col gap-4 shrink-0">
                        <h3 className="font-bold text-xl 2xl:text-4xl text-pac-green">{data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.contentLine1[selected] : ''}</h3>
                        <p className="text-[#373737]  text-justify">{parse(data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.contentLine2[selected] : '')}</p>
                    </div>
                    <div className="h-full w-full ">
                                (pictures)
                    </div>
                </div> */}
            </div>
        </section>
    )
}