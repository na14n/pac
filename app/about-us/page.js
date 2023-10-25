import { HeaderTrigger, AboutHero, AboutS01, AboutS02, AboutS03, AboutS04, AboutS05, AboutS06, AboutS07, AboutS08 } from "@/components"
import PageWrapper from "@/components/pageWrapper"

export const metadata = {
    title: "About PROS-APAC",
    description: "Information and History about PROS-APAC Corporation",
    keywords: ['PROS-APAC', 'About PROS-APAC', 'About us'],
}

export default function Page() {
    return (
        <PageWrapper>
            <main className="w-full min-h-screen h-fit bg-[#FCFCFC] overflow-hidden">
                <HeaderTrigger>
                    <AboutHero />
                </HeaderTrigger>
                <AboutS01 />
                <AboutS02 />
                <AboutS03 />
                <AboutS04 />
                <AboutS05 />
                <AboutS06 />
                <AboutS07 />
                <AboutS08 />
            </main>
        </PageWrapper>
    )
}