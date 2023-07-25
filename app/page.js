import { HeaderTrigger, Hero } from "@/components"

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className='w-full h-[100vh]'>
        <HeaderTrigger>
          <Hero heroType={'video'}/>
        </HeaderTrigger>
      </div>
      <div className='w-full h-[100vh] bg-green-400'>
      </div>
    </main>
  )
}

