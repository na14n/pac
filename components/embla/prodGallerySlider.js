'use client';

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './carouselThumbButton';
import './embla.css'

const ProdGallerySlider = (props) => {

    const imageByIndex = (index) => props.images[index % props.images.length]

    const { slides, options } = props
    const [selectedIndex, setSelectedIndex] = useState(0)
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
        <div className="flex flex-col gap-4">
            <div className="overflow-hidden" ref={emblaMainRef}>
                <div className="flex gap-2 items-center">
                    {slides.map((index) => (
                        <div className="embla__slide w-full h-auto" key={index}>
                            <img
                                className=" w-auto h-auto"
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
                            <Thumb
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex ? true : false}
                                index={index}
                                imgSrc={imageByIndex(index).link}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdGallerySlider;