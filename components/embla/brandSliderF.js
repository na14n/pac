'use client';
import React, { useCallback } from 'react'
import { Icon } from '@iconify-icon/react';
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';


export const BrandSliderF = ({ brands, mediaUrl }) => {



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



    const arrayOfArrays = brands ? splitArrayIntoChunks(brands, 10) : [];

    return (
        <div className="embla h-fit w-fit overflow-hidden z-30 relative lg:px-4 flex justify-center items-center">
            <div className='absolute flex justify-between items-center w-full h-fit'>
                <button className="embla__next z-40 flex justify-center items-center group" onClick={scrollPrev}>
                    <Icon icon="ic:round-keyboard-arrow-left" width="64" height="64" className={`pl-1 pr-1 text-[#FCFCFC] group-hover:text-nav-orange ${arrayOfArrays.length > 0 ? '' : 'hidden'}`} />
                </button>
                <button className="embla__next z-40 flex justify-center items-center group" onClick={scrollNext}>
                    <Icon icon="ic:round-keyboard-arrow-right" width="64" height="64" className={`pl-1 pr-1 text-[#FCFCFC] group-hover:text-nav-orange ${arrayOfArrays.length > 0 ? '' : 'hidden'}`} />
                </button>
            </div>
            <div className="embla__viewport self-center h-fit w-full " ref={emblaRef}>
                <div className="embla__container h-full w-full ">
                    {arrayOfArrays.map((w, index) => (
                        <div key={index} className='embla__slide w-full h-full grid lg:grid-cols-5 gap-4 2xl:gap-8 py-8 justify-items-center items-center px-16 2xl:px-24'>
                            {w.map((c, index) => (
                                <a key={index} className='bg-[#EEE] w-28 h-28 2xl:w-36 2xl:h-36 p-2 flex flex-col justify-center items-center rounded-md hover:-translate-y-1 hover:shadow-md transition-all border-2 border-[#EEE] hover:border-pac-green ' href='#'>
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