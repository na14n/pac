import { HeaderTrigger, EventsLandingPage } from "@/components"

export default function Page() {
    return (
        <main className="w-full h-fit">
            <HeaderTrigger>
                <div className="absolute bg-nav-green h-24 top-0 left-0 w-full" />
            </HeaderTrigger>
            <EventsLandingPage />
        </main>
    )
}