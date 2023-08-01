import Image from "next/image";

const EventTypeCard = ({ width, height, link, title, media }) => {
    return (
        <a href={link ? link : '/#'} className="group overflow-hidden w-fit h-fit hover:-translate-y-1 transition-all">
            <div className={`w-${width} h-${height} shadow-md relative flex flex-col justify-end py-8 group-hover:shadow-lg `}>
                <div className="w-full h-full absolute rounded-md top-0 bg-gradient-to-b from-[#575757]/30 via-[#272727]/30 to-[#121212]/90 z-10"></div>
                <div className="w-full h-full absolute rounded-md top-0 overflow-hidden z-0">
                    <Image fill={true} src={'https://picsum.photos/1920/1080'} />
                </div>
                <div className="uppercase text-xl font-bold text-[#F1F1F1] w-content text-center z-20 group-hover:text-nav-orange">
                    {title}
                </div>
            </div>
        </a>
    )
}

export default EventTypeCard;