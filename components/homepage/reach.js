export async function Reach() {
    return (
        <div className="w-full h-full relative z-40 px-32 flex flex-col items-center">
            <div className="h-48 w-content shadow-lg rounded-md overflow-hidden bg-gradient-to-b from-[#EF873C] to-[#D95B00] absolute -top-24 flex ">
                <div className="h-full lg:w-[400px] flex items-center justify-center overflow-hidden relative">
                    <div className="w-[150px] h-full bg-[#FCFCFC] absolute left-0">
                    </div>
                    <div className="w-[250px] h-[250px] bg-[#FCFCFC] absolute rotate-45">
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center pr-16 text-3xl uppercase font-bold z-40 text-pac-orange">
                        our reach
                        <div className="h-[2px] w-12 bg-pac-green rounded-md"></div>
                    </div>
                </div>
                <div className="h-full lg:w-[600px] grid grid-cols-2 px-8">
                    <div className="w-content h-full flex flex-col justify-center items-center z-40">
                        <div className="text-3xl font-semibold text-[#FCFCFC]">3,500</div>
                        <div className="text-[#EFEFEF] uppercase text-sm font-semibold">Products</div>
                    </div>
                    <div className="w-content h-full flex flex-col justify-center items-center z-40">
                        <div className="text-3xl font-semibold text-[#FCFCFC]">6,000</div>
                        <div className="text-[#EFEFEF] uppercase text-sm font-semibold">Active Customers</div>
                    </div>
                    <div className="w-content h-full flex flex-col justify-center items-center z-40">
                        <div className="text-3xl font-semibold text-[#FCFCFC]">35</div>
                        <div className="text-[#EFEFEF] uppercase text-sm font-semibold">Brands</div>
                    </div>
                    <div className="w-content h-full flex flex-col justify-center items-center z-40">
                        <div className="text-3xl font-semibold text-[#FCFCFC]">22,000</div>
                        <div className="text-[#EFEFEF] uppercase text-sm font-semibold">Social Followers</div>
                    </div>
                </div>
            </div>
        </div>
    )
}