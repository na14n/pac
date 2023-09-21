import { HeaderTrigger } from "@/components";
import ConGrid from "@/components/trainings-&-seminars/conventions/conGrid";
import ConHero from "@/components/trainings-&-seminars/conventions/conHero";

export default function ConventionPage({ params }) {
    return (
        <main className="w-full min-h-screen h-fit">
            <HeaderTrigger>
                {/* <div className="h-24 bg-[#000000]/80 z-0" /> */}
                <ConHero id={params.id} />
            </HeaderTrigger>
           <ConGrid id={params.id} />
        </main>
    )
}