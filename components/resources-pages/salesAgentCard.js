// 'use client';
import Image from "next/image";
import { Icon } from "@iconify-icon/react";

const SalesAgentCard = (props) => {
    return (
        <div className="relative w-72 h-96  rounded-md bg-[#FCFCFC] overflow-hidden shadow-md border-2 border-[#575757]/20 flex flex-col justify-end">
            <div className="z-20 w-72 h-96 absolute top-0 left-0 bg-gradient-to-t from-[#01390E] via-[#01390E]/30 to-transparent" />
            <div className="z-0 w-72 h-96 absolute top-0 left-0">
                <Image fill={true} src={`https://picsum.photos/seed/${props.i.name}/600/800.webp`} alt="pros-apac-sales-agent" />
            </div>
            <div className="h-fit w-full px-6 py-3 flex flex-col items-start z-40 ">
                <span className="pb-2">
                    <h2 className="text-[#FCFCFC] font-bold text-lg">{props.i.name}</h2>
                    <h5 className="text-[#EFEFEF] text-sm capitalize">{props.i.productDepartments.nodes[0].name}</h5>
                </span>
                <span className="flex gap-2 items-center w-fit h-fit text-[#EFEFEF]">
                    <Icon icon="mdi:cellphone" width="24" height="24" className='pr-1' />
                    <h5 className="text-sm">{props.i.mobileNumber}</h5>
                </span>
                <span className="flex gap-2 items-center w-fit h-fit text-[#EFEFEF]">
                    <Icon icon="mdi:email" width="24" height="24" className='pr-1' />
                    <h5 className="text-sm">{props.i.email}</h5>
                </span>
            </div>
        </div>
    )
}

export default SalesAgentCard;