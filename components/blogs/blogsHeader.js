export default function BlogsHeader() {
    return (
        <section className="w-full aspect-video md:aspect-[16/3] bg-[#007811] flex flex-col items-center justify-end">
            <div className="w-fit mb-16">
                <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white uppercase">
                    Blogs
                </h1>
                <div className="w-full h-[4px] rounded-full bg-pac-orange" />
            </div>
        </section>
    )
}