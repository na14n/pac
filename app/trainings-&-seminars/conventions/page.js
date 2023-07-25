import { Hero, HeaderTrigger, EventsList, ListSorter, Sorter } from "@/components";

const Conventions = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full h-[33vh]">
                <HeaderTrigger>
                    <Hero heroType={'gray'} title={'Conventions'} />
                </HeaderTrigger>
            </div>
            <div className="w-full min-h-[67vh] h-content lg:px-32 py-8 flex flex-col gap-12 items-center">
                <Sorter />
                <EventsList sorting={'nameAsc'} eventType={'conventions'}/>
            </div>
        </div>
    )
}

export default Conventions;