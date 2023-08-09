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
        <div className='w-full h-full lg:px-32 2xl:px-48 flex flex-col items-center justify-center py-16'>
            <h1 className='w-fit px-4 py-2 uppercase text-pac-orange text-2xl font-semibold `'>
                Our Partner Brands
            </h1>
            <div className='w-4/5 h-[2px] bg-pac-orange' />
            <div className="embla h-fit w-full overflow-hidden relative flex items-center justify-center gap-4 `" >
                <button className="embla__next w-fit h-fit z-40 bg-nav-orange flex justify-center items-center group rounded-lg hover:shadow-lg" onClick={scrollPrev}>
                    <Icon icon="ic:round-keyboard-arrow-left"  className=' text-5xl text-[#FCFCFC] group-hover:text-[#FFF]' />
                </button>
                <div className="embla__viewport self-center h-full w-fit px-8 flex justify-center items-center `" ref={emblaRef}>
                    <div className="embla__container h-full w-fit">
                        {arrayOfArrays.map((w, index) => (
                            <div key={index} className='embla__slide w-fit h-full grid lg:grid-cols-5 py-8 gap-2 lg:gap-x-16'>
                                {w.map((c, index) => (
                                    <a key={index} className='lg:w-32 lg:h-32 2xl:w-56 2xl:h-56 p-2 flex flex-col justify-center items-center rounded-sm hover:-translate-y-1 hover:shadow-lg hover:border-2 border-[#575757]/0 transition-all `' href='#'>
                                        <Image width={256} height={256} src={c.logo.link ? c.logo.link : 'https://picsum.photos/2400'} alt="dental-product-brand" />
                                    </a>

                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <button className="embla__next z-40 bg-nav-orange flex justify-center items-center group rounded-lg hover:shadow-lg" onClick={scrollNext}>
                    <Icon icon="ic:round-keyboard-arrow-right"  className=' text-5xl text-[#FCFCFC] group-hover:text-[#FFF]' />
                </button>
            </div>
        </div>
    )
}