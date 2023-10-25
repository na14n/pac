import { HeaderTrigger } from "@/components";
import CareersHeroBanner from "@/components/careers/careersHeroBanner";
import CareersList from "@/components/careers/careersList";
import CareersSection1 from "@/components/careers/careersSection1";
import CareersSection2 from "@/components/careers/careersSection2";
import CareersSection3 from "@/components/careers/careersSection3";
import CareersSection4 from "@/components/careers/careersSection4";
import PageWrapper from "@/components/pageWrapper";

export default function CareersPage() {
    return (
        <PageWrapper>
            <main className="w-full h-fit min-h-screen bg-white">
                <HeaderTrigger>
                    <div className="w-full h-24 bg-nav-green" />
                </HeaderTrigger>
                <CareersHeroBanner />
                <CareersSection1 />
                <CareersSection2 />
                <CareersList />
                <CareersSection3 />
                <CareersSection4 />
            </main>
        </PageWrapper>
    )
}