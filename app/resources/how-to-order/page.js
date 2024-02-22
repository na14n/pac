import { HeaderTrigger, Hero, QuotationGUide, OrderingGuide, Faq } from "@/components"
import PageWrapper from "@/components/pageWrapper"
import OrderBottomBanner from "@/components/resources-pages/order-bottombanner"
import OrderingDelivery from "@/components/resources-pages/order-delivery"
import OrderingDescription from "@/components/resources-pages/order-desc"
import OrderPayment from "@/components/resources-pages/order-payment"
import OrderingStepByStep from "@/components/resources-pages/order-stepbystep"
import OrderGuideHeader from "@/components/resources-pages/orderGuideHeader"

export default async function HowToOrder() {
    return (
        <PageWrapper>
            <div className="w-full h-fit">
                <HeaderTrigger>
                    <OrderGuideHeader />
                </HeaderTrigger>
                <OrderingDescription />
                <OrderingStepByStep />
                <OrderingGuide />
                <OrderingDelivery />
                <OrderPayment />
                <Faq />
                <OrderBottomBanner />
            </div>
        </PageWrapper>
    )
}