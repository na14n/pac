import { HeaderTrigger } from "@/components";
// import ConHero from "@/components/trainings-&-seminars/conventions/conHero";

export default function ConventionPage({ params }) {
    return (
        <main className="w-full min-h-screen h-fit flex flex-col items-center relative">
            <HeaderTrigger>
                {/* <ConHero /> */}
            </HeaderTrigger>
            <h1 className="text-xl font-bold text-black">Hello World</h1>
            <pre>
                {JSON.stringify(params, null, 4)}
            </pre>
        </main>
    )
}