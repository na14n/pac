import AboutS07a from "./auSection07a";
import AboutS07b from "./auSection07b";
import AboutS07c from "./auSection07c";

export default function AboutS07() {
    return (
        <section className="flex flex-col w-full h-fit px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 bg-gradient-to-b from-[#373737] to-[#CDCDCD] py-24">
            <AboutS07a />
            <AboutS07b />
            <AboutS07c />
        </section>
    )
}