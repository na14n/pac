import { HeaderTrigger, Hero, BrandLogo, BrandInfo, sear } from "@/components"

export default async function BrandPage({ params }) {
    return (
        <main className="w-full flex flex-col items-center justify-center">
            <div className='w-full h-fit bg-[#121212]'>
                <HeaderTrigger>
                    <Hero heroType={'slider'} title={'Contact Us'} mediaArray={[]} />
                </HeaderTrigger>
            </div>
            <div className="w-full h-fit">
                <BrandLogo />
            </div>
            <div className="w-full h-fit">
                <BrandInfo />
            </div>
            <div className="w-full h-fit">

            </div>
            <div className="w-full h-[100vh] bg-[#EFEFEF]">
            </div>
        </main>

    )
}