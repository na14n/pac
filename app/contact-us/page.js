import { HeaderTrigger, Hero, LocationCard, MessageUsForm, ViberBanner } from "@/components"

export const dynamic = 'force-dynamic'


export default async function ContactUs() {

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className='w-full h-[33vh]'>
        <HeaderTrigger>
          <Hero heroType={'orange'} title={'Contact Us'} />
        </HeaderTrigger>
      </div>
      <div className="w-full lg:min-h-[100vh] 2xl:min-h-fit max-h-fit lg:px-32">
        <LocationCard data={data} />
      </div>
      <div className="w-full lg:h-[63vh] ">
        <MessageUsForm />
      </div>
      <div className="w-full max-h-fit">
        <ViberBanner />
      </div>
    </main>
  )
}

