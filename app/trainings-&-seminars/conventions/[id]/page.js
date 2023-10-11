import { HeaderTrigger } from "@/components";
import ConGrid from "@/components/trainings-&-seminars/conventions/conGrid";
import ConHero from "@/components/trainings-&-seminars/conventions/conHero";

export default function ConventionPage({ params }) {
    return (
        <main className="w-full min-h-screen h-fit">
            <HeaderTrigger>
                <ConHero id={params.id} />
            </HeaderTrigger>
           <ConGrid id={params.id} />
        </main>
    )
}