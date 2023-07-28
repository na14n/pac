import { HeaderTrigger, Hero, CatalogueCard } from "@/components"


export default async function BrandCatalogues() {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className='w-full h-[33vh]'>
                <HeaderTrigger>
                    <Hero heroType={'green'} title={'Brand Catalogues'} />
                </HeaderTrigger>
            </div>
            <div className='w-full lg:min-h-[100vh] max-h-fit  bg-[#F1F1F1] lg:px-32 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 sm:px-4 py-8'>
                <CatalogueCard />
            </div>
        </div>
    )
}