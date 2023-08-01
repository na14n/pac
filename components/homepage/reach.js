export async function Reach({ type }) {
    return (type === 'green') ? (
        <div className="w-full h-full relative z-40 px-32 flex flex-col items-center">
            <div className="h-48 2xl:h-56 w-content shadow-lg rounded-md overflow-hidden bg-gradient-to-b from-pac-green to-nav-green absolute -top-24 2xl:-top-28 flex ">
                <div className="h-full lg:w-[400px] 2xl:w-[600px] flex items-center justify-center overflow-hidden relative">
                    <div className="w-[150px] 2xl:w-[350px] h-full bg-[#FCFCFC] absolute left-0">
                    </div>
                    <div className="w-[250px] h-[250px] 2xl:w-[400px] 2xl:h-[400px] bg-[#FCFCFC] absolute rotate-45">
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center pr-16 text-3xl 2xl:text-4xl uppercase font-bold z-40 text-pac-orange">
                        our reach
                        {/* <div className="h-[2px] w-12 bg-pac-green rounded-md"></div> */}
                    </div>
                </div>
                <div className="h-full lg:w-[600px] 2xl:w-[600px] grid grid-cols-2 px-8 2xl:px-0 2xl:pr-8">
                    <div className="w-content h-full flex flex-col justify-center items-center 2xl:gap-1 z-40">
                        <div className="text-3xl 2xl:text-5xl font-semibold text-[#FCFCFC]">3,500</div>
                        <div className="text-[#EFEFEF] uppercase text-sm 2xl:text-lg font-semibold">Products</div>
                    </div>
                    <div className="w-content h-full flex flex-col justify-center items-center 2xl:gap-1 z-40">
                        <div className="text-3xl 2xl:text-5xl font-semibold text-[#FCFCFC]">6,000</div>
                        <div className="text-[#EFEFEF] uppercase text-sm 2xl:text-lg font-semibold">Active Customers</div>
                    </div>
                    <div className="w-content h-full flex flex-col justify-center items-center 2xl:gap-1 z-40">
                        <div className="text-3xl 2xl:text-5xl font-semibold text-[#FCFCFC]">35</div>
                        <div className="text-[#EFEFEF] uppercase text-sm 2xl:text-lg font-semibold">Brands</div>
                    </div>
                    <div className="w-content h-full flex flex-col justify-center items-center 2xl:gap-1 z-40">
                        <div className="text-3xl 2xl:text-5xl font-semibold text-[#FCFCFC]">22,000</div>
                        <div className="text-[#EFEFEF] uppercase text-sm 2xl:text-lg font-semibold">Social Followers</div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="w-full h-full relative z-40 px-32 flex flex-col items-center">
            <div className="h-48 2xl:h-56 w-content shadow-lg rounded-md overflow-hidden bg-gradient-to-b from-[#EF873C] to-[#D95B00] absolute -top-24 2xl:-top-28 flex ">
                <div className="h-full lg:w-[400px] 2xl:w-[600px] flex items-center justify-center overflow-hidden relative">
                    <div className="w-[150px] 2xl:w-[350px] h-full bg-[#FCFCFC] absolute left-0">
                    </div>
                    <div className="w-[250px] h-[250px] 2xl:w-[400px] 2xl:h-[400px] bg-[#FCFCFC] absolute rotate-45">
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center pr-16 text-3xl 2xl:text-4xl uppercase font-bold z-40 text-pac-orange">
                        our reach
                        {/* <div className="h-[2px] w-12 bg-pac-green rounded-md"></div> */}
                    </div>
                </div>
                <div className="h-full lg:w-[600px] 2xl:w-[600px] grid grid-cols-2 px-8 2xl:px-0 2xl:pr-8">
                    <div className="w-content h-full flex flex-col justify-center items-center 2xl:gap-1 z-40">
                        <div className="text-3xl 2xl:text-5xl font-semibold text-[#FCFCFC]">3,500</div>
                        <div className="text-[#EFEFEF] uppercase text-sm 2xl:text-lg font-semibold">Products</div>
                    </div>
                    <div className="w-content h-full flex flex-col justify-center items-center 2xl:gap-1 z-40">
                        <div className="text-3xl 2xl:text-5xl font-semibold text-[#FCFCFC]">6,000</div>
                        <div className="text-[#EFEFEF] uppercase text-sm 2xl:text-lg font-semibold">Active Customers</div>
                    </div>
                    <div className="w-content h-full flex flex-col justify-center items-center 2xl:gap-1 z-40">
                        <div className="text-3xl 2xl:text-5xl font-semibold text-[#FCFCFC]">35</div>
                        <div className="text-[#EFEFEF] uppercase text-sm 2xl:text-lg font-semibold">Brands</div>
                    </div>
                    <div className="w-content h-full flex flex-col justify-center items-center 2xl:gap-1 z-40">
                        <div className="text-3xl 2xl:text-5xl font-semibold text-[#FCFCFC]">22,000</div>
                        <div className="text-[#EFEFEF] uppercase text-sm 2xl:text-lg font-semibold">Social Followers</div>
                    </div>
                </div>
            </div>
        </div>
    )
}