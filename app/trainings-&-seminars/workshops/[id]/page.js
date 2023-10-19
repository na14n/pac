import { HeaderTrigger } from "@/components";
import WorkshopContents from "@/components/trainings-&-seminars/trainings/trContents";
import TrHero from "@/components/trainings-&-seminars/trainings/trHero";

export default function Page({ params }) {
    return (
        <main className="w-full min-h-screen h-fit">
            <HeaderTrigger>
                <TrHero id={params.id} />
            </HeaderTrigger>
            <WorkshopContents id={params.id} />
        </main>
    )
}