'use client';
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import './horizontalSlider.css'
import { useCallback } from 'react';
import { Icon } from '@iconify-icon/react';

export default function HorizontalSlider({ media }) {


    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto', containScroll: 'trimSnaps' })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla__hS " ref={emblaRef}>
            <div className="embla__container__hS  flex" >
                {media.map((m, index) => (
                    <div key={index} className='embla__slide__hS ml-8 shadow-md rounded-sm relative h-[203px] bg-white'>
                        <Image className='object-cover' fill={true} src={m.link ? m.link : 'https://picsum.photos/2400'} alt="prostige-users" />
                    </div>
                ))}
            </div>
            <div className='w-full pt-4 flex justify-end  gap-4'>
            <button className=" w-fit h-fit z-40 flex justify-center items-center group " onClick={scrollPrev}>
                    <Icon icon="ic:round-keyboard-arrow-left" className=' text-5xl max-lg:text-2xl  text-[#FCFCFC] group-hover:text-[#FFF]' />
                </button>
                <button className=" w-fit h-fit z-40 flex justify-center items-center group " onClick={scrollNext}>
                    <Icon icon="ic:round-keyboard-arrow-right" className=' text-5xl max-lg:text-2xl  text-[#FCFCFC] group-hover:text-[#FFF]' />
                </button>
            </div>
        </div>
    )
}