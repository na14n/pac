import { MyComponent } from "@/components"

export default function Home() {
  return (
    <main class="w-full flex flex-col items-center justify-center">
      <div className='w-full h-[100vh] bg-cyan-400'>
      <MyComponent/>
      </div>
      
      <div className='w-full h-[100vh] bg-green-400'></div>
    </main>
  )
}

