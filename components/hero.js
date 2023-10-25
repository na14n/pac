import Image from "next/image";
import Button from "./button";
import { HeroSlider } from "./embla/heroSlider";

const Hero = ({ heroType, title, title2, subheading, buttonName, buttonLink, mediaUrl, mediaArray, buttonProp }) => {
    return (
        (heroType === 'slider') ? (
            <div className="w-hull h-full overflow-hidden">
                <HeroSlider media={mediaArray} />
            </div>
        ) : (heroType === 'video') ? (
            <div className="relative w-full h-full bg-[#171717] flex items-center overflow-hidden">
                <div className="z-10 lg:max-w-[900px] 2xl:max-w-fit 2xl:max-w-1/2 2xl:ml-48 lg:ml-32 xs:ml-8 sm:ml-16 py-10">
                    <h1 className="font-bold text-[#FCFCFC] lg:text-4xl 2xl:text-5xl xs:text-2xl uppercase">
                        {title ? title : 'Insert Heading'}
                    </h1>
                    <div className="font-bold text-nav-orange lg:text-4xl 2xl:text-5xl xs:text-2xl uppercase">
                        {title2 ? title2 : 'Insert Heading'}
                    </div>
                    <div className="text-[#F0F0F0]/90 font-regular mb-8 lg:max-w-[600px] 2xl:max-w-[750px] 2xl:text-lg xs:text-sm xs:max-w-[280px]">
                        {subheading ? subheading : 'Insert Subheading'}
                    </div>
                    <Button name={(buttonName ? buttonName : 'Insert Button Name')} type={1} link={buttonLink} />
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
            <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden z-30 test">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#3E3E3E]/90 to-[#b56012]/90 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-full h-full">
                    <Image fill={true} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1600/1600'} className='object-cover object-top' alt="dental-website-banner" />
                </div>
                <div className=" z-20 font-bold text-[#FCFCFC] lg:text-3xl xs:text-2xl text-center 2xl:text-4xl flex flex-col items-center justify-center gap-4 lg:mb-0 xs:mb-32 xs:px-4 test">
                    {title ? title : 'Insert Heading'}
                    <Button name={(buttonName ? buttonName : 'Insert Button Name')} type={1} link={buttonLink} color={buttonProp ? buttonProp : null} />
                </div>
            </div>
        ) : (heroType === 'centered1') ? (
            <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden z-30 ">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#F0892B]/90 via-[#3E3E3E]/90 to-[#3E3E3E]/90 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-full h-full">
                    <Image fill={true} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1600/1600'} className='object-contain' alt="dental-website-banner" />
                </div>
                <div className=" z-20 font-bold text-[#FCFCFC] lg:text-3xl xs:text-2xl flex flex-col items-center justify-center gap-4 lg:mb-0 xs:mb-32">
                    {title ? title : 'Insert Heading'}
                    <Button name={(buttonName ? buttonName : 'Insert Button Name')} type={1} link={buttonLink} />
                </div>
            </div>

        ) : (heroType === 'centered2') ? (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-30">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#F0892B]/60 via-[#3E3E3E]/60 to-[#3E3E3E]/60 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-full h-full">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} className='object-cover' alt="dental-website-banner" />
                </div>
                <div className="z-20 font-bold text-[#FCFCFC] text-3xl mt-16 flex flex-col items-center justify-center gap-4 pb-8">
                    {title ? title : 'Insert Heading'}
                    <Button name={(buttonName ? buttonName : 'Insert Button Name')} />
                </div>

            </div>
        ) : (heroType === 'centered3') ? (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-30 py-16 ">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#3E3E3E]/90 via-[#F0892B]/90 to-[#F0892B]/90 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-full h-full flex items-center justify-center">
                    <Image fill={true} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1600/1600'} className='object-cover' alt="dental-website-banner" />
                </div>
                <div className="z-20 flex flex-col items-center justify-center gap-2 ">
                    <span className="text-3xl uppercase font-bold text-[#FCFCFC] ">
                        {title ? title : 'Insert Title'}
                    </span>
                    <div className="w-[400px] h-[2px] bg-white rounded-md"></div>
                    <span className="text-[#EFEFEF] mb-4 text-center">
                        {subheading ? subheading : 'Insert Subheading'}
                    </span>
                    <Button name={(buttonName ? buttonName : 'Insert Button Name')} type={1} color={'white-green'} link={buttonLink} />
                </div>

            </div>
        ) : (heroType === 'order') ? (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-30 py-16 ">
                <div className="absolute z-0 t-0 w-full h-full flex items-center justify-center">
                    <Image fill={true} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1600/1600'} className='object-cover' alt="dental-website-banner" />
                </div>
                <div className="z-20 flex flex-col items-center w-fit justify-center gap-2 max-lg:px-4 ">
                    <span className="text-3xl max-lg:text-2xl uppercase font-bold text-[#FCFCFC] ">
                        {title ? title : 'Insert Title'}
                    </span>
                    <div className="w-full lg:w-[400px] h-[2px] bg-white rounded-md"></div>
                    <span className="text-[#EFEFEF] mb-4 text-center ">
                        {subheading ? subheading : 'Insert Subheading'}
                    </span>
                    <Button name={(buttonName ? buttonName : 'Insert Button Name')} type={1} color={'white-green'} link={buttonLink} />
                </div>

            </div>
        ) : (heroType === 'orange') ? (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-0">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#F0892B]/90 to-[#E66204]/90 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-full h-full">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} className='object-cover' alt="dental-website-banner" />
                </div>
                <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16 uppercase">
                    {title ? title : 'Insert Heading'}
                </div>
            </div>
        ) : (heroType === 'green') ? (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#077232]/90 via-[#077232]/90 to-[#063013]/90 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-auto h-auto">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} className='object-cover' alt="dental-website-banner" />
                </div>
                <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16 uppercase">
                    {title ? title : 'Insert Heading'}
                </div>
            </div>
        ) : (heroType === 'gray') ? (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#3E3E3E]/90 via-[#3E3E3E]/90 to-[#121212]/90 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-auto h-auto">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} className='object-cover' alt="dental-website-banner" />
                </div>
                <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16 uppercase">
                    {title ? title : 'Insert Heading'}
                </div>
            </div>
        ) : (heroType === 'side') ? (
            <div className="relative w-full h-full bg-[#171717] flex items-center overflow-hidden">
                <div className="absolute z-10 t-0 bg-gradient-to-b from-[#3E3E3E]/90 via-[#3E3E3E]/90 to-[#121212]/90 w-full h-full"></div>
                <div className="absolute z-0 t-0 w-auto h-auto">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} className='object-cover' alt="dental-website-banner" />
                </div>
                <div className="z-10 h-fit lg:max-w-[900px] 2xl:max-w-fit 2xl:max-w-1/2 2xl:ml-48 lg:ml-32 xs:ml-8 sm:ml-16 py-10">
                    <h1 className="font-bold text-[#FCFCFC] lg:text-4xl 2xl:text-5xl xs:text-2xl uppercase">
                        {title ? title : 'Insert Heading'}
                    </h1>
                    <div className={title2 ? 'font-bold text-nav-orange lg:text-4xl 2xl:text-5xl xs:text-2xl uppercase' : 'hidden'}>
                        {title2 ? title2 : 'Insert Heading'}
                    </div>
                    <div className="text-[#F0F0F0]/90 font-regular mb-8 lg:max-w-[600px] 2xl:max-w-[750px] 2xl:text-lg xs:text-sm xs:max-w-[280px]">
                        {subheading ? subheading : 'Insert Subheading'}
                    </div>
                </div>
            </div>
        ) : (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {/* <div className="absolute z-10 t-0 bg-gradient-to-b from-[#3E3E3E]/90 via-[#3E3E3E]/90 to-[#121212]/90 w-full h-full"></div> */}
                <div className="absolute z-0 t-0 w-auto h-auto">
                    <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} className='object-cover' alt="dental-website-banner" />
                </div>
                <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16">
                    {title ? title : 'Insert Heading'}
                </div>
            </div>
        )
    )
}

export default Hero;