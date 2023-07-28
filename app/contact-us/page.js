import { MyComponent, HeaderTrigger, Hero, LocationCard, MessageUsForm } from "@/components"
import { client } from "@/lib/apollo"

export default function ContactUs() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className='w-full h-[33vh]'>
        <HeaderTrigger>
          <Hero heroType={'orange'} title={'Contact Us'} />
        </HeaderTrigger>
      </div>
      <div className="w-full lg:max-h-[100vh] min-h-fit lg:px-32">
        <LocationCard />
      </div>
      <div className="w-full lg:h-[63vh] ">
        <MessageUsForm />
      </div>
    </main>
  )
}

