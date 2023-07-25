import { Hero, HeaderTrigger, EventsList } from "@/components";

const Workshops = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full h-[33vh]">
                <HeaderTrigger>
                    <Hero heroType={'green'} title={'workshops'} />
                </HeaderTrigger>
            </div>
            <div className="w-full h-[100vh] lg:px-32 py-8">
                <EventsList />
            </div>
        </div>
    )
}

export default Workshops;