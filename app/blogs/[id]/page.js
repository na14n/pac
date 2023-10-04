import { HeaderTrigger } from "@/components";
import BlogsPageContent from "@/components/blogs/blogsPageContent";

export default function BlogPage({ params }) {
    return (
        <main className="w-full min-h-screen h-fit">
            <HeaderTrigger>
                <div className="w-full bg-[#007811] aspect-[16/3] max-lg:aspect-video absolute top-0 left-0 -z-10" />
            </HeaderTrigger>
            <BlogsPageContent params={params} />
        </main>
    )
}