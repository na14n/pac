import { HeaderTrigger } from "@/components";
import CategoryBanner from "@/components/categories/categoryBanner";
import CategoryContent from "@/components/categories/categoryContent";

export default function CategoryPage({ params }) {
    return (
        <main className="w-full h-fit min-h-screen">
            <HeaderTrigger>
                <CategoryBanner />
            </HeaderTrigger>
            <CategoryContent category={params.category} />
        </main>
    )
}