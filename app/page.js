import Image from 'next/image'

export default function Home() {
  return (
    <main class="w-full flex flex-col items-center justify-center">
      <div className='w-full h-[100vh] bg-cyan-400'>
        <img className='skew-y-6' src='/suisei.png'></img>
      </div>
      <div className='w-full h-[100vh] bg-green-400'></div>
    </main>
  )
}
