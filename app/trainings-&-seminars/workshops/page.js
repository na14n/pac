import { Hero, HeaderTrigger, EventsList, ListSorter, Sorter } from "@/components";
import PageWrapper from "@/components/pageWrapper";
import TrPageTitle from "@/components/trainings-&-seminars/trainings/trPageTitle";
import TrsList from "@/components/trainings-&-seminars/trainings/trsList";

export const metadata = {
    title: 'PROS-APAC Workshops',
    description: 'Trainings & Workshops by PROS-APAC Corporation.',
    keywords: ['PROS-APAC', 'PROS-APAC Events', 'Philippines', 'Dental Workshop Philippines', 'Dental Workshop', 'Dental Training Philippines', 'Dentists Training Philippines', 'Dentists Training']
}

const Workshops = ({searchParams}) => {
    return (
        <PageWrapper>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full h-fit">
                    <HeaderTrigger>
                        <TrPageTitle />
                    </HeaderTrigger>
                </div>
                <div className="w-full min-h-[67vh] h-content lg:px-32 py-8 flex flex-col gap-12 items-center">
                    <Sorter current={searchParams.sort ? searchParams.sort : "DATE"} link={"/trainings-&-seminars/workshops?sort="}/>
                    <TrsList />
                </div>
            </div>
        </PageWrapper>
    )
}

export default Workshops;