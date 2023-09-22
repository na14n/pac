import { HeaderTrigger } from "@/components";
import ConHero from "@/components/trainings-&-seminars/conventions/conHero";
import TrHero from "@/components/trainings-&-seminars/trainings/trHero";

export default function Page({ params }) {
    return (
        <main className="w-full min-h-screen h-fit">
            <HeaderTrigger>
                {/* <ConHero id={params.id} /> */}
                <TrHero id={params.id} />
            </HeaderTrigger>
           {/* <ConGrid id={params.id} /> */}
           {params.id}
        </main>
    )
}