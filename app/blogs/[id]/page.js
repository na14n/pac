import { HeaderTrigger } from "@/components";
import BlogsPageContent from "@/components/blogs/blogsPageContent";
import PageWrapper from "@/components/pageWrapper";

export default function BlogPage({ params }) {
    return (
        <PageWrapper>
            <main className="w-full min-h-screen h-fit">
                <HeaderTrigger>
                    <div className="w-full bg-gradient-to-b from-[#f9a03c] to-[#ef6703] aspect-[16/3] max-lg:aspect-video absolute top-0 left-0 -z-10" />
                </HeaderTrigger>
                <BlogsPageContent params={params} />
            </main>
        </PageWrapper>
    )
}