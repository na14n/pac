import Image from "next/image";
import Button from "./button";
import { HeroSlider } from "./embla/heroSlider";

const Hero = ({ heroType, title, title2, subheading, buttonName, buttonLink, mediaUrl, mediaArray }) => {
    return (
        (heroType === 'slider') ? (
            <div className="w-hull h-full overflow-hidden">
                <HeroSlider media={mediaArray} />
            </div>
        ) : (heroType === 'video') ? (
            <div className="relative w-full h-full bg-[#171717] flex items-center overflow-hidden">
                <div className="z-10 max-w-[900px] lg:ml-32 xs:ml-8 sm:ml-16 py-10">
                    <div className="font-bold text-[#FCFCFC] text-4xl uppercase">
                        {title ? title : 'Insert Heading'}
                    </div>
                    <div className="font-bold text-nav-orange text-4xl uppercase">
                        {title2 ? title2 : 'Insert Heading'}
                    </div>
                    <div className="text-[#F0F0F0]/90 font-regular mb-8 max-w-[600px]">
                        {subheading ? subheading : 'Insert Subheading'}
                    </div>
                    <Button name={(buttonName ? buttonName : 'Insert Button Name')} />
                </div>
                <div className="absolute z-0 t-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        className="z-10 w-auto min-w-full min-h-full max-w-none"
                    >
                        <source
                            src={mediaUrl ? mediaUrl : "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
        ) : (heroType === 'centered') ? (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-30">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#3E3E3E]/90 via-[#3E3E3E]/90 to-[#F0892B]/60 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-full h-full">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} alt="dental-website-banner" />
                </div>
                <div className="z-20 font-bold text-[#FCFCFC] text-3xl mt-16 flex flex-col items-center justify-center gap-4 pb-8">
                    {title ? title : 'Insert Heading'}
                    <Button name={(buttonName ? buttonName : 'Insert Button Name')} />
                </div>
                
            </div>
        ) : (heroType === 'centered2') ? (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-30">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#F0892B]/60 via-[#3E3E3E]/60 to-[#3E3E3E]/60 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-full h-full">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} alt="dental-website-banner" />
                </div>
                <div className="z-20 font-bold text-[#FCFCFC] text-3xl mt-16 flex flex-col items-center justify-center gap-4 pb-8">
                    {title ? title : 'Insert Heading'}
                    <Button name={(buttonName ? buttonName : 'Insert Button Name')} />
                </div>
                
            </div>
        ) : (heroType === 'orange') ? (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#F0892B]/90 to-[#E66204]/90 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-full h-full">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} alt="dental-website-banner" />
                </div>
                <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16 uppercase">
                    {title ? title : 'Insert Heading'}
                </div>
            </div>
        ) : (heroType === 'green') ? (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#077232]/90 via-[#077232]/90 to-[#063013]/90 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-auto h-auto">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} alt="dental-website-banner" />
                </div>
                <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16 uppercase">
                    {title ? title : 'Insert Heading'}
                </div>
            </div>
        ) : (heroType === 'gray') ? (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#3E3E3E]/90 via-[#3E3E3E]/90 to-[#121212]/90 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-auto h-auto">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} alt="dental-website-banner" />
                </div>
                <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16 uppercase">
                    {title ? title : 'Insert Heading'}
                </div>
            </div>
        ) : (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {/* <div className="absolute z-10 t-0 bg-gradient-to-b from-[#3E3E3E]/90 via-[#3E3E3E]/90 to-[#121212]/90 w-full h-full"></div> */}
                <div className="absolute z-0 t-0 w-auto h-auto">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} alt="dental-website-banner" />
                </div>
                <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16">
                    {title ? title : 'Insert Heading'}
                </div>
            </div>
        )
    )
}

export default Hero;