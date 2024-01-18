import { HeaderTrigger, SearchBar } from "@/components"
import PageWrapper from "@/components/pageWrapper"
import SearchUI from "@/components/search"
import { Icon } from '@iconify-icon/react';

export const metadata = {
    title: 'Search in PROS-APAC',
    description: 'Explore our content here',
    keywords: ['PROS-APAC', 'PROS-APAC News', 'News and Updates', 'Updates', 'PROS-APAC News and Updates', 'Products', 'PROS-APAC Products', 'Events', 'PROS-APAC Events']
}

export default function SearchPage({searchParams}) {
    return (
        <PageWrapper>
            <main className="w-full min-h-screen h-fit bg-[#EEE] overflow-hidden">
                <HeaderTrigger>
                    <section className="bg-gradient-to-b from-[#ef6703] to-[#f9a03c] w-full aspect-video lg:aspect-[8/1] flex flex-col py-8 items-start justify-end px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 relative">
                        <div className="text-[#FCFCFC] pt-8 pb-4">
                            {searchParams.q ? 
                            <div className=" w-fit h-fit flex flex-col gap-2">
                                <div className="flex items-center gap-1 text-white text-lg">
                                    <p className="">Search</p>
                                    <Icon icon="ic:round-search" className="" />
                                </div>
                                <h2 className="text-2xl xl:text-4xl font-bold">{searchParams.q}</h2>
                            </div> : 
                            <div className=" w-fit h-fit flex items-center gap-4">
                                <h2 className="text-4xl">Searching for something?</h2>
                                <Icon icon="ic:round-search" className="text-xl xl:text-5xl" />
                            </div>}
                        </div>
                    </section>
                </HeaderTrigger>
                <section className="w-full flex items-center justify-center py-16">
                    {searchParams.q  ? <SearchUI search={searchParams ? searchParams.q : ""} /> : 
                            <SearchBar type="general-lg" />
                    }
                </section>
            </main>
        </PageWrapper>
    )
}