import { HeaderTrigger } from "@/components"
import PrivacyPolicyBody from "@/components/resources-pages/privacyPolicyBody"

export default function PrivacyPolicy() {
    return (
        <main className="w-full min-h-screen h-fit bg-[#EFEFEF] overflow-hidden">
            <HeaderTrigger>
                <section className="h-fit w-full relative flex flex-col items-center justify-end px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 pt-32 gap-8">
                    <div className="absolute top-0 left-0 w-full h-24 bg-[#153f00]" />
                </section>
            </HeaderTrigger>
            <PrivacyPolicyBody />
        </main>
    )
}