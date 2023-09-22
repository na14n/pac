import { Hero, HeaderTrigger, EventsList, ListSorter, Sorter } from "@/components";
import SeminarsList from "@/components/trainings-&-seminars/seminars/seminarsList";
import SeminarsPageTitle from "@/components/trainings-&-seminars/seminars/seminarsPageTitle";

const Seminars = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full h-fit">
                <HeaderTrigger>
                    {/* <Hero heroType={'orange'} title={'Seminars'} /> */}
                    <SeminarsPageTitle />
                </HeaderTrigger>
            </div>
            <div className="w-full min-h-[67vh] h-content lg:px-32 py-8 flex flex-col gap-12 items-center">
                {/* <Sorter />
                <EventsList sorting={'nameAsc'} eventType={'seminars'}/> */}
                <SeminarsList />
            </div>
        </div>
    )
}

export default Seminars;