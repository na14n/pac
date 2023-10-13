import { HeaderTrigger } from "@/components";
import CareersHeroBanner from "@/components/careers/careersHeroBanner";

export default function CareersPage() {
    return(
        <main className="w-full h-fit min-h-screen">
            <HeaderTrigger>
                <CareersHeroBanner />
            </HeaderTrigger>
        </main>
    )
}