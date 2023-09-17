'use client';

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { Icon } from '@iconify-icon/react';

export default function CompanyActivitiesSlider({ media, index }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto', containScroll: 'trimSnaps', loop: true, });

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className='relative w-full h-fit flex items-center justify-center'>
            <button className={`p-2 flex items-center justify-center hover:shadow-md shadow-sm bg-[#FCFCFC]/75 hover:bg-[#FCFCFC]/100 rounded-full absolute ${index%2 === 0 ? `left-8` : `max-lg:left-8 lg:right-8`} bottom-8 z-30 transition-all`} onClick={scrollNext}>
                <Icon icon="ic:round-keyboard-arrow-right" className=' text-3xl max-lg:text-xl text-nav-orange' />
            </button>
            <div className='overflow-hidden w-full aspect-[3/2]' ref={emblaRef}>
                <div className='flex touch-pan-y w-full aspect-[3/2]'>
                    {media ? media.map((m, i) => (
                        <div key={i} className='relative flex-[0_0_100%] aspect-[3/2] z-20'>
                            <Image src={m.sourceUrl} fill={true} className='object-center object-contain' />
                        </div>
                    )) : ``}
                </div>
            </div>
        </section>
    )
}