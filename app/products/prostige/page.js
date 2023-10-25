import { HeaderTrigger, PBanner2, PBanner3, PBanner4, PBanner5, PBanner6, PBanner7, PBanner8, PBanner9, PHero } from "@/components"
import PageWrapper from "@/components/pageWrapper"

export const metadata = {
    title: 'PROSTIGE Rewards',
    description: 'The First and Only Rewards Program for Dental Professionals',
    keywords: ['PROS-APAC', 'PROS-APAC Loyalty', 'Prostige', 'Reward card', 'PROS-APAC rewards card']
}

export default function Page() {
    return (
        <PageWrapper>
            <main className="w-full h-fit">
                <HeaderTrigger>
                    <div className="absolute bg-nav-green h-24 top-0 left-0 w-full" />
                </HeaderTrigger>
                <PHero />
                <PBanner2 />
                <PBanner3 />
                <PBanner4 />
                <PBanner5 />
                <PBanner6 />
                <PBanner7 />
                <PBanner8 />
                <PBanner9 />
            </main>
        </PageWrapper>
    )
}