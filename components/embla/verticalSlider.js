'use client';

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { sortByAttribute } from '@/lib/helpers';

export default function VerticalSlider({ media }) {


    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto', containScroll: 'trimSnaps', axis: 'y', loop: true });
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
        <div className="overflow-hidden hidden xl:flex flex-col lg:flex-row gap-4" ref={emblaRef}>
            <div className="flex flex-col touch-pan-x h-[9rem] w-[16rem] lg:h-[16rem] xl:h-[18rem] min-[1700px]:w-[40rem] xl:w-[32rem] lg:w-[28rem] shadow-md " >
                {media ? assets.map((a, index) => (
                    <div key={index} className='mb-8 rounded-sm relative min-h-0 flex-[0_0_9rem] lg:flex-[0_0_16rem] xl:flex-[0_0_18rem] min-[1700px]:flex-[0_0_22rem] lg:w-[28rem] xl:w-[32rem] min-[1700px]:w-[40rem] w-[16rem] '>
                        <Image className='object-cover object-center' fill={true} src={a.link ? a.link : 'https://picsum.photos/2400'} alt="prostige-users" />
                    </div>
                )) : ``}
            </div>
            <div className='flex lg:flex-col justify-center items-center mx-1 gap-3 '>
                {scrollSnaps.map((_, index) => (
                    <button key={index} className={`transition-all w-2  duration-300 shadow-md rounded-full ${index === selectedIndex ? `bg-pac-orange shadow-lg h-3` : `bg-[#D1D1D1]`} h-2`} onClick={() => scrollTo(index)} />
                ))}
            </div>
        </div>
    )
}