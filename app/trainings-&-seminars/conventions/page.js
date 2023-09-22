import { Hero, HeaderTrigger, EventsList, ListSorter, Sorter } from "@/components";
import ConsList from "@/components/trainings-&-seminars/conventions/consList";
import ConventionsPageTitle from "@/components/trainings-&-seminars/conventions/conventionsPageTitle";

const Conventions = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full h-fit">
                <HeaderTrigger>
                    <ConventionsPageTitle />
                </HeaderTrigger>
            </div>
            <div className="w-full min-h-[67vh] h-content lg:px-32 py-8 flex flex-col gap-12 items-center">
                {/* <Sorter /> */}
                {/* <EventsList sorting={'nameAsc'} eventType={'conventions'} /> */}
                <ConsList />
            </div>
        </div>
    )
}

export default Conventions;