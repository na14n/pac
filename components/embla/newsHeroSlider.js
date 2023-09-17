'use client';

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';
import { Icon } from '@iconify-icon/react';
import { sortByAttribute } from '@/lib/helpers';

export default function NewsHeroSlider({ media }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto', containScroll: 'trimSnaps', loop: true, }, [Autoplay()]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const assets = sortByAttribute(media, 'title')

    return (
        <section className='relative w-full h-fit flex items-center justify-center group'>
            <button className={`p-1 flex items-center justify-center hover:shadow-md shadow-md opacity-0 group-hover:opacity-100 bg-[#EFEFEF]/90 hover:bg-[#FCFCFC] rounded-full absolute left-4 top-1/2 z-30 transition-all`} onClick={scrollPrev}>
                <Icon icon="ic:round-keyboard-arrow-left" className=' text-3xl max-lg:text-xl text-nav-orange' />
            </button>
            <button className={`p-1 flex items-center justify-center hover:shadow-md shadow-md opacity-0 group-hover:opacity-100 bg-[#EFEFEF]/90 hover:bg-[#FCFCFC] rounded-full absolute right-4 top-1/2 z-30 transition-all`} onClick={scrollNext}>
                <Icon icon="ic:round-keyboard-arrow-right" className=' text-3xl max-lg:text-xl text-nav-orange' />
            </button>
            <div className='overflow-hidden w-full landscape-banner]' ref={emblaRef}>
                <div className='flex touch-pan-y w-full landscape-banner]'>
                    {media ? assets.map((m, i) => (
                        <div key={i} className='relative flex-[0_0_100%] landscape-banner] z-20'>
                            <Image src={m.sourceUrl} fill={true} className='object-center object-contain' />
                        </div>
                    )) : ``}
                </div>
            </div>
        </section>
    )
}