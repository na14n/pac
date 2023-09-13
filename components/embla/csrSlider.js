'use client';

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { Icon } from '@iconify-icon/react';
import { sortByAttribute } from '@/lib/helpers';

export default function CsrSlider({ media }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto', containScroll: 'trimSnaps', loop: true, });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const assets = sortByAttribute(media, 'title')

    return (
        <section className='relative w-full h-fit flex items-center justify-center'>
            <button className={`p-1 flex items-center justify-center hover:shadow-md shadow-md bg-[#FCFCFC]/75 hover:bg-[#FCFCFC]/100 rounded-full absolute left-4 top-1/2 z-30 transition-all`} onClick={scrollPrev}>
                <Icon icon="ic:round-keyboard-arrow-left" className=' text-3xl max-lg:text-xl text-nav-orange' />
            </button>
            <button className={`p-1 flex items-center justify-center hover:shadow-md shadow-md bg-[#FCFCFC]/75 hover:bg-[#FCFCFC]/100 rounded-full absolute right-4 top-1/2 z-30 transition-all`} onClick={scrollNext}>
                <Icon icon="ic:round-keyboard-arrow-right" className=' text-3xl max-lg:text-xl text-nav-orange' />
            </button>
            <div className='overflow-hidden w-full aspect-[3/2]' ref={emblaRef}>
                <div className='flex touch-pan-y w-full aspect-[3/2]'>
                    {media ? assets.map((m, i) => (
                        <div key={i} className='relative flex-[0_0_100%] aspect-[3/2] z-20'>
                            <Image src={m.sourceUrl} fill={true} className='object-center object-contain' />
                        </div>
                    )) : ``}
                </div>
            </div>
        </section>
    )
}