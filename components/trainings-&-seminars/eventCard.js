import Image from "next/image";

const EventCard = ({ mediaUrl, date, title, description, link }) => {
    return (
        <a className="xl:w-80 lg:w-64 sm:w-72 xs:w-64 lg:h-64 xs:h-60 shadow-md rounded-md overflow-hidden relative flex flex-col justify-end items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-100 cursor-pointer border-pac-green/50 hover:border-2 border-0" href={`/trainings-&-seminars/workshops/` + link}>
            <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/2400'} alt="dental-website-banner" />
            <div className="z-10 w-full h-24 bg-[#F1F1F1] flex items-center justify-between px-2">
                <div className="h-content w-content flex flex-col justify-between items-center px-2">
                    <span className="text-sm font-semibold text-red-500">JUL</span>
                    <span className="text-2xl font-bold text-[#121212]">27</span>
                </div>
                <div className="h-full w-full flex flex-col items-start p-2 gap-2">
                    <span className="text-l w-full h-content font-semibold text-[#121212] flex-wrap grow-1">{title ? title : 'Event Name'}</span>
                    <span className="text-sm text-[#575757]">{description ? description : 'Event short description.'}</span>
                </div>
            </div>
        </a>
    )
}

export default EventCard;