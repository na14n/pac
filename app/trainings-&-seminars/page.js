import { HeaderTrigger, EventsLandingPage } from "@/components"
import PageWrapper from "@/components/pageWrapper"

export const metadata = {
    title: 'PROS-APAC Events',
    description: 'Trainings, Seminars, & Events of PROS-APAC.',
    keywords: ['PROS-APAC', 'PROS-APAC Events', 'Trainings & Workshops', 'Conventions', 'Dental Events', 'Dentists Seminars', 'Philippine', ' Dental Conventions Philippines']
}

export default function Page() {


    return (
        <PageWrapper>
            <main className="w-full h-fit">
                <HeaderTrigger>
                    <div className="absolute bg-nav-green h-24 top-0 left-0 w-full" />
                </HeaderTrigger>
                <EventsLandingPage />
            </main>
        </PageWrapper>
    )
}