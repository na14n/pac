import { HeaderTrigger, Hero, Button } from "@/components"


const SalesAgentSearch = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className='w-full h-[33vh]'>
                <HeaderTrigger>
                    <Hero heroType={'orange'} title={'Search a Sales Agent'} />
                </HeaderTrigger>
            </div>
            <div className='w-full lg:min-h-[20vh] max-h-fit  bg-[#F1F1F1]'>
            </div>
        </div>
    )
}

export default SalesAgentSearch;