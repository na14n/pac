import { HeaderTrigger } from "@/components"

export default function Page() {
    return (
        <main className="w-full h-fit">
            <HeaderTrigger>
                <div className="absolute bg-nav-green h-24 top-0 left-0 w-full" />
            </HeaderTrigger>
            <section className=" h-fit pt-32 overflow-hidden px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-24">
                <h1 className="text-5xl text-[#121212] font-bold">
                    TRAINING, SEMINARS, & EVENTS
                </h1>

            </section>
            <section className="min-h-screen h-fit grid xs:grid-cols-1 lg:grid-cols-3 gap-4 place-items-center pt-32 overflow-hidden px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-24">
                <div className="h-96 four-to-three-p rounded-sm bg-[#103900] shadow-md"></div>
                <div className="h-96 four-to-three-p rounded-sm bg-[#103900] shadow-md"></div>
                <div className="h-96 four-to-three-p rounded-sm bg-[#103900] shadow-md"></div>
            </section>
        </main>
    )
}