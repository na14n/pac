'use client';
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";

const SalesAgentCard = (props) => {

    const [hovering, setHovering] = useState(false)

    return (
        <div className="relative flex flex-col justify-end">
            <div className={`cursor-pointer absolute top-2 right-10 z-[45]  h-fit rounded-sm shadow-md bg-white border-[#575757]/60 flex flex-col justify-center p-1 ${hovering === false ? `hidden` : ''}`}>
                <p className="text-xs text-[#373737] max-w-[48ch]">
                    {props?.i?.specificLocations}
                </p>
            </div>
            <div className="relative w-64 aspect-[3/4] overflow-hidden rounded-md bg-[#FCFCFC] shadow-md border-2 border-[#575757]/20 flex flex-col justify-end">
                <div className="cursor-pointer absolute top-0 right-0 z-40 w-8 rounded-bl-md shadow-md square bg-pac-orange opacity-50 flex flex-col items-center justify-center" onMouseEnter={() => setHovering(!hovering)} onMouseLeave={() => setHovering(!hovering)}>
                    <Icon icon="mdi:information" className='text-xl text-white' />
                </div>
                <div className="w-full aspect-[3/4] absolute top-0 left-0 z-10">
                    <Image src={props?.i?.image?.sourceUrl} fill={true} className="object-cover object-center" />
                </div>
                <div className="z-20 w-64 aspect-[3/4]  absolute top-0 left-0 bg-gradient-to-t from-[#01390E] via-[#01390E]/25 to-transparent" />
                <div className="h-fit w-full px-6 py-3 flex flex-col items-start z-40 ">
                    <div className="pb-2">
                        <h2 className="text-[#FCFCFC] font-bold">{props?.i?.name}</h2>
                        <div className="flex gap-x-2 flex-wrap">
                            <h5 className="text-[#EFEFEF] text-sm capitalize">
                                {props?.i?.position ? props?.i?.position : ``},
                            </h5>
                            {props?.i?.productDepartments?.nodes?.length > 1 ? (
                                <h5 className="text-[#EFEFEF] text-sm capitalize">
                                    Multilines
                                </h5>
                            ) : (
                                <div className="flex gap-2">
                                    {props?.i?.productDepartments ? props?.i?.productDepartments?.nodes.map((d, i) => (
                                        <h5 key={i} className="text-[#EFEFEF] text-sm capitalize">
                                            {d.name}
                                        </h5>
                                    )) : ``}
                                </div>
                            )}
                        </div>



                    </div>
                    <span className="flex gap-2 items-center w-fit h-fit text-[#EFEFEF]">
                        <Icon icon="mdi:cellphone" width="24" height="24" className='pr-1' />
                        <h5 className="text-sm">{props?.i?.mobileNumber}</h5>
                    </span>
                    <span className="flex gap-2 items-center w-fit h-fit text-[#EFEFEF]">
                        <Icon icon="mdi:email" width="24" height="24" className='pr-1' />
                        <h5 className="text-sm">{props?.i?.email}</h5>
                    </span>
                </div>
            </div >
        </div >
    )
}

export default SalesAgentCard;