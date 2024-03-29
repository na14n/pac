import Basket from "@/components/products/basket"
import { HeaderTrigger, QuoteForm } from "@/components"
import PageWrapper from "@/components/pageWrapper"

export default function BasketPage() {
    return (
        <PageWrapper>
            <div className="w-full min-h-screen h-fit flex flex-col gap-0 justify-start items-center relative z-0 bg-[#EFEFEF]">
                <section className="w-full h-fit absolute top-0">
                    <HeaderTrigger />
                </section>
                <section className="w-full max-sm:aspect-video max-lg:aspect-[3/1] lg:min-h-[40vh] h-fit flex flex-col items-center justify-center test">
                    <h1 className="text-4xl text-[#FCFCFC] text-center uppercase font-bold xl:pt-16 pb-8 z-10 max-xl:mt-24">
                        Request for Quotation
                    </h1>
                </section>
                <div className=" absolute top-0 w-full aspect-video md:aspect-[3/1] xl:h-[50vh] bg-[#005f19] z-0" />
                <section className="w-full h-fit 2xl:px-48 lg:px-32 md:px-16 z-10 py-8 flex flex-col xl:flex-row gap-12 grow">
                    <Basket />
                    <QuoteForm />
                </section>
            </div>
        </PageWrapper>
    )
}