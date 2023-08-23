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
        <div className='w-full xs:h-fit lg:h-0 bg-[#F1F1F1]'>
          <Strengths />
        </div>
        <div className='w-full xs:h-[50vh] lg:h-[80vh] 2xl:h-[80vh] max-h-fit bg-[#F1F1F1]'>
          {/* <Hero heroType={'centered'} title={'To know more about our Story'} buttonName={'Click Here'} buttonLink={'/#'} /> */}
          <OurStory />
        </div>
        <div className='w-full max-h-fit bg-[#F1F1F1]'>
          <Reach type={'green'} />
        </div>
        <div className='w-full min-h-min lg:h-[100vh] max-h-fit bg-[#F1F1F1]'>
          <BrandsF />
        </div>
        <div className='w-full h-fit bg-[#F1F1F1]'>
          <ProstigeF link={'https://picsum.photos/1280/720'} />
        </div>
        <div className='w-full xs:h-fit lg:h-[100vh] 2xl:h-fit max-h-fit bg-[#F1F1F1] '>
          <TestimonialsF />
        </div>
        <div className='w-full max-h-fit lg:h-fit bg-[#F1F1F1]'>
          <EventsF />
        </div>
        <div className='w-full h-[30vh] max-h-fit bg-[#F1F1F1]'>
          {/* <Hero heroType={'centered3'} title={'want to order?'} subheading={'To know more about our purchase and delivery information'} buttonName={'Click Here'} buttonLink={'/resources/how-to-order'} /> */}
          <OrderF />
        </div>
      </Suspense>
    </main>
  )
}

