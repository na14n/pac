import { idFormatter } from "@/lib/helpers";
import Image from "next/image";

export default function BlogCard({name, id, media}) {
    return (
        <div>
            <a href={id ? `/blogs/${idFormatter(id, true)}` : ``} className="w-fit h-fit">
                <div className="w-full four-to-three relative">
                    <Image src={media ? media[0]?.sourceUrl : ``} alt={media ? media[0]?.altText : ``} fill={true} className="object-contain object-center" />
                </div>
            </a>
            <a href={id ? `/blogs/${idFormatter(id, true)}` : ``} className="w-full landscape-banner p-2">
                <h4 className="text-[#121212]">{name ? name : ''}</h4>
            </a>
        </div>
    )
}