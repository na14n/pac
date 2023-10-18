'use client';
import React, { useCallback } from 'react'
import { Icon } from '@iconify-icon/react';
import useEmblaCarousel from 'embla-carousel-react'
import { slugFormatter } from '@/lib/helpers';
import Image from 'next/image';
import './brandSliderF.css'


export const BrandSliderF = ({ brands, mediaUrl, chunk }) => {



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
        <div className='w-fit h-full lg:px-32 2xl:px-48 flex items-center justify-center py-16 max-lg:py-8'>
            <button className=" w-fit h-fit z-40 bg-nav-orange flex justify-center items-center group rounded-lg hover:shadow-lg" onClick={scrollPrev}>
                <Icon icon="ic:round-keyboard-arrow-left" className=' text-5xl max-lg:text-2xl  text-[#FCFCFC] group-hover:text-[#FFF]' />
            </button>
            <div className="embla__viewport self-center h-full xs:w-[13rem] md:w-[30rem] lg:w-[38rem] 2xl:w-[46rem] flex justify-center items-center `" ref={emblaRef}>
                {/* Between Slides */}
                <div className="h-full w-fit touch-pan-y flex gap-8 z-40 py-4 px-8">
                    {arrayOfArrays.map((w, index) => (
                        <div key={index} className=' xs:flex-[0_0_11rem] md:flex-[0_0_28rem] lg:flex-[0_0_36rem] 2xl:flex-[0_0_44rem] min-w-0 relative h-full grid xs:grid-auto-fit-[5rem] lg:grid-auto-fit-[6rem] 2xl:grid-auto-fit-[8rem] gap-2 justify-items-center z-40'>
                            {w.map((c, index) => (
                                <a key={index} className=' bg-[#EEE] w-28 xs:w-20 lg:w-24 xl:w-28 2xl:w-32 aspect-square p-2 flex flex-col justify-center items-center rounded-md hover:-translate-y-1 hover:shadow-md transition-all border-2 border-[#EEE] hover:border-pac-green relative z-40 overflow-hidden' href={`/brands/${slugFormatter(c.name, false, true)}`}>
                                    <Image fill={true} className='object-contain object-center p-1' src={c.logo.link ? c.logo.link : 'https://picsum.photos/2400'} alt="dental-product-brand" />
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <button className=" z-40 bg-nav-orange flex justify-center items-center group rounded-lg hover:shadow-lg" onClick={scrollNext}>
                <Icon icon="ic:round-keyboard-arrow-right" className=' text-5xl max-lg:text-2xl text-[#FCFCFC] group-hover:text-[#FFF]' />
            </button>
        </div>
    )
}