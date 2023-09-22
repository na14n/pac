import { Hero, HeaderTrigger, EventsList, ListSorter, Sorter } from "@/components";
import TrPageTitle from "@/components/trainings-&-seminars/trainings/trPageTitle";
import TrsList from "@/components/trainings-&-seminars/trainings/trsList";

const Workshops = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full h-fit">
                <HeaderTrigger>
                    <TrPageTitle />
                </HeaderTrigger>
            </div>
            <div className="w-full min-h-[67vh] h-content lg:px-32 py-8 flex flex-col gap-12 items-center">
                {/* <Sorter /> */}
                {/* <EventsList sorting={'nameAsc'} eventType={'workshops'}/> */}
                <TrsList />
            </div>
        </div>
    )
}

export default Workshops;