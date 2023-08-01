import TestimonialCard from "../testimonials/testimonialCard"
import Image from "next/image"

export async function TestimonialsF({ mediaUrl }) {
    return (
        <div className="w-full h-fit lg:px-32 lg:py-24 relative flex flex-col justify-center items-center overflow-hidden gap-32 ">
            <div className="w-full h-2/5 bg-gradient-to-b from-[#F0892B]/90 to-[#E66204]/90 absolute z-10 top-0"></div>
            <div className="absolute z-0 t-0 w-full h-2/5 top-0 overflow-hidden">
                <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} alt="dental-website-banner" />
            </div>
            <div className="z-20 w-full h-1/3 flex flex-col items-center justify-center gap-2 ">
                <div className="uppercase text-[#FCFCFC] font-bold text-3xl 2xl:text-4xl">
                    why choose us
                </div>
                <div className="w-1/3 h-[2px] rounded-md bg-[#EFEFEF]"></div>
            </div>
            <div className="w-full h-full z-10 flex justify-center items-center py-8 gap-8 2xl:gap-8 ">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    )
}