'use client';
import React, { useCallback } from 'react'
import { Icon } from '@iconify-icon/react';
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';


export const BrandSlider = ({ brands }) => {
    
    

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])


    function splitArrayIntoChunks(array, chunkSize) {
        const resultArray = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            resultArray.push(array.slice(i, i + chunkSize));
        }
        return resultArray;
    }
    const arrayOfArrays = splitArrayIntoChunks(brands, 10);

    return (
        <div className="embla h-content w-content overflow-hidden relative bg-[#FCFCFC] shadow-lg rounded-md flex flex-col items-center justify-center" >
            <div className='w-full px-4 py-2 border-b-2 uppercase text-pac-orange text-sm font-semibold'>
                Shop by Brands
            </div>
            <div className='absolute flex justify-between items-center w-full h-full top-0'>
                <button className="embla__next z-40 flex justify-center items-center group" onClick={scrollPrev}>
                    <Icon icon="ic:round-keyboard-arrow-left" width="64" height="64" className='pl-1 pr-1 text-nav-orange group-hover:text-pac-orange' />
                </button>
                <button className="embla__next z-40 flex justify-center items-centergroup" onClick={scrollNext}>
                    <Icon icon="ic:round-keyboard-arrow-right" width="64" height="64" className='pl-1 pr-1 text-nav-orange group-hover:text-pac-orange' />
                </button>
            </div>
            <div className="embla__viewport self-center h-full w-full" ref={emblaRef}>
                <div className="embla__container h-full w-full">
                    {arrayOfArrays.map((w, index) => (
                        <div key={index} className='embla__slide w-full h-full grid lg:grid-cols-5 gap-4 py-8 justify-items-center items-center px-16'>
                            {w.map((c, index) => (
                                <a key={index} className='bg-[#EEE] w-28 h-28 p-2 flex flex-col justify-center items-center rounded-md hover:-translate-y-1 hover:shadow-md transition-all border-pac-green hover:border-2' href='#'>
                                    <Image width={256} height={256} src={c.logo.link ? c.logo.link : 'https://picsum.photos/2400'} alt="dental-product-brand" />
                                </a>
                                
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}