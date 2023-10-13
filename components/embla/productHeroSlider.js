'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { Icon } from '@iconify-icon/react';
import Autoplay from 'embla-carousel-autoplay'

export default function ProductHeroSlider({ media }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({slidesToScroll: 'auto', containScroll: 'trimSnaps', loop: true }, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className='w-full h-full relative'>
            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-between p-8'>
                <button className=" w-fit h-fit z-40 flex justify-center items-center group bg-white shadow-lg rounded-md" onClick={scrollPrev}>
                    <Icon icon="ic:round-keyboard-arrow-left" className=' text-5xl max-lg:text-2xl  text-pac-orange group-hover:text-nav-orange' />
                </button>
                <button className=" w-fit h-fit z-40 flex justify-center items-center group bg-white shadow-lg rounded-md" onClick={scrollNext}>
                    <Icon icon="ic:round-keyboard-arrow-right" className=' text-5xl max-lg:text-2xl  text-pac-orange group-hover:text-nav-orange' />
                </button>
            </div>
            <div className="embla__viewport self-center h-full w-full" ref={emblaRef}>
                <div className='h-full w-full touch-pan-y flex'>
                    {media ? media.map((m, index) => (
                        <div key={index} className='flex-[0_0_100%] aspect-[8/3] flex items-center justify-center relative'>
                            <Image fill src={m.link} className='object-center object-cover' />
                        </div>
                    )) : <></>}
                </div>
            </div>
        </section>
    )
}