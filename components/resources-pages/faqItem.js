'use client';
import { useState } from "react";
import { Icon } from "@iconify-icon/react";

const FaqItem = (props) => {

    const [accordionState, setAccordionState] = useState(false)

    return (
        <div className={`lg:w-[700px] h-fit  shadow-lg rounded-md flex flex-col justify-between relative overflow-hidden`}>
            <div className="w-full lg:h-16 flex items-center justify-between rounded-md overflow-hidden relative pl-12 z-40 bg-[#FCFCFC]">
                <div className="absolute h-full bg-pac-orange w-4 z-10 top-0 left-0" />
                <h3 className="text-xl text-[#121212] py-8 font-semibold">{props.question ? props.question : 'Question ?'}</h3>
                <button className="h-full w-16  bg-pac-orange text-5xl text-[#FCFCFC] flex items-center justify-center" onClick={() => { setAccordionState(!accordionState) }}>
                    <Icon icon="tabler:chevron-down" className={`block transition-all w-fit ${accordionState === false ? 'rotate-0' : 'rotate-180'}`} />
                </button>
            </div>
            <div className={` w-[1000px] bg-[#EFEFEF] px-8 z-0 rounded-md transition-all top-0 ease-in-out duration-300 ${accordionState === false ? ' max-h-0' : 'max-h-96'}`}>
                <p className="py-8 text-sm flow-root w-[1000px] text-[#373737]">
                    {props.answer ? props.answer : 'Answers.'}
                </p>
            </div>
        </div>
    )
}

export default FaqItem;