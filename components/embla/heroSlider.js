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
        <div className="embla xs:h-[200px] lg:h-[50vh] 2xl:h-[40vh] max-h-fit flex items-center justify-between relative px-32" >
            <button className="z-40 bg-[#F1F1F1] flex justify-center items-center py-1 max-lg:hidden rounded-full shadow-md group" onClick={scrollPrev}>
                <Icon icon="ic:round-keyboard-arrow-left" className='pl-1 pr-1 text-2xl group-hover:text-pac-orange' />
            </button>
            <div className="embla__viewport overflow-hidden w-full h-full absolute top-0 left-0" ref={emblaRef}>
                <div className="embla__container flex h-full">
                    {media.map((m, index) => (
                        <div key={index} className="embla__slide">
                            <Image width={2400} height={600} src={m.link ? m.link : 'https://picsum.photos/2400'} alt="dental-website-banner" className='object-contain' />
                        </div>
                    ))}
                </div>
            </div>
            <button className=" z-40 bg-[#F1F1F1] flex justify-center items-center py-1 max-lg:hidden rounded-full shadow-md group" onClick={scrollNext}>
                <Icon icon="ic:round-keyboard-arrow-right" className='pl-1 pr-1 text-2xl group-hover:text-pac-orange' />
            </button>
        </div>
    )
}