import { HeaderTrigger } from "@/components"
import AboutLimitlessList from "@/components/limitless/AboutLimitlessList"
import AboutLimitless from "@/components/limitless/about-limitless"
import LimitlessCommunity from "@/components/limitless/limitless-community"
import LimitlessHero from "@/components/limitless/limitless-hero"
import LimitessMerch from "@/components/limitless/limitless-merch"
import LimitlessMindset from "@/components/limitless/limitless-mindset"

export const metadata = {
    title: "Limitless",
    description: "2024 PROS-APAC Sales Kickoff",
    keywords: ['PROS-APAC', 'About PROS-APAC', 'About us', 'PROS-APAC activities', 'Company Activities', 'PROS-APAC Company Activities', 'Limitless', 'Sales Kickoff'],
}

export default function LimitlessPage() {
    return(
        <main className="w-full min-h-screen h-fit bg-[#EFEFEF] overflow-hidden">
            <HeaderTrigger>
                <LimitlessHero />
            </HeaderTrigger>
            <AboutLimitless />  
            <AboutLimitlessList />
            <LimitlessMindset />     
            <LimitessMerch />
            <LimitlessCommunity />            
        </main>
    )
}