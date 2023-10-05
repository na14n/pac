import { HeaderTrigger, CompanyActivitiesHero, CompanyActivitiesBanners } from "@/components"

export const metadata = {
    title: "About PROS-APAC",
    description: "PROS-APAC's Company Activities",
    keywords: ['PROS-APAC', 'About PROS-APAC', 'About us', 'PROS-APAC activities', 'Company Activities', 'PROS-APAC Company Activities'],
}

export default function CompanyActivities() {
    return(
        <main className="w-full min-h-screen h-fit bg-[#EFEFEF] overflow-hidden">
        <HeaderTrigger>
            <CompanyActivitiesHero />
            <CompanyActivitiesBanners />
        </HeaderTrigger>
    </main>
    )
}