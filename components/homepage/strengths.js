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
        <div className="w-full h-fit lg:px-32 xs:px-4 relative flex flex-col items-center z-40 xs:pb-16">
            <div className="w-full h-fit lg:absolute xs:relative lg:-top-20 2xl:-top-28 flex xs:flex-col lg:flex-row items-center justify-center lg:gap-12 xs:gap-8 lg:px-32 xs:px-4">
                {strengths.map((s, index) => (
                    <div key={index} className="w-56 h-44 2xl:w-60 2xl:h-48 shadow-lg bg-gradient-to-b odd:from-[#FAA541] odd:to-[#EE6400] even:from-[#FCFCFC] even:to-[#EFEFEF] rounded-md flex justify-center gap-4 flex-col items-center p-4 odd:text-[#FCFCFC] even:text-[#EE6400] peer">
                        <Icon icon={s.icon} height={64} width={64} />
                        <p className="w-full h-fit text-center text-sm peer-odd:text-[#EFEFEF] peer-even:text-[#FAA541]">
                            {s.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className="w-full h-fit lg:px-32 xs:px-4 relative flex flex-col items-center z-40 xs:pb-16 lg:pb-0">
            <div className="w-full h-fit lg:absolute xs:relative lg:-top-20 2xl:-top-24 flex xs:flex-col lg:flex-row items-center justify-center lg:gap-12 xs:gap-8 lg:px-32 xs:px-4">
                {placeholder.map((s, index) => (
                    <div key={index} className="w-56 h-44 2xl:w-60 2xl:h-48 shadow-lg bg-gradient-to-b odd:from-[#FAA541] odd:to-[#EE6400] even:from-[#FCFCFC] even:to-[#EFEFEF] rounded-md flex justify-center gap-4 flex-col items-center p-4 odd:text-[#FCFCFC] even:text-[#EE6400] peer">
                        <Icon icon={s.icon} height={64} width={64} />
                        <p className="w-full h-fit text-center text-sm peer-odd:text-[#EFEFEF] peer-even:text-[#FAA541]">
                            {s.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}