import CsrHero from "@/components/about/csrHero"
import CsrList from "@/components/about/csrList"
import { HeaderTrigger } from "@/components"

export default function CsrPage({searchParams}) {
    return (
        <main className="w-full min-h-screen h-fit bg-[#EFEFEF] overflow-hidden">
            <HeaderTrigger>
                <CsrHero />
            </HeaderTrigger>
            <CsrList params={searchParams?.e ? searchParams?.e : ""} />
        </main>
    )
}