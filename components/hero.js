import Button from "./button";

const Hero = ({ heroType, title, subheading, buttonName, buttonLink }) => {
    return (
        (heroType === 1) ? (
            <div>
                (slider)
            </div>
        ) : (heroType === 2) ? (
            <div className="relative w-full h-[100vh] bg-[#171717] flex items-center">
                <div className="absolute z-0 t-0 w-full h-full">
                    
                </div>
                <div className="z-10 ml-16 p-10">
                    <div className="font-bold text-[#FCFCFC] text-4xl">{(title ? {title} : 'Insert Heading')}</div>
                    <div className="text-[#F0F0F0]/90 font-regular text-xl mb-8">{(subheading ? {subheading} : 'Insert Subheading')}</div>
                    <Button name={(buttonName ? {buttonName} : 'Insert Button Name')}/>
                </div>
            </div>
        ) : (
            <div className="relative z-0 w-full h-[100vh] bg-[#171717] flex items-center">
                <div className="absolute t-0 w-full h-full test"></div>
                <div className="z-0 w-72 ml-16 h-72 bg-white test text-black">(text & button)</div>
            </div>
        )
    )
}

export default Hero;