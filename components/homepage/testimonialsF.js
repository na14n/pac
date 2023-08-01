import TestimonialCard from "../testimonials/testimonialCard"

export async function TestimonialsF() {
    return (
        <div className="w-full h-full lg:px-32 lg:py-16 relative flex flex-col justify-end items-center overflow-hidden gap-12">
            <div className="w-full h-2/5 bg-nav-orange absolute z-0 top-0"></div>
            <div className="z-10 w-full h-1/3 flex flex-col items-center justify-center gap-2">
                <div className="uppercase text-[#FCFCFC] font-bold text-3xl">
                    why choose us
                </div>
                <div className="w-1/3 h-[2px] rounded-md bg-[#EFEFEF]"></div>
            </div>
            <div className="w-full h-full z-10 flex justify-center items-center py-8">
                <TestimonialCard />
            </div>
        </div>
    )
}