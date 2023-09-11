'use client';

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { sortByAttribute } from '@/lib/helpers';

export default function AboutHorizontalSlider({ media }) {


    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto', containScroll: 'trimSnaps' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([])

    const assets = sortByAttribute(media, 'title');

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])


    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    )

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return (
        <div className="overflow-hidden flex flex-col gap-4" ref={emblaRef}>
            <div className="flex touch-pan-y gap-8 shadow-md w-[16rem] h-[9rem] lg:w-[28rem] lg:h-[16rem] xl:h-[18rem] xl:w-[32rem] md:w-[40rem] md:h-[22rem] sm:w-[20rem] sm:h-[11rem]  min-[1700px]:w-[40rem]  min-[1700px]:h-[22rem]" >
                {media ? assets.map((a, index) => (
                    <div key={index} className='rounded-sm flex-[0_0_16rem] h-[9rem] sm:flex-[0_0_20rem] sm:h-[11rem] md:flex-[0_0_40rem] md:h-[22rem] lg:h-[16rem] lg:flex-[0_0_28rem] xl:h-[18rem] xl:flex-[0_0_32rem] min-[1700px]:h-[22rem] min-[1700px]:flex-[0_0_40rem] relative min-h-0 '>
                        <Image className='object-cover object-center' fill={true} src={a.link ? a.link : 'https://picsum.photos/2400'} alt="prostige-users" />
                    </div>
                )) : ``}
            </div>
            <div className='flex justify-center items-center mx-1 gap-3 '>
                {scrollSnaps.map((_, index) => (
                    <button key={index} className={`transition-all h-2  duration-300 shadow-md rounded-full ${index === selectedIndex ? `bg-pac-orange shadow-lg w-3` : `bg-[#D1D1D1]`} w-2`} onClick={() => scrollTo(index)} />
                ))}
            </div>
        </div>
    )
}