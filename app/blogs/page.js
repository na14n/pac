import { HeaderTrigger } from "@/components"
import BlogsHeader from "@/components/blogs/blogsHeader"
import BlogsList from "@/components/blogs/blogsList"
import BlogsPageContent from "@/components/blogs/blogsPageContent"

export default function Blogs() {
    return(
        <main className="w-full min-h-screen h-fit bg-[#EFEFEF]">
            <HeaderTrigger>
                <BlogsHeader />
            </HeaderTrigger>
            <BlogsList />
        </main>
    )
}