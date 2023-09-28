'use client';
import { useState } from "react";
import { Icon } from "@iconify-icon/react";

const FaqItem = (props) => {

    const [accordionState, setAccordionState] = useState(false)

    return (
        <div className={`lg:w-[700px] xs:w-full h-fit  shadow-lg rounded-md flex flex-col justify-between relative overflow-hidden`}>
            <div className="w-full h-fit flex items-center justify-between rounded-md overflow-hidden relative pl-12 z-40 bg-[#FCFCFC]">
                <div className="absolute h-full bg-pac-orange w-4 z-10 top-0 left-0" />
                <h3 className="text-lg h-full w-fit text-[#121212] py-4 font-semibold">{props ? props?.question : 'Question'}</h3>
                <button className="h-full w-16 text-5xl text-pac-orange px-2 flex items-center justify-center" onClick={() => { setAccordionState(!accordionState) }}>
                    <Icon icon="tabler:chevron-down" className={`block transition-all w-fit ${accordionState === false ? 'rotate-0' : 'rotate-180'}`} />
                </button>
            </div>
            <div className={` w-full bg-[#EFEFEF] px-8 z-0 rounded-md transition-all top-0 ease-in-out duration-300 ${accordionState === false ? ' max-h-0' : 'max-h-96'}`}>
                <div className="py-8 text-sm flow-root w-full text-[#373737]`">
                    {props.answer ? props.answer : 'Answers.'}
                </div>
            </div>
        </div>
    )
}

export default FaqItem;