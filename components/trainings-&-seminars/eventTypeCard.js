import Image from "next/image";

const EventTypeCard = ({ link, title, media }) => {
    return (
        <a href={link ? link : '/#'} className="group overflow-hidden w-fit h-fit hover:-translate-y-1 transition-all">
            <div className={`xl 2xl:w-80 2xl:h-96 shadow-md relative flex flex-col justify-end py-8 group-hover:shadow-lg `}>
                <div className="w-full h-full absolute rounded-md top-0 bg-gradient-to-b from-[#575757]/30 via-[#272727]/30 to-[#121212]/90 z-10"></div>
                <div className="w-full h-full absolute rounded-md top-0 overflow-hidden z-0">
                    <Image fill={true} src={media ? media : 'https://picsum.photos/1080/1920'} alt="pros-apac-event"/>
                </div>
                <div className="uppercase text-xl font-bold text-[#F1F1F1] w-content text-center z-20 group-hover:text-nav-orange">
                    {title}
                </div>
            </div>
        </a>
    )
}

export default EventTypeCard;