import { HeaderTrigger } from "@/components";
import CategoryBanner from "@/components/categories/categoryBanner";
import CategoryContent from "@/components/categories/categoryContent";
import CategoryListing from "@/components/categories/categoryListing";

export default function CategoryPage({ searchParams }) {
    return (
        <main className="w-full h-fit min-h-screen">
            <HeaderTrigger>
                {searchParams?.category ?
                    <CategoryBanner category={searchParams.category} />
                    :
                    <section className="h-48 w-full bg-[#153f00] flex flex-col items-center justify-end py-8 gap-2">
                        <h1 className="text-3xl 2xl:text-5xl font-bold text-white">All Categories</h1>
                    </section>
                }
            </HeaderTrigger>
            {searchParams?.category ?
                <CategoryContent category={searchParams.category} />
                :
                <CategoryListing />
            }
        </main>
    )
}