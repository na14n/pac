import { HeaderTrigger } from "@/components"
import NewsPageContent from "@/components/news-and-updates/newsPageContent"
import NewsPageHeader from "@/components/news-and-updates/newsPageHeader"

export default function NewsPage({params}) {
    return (
        <main className="w-full min-h-screen h-fit bg-[#EFEFEF] overflow-hidden">
            <HeaderTrigger>
                <section className="h-fit w-full pt-24 bg-[#153f00]" />
            </HeaderTrigger>
            <NewsPageHeader id={params?.id} />
            {/* <NewsPageContent id={params?.id} /> */}
        </main>
    )
}