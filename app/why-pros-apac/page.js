import { Hero, HeaderTrigger, TestimonialCard} from "@/components";

const WhyProsApac = () => {
    return(
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full h-[40vh]">
                <HeaderTrigger>
                    <Hero heroType={'side'} title={'Why Pros-Apac'} subheading={'Know what people say about our company'} />
                </HeaderTrigger>
            </div>
            <div className="w-full min-h-[60vh] h-content lg:px-32 py-8 flex flex-col gap-12 items-center">
                <TestimonialCard type={'dedicated'} />
            </div>
        </div>
    )
}

export default WhyProsApac;