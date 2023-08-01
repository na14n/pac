import { Icon } from "@iconify-icon/react";

export async function Strengths() {
    return (
        <div className="w-full px-32 relative flex flex-col items-center z-40">
            <div className="w-full h-content absolute -top-20 flex items-center justify-between gap-12 px-32">
                <div className="w-56 h-44 shadow-lg bg-gradient-to-b from-[#FAA541] to-[#EE6400] rounded-md flex justify-center gap-4 flex-col items-center p-4 text-[#FCFCFC]">
                    <Icon icon="ant-design:rise-outlined" height={64} width={64} />
                    <div className="w-full h-content text-center text-sm">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '}</div>
                </div>
                <div className="w-56 h-44 shadow-lg bg-gradient-to-b from-[#FAA541] to-[#EE6400] rounded-md flex justify-center gap-4 flex-col items-center p-4 text-[#FCFCFC]">
                    <Icon icon="tabler:book" height={64} width={64} />
                    <div className="w-full h-content text-center text-sm">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '}</div>
                </div>
                <div className="w-56 h-44 shadow-lg bg-gradient-to-b from-[#FAA541] to-[#EE6400] rounded-md flex justify-center gap-4 flex-col items-center p-4 text-[#FCFCFC]">
                    <Icon icon="solar:cup-first-linear" height={64} width={64} />
                    <div className="w-full h-content text-center text-sm">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '}</div>
                </div>
                <div className="w-56 h-44 shadow-lg bg-gradient-to-b from-[#FAA541] to-[#EE6400] rounded-md flex justify-center gap-4 flex-col items-center p-4 text-[#FCFCFC]">
                    <Icon icon="ant-design:field-time-outlined" height={64} width={64} />
                    <div className="w-full h-content text-center text-sm">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '}</div>
                </div>
            </div>
        </div>
    )
}