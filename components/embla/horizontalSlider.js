'use client';
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import './horizontalSlider.css'

export default function HorizontalSlider({ media }) {


    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto', containScroll: 'trimSnaps' })

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container flex" >
                {media.map((m, index) => (
                    <div key={index} className='embla__slide ml-8 shadow-md rounded-sm relative h-[203px] bg-white'>
                        <Image className='object-cover' fill={true} src={m.link ? m.link : 'https://picsum.photos/2400'} alt="prostige-users" />
                    </div>
                ))}
            </div>
        </div>
    )
}