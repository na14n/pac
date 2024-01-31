'use client'

export const dynamic = 'force-dynamic'

import Image from "next/image"
import { gql } from "@apollo/client";
import { useSuspenseQuery, useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import { sortByAttribute } from "@/lib/helpers";
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Icon } from '@iconify-icon/react';

const query = gql`
query FetchCareers2($search: String) {
    contactUsContents(where: {title: $search}) {
      nodes {
        title
        sectionHeading
        sectionSubheading
        contentLine1
        mediaLine1 {
          sourceUrl
          title
        }
        mediaLine2 {
            sourceUrl
            title
        }
        textLine1
        textLine2
      }
    }
  }
`

export default function CareersSection2() {

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
            variables: {
                search: "careers-2"
            }
        }
    );

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const assets = sortByAttribute(data?.contactUsContents?.nodes[0]?.mediaLine1, "title")

    return (
        <section className="w-full h-fit flex flex-col items-center">
            <h2 className="text-3xl 2xl:text-5xl font-bold text-pac-green py-12 text-center">
                {data?.contactUsContents?.nodes[0]?.sectionHeading}
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 gap-y-8">
                <div className="w-full aspect-[3/4] bg-[#ffdfb9] p-8 flex items-center justify-center">
                    <span className="w-fit h-fit">
                        <h5 className="text-lg max-md:text-2xl 2xl:text-xl text-pac-orange max-w-[16ch] font-semibold mb-2">
                            {data?.contactUsContents?.nodes[0]?.sectionSubheading[0]}
                        </h5>
                        <div className="w-full h-[2px] rounded-full bg-pac-orange" />
                    </span>
                </div>
                <div className="w-full aspect-[3/4] p-8 flex flex-col gap-8 justify-center">
                    <span className="text-sm min-[1700px]:text-lg text-justify">{parse(data?.contactUsContents?.nodes[0]?.contentLine1[0])}</span>
                    <div className="flex items-center gap-4">
                        <span className="w-16 h-16 min-[1700px]:w-20 min-[1700px]:h-20 rounded-full overflow-hidden relative">
                            <Image fill className="object-center object-cover" src={assets[0].sourceUrl} />
                        </span>
                        <span className="flex flex-col justify-center">
                            <h4 className="font-semibold text-[#121212]">{data?.contactUsContents?.nodes[0]?.textLine1[0]}</h4>
                            <p className="text-xs text-[#272727] text-justify">{data?.contactUsContents?.nodes[0]?.textLine2[0]}</p>
                        </span>
                    </div>
                </div>
                <div className="w-full aspect-[3/4] bg-[#bfe9c3] p-8 flex items-center justify-center">
                    <span className="w-fit h-fit">
                        <h5 className="text-lg max-md:text-2xl 2xl:text-xl text-pac-green max-w-[16ch] font-semibold mb-2">
                            {data?.contactUsContents?.nodes[0]?.sectionSubheading[1]}
                        </h5>
                        <div className="w-full h-[2px] rounded-full bg-pac-green" />
                    </span>
                </div>
                <div className="w-full aspect-[3/4] p-8 flex flex-col gap-8 justify-center">
                    <span className="text-sm min-[1700px]:text-lg text-justify">{parse(data?.contactUsContents?.nodes[0]?.contentLine1[1])}</span>
                    <div className="flex items-center gap-4">
                        <span className="w-16 h-16 min-[1700px]:w-20 min-[1700px]:h-20 rounded-full overflow-hidden relative">
                            <Image fill className="object-center object-cover" src={assets[1].sourceUrl} />
                        </span>
                        <span className="flex flex-col justify-center">
                            <h4 className="font-semibold text-[#121212]">{data?.contactUsContents?.nodes[0]?.textLine1[1]}</h4>
                            <p className="text-xs text-[#272727]">{data?.contactUsContents?.nodes[0]?.textLine2[1]}</p>
                        </span>
                    </div>
                </div>
                <div className="w-full aspect-[3/4] p-8 flex flex-col gap-8 justify-center max-md:order-1">
                    <span className="text-sm min-[1700px]:text-lg text-justify">{parse(data?.contactUsContents?.nodes[0]?.contentLine1[2])}</span>
                    <div className="flex items-center gap-4">
                        <span className="w-16 h-16 min-[1700px]:w-20 min-[1700px]:h-20 rounded-full overflow-hidden relative">
                            <Image fill className="object-center object-cover" src={assets[2].sourceUrl} />
                        </span>
                        <span className="flex flex-col justify-center">
                            <h4 className="font-semibold text-[#121212]">{data?.contactUsContents?.nodes[0]?.textLine1[2]}</h4>
                            <p className="text-xs text-[#272727]">{data?.contactUsContents?.nodes[0]?.textLine2[2]}</p>
                        </span>
                    </div>
                </div>
                <div className="w-full aspect-[3/4] bg-[#ffdfb9] p-8 flex items-center justify-center">
                    <span className="w-fit h-fit">
                        <h5 className="text-lg max-md:text-2xl 2xl:text-xl text-pac-orange max-w-[16ch] font-semibold mb-2">
                            {data?.contactUsContents?.nodes[0]?.sectionSubheading[2]}
                        </h5>
                        <div className="w-full h-[2px] rounded-full bg-pac-orange" />
                    </span>
                </div>
                <div className="w-full aspect-[3/4] p-8 flex flex-col gap-8 justify-center">
                    <span className="text-sm min-[1700px]:text-lg text-justify">{parse(data?.contactUsContents?.nodes[0]?.contentLine1[3])}</span>
                    <div className="flex items-center gap-4">
                        <span className="w-16 h-16 min-[1700px]:w-20 min-[1700px]:h-20 rounded-full overflow-hidden relative">
                            <Image fill className="object-center object-cover" src={assets[3].sourceUrl} />
                        </span>
                        <span className="flex flex-col justify-center">
                            <h4 className="font-semibold text-[#121212]">{data?.contactUsContents?.nodes[0]?.textLine1[3]}</h4>
                            <p className="text-xs text-[#272727]">{data?.contactUsContents?.nodes[0]?.textLine2[3]}</p>
                        </span>
                    </div>
                </div>
                <div className="w-full aspect-[3/4] bg-[#bfe9c3] p-8 flex items-center justify-center">
                    <span className="w-fit h-fit">
                        <h5 className="text-lg max-md:text-2xl 2xl:text-xl text-pac-green max-w-[16ch] font-semibold mb-2">
                            {data?.contactUsContents?.nodes[0]?.sectionSubheading[3]}
                        </h5>
                        <div className="w-full h-[2px] rounded-full bg-pac-green" />
                    </span>
                </div>
            </div>
            <div className="w-full h-fit my-8 relative overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y gap-2 shadow-md w-fit" >
                    {data ? sortByAttribute(data?.contactUsContents?.nodes[0]?.mediaLine2).map((a, index) => (
                        <div key={index} className='rounded-sm flex-[0_0_24rem] sm:flex-[0_0_12rem] md:flex-[0_0_32rem] lg:flex-[0_0_20rem] xl:flex-[0_0_24rem] min-[1700px]:flex-[0_0_32rem] aspect-[3/2] relative min-h-0'>
                            <Image className='object-contain object-center' fill={true} src={a.sourceUrl ? a.sourceUrl : 'https://picsum.photos/2400'} alt="prostige-users" />
                        </div>
                    )) : ``}
                </div>
                <div className='w-full h-full absolute top-0 left-0 pt-4 flex items-center justify-between gap-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48'>
                    <button className=" w-fit h-fit z-40 flex justify-center items-center group bg-white shadow-md rounded-full " onClick={scrollPrev}>
                        <Icon icon="ic:round-keyboard-arrow-left" className=' text-5xl max-lg:text-2xl  text-pac-orange group-hover:text-nav-orange' />
                    </button>
                    <button className=" w-fit h-fit z-40 flex justify-center items-center group bg-white shadow-md rounded-full " onClick={scrollNext}>
                        <Icon icon="ic:round-keyboard-arrow-right" className=' text-5xl max-lg:text-2xl  text-pac-orange group-hover:text-nav-orange' />
                    </button>
                </div>
            </div>
        </section>
    )
}