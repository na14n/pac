import CsrHero from "@/components/about/csrHero"
import CsrList from "@/components/about/csrList"
import { HeaderTrigger } from "@/components"

export const metadata = {
    title: "About PROS-APAC",
    description: "The PROS-APAC Corporation and the Filipino Community.",
    keywords: ['PROS-APAC', 'About PROS-APAC', 'About us', 'Corporate Social Responsibility', 'Community Outreach', 'PROS-APAC Community'],
}

export default function CsrPage({searchParams}) {
    
    return (
        <main className="w-full min-h-screen h-fit bg-[#EFEFEF] overflow-hidden">
            <HeaderTrigger>
                <CsrHero />
            </HeaderTrigger>
            <CsrList params={searchParams?.e ? searchParams?.e : ""} />
        </main>
    )
}