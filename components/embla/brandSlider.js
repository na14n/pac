'use client';

export const dynamic = "force-dynamic";

import React, { useCallback } from 'react'
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';
import { Icon } from '@iconify-icon/react';
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { slugFormatter } from '@/lib/helpers';
import { sortByAttribute } from '@/lib/helpers';


const query = gql`
        query getAllBrands {
            brands (first: 100) {
            nodes {
                    id
                    name
                    logo {
                        link
                    }
                    slideNumber
                }
            }
        }
    `

export const BrandSlider = () => {

    const { data } = useSuspenseQuery(query);

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

    const arrayOfArrays = splitArrayIntoChunks(sortByAttribute(data.brands.nodes, 'slideNumber'), 10);

    return (
        <div className='w-fit h-full lg:px-32 2xl:px-48 flex flex-col items-center justify-center py-16 max-lg:py-8'>
            <h1 className='w-fit px-4 py-2 uppercase text-pac-orange text-2xl font-semibold `'>
                Shop By Brands
            </h1>
            <div className='w-full h-[2px] bg-pac-orange mb-8' />
            <div className="h-fit w-full overflow-hidden relative flex items-center justify-center gap-4 md:gap-8 z-40" >
            <button className=" w-fit h-fit z-40 bg-nav-orange flex justify-center items-center group rounded-lg hover:shadow-lg" onClick={scrollPrev}>
                <Icon icon="ic:round-keyboard-arrow-left" className=' text-5xl max-lg:text-2xl  text-[#FCFCFC] group-hover:text-[#FFF]' />
            </button>
            <div className="embla__viewport self-center h-full xs:w-[15rem] md:w-[30rem] lg:w-[38rem] 2xl:w-[46rem] flex justify-center items-center `" ref={emblaRef}>
                {/* Between Slides */}
                <div className="h-full w-fit touch-pan-y flex gap-8 z-40 py-4 px-8">
                    {arrayOfArrays.map((w, index) => (                        <div key={index} className=' xs:flex-[0_0_12rem] md:flex-[0_0_29rem] lg:flex-[0_0_37rem] 2xl:flex-[0_0_45rem] min-w-0 relative h-full grid xs:grid-auto-fit-[7rem] lg:grid-auto-fit-[6rem] 2xl:grid-auto-fit-[8rem] gap-2 justify-items-center z-40'>
                            {w.map((c, index) => (
                                <a key={index} className=' bg-[#FCFCFC] w-28 md:w-[5rem] lg:w-24 xl:w-28 2xl:w-32 aspect-square p-2 flex flex-col justify-center items-center rounded-md shadow-md hover:-translate-y-1 hover:shadow-lg transition-all border-2 border-[#979797]/60 hover:border-pac-green relative z-40 overflow-hidden' href={`/brands/${slugFormatter(c.name, false, true)}`}>
                                    <Image fill={true} className='object-contain object-center p-2' src={c.logo.link ? c.logo.link : 'https://picsum.photos/2400'} alt="dental-product-brand" />
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
        </div>
    )
}