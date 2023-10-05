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
                {media ? media.map((m, index) => (
                    <div key={index} className='flex-[0_0_100%] aspect-[8/3] flex items-center justify-center relative'>
                        <Image fill src={m.link} className='object-center object-cover' />
                    </div>
                )) : <></>}
            </div>
        </div>
    )
}