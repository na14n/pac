import Image from "next/image";

const BrandLogo = (props) => {
    return (
        <div className="w-full h-full relative flex flex-col justify-center items-center">
            <div className="w-48 h-48 2xl:w-64 2xl:h-64 absolute bg-[#FCFCFC] shadow-md z-20 rounded-md p-2 flex items-center justify-center">
                <Image src={props.media} alt="partner-brand-logo" width={1000} height={1000} />
            </div>
        </div>
    )
} 

export default BrandLogo;