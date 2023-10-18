'use client';

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { sortByAttribute } from '@/lib/helpers';
import { Icon } from '@iconify-icon/react';

export default function Slider({ media }) {


    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const assets = sortByAttribute(media, 'title');

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="overflow-hidden flex flex-col gap-4 w-full" ref={emblaRef}>
            <div className="flex touch-pan-y gap-4 shadow-md w-fit" >
                {media ? assets.map((a, index) => (
                    <div key={index} className='rounded-sm flex-[0_0_4rem] sm:flex-[0_0_8rem] md:flex-[0_0_28rem] lg:flex-[0_0_16rem] xl:flex-[0_0_20rem] min-[1700px]:flex-[0_0_28rem] aspect-[3/2] relative min-h-0'>
                        <Image className='object-contain object-center' fill={true} src={a.sourceUrl ? a.sourceUrl : 'https://picsum.photos/2400'} alt="prostige-users" />
                    </div>
                )) : ``}
            </div>
            <div className='w-full pt-4 flex justify-between gap-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48'>
                <button className=" w-fit h-fit z-40 flex justify-center items-center group " onClick={scrollPrev}>
                    <Icon icon="ic:round-keyboard-arrow-left" className=' text-5xl max-lg:text-2xl  text-[#FCFCFC] group-hover:text-[#FFF]' />
                </button>
                <button className=" w-fit h-fit z-40 flex justify-center items-center group " onClick={scrollNext}>
                    <Icon icon="ic:round-keyboard-arrow-right" className=' text-5xl max-lg:text-2xl  text-[#FCFCFC] group-hover:text-[#FFF]' />
                </button>
            </div>
        </div>
    )
}