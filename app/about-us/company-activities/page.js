import { HeaderTrigger, CompanyActivitiesHero, CompanyActivitiesBanners } from "@/components"

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