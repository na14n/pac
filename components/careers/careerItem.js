'use client';
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import parse from "html-react-parser";

const CareerItem = ({ title, location, tags, requirement, description, benefits }) => {

    const [accordionState, setAccordionState] = useState(false)

    return (
        <div className={`lg:w-[700px] xs:w-full h-fit  shadow-lg rounded-md flex flex-col justify-between relative overflow-hidden`}>
            <div className="w-full h-14 flex gap-4 items-center justify-between rounded-md overflow-hidden relative z-40 bg-white">
                <div className="p-4 h-full aspect-square bg-[#777] shrink-0 z-10 flex items-center justify-center">
                    <Icon icon="mdi:account-circle-outline" className="text-white font-bold text-2xl" />
                </div>
                <div className="flex w-full gap-2 items-center">
                    <h3 className="text-lg uppercase h-full w-fit text-pac-orange py-4 font-bold">
                        {title ? title : 'Job Title'}
                    </h3>
                    <span className="flex w-fit gap-1 bg-pac-green text-white shrink-0 p-1 px-2 rounded-md items-center">
                        <Icon icon="mdi:map-marker" />
                        <h5 className="text-semibold text-sm">{location ? location : 'Job Location'}</h5>
                    </span>
                </div>
                <div className="flex gap-1 items-center w-fit px-4">

                    {tags ? tags.map((t, index) => (
                        <span key={index} className="flex gap-1 bg-nav-orange/25 text-pac-orange shrink-0 p-1 px-2 rounded-md items-center">
                            <h5 className="text-sm">{t ? t : 'tag'}</h5>
                        </span>
                    )) : <></>}
                </div>
                <button className="h-full w-16 text-5xl text-pac-orange px-2 flex items-center justify-center" onClick={() => { setAccordionState(!accordionState) }}>
                    <Icon icon="tabler:chevron-down" className={`block transition-all w-fit ${accordionState === false ? 'rotate-0' : 'rotate-180'}`} />
                </button>
            </div>
            <div className={` w-full bg-[#FCFCFC] px-8 z-0 rounded-md transition-all top-0 ease-in-out duration-300 overflow-y-auto scrollbar ${accordionState === false ? 'max-h-0' : 'max-h-96'}`}>
                <div className="mt-8 mb-4 text-sm flow-root w-full text-[#373737] list oranged_bold p h1 h2 h3`">
                    <h5 className="text-sm font-bold uppercase text-[#272727]">Requirements</h5>
                    <span>{parse(requirement)}</span>
                </div>
                <div className="mb-4 text-sm flow-root w-full text-[#373737] list oranged_bold p h1 h2 h3`">
                    <h5 className="text-sm font-bold uppercase text-[#272727]">Description</h5>
                    <span>{parse(description)}</span>
                </div>
                <div className="mb-12 text-sm flow-root w-full text-[#373737] list oranged_bold p h1 h2 h3`">
                    <h5 className="text-sm font-bold uppercase text-[#272727]">Benefits</h5>
                    <span>{parse(benefits)}</span>
                </div>
            </div>
        </div>
    )
}

export default CareerItem;