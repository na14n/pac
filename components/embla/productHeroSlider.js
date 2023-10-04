'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { sortByAttribute } from '@/lib/helpers';


export default function ProductHeroSlider({ media }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla__viewport self-center h-full w-full" ref={emblaRef}>
            <div className='h-full w-full touch-pan-y flex'>
                <div className='flex-[0_0_100%] aspect-[8/3] bg-red-500 text-white font-bold text-3xl flex items-center justify-center'>1</div>
                <div className='flex-[0_0_100%] aspect-[8/3] bg-blue-500 text-white font-bold text-3xl flex items-center justify-center'>2</div>
                <div className='flex-[0_0_100%] aspect-[8/3] bg-green-500 text-white font-bold text-3xl flex items-center justify-center'>3</div>
            </div>
        </div>
    )
}