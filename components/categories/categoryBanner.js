import Image from "next/image";

export default function CategoryBanner() {


    return (
        <section className="h-72 w-full bg-[#153f00] flex flex-col items-center justify-end py-8 gap-2">
            <div className="square w-32 test">
                {/* <Image src={""} fill className="object-center object-contain" /> */}
            </div>
            <h1 className="text-3xl 2xl:text-5xl font-bold text-white">Category Name</h1>
        </section>
    )
}