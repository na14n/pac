import { HeaderTrigger, Hero, QuotationGUide, OrderingGuide, Faq } from "@/components"
import PageWrapper from "@/components/pageWrapper"
import OrderGuideHeader from "@/components/resources-pages/orderGuideHeader"

export default async function HowToOrder() {
    return (
        <PageWrapper>
            <div className="w-full h-fit">
                <HeaderTrigger>
                    <OrderGuideHeader />
                </HeaderTrigger>
                <QuotationGUide />
                <OrderingGuide />
                <Faq />
            </div>
        </PageWrapper>
    )
}