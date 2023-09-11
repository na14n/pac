import { HeaderTrigger, AboutHero, AboutS01, AboutS02, AboutS03, AboutS04, AboutS05, AboutS06, AboutS07, AboutS08, AboutS09, AboutS10 } from "@/components"

export default function Page(){
    return(
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
            <AboutS09 />
            <AboutS10 />
            <a href="components/event-landing/LandingF.js">rawr</a>
        </main>
    )
}