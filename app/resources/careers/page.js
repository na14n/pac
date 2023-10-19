import { HeaderTrigger } from "@/components";
import CareersHeroBanner from "@/components/careers/careersHeroBanner";
import CareersSection1 from "@/components/careers/careersSection1";

export default function CareersPage() {
    return (
        <main className="w-full h-fit min-h-screen bg-white">
            <HeaderTrigger>
                <div className="w-full h-24 bg-nav-green" />
            </HeaderTrigger>
            <CareersHeroBanner />
            <CareersSection1 />
        </main>
    )
}