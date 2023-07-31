'use client';
import React, { useCallback } from 'react'
import { Icon } from '@iconify-icon/react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';

export const HeroSlider = ({ height, media }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla h-full" >
            <div className={'absolute flex justify-between items-center w-full px-16 h-1/2'}>
                <button className="embla__next z-40 bg-[#F1F1F1] flex justify-center items-center py-1 rounded-full shadow-md group" onClick={scrollPrev}>
                    <Icon icon="ic:round-keyboard-arrow-left" width="32" height="32" className='pl-1 pr-1 group-hover:text-pac-orange' />
                </button>
                <button className="embla__next z-40 bg-[#F1F1F1] flex justify-center items-center py-1 rounded-full shadow-md group" onClick={scrollNext}>
                    <Icon icon="ic:round-keyboard-arrow-right" width="32" height="32" className='pl-1 pr-1 group-hover:text-pac-orange' />
                </button>
            </div>
            <div className="embla__viewport h-full" ref={emblaRef}>
                <div className="embla__container h-full">
                    {media.map((m, index) => (
                        <div key={index} className="embla__slide">
                            <Image src={m.link ? m.link : "https://picsum.photos/1920/1080"} className='w-full h-auto' alt='dental-distributor' />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}