import { HeaderTrigger, Hero, AboutF, Strengths, Reach, BrandsF, TestimonialsF, EventsF, ProstigeF, HeroBanner, HomeLoading, OrderF, OurStory } from "@/components"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Suspense fallback={<HomeLoading />}>
        <div className='w-full h-[100vh]'>
          <HeaderTrigger>
            <HeroBanner />
          </HeaderTrigger>
        </div>
        <div className='w-full h-fit bg-[#F1F1F1]'>
          <AboutF />
        </div>
        <div className='w-full h-fit xl:h-0 bg-[#F1F1F1]'>
          <Strengths />
        </div>
        {/* <div className='w-full xs:h-[50vh] lg:h-[80vh] 2xl:h-[70vh] max-h-fit bg-[#F1F1F1]'> */}
        <div className='w-full h-fit max-h-fit bg-[#F1F1F1]'>
          <OurStory />
        </div>
        <div className='w-full max-h-fit bg-[#F1F1F1]'>
          <Reach type={'green'} />
        </div>
        <div className='w-full xl:h-[100vh] max-h-fit bg-[#F1F1F1]'>
          <BrandsF />
        </div>
        <div className='w-full h-fit bg-[#F1F1F1]'>
          <ProstigeF link={'https://picsum.photos/1280/720'} />
        </div>
        <div className='w-full xs:h-fit 2xl:h-fit max-h-fit bg-[#F1F1F1]'>
          <TestimonialsF />
        </div>
        <div className='w-full max-h-fit lg:h-fit bg-[#F1F1F1]'>
          <EventsF />
        </div>
        <div className='w-full h-[30vh] max-h-fit bg-[#F1F1F1]'>
          <OrderF />
        </div>
      </Suspense>
    </main>
  )
}

