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
        <div className="embla h-full w-full overflow-hidden relative shadow-lg flex flex-col items-center justify-end px-32" >
            <div className="absolute z-10 t-0 bg-gradient-to-b from-[#F0892B]/60 via-[#3E3E3E]/90 to-[#3E3E3E]/90 w-full h-full"></div>
            <div className="absolute z-0 t-0 w-full h-full">
                <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} alt="dental-website-banner" />
            </div>
            <div className='w-content py-2 flex flex-col gap-2 items-center justify-center  pt-16 z-40'>
                <div className='px-4 uppercase text-3xl font-bold text-[#FCFCFC]'>Our Partner Brands</div>
                <div className='w-[600px] rounded-md h-[2px] bg-pac-orange'></div>
                <div className='text-sm max-w-[700px] text-center text-[#EFEFEF]'> Currently, PROS-APAC  is partnered with a total of 35 exclusive dental Brands from both local and international level of products, all of which are of the best quality for our dentists.</div>
            </div>
            <div className='absolute flex justify-between items-center w-full h-content top-0'>
                <button className="embla__next z-40 flex justify-center items-center group" onClick={scrollPrev}>
                    <Icon icon="ic:round-keyboard-arrow-left" width="64" height="64" className={`pl-1 pr-1 text-nav-orange group-hover:text-pac-orange ${arrayOfArrays.length > 0 ? '' : 'hidden'}`} />
                </button>
                <button className="embla__next z-40 flex justify-center items-centergroup" onClick={scrollNext}>
                    <Icon icon="ic:round-keyboard-arrow-right" width="64" height="64" className={`pl-1 pr-1 text-nav-orange group-hover:text-pac-orange ${arrayOfArrays.length > 0 ? '' : 'hidden'}`} />
                </button>
            </div>
            <div className="embla__viewport self-center h-content w-full p-42  z-30" ref={emblaRef}>
                <div className="embla__container h-full w-full ">
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