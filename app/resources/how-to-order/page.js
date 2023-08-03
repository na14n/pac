import { HeaderTrigger, Hero, QuotationGUide, OrderingGuide, Faq } from "@/components"

export default async function HowToOrder() {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className='w-full h-[33vh]'>
                <HeaderTrigger>
                    <Hero heroType={'orange'} title={'How to Order'} />
                </HeaderTrigger>
            </div>
            <div className='w-full lg:h-[100vh] 2xl:h-fit max-h-fit bg-[#F1F1F1]'>
                <QuotationGUide />
            </div>
            <div className='w-full lg:h-[100vh] 2xl:h-fit max-h-fit bg-[#F1F1F1]'>
                <OrderingGuide />
            </div>
            <div className='w-full lg:h-[100vh] 2xl:h-fit max-h-fit bg-[#F1F1F1]'>
                <Faq />
            </div>
        </div>
    )
}