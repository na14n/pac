import Image from "next/image";

const EventCard = ({ mediaUrl, date, title, location, link, type, month, day, log }) => {

    // console.log(log);

    return (
        <a className="w-72 xl:w-[20rem] 2xl:w-[24rem] h-fit shadow-md rounded-md overflow-hidden relative flex flex-col justify-end items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-100 cursor-pointer hover:border-2 border-0" href={`/trainings-&-seminars/${type}/${link}`}>
            <div className="relative w-72 xl:w-[20rem] 2xl:w-[24rem] aspect-video">
                <Image fill={true} src={mediaUrl ? mediaUrl : 'https://picsum.photos/2400'} alt="dental-website-banner" className="object-cover object-center" />
            </div>
            <div className="z-10 w-full h-fit max-h-24 p-2 bg-[#F1F1F1] flex items-center justify-between">
                {month && day && type != 'conventions' ? 
                    <div className="h-fit w-fit flex flex-col justify-between items-center px-2">
                        <span className="text-sm font-semibold text-red-500 uppercase">{month}</span>
                        <span className="text-2xl font-bold text-[#121212]">{day}</span>
                    </div>
                    : ``}
                <div className="h-fit w-full flex flex-col items-start p-2">
                    <span className="text-l w-full h-fit font-semibold text-[#121212] flex-wrap grow-1">{title ? title : ''}</span>
                    <span className="text-xs text-[#575757]">{location ? location : ''}</span>
                    {type === 'conventions' && date ?
                        <span className="text-xs text-[#575757]">{date ? date : ''}</span>
                        : ``}
                </div>
            </div>
        </a>
    )
}

export default EventCard;