import { Hero, HeaderTrigger, EventsList, ListSorter, Sorter } from "@/components";

const Workshops = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full h-[33vh]">
                <HeaderTrigger>
                    <Hero heroType={'green'} title={'workshops'} />
                </HeaderTrigger>
            </div>
            <div className="w-full min-h-[67vh] h-content lg:px-32 py-8 flex flex-col gap-12 items-center">
                <Sorter />
                <EventsList sorting={'nameAsc'} eventType={'workshops'}/>
            </div>
        </div>
    )
}

export default Workshops;