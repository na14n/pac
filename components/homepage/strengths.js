import { Icon } from "@iconify-icon/react";
import Image from "next/image";



export async function Strengths({ strengths }) {

    const placeholder = [
        {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            icon: 'ant-design:rise-outlined',
            link: '',
        },
        {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            icon: 'tabler:book',
            link: '',
        },
        {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            icon: 'solar:cup-first-linear',
            link: '',
        },
        {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            icon: 'ant-design:field-time-outlined',
            link: '',
        },
    ]

    return (strengths) ? (
        <div className="w-full px-32 relative flex flex-col items-center z-40">
            <div className="w-full h-content absolute -top-20 flex items-center justify-between gap-12 px-32">
                {strengths.map((s, index) => (
                    <div key={index} className="w-56 h-44 2xl:w-96 2xl:h-72 shadow-lg bg-gradient-to-b odd:from-[#FAA541] odd:to-[#EE6400] even:from-[#FCFCFC] even:to-[#EFEFEF] rounded-md flex justify-center gap-4 flex-col items-center p-4 odd:text-[#FCFCFC] even:text-[#EE6400] peer">
                        <Image src={s.link} height={64} width={64} alt="pros-apac-strengths" />
                        <p className="w-full h-content text-center text-sm 2xl:text-lg peer-odd:text-[#EFEFEF] peer-even:text-[#FAA541]">
                            {s.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className="w-full px-32 relative flex flex-col items-center z-40">
            <div className="w-full h-content absolute -top-20 2xl:-top-28 flex items-center justify-center gap-12 px-32">
                {placeholder.map((s, index) => (
                    <div key={index} className="w-56 h-44 2xl:w-96 2xl:h-72 shadow-lg bg-gradient-to-b odd:from-[#FAA541] odd:to-[#EE6400] even:from-[#FCFCFC] even:to-[#EFEFEF] rounded-md flex justify-center gap-4 flex-col items-center p-4 odd:text-[#FCFCFC] even:text-[#EE6400] peer">
                        <Icon icon={s.icon} height={64} width={64} />
                        <p className="w-full h-content text-center text-sm peer-odd:text-[#EFEFEF] peer-even:text-[#FAA541]">
                            {s.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}