'use client';

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './carouselThumbButton';
import Image from 'next/image';
import Button from '../button';

const ProdGallerySlider = (props) => {

    const imageByIndex = (index) => props.images[index % props.images.length]

    const [open, setOpen] = useState(false)

    const { slides, options } = props
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [image, setImage] = useState(null);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    })

    const onThumbClick = useCallback(
        (index) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()
        emblaMainApi.on('select', onSelect)
        emblaMainApi.on('reInit', onSelect)
    }, [emblaMainApi, onSelect])

    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="overflow-hidden" ref={emblaMainRef}>
                    <div className="flex gap-2 items-center">
                        {slides.map((index) => (
                            <div
                                className="embla__slide w-full aspect-square relative cursor-pointer"
                                key={index}
                                onClick={() => {setOpen(!open); setImage(imageByIndex(index).link)}}
                            >
                                <Image
                                    fill
                                    className="object-cover object-center"
                                    src={imageByIndex(index).link}
                                    alt="Your alt text"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full">
                    <div className="overflow-hidden" ref={emblaThumbsRef}>
                        <div className="flex -ml-3">
                            {slides.map((index) => (
                                // <Thumb
                                //     onClick={() => onThumbClick(index)}
                                //     selected={index === selectedIndex ? true : false}
                                //     index={index}
                                //     imgSrc={imageByIndex(index).link}
                                //     key={index}
                                // />
                                <div
                                    key={index}
                                    className={`relative pl-3 transition-opacity ${index === selectedIndex ? `opacity-100` : `opacity-50`}`}
                                    onClick={() => onThumbClick(index)}
                                >
                                    <button

                                        className="bg-transparent block cursor-pointer b-0 p-0 m-0 w-24 aspect-square transition-opacity relative"
                                        type="button"
                                    >
                                        <Image
                                            className="object-cover object-center"
                                            src={imageByIndex(index).link}
                                            alt="Your alt text"
                                            fill
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {open ?
                <div
                    className={`fixed w-full h-full top-0 left-0 flex flex-col items-center gap-4 md:gap-8 justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48  bg-[#121212]/80 z-[60] ${open ? `` : `hidden`}`}
                >
                    <div className="overflow-hidden w-[20rem] lg:w-[24rem] xl:w-[36rem] 2xl:w-[48rem]">
                        <div className="flex gap-2 items-center">
                                <div
                                    className="flex-[0_0_20rem] lg:flex-[0_0_24rem] xl:flex-[0_0_36rem] 2xl:flex-[0_0_48rem] w-full aspect-square relative cursor-pointer shadow-md rounded-sm overflow-hidden"
                                >
                                    <Image
                                        fill
                                        className="object-cover object-center"
                                        src={image}
                                        alt="Your alt text"
                                    />
                                </div>
                        </div>
                    </div>
                    <button onClick={() => {setOpen(!open); setImage(null)}}>
                        <Button name={"Close"} type={1} />
                    </button>
                </div>
                : <></>}
        </>
    )
}

export default ProdGallerySlider;