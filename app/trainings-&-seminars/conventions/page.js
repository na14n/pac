import { Hero, HeaderTrigger, EventsList, ListSorter, Sorter } from "@/components";
import PageWrapper from "@/components/pageWrapper";
import ConsList from "@/components/trainings-&-seminars/conventions/consList";
import ConventionsPageTitle from "@/components/trainings-&-seminars/conventions/conventionsPageTitle";

export const metadata = {
    title: 'PROS-APAC Conventions',
    description: 'Conventions attended by PROS-APAC Corporation.',
    keywords: ['PROS-APAC', 'PROS-APAC Events', 'Philippines', ' Dental Conventions Philippines']
}

const Conventions = () => {
    return (
        <PageWrapper>
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
        </PageWrapper>
    )
}

export default Conventions;