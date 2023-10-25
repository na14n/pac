import { formatWordPressDate, idFormatter, truncateString } from "@/lib/helpers";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";

export default function BlogCard({ name, id, media, text, date }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <a href={id ? `/blogs/${idFormatter(id, true)}` : ``} className="w-full h-fit">
                <div className="w-full four-to-three relative hover:opacity-60 transition-all">
                    <Image src={media ? media[0]?.sourceUrl : ``} alt={media ? media[0]?.altText : ``} fill={true} className="object-contain object-top" />
                </div>
            </a>
            <a href={id ? `/blogs/${idFormatter(id, true)}` : ``} className="w-full group">
                <h4 className="text-[#121212] text-lg font-bold group-hover:underline">{name ? name : ''}</h4>
            </a>
            <p className="text-pac-green text-sm font-semibold">{formatWordPressDate(date)}</p>
            <p className="text-[#373737]">
                {truncateString(text, 160)}
                <a
                    className="text-pac-orange hover:underline hover:text-nav-orange ml-2 w-fit"
                    href={id ? `/blogs/${idFormatter(id, true)}` : ``}
                >
                    Read More
                    <Icon icon="material-symbols:arrow-outward-rounded" />
                </a>
            </p>
        </div>
    )
}