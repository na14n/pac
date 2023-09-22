import { HeaderTrigger } from "@/components";
import ConHero from "@/components/trainings-&-seminars/conventions/conHero";

export default function Page({ params }) {
    return (
        <main className="w-full min-h-screen h-fit">
            <HeaderTrigger>
                {/* <ConHero id={params.id} /> */}
            </HeaderTrigger>
           {/* <ConGrid id={params.id} /> */}
           {params.id}
        </main>
    )
}