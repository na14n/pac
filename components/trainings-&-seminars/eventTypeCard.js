import Image from "next/image";

const EventTypeCard = ({ link, title, media }) => {
    return (
        <a href={link ? link : '/#'} className="group overflow-hidden w-fit h-fit hover:-translate-y-1 transition-all">
            <div className={`2xl:w-80 2xl:h-80 xs:w-72 xs:h-72 shadow-md relative flex flex-col justify-end py-8 group-hover:shadow-lg group`}>
                <div className="w-full h-full absolute rounded-md top-0 bg-gradient-to-b from-[#575757]/30 via-[#272727]/30 to-[#121212]/90 z-30"></div>
                <div className="h-full w-full absolute rounded-md top-0 overflow-hidden z-0 group">
                    <Image fill={true} src={media ? media : 'https://picsum.photos/800/800'} className="z-0 object-cover" alt="pros-apac-event"/>
                </div>
                <div className="h-full w-full absolute rounded-md top-0 overflow-hidden z-10 group opacity-100 group-hover:opacity-0 transition-all">
                    <Image fill={true} src={media ? media : 'https://picsum.photos/1000/1000'} className="z-0 object-cover" alt="pros-apac-event"/>
                </div>
                <div className="uppercase text-xl font-bold text-[#F1F1F1] w-content text-center z-40 group-hover:text-nav-orange">
                    {title}
                </div>
            </div>
        </a>
    )
}

export default EventTypeCard;