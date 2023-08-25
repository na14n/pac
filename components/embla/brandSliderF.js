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
        <div className="embla h-fit w-full overflow-hidden relative flex items-center justify-center gap-4 z-40 " >
            <button className=" w-fit h-fit z-40 bg-nav-orange flex justify-center items-center group rounded-lg hover:shadow-lg" onClick={scrollPrev}>
                <Icon icon="ic:round-keyboard-arrow-left" className=' text-5xl max-lg:text-2xl  text-[#FCFCFC] group-hover:text-[#FFF]' />
            </button>
            <div className="embla__viewport self-center h-full xs:w-[310px] lg:w-[700px] 2xl:w-[800px] flex justify-center items-center `" ref={emblaRef}>
                <div className="embla__containerBF h-full w-fit z-40">
                    {arrayOfArrays.map((w, index) => (
                        <div key={index} className='xs:flex-[0_0_300px] lg:flex-[0_0_700px] 2xl:flex-[0_0_800px] min-w-0 relative py-4 h-full grid justify-items-center xs:grid-cols-2 lg:grid-cols-5 z-40 xs:gap-2 lg:gap-6'>
                            {w.map((c, index) => (
                                <a key={index} className='bg-[#EEE] w-28 h-28 xs:w-24 xs:h-24 2xl:w-32 2xl:h-32 p-2 flex flex-col justify-center items-center rounded-md hover:-translate-y-1 hover:shadow-md transition-all border-2 border-[#EEE] hover:border-pac-green relative z-40 overflow-hidden' href={`/brands/${slugFormatter(c.name, false, true)}`}>
                                    <Image fill={true} className='object-contain object-center' src={c.logo.link ? c.logo.link : 'https://picsum.photos/2400'} alt="dental-product-brand" />
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