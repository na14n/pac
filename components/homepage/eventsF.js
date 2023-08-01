import EventTypeCard from "../trainings-&-seminars/eventTypeCard"

export async function EventsF() {
    return (
        <div className="w-full max-h-fit bg-[#EFEFEF] flex flex-col justify-between items-center lg:px-32 2xl:px-48 lg:pb-16 2xl:py-32 lg:gap-16 2xl:gap-32">
            <div className="text-3xl text-[#272727] font-semibold lg:max-w-[500px] text-center">
                We also offer <span className="font-bold text-pac-green">special events</span> tailored towards dentists
            </div>
            <div className="w-full h-fit flex items-center justify-center gap-8 2xl:gap-16">
                <EventTypeCard width={64} height={80} title={'Workshops'} />
                <EventTypeCard width={64} height={80} title={'seminars'} />
                <EventTypeCard width={64} height={80} title={'conventions'} />
            </div>
        </div>
    )
}