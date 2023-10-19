import { Icon } from "@iconify-icon/react";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function DateCard({ date, time, location, color }) {
    return (color === "orange" ?
        <div className="shrink-0 h-fit flex rounded-md overflow-hidden shadow-md">
            <div className="bg-pac-orange flex flex-col items-center justify-center p-4 text-white">
                <h4 className="uppercase text-2xl 2xl:text-3xl">{monthNames[new Date(date).getMonth() + 1]
                }</h4 >
                <h5 className="text-5xl 2xl:text-6xl font-bold">{new Date(date).getDate()}</h5>
            </div >
            <div className="bg-[#EFEFEF] flex flex-col justify-center p-4 gap-2 py-8 max-w-[30ch]">
                <span className="flex gap-2 items-center">
                    <Icon icon="mdi:calendar-month" className="text-3xl 2xl:text-4xl text-pac-orange" />
                    <h5 className="font-bold text-[#373737] text-xl 2xl:text-2xl">{new Date(date).getFullYear()}</h5>
                </span>
                <span className="flex gap-2 items-center">
                    <Icon icon="mdi:clock-time-five" className="text-3xl 2xl:text-4xl text-pac-orange" />
                    <h5 className=" text-[#373737] text-xl 2xl:text-2xl">{time}</h5>
                </span>
                <span className="flex gap-2 items-start">
                    <Icon icon="mdi:map-marker" className="text-3xl 2xl:text-4xl text-pac-orange" />
                    <h5 className=" text-[#373737] text-xl 2xl:text-2xl ">{location}</h5>
                </span>
            </div>
        </div >

        :

        <div className="shrink-0 h-fit flex rounded-md overflow-hidden shadow-md">
            <div className="bg-pac-green flex flex-col items-center justify-center p-4 text-white">
                <h4 className="uppercase text-2xl 2xl:text-3xl">{monthNames[new Date(date).getMonth() + 1]
                }</h4 >
                <h5 className="text-5xl 2xl:text-6xl font-bold">{new Date(date).getDate()}</h5>
            </div >
            <div className="bg-[#EFEFEF] flex flex-col justify-center p-4 gap-2 py-8 max-w-[30ch]">
                <span className="flex gap-2 items-center">
                    <Icon icon="mdi:calendar-month" className="text-3xl 2xl:text-4xl text-pac-green" />
                    <h5 className="font-bold text-[#373737] text-xl 2xl:text-2xl">{new Date(date).getFullYear()}</h5>
                </span>
                <span className="flex gap-2 items-center">
                    <Icon icon="mdi:clock-time-five" className="text-3xl 2xl:text-4xl text-pac-green" />
                    <h5 className=" text-[#373737] text-xl 2xl:text-2xl">{time}</h5>
                </span>
                <span className="flex gap-2 items-start">
                    <Icon icon="mdi:map-marker" className="text-3xl 2xl:text-4xl text-pac-green" />
                    <h5 className=" text-[#373737] text-xl 2xl:text-2xl ">{location}</h5>
                </span>
            </div>
        </div >
    )
}