export default function EventCalendar(currDate, currLocation, upcDate, upcLocation, prevDate, prevLocation) {
    return (
        <div className="rounded-md shadow-md bg-white flex flex-col h-full w-full aspect-[3/4] overflow-hidden">
            <div className="w-full h-fit shrink-0 p-2 bg-pac-orange text-white font-bold text-2xl 2xl:text-3xl pl-6">
                Schedule
            </div>
            <div className="h-fit test w-full overflow-y-scroll">
                {prevDate ? prevDate.map((pd, index) => (
                    <div key={index}>{pd}</div>
                )) : <></>}
            </div>
        </div>
    )
}