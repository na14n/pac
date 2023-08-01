import { HeaderTrigger, Hero, AboutF, Strengths, Reach, BrandsF, TestimonialsF, EventsF } from "@/components"


export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className='w-full h-[100vh]'>
        <HeaderTrigger>
          <Hero heroType={'video'} title={'PHILIPPINE’S LEADING DENTAL DISTRIBUTOR'} title2={'AND PROVIDER OF CONTINUOUS EDUCATION'} subheading={'We are one of the leading distributors of quality dental materials, equipment, and accessories provided to dentists from Luzon, to Visayas, and Mindanao.'} buttonName={'Browse our Products'} />
        </HeaderTrigger>
      </div>
      <div className='w-full min-h-[50vh] max-h-fit bg-[#F1F1F1]'>
        <AboutF />
      </div>
      <div className='w-full min-h-4 max-h-fit bg-[#F1F1F1]'>
        <Strengths />
      </div>
      <div className='w-full h-[80vh] max-h-fit bg-[#F1F1F1]'>
        <Hero heroType={'centered'} title={'To know more about our Story'} buttonName={'Click Here'} />
      </div>
      <div className='w-full min-h-4 max-h-fit bg-[#F1F1F1]'>
        <Reach />
      </div>
      <div className='w-full h-[100vh] max-h-fit bg-[#F1F1F1]'>
        <BrandsF />
      </div>
      <div className='w-full h-[100vh] max-h-fit bg-[#F1F1F1]'>
      </div>
      <div className='w-full min-h-[100vh] lg:h-[100vh] max-h-fit bg-[#F1F1F1]'>
        <TestimonialsF />
      </div>
      <div className='w-full max-h-fit bg-[#F1F1F1]'>
        <EventsF />
      </div>
      <div className='w-full min-h-fit max-h-fit bg-[#F1F1F1]'>
        <Hero heroType={'centered3'} title={'want to order?'} subheading={'To know more about our purchase and delivery information'} buttonName={'Click Here'} />
      </div>
    </main>
  )
}

