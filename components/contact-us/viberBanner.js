const ViberBanner = () => {
    return (
        <div className="w-full lg:h-64 max-h-fit bg-gradient-to-l from-[#8f5db7] via-[#8f5db7] to-[#59267c] flex justify-around items-center lg:px-32 2xl:px-48 lg:gap-16 2xl:gap-24">
            <div className="flex flex-col gap-2">
                <div className="text-3xl 2xl:text-4xl font-bold text-[#FCFCFC]">Add us into your Viber Contacts</div>
                <div className="text-lg text-[#e2d4e7]">Your inquiries and questions will be answered immediately.</div>
            </div>
            <div className="w-fit h-fit items-center justify-center">
                <div className="w-44 h-44 rounded-md bg-white">
                </div>
            </div>
        </div>
    )
}

export default ViberBanner;