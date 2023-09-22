import { HeaderTrigger } from "@/components"
import BlogsHeader from "@/components/blogs/blogsHeader"

export default function Blogs() {
    return(
        <main className="w-full min-h-screen h-fit bg-[#EFEFEF]">
            <HeaderTrigger>
                <BlogsHeader />
            </HeaderTrigger>
        </main>
    )
}