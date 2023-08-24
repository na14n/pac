import { ProdInfo, HeaderTrigger, Breadcrumbs, ProdContent } from '@/components';



export default async function Page({ params }) {

  return (
    <main className="w-full h-fit overflow-hidden bg-[#EFEFEF] flex flex-col items-center">
      <div className='w-full min-h-24 h-24 max-h-24'>
        <HeaderTrigger>
          <div className='w-full h-full bg-pac-green z-0' />
        </HeaderTrigger>
      </div>
      <Breadcrumbs id={params.slug}  />
      <ProdInfo id={params.slug} />
      <ProdContent id={params.slug}/>
    </main>
  )
} 