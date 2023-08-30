const ViberBanner = () => {
    return (
        <div className="w-full h-fit py-8 lg:h-64 max-h-fit bg-gradient-to-l from-[#8f5db7] via-[#8f5db7] to-[#59267c] flex max-md:flex-col justify-around items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 gap-8 lg:gap-16 2xl:gap-24">
            <div className="flex flex-col gap-2">
                <div className=" text-xl md:text-3xl 2xl:text-4xl font-bold text-[#FCFCFC] max-md:text-center">Add us into your Viber Contacts</div>
                <div className="text-sm xl:text-lg text-[#e2d4e7] max-md:text-center">Your inquiries and questions will be answered immediately.</div>
            </div>
            <div className="w-fit h-fit items-center justify-center">
                <div className="w-44 h-44 rounded-md bg-white">
                </div>
            </div>
        </div>
    )
}

export default ViberBanner;