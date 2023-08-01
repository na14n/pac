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
                    <div key={index} className="w-56 h-44 2xl:w-96 2xl:h-72 shadow-lg bg-gradient-to-b from-[#FAA541] to-[#EE6400] rounded-md flex justify-center gap-4 flex-col items-center p-4 text-[#FCFCFC]">
                        <Image src={s.link} height={64} width={64} alt="pros-apac-strengths"/>
                        <div className="w-full h-content text-center text-sm 2xl:text-lg">
                            {s.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className="w-full px-32 relative flex flex-col items-center z-40">
            <div className="w-full h-content absolute -top-20 2xl:-top-28 flex items-center justify-center gap-12 px-32">
                {placeholder.map((s, index) => (
                    <div key={index} className="w-56 h-44 2xl:w-64 2xl:h-56 shadow-lg bg-gradient-to-b from-[#FAA541] to-[#EE6400] rounded-md flex justify-center gap-4 2xl:gap-8 flex-col items-center p-4 text-[#FCFCFC]">
                        <Icon icon={s.icon} height={64} width={64} />
                        <div className="w-full h-content text-center text-sm">
                            {s.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}