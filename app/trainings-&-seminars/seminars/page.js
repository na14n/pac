import { Hero, HeaderTrigger, EventsList, ListSorter, Sorter } from "@/components";
import PageWrapper from "@/components/pageWrapper";
import SeminarsList from "@/components/trainings-&-seminars/seminars/seminarsList";
import SeminarsPageTitle from "@/components/trainings-&-seminars/seminars/seminarsPageTitle";

export const metadata = {
    title: 'PROS-APAC Seminars',
    description: 'Seminars by PROS-APAC Corporation.',
    keywords: ['PROS-APAC', 'PROS-APAC Events', 'Philippines', ' Dental Seminars Philippines']
}

const Seminars = ({searchParams}) => {
    return (
        <PageWrapper>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full h-fit">
                    <HeaderTrigger>
                        <SeminarsPageTitle />
                    </HeaderTrigger>
                </div>
                <div className="w-full min-h-[67vh] h-content lg:px-32 py-8 flex flex-col gap-12 items-center">
                    <Sorter current={searchParams.sort ? searchParams.sort : "DATE"} link={"/trainings-&-seminars/seminars?sort="}/>
                    <SeminarsList />
                </div>
            </div>
        </PageWrapper>
    )
}

export default Seminars;