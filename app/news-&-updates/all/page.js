import { HeaderTrigger } from "@/components"
import AllNewsList from "@/components/news-and-updates/allNewsList"

export default function AllNewsListPage({searchParams}) {
    return (
        <main className="w-full min-h-screen h-fit bg-[#EFEFEF] overflow-hidden">
            <HeaderTrigger>
                <section className="h-fit w-full relative flex flex-col items-center justify-end px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 pt-32 gap-8 bg-[#153f00]">
                    <div className="flex flex-col gap-2 z-10 font-bold self-start mb-6">
                        <h1 className="text-3xl text-[#FCFCFC]">All News & Updates</h1>
                        <div className="w-1/2 h-[2px] rounded-full bg-nav-orange" />
                    </div>
                </section>
            </HeaderTrigger>
            <AllNewsList searchParams={searchParams} />
        </main>
    )
}