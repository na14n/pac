import { MyComponent, HeaderTrigger, Hero, LocationCard, MessageUsForm } from "@/components"
import { client } from "@/lib/apollo"

export default function ContactUs() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className='w-full h-[33vh] bg-cyan-400'>
        <HeaderTrigger>
          <Hero heroType={'orange'} />
        </HeaderTrigger>
      </div>
      <div className="w-full lg:h-[67vh] lg:px-32">
        <LocationCard />
      </div>
      <div className="w-full lg:h-[63vh] ">
        <MessageUsForm />
      </div>
    </main>
  )
}

