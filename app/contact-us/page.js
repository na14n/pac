import { HeaderTrigger, ContactUsHero, LocationCard, MessageUsForm, ViberBanner, MessageUs } from "@/components"

export default function ContactUs() {

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className='w-full h-[33vh]'>
        <HeaderTrigger>
          <ContactUsHero />
        </HeaderTrigger>
      </div>
      <div className="w-full 2xl:min-h-fit max-h-fit">
        <LocationCard />
      </div>
      <div className="w-full h-fit ">
        <MessageUs />
      </div>
      <div className="w-full max-h-fit">
        <ViberBanner />
      </div>
    </main>
  )
}

