import NewsAndUpdatesBanner from "@/components/news-and-updates/newsAndUpdatesHeroBanner"
import NewsAndUpdatesList from "@/components/news-and-updates/newsAndUpdatesList"
import { HeaderTrigger } from "@/components"

export const metadata = {
    title: 'PROS-APAC News',
    description: 'Stay updated to with us.',
    keywords: ['PROS-APAC', 'PROS-APAC News', 'News and Updates', 'Updates', 'PROS-APAC News and Updates']
}

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