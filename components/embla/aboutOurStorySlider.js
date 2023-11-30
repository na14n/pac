'use client';

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { sortByAttribute } from '@/lib/helpers';
import parse from 'html-react-parser';

export default function OurStorySlider({ media, data }) {


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
        <div className="overflow-hidden flex flex-col-reverse w-[20rem] sm:w-[36rem] md:w-[40rem] lg:w-[52rem] xl:w-[64rem] h-fit gap-8" ref={emblaRef}>
            <div className="flex touch-pan-y gap-8 shadow-md" >
                {media ? assets.map((a, index) => (
                    <div key={index} className='rounded-sm flex-[0_0_20rem] sm:flex-[0_0_36rem] md:flex-[0_0_40rem] lg:flex-[0_0_52rem] xl:flex-[0_0_64rem] lg:h-[34rem] xl:h-[28rem] p-4 2xl:p-8 shadow-md bg-[#FCFCFC] flex xl:justify-between flex-col xl:flex-row gap-8 xl:gap-4 2xl:gap-8'>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-3xl 2xl:text-4xl text-[#096200]">{data ? data?.contentLine1[index] : ''}</h3>
                            <p className="text-[#373737] text-justify">{parse(data ? data?.contentLine2[index] : '')}</p>
                        </div>
                        <div className="flex-[0_0_9rem] w-[16rem] sm:flex-[0_0_18rem] sm:w-[32rem] md:flex-[0_0_20.25rem] md:w-[36rem] lg:w-[28rem] lg:flex-[0_0_16rem] xl:h-[18rem] xl:flex-[0_0_32rem] min-h-0 relative self-center">
                            <Image className='object-contain object-center' fill={true} src={a.sourceUrl ? a.sourceUrl : 'https://picsum.photos/2400'} alt="prostige-users" />
                        </div>
                    </div>
                )) : ``}
            </div>
            <div className='flex flex-wrap justify-center items-center mx-1 gap-4 2xl:gap-4'>
                {scrollSnaps.map((_, index) => (
                    <button key={index} className='flex flex-col items-center justify-center gap-3 w-[12ch] sm:w-[15ch]' onClick={() => scrollTo(index)}>
                        <h5 className={`transition-all duration-300 text-center font-semibold ${index === selectedIndex ? `text-pac-orange shadow-lg` : `text-[#D1D1D1]`}`}>{data.contentLine1[index]}</h5>
                        <div className={`transition-all h-4  duration-300 shadow-md rounded-full ${index === selectedIndex ? `bg-pac-orange shadow-lg w-6` : `bg-[#D1D1D1]`} w-4`} />
                    </button>
                ))}
            </div>
        </div>
    )
}