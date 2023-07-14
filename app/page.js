import { MyComponent, Hero } from "@/components"
import { client } from "@/lib/apollo"

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className='w-full h-full bg-cyan-400'>
        <Hero />
      </div>
      <div className='w-full h-[100vh] bg-green-400'>
        <MyComponent />
      </div>
    </main>
  )
}

