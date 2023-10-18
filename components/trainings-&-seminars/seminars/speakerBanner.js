import Image from "next/image";

export default function SpeakerBanner({ name, title, image, secondaryImage }) {
    return (
        <div className="w-full aspect-[4/1] flex gap-8 relative mb-6">
            <div className="w-48 aspect-[3/4] h-fit relative z-30">
                <Image fill className="object-center object-cover" src={image.sourceUrl} />
            </div>
            <div className="flex flex-col z-30 pt-8">
                <h3 className="mb-4 font-semibold text-[#373737] uppercase text-2xl 2xl:text-4xl">MEET THE SPEAKER</h3>
                <h3 className="text-3xl 2xl:text-5xl text-pac-green font-bold">{name}</h3>
                <h5 className="text-lg font-semibold 2xl:text-2xl text-[#373737]">{title}</h5>
            </div>
            <div className="w-full h-full absolute top-0 right-0">
                <Image fill className="object-right object-contain z-0" src={secondaryImage.sourceUrl} />
            </div>
        </div>
    )
}