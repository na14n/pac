import { Icon } from "@iconify-icon/react";

const TestimonialCard = () => {
    return (
        <div className="w-80 h-fit relative flex flex-col items-center 2xl:w-96">
            <div className="absolute -top-16 w-32 h-32 rounded-full bg-[#E1E1E1] shadow-md flex items-center justify-center overflow-hidden">
                (Image)
            </div>
            <div className="w-full h-72 2xl:h-96 px-4 py-4 bg-[#FCFCFC] rounded-md shadow-md">
                <div className="w-full h-fit text-pac-green">
                    <Icon icon="ri:double-quotes-l" width={48} height={48} />
                </div>
                <div className="w-full h-fit text-center text-sm 2xl:text-lg text-[#272727] mt-2">
                    I’m one of the first members of the first batch (Batch 1 BICON Implant Class) so happy ako sa service and cooperation, and you’ve got good staff as well as the dentists who helped us. The service and the friendship na nagkaroon na tayo ng personal… family …PROS-APAC family. Thanks to all the personnel and staff of PROS-APAC, I wish you all the best!
                </div>
            </div>
            <div className="w-full h-fit mt-2 2xl:mt-4 flex flex-col justify-center items-end">
                <div className="font-bold text-pac-green 2xl:text-xl">
                    Dr. Margaret Jugueta
                </div>
                <div className="text-sm 2xl:text-lg font-semibold text-[#373737]">
                    Cubao, Quezon City, Philipppines
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;