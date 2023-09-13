import NewsAndUpdatesBanner from "@/components/news-and-updates/newsAndUpdatesHeroBanner"
import { HeaderTrigger } from "@/components"


export default function NewsAndUpdates() {
    return (
        <main className="w-full min-h-screen h-fit bg-[#EFEFEF] overflow-hidden">
            <HeaderTrigger>
                <NewsAndUpdatesBanner />
            </HeaderTrigger>
        </main>
    )
}