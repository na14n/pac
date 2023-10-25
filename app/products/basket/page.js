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
                <section className="w-full min-h-[40vh] h-fit flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-[#FCFCFC] text-center uppercase font-bold pt-16 pb-8 z-10 mt-24">
                        Request for Quotation
                    </h1>
                </section>
                <div className=" absolute top-0 w-full h-[50vh] bg-pac-green z-0" />
                <section className="w-full h-fit 2xl:px-48 lg:px-32 xs:px-4 z-10 py-8 flex gap-12 grow">
                    <Basket />
                    <QuoteForm />
                </section>
            </div>
        </PageWrapper>
    )
}