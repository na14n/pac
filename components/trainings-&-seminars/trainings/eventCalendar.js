import { Icon } from "@iconify-icon/react"
import { formatWordPressDate } from "@/lib/helpers"

export default function EventCalendar({ data }) {
    return (
        <div className="rounded-md shrink-0 shadow-md bg-white flex flex-col w-72 md:w-96 2xl:w-[28rem] h-full aspect-[3/4] overflow-hidden">
            <div className="w-full h-fit shrink-0 p-2 bg-pac-orange flex items-center text-white font-bold text-2xl 2xl:text-3xl">
                <Icon icon="mdi:calendar-month" className="mx-2 text-3xl 2xl:text-4xl" />
                Schedule
            </div>
            <div className="h-fit w-full overflow-y-auto scrollbar p-2">
                <div className="bg-nav-orange/25 w-full h-fit p-2 mb-1 rounded-sm flex justify-between items-center">
                    <div className="w-2 h-2  shrink-0 mr-2 rounded-full bg-pac-orange" />
                    <h5 className="uppercase font-bold text-sm 2xl:text-lg text-[#121212] w-full">
                        {formatWordPressDate(data.workshop.currentEventDate)}
                    </h5>
                    <h5 className="uppercase font-bold text-xs 2xl:text-sm text-[#121212] w-fit shrink-0">
                        {data.workshop.currentEventLocation}
                    </h5>
                    <Icon icon="material-symbols:location-on-rounded" className="text-xs 2xl:text-sm ml-1 text-pac-orange shrink-0" />
                </div>
                {data.workshop.upcomingEventsDate ? data.workshop.upcomingEventsDate.map((pd, index) => (
                    <div key={index} className="bg-nav-orange/25 w-full h-fit p-2 mb-1 rounded-sm flex justify-between items-center">
                        <div className="w-2 h-2  shrink-0 mr-2 rounded-full bg-pac-orange" />
                        <h5 className="uppercase font-semibold text-sm 2xl:text-lg text-[#474747] w-full">
                            {pd}
                        </h5>
                        <h5 className="uppercase font-semibold text-xs 2xl:text-sm text-[#474747] w-fit shrink-0">
                            {data.workshop.upcomingEventsLocation[index]}
                        </h5>
                        <Icon icon="material-symbols:location-on-rounded" className="text-xs 2xl:text-sm ml-1 text-pac-orange shrink-0" />
                    </div>
                )) : <></>}
                {data.workshop.eventsDate ? data.workshop.eventsDate.map((pd, index) => (
                    <div key={index} className="bg-[#EFEFEF] w-full h-fit p-2 mb-1 rounded-sm flex justify-between items-center">
                        <div className="w-2 h-2  shrink-0 mr-2 rounded-full bg-[#575757]" />
                        <h5 className="uppercase font-semibold text-sm 2xl:text-lg text-[#474747] w-full">
                            {pd}
                        </h5>
                        <h5 className="uppercase font-semibold text-xs 2xl:text-sm text-[#474747] w-fit shrink-0">
                            {data.workshop.eventsLocation[index]}
                        </h5>
                        <Icon icon="material-symbols:location-on-rounded" className="text-xs 2xl:text-sm ml-1 text-[#474747] shrink-0" />
                    </div>
                )) : <></>}
            </div>
        </div>
    )
}