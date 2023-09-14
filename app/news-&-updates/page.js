import NewsAndUpdatesBanner from "@/components/news-and-updates/newsAndUpdatesHeroBanner"
import NewsAndUpdatesList from "@/components/news-and-updates/newsAndUpdatesList"
import { HeaderTrigger } from "@/components"


export default function NewsAndUpdates() {
    return (
        <main className="w-full min-h-screen h-fit bg-[#EFEFEF] overflow-hidden">
            <HeaderTrigger>
                <NewsAndUpdatesBanner />
            </HeaderTrigger>
            <NewsAndUpdatesList />
        </main>
    )
}