import { Icon } from "@iconify-icon/react";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function DateCard({date, time, location}) {
    return (
        <div className="shrink-0 h-fit flex rounded-md overflow-hidden shadow-md">
            <div className="bg-pac-green flex flex-col items-center justify-center p-4 text-white">
                <h4 className="uppercase text-lg 2xl:text-xl">{monthNames[new Date(date).getMonth() + 1]}</h4>
                <h5 className="text-4xl 2xl:text-5xl font-bold">{new Date(date).getDate()}</h5>
            </div>
            <div className="bg-[#EFEFEF] flex flex-col justify-center p-2 gap-1 py-4 ">
                <span className="flex gap-2 items-center">
                    <Icon icon="mdi:calendar-month" className="text-2xl 2xl:text-3xl text-pac-green" />
                    <h5 className="font-bold text-[#373737] text-lg 2xl:text-xl">{new Date(date).getFullYear()}</h5>
                </span>
                <span className="flex gap-2 items-center">
                    <Icon icon="mdi:clock-time-five" className="text-2xl 2xl:text-3xl text-pac-green" />
                    <h5 className=" text-[#373737] text-lg 2xl:text-xl">{time}</h5>
                </span>
                <span className="flex gap-2 items-center">
                    <Icon icon="mdi:map-marker" className="text-2xl 2xl:text-3xl text-pac-green" />
                    <h5 className=" text-[#373737] text-lg 2xl:text-xl">{location}</h5>
                </span>
            </div>
        </div>
    )
}