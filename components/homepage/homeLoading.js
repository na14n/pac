export default function HomeLoading() {
    return (
        <div className="relative w-full h-screen bg-[#171717] flex items-center overflow-hidden z-40">
            <div className="z-10 lg:w-[600px] 2xl:w-[800px] flex flex-col gap-4 2xl:ml-48 lg:ml-32 xs:ml-8 sm:ml-16 py-10">
                <div className="w-full h-12 bg-[#676767]/20" />
                <div className="w-full h-12 bg-[#676767]/20" />
                <div className="w-4/5 h-8 bg-[#676767]/20" />
                <div className="w-1/4 h-10 bg-[#676767]/20" />
            </div>
            <div className="absolute z-0 t-0 w-full h-full bg-[#121212]" />
        </div>
    )
}