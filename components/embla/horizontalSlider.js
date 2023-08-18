'use client';
import React, { useCallback } from 'react'
import { Icon } from '@iconify-icon/react';
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';

export default function HorizontalSlider({ media }) {


    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])



    return (
        <div className="embla w-full flex flex-col gap-12 items-center ">

            <div className="embla__viewport overdlow-hidden w-fit " ref={emblaRef}>
                <div className="embla__container flex gap-4">
                    {media.map((m, index) => (
                        <div key={index} className='embla__slide shadow-md rounded-sm relative w-[266px] h-[203px] bg-white'>
                            <Image className='embla__slide_img' fill={true} src={m.link ? m.link : 'https://picsum.photos/2400'} alt="dental-product-brand" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex gap-24'>
                <button className="embla__next z-40 flex justify-center items-center group xs:absolute xs:left-0 lg:relative  " onClick={scrollPrev}>
                    <Icon icon="ic:round-keyboard-arrow-left" width="48" height="48" className={`lg:pl-1 lg:pr-1 text-[#FCFCFC] group-hover:text-nav-orange ${media.length > 4 ? '' : 'hidden'}`} />
                </button>
                <button className="embla__next z-40 flex justify-center items-center group xs:absolute xs:right-0 lg:relative " onClick={scrollNext}>
                    <Icon icon="ic:round-keyboard-arrow-right" width="48" height="48" className={`lg:pl-1 lg:pr-1 text-[#FCFCFC] group-hover:text-nav-orange ${media.length > 4 ? '' : 'hidden'}`} />
                </button>
            </div>
        </div>
    )
}