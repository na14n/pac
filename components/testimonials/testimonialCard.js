import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import { pTagRemover } from "@/lib/helpers";
import parse from "html-react-parser"

const TestimonialCard = (props) => {
    return (props.type === 'dedicated') ? (
        <div className="w-72 h-96 rounded-md shadow-md group overflow-hidden relative flex justify-center items-center">
            <div className="absolute z-20 t-0 bg-gradient-to-b from-[#3E3E3E]/50 via-[#3E3E3E]/70 to-[#121212]/100  w-full h-full transition-all translate-y-96 group-hover:translate-y-0" />
            <div className="absolute z-10 t-0 w-72 h-96 flex justify-center items-center">
                <Image width={600} height={900} src={props.media ? props.media : 'https://picsum.photos/600/800'} alt="dental-website-banner" />
            </div>
            <div className="w-full h-full z-40 flex flex-col items-center justify-around py-4 translate-y-96 group-hover:translate-y-0 transition-all">
                <p className="text-[#EFEFEF] text-sm text-center px-4">
                    I’m one of the first members of the first batch (Batch 1 BICON Implant Class) so happy ako sa service and cooperation, and you’ve got good staff as well as the dentists who helped us. The service and the friendship na nagkaroon na tayo ng personal… family …PROS-APAC family. Thanks to all the personnel and staff of PROS-APAC, I wish you all the best!
                </p>
                <div className="flex flex-col items-center justify-center h-fit w-fit">
                    <h3 className="text-[#FCFCFC] text-2xl font-bold ">
                        Dr. Margaret Jugueta
                    </h3>
                    <h5 className="text-[#EFEFEF] text-sm font-semibold">
                        Cubao, Quezon City, Philipppines
                    </h5>
                </div>
            </div>
        </div>
    ) : (props.type === 'prostige') ? (
        <div className="w-80 h-72 p-8 bg-[#FCFCFC] rounded-md shadow-md relative flex flex-col items-center 2xl:w-[496px]">
            <div className="w-full h-fit text-pac-orange">
                <Icon icon="ri:double-quotes-l" width={56} height={56} />
            </div>
            <div className="w-full h-full italic text-sm 2xl:text-lg text-[#272727] mt-2">
                {parse(props?.message)}
            </div>
            <div className="w-full h-fit mt-2 2xl:mt-4 flex flex-col gap-0 items-start">
                <h4 className="font-bold text-[#121212] 2xl:text-xl">
                    {props?.name}
                </h4>
                <h5 className="text-sm 2xl:text-lg text-[#575757]">
                    {props?.clinic}
                </h5>
                <h5 className="text-sm 2xl:text-lg text-[#575757]">
                    {props?.location}
                </h5>
            </div>
        </div>
    ) : (
        <div className="w-80 h-fit grow relative flex flex-col items-center 2xl:w-96">
            <div className="absolute -top-16 w-32 h-32 rounded-full bg-[#E1E1E1] shadow-md flex items-center justify-center overflow-hidden">
                <Image fill src={props?.data?.image} />
            </div>
            <div className="w-full h-fit-content px-4 py-4 bg-[#FCFCFC] rounded-md shadow-md">
                <div className="w-full h-fit text-pac-green">
                    <Icon icon="ri:double-quotes-l" width={48} height={48} />
                </div>
                <div className="w-full h-fit text-center text-sm text-[#272727] mt-2">
                    {/* {pTagRemover(props?.data?.message)} */}
                    {parse(props?.data?.message)}
                </div>
            </div>
            <div className="w-full h-fit mt-2 2xl:mt-4 flex flex-col justify-center items-end">
                <div className="font-bold text-pac-green 2xl:text-xl">
                    {props?.data?.name}
                </div>
                <div className="text-sm 2xl:text-lg text-[#373737]">
                    {pTagRemover(props?.data?.location)}
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;