export async function Reach({ type, props }) {

    const placeholder = [
        {
            title: 'products',
            description: '3,500'
        },
        {
            title: 'active customers',
            description: '8,000'
        },
        {
            title: 'brands',
            description: '35'
        },
        {
            title: 'social followers',
            description: '22,000'
        },
    ]

    return (props) ? (
        <div className="w-full h-full relative z-40 px-32 flex flex-col items-center">
            <div className={`h-48 2xl:h-64 w-content shadow-lg rounded-md overflow-hidden bg-gradient-to-b ${type === 'orange' ? ' from-[#EF873C] to-[#D95B00]' : 'from-pac-green to-nav-green'} absolute -top-24 2xl:-top-28 flex`}>
                <div className="h-full lg:w-[400px] 2xl:w-[600px] flex items-center justify-center overflow-hidden relative">
                    <div className="w-[150px] 2xl:w-[350px] h-full bg-[#FCFCFC] absolute left-0">
                    </div>
                    <div className="w-[250px] h-[250px] 2xl:w-[400px] 2xl:h-[400px] bg-[#FCFCFC] absolute rotate-45">
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center pr-16 text-3xl 2xl:text-5xl uppercase font-bold z-40 text-pac-orange">
                        our reach
                        {/* <div className="h-[2px] w-12 bg-pac-green rounded-md"></div> */}
                    </div>
                </div>
                <div className="h-full lg:w-[600px] 2xl:w-[600px] grid grid-cols-2 px-8 2xl:px-0 2xl:pr-8 py-2">
                    {props.map((p, index) => (
                        <div key={index} className="w-content h-full flex flex-col justify-center items-center 2xl:gap-1 z-40">
                            <div className="text-3xl 2xl:text-5xl font-semibold text-[#FCFCFC]">{p.description}</div>
                            <div className="text-[#EFEFEF] uppercase text-sm 2xl:text-lg font-semibold">{p.title}</div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    ) : (
        <div className="w-full h-full relative z-40 px-32 flex flex-col items-center">
            <div className={`lg:h-48 xs:h-56  2xl:h-64 w-content shadow-lg rounded-md overflow-hidden bg-gradient-to-b ${type === 'orange' ? ' from-[#EF873C] to-[#D95B00]' : 'from-pac-green to-nav-green'} absolute xs:-top-28 lg:-top-24 2xl:-top-28 flex xs:flex-col lg:flex-row`}>
                <div className="h-full lg:w-[400px] 2xl:w-[600px] flex items-center justify-center overflow-hidden relative">
                    <div className="w-[150px] 2xl:w-[350px] h-full bg-[#FCFCFC] xs:hidden lg:block lg:absolute left-0">
                    </div>
                    <div className="w-[250px] h-[250px] 2xl:w-[400px] 2xl:h-[400px] xs:hidden lg:block bg-[#FCFCFC] lg:absolute rotate-45">
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center xs:py-4 lg:py-0 bg-[#FCFCFC] lg:bg-transparent lg:pr-16 text-3xl 2xl:text-5xl uppercase font-bold z-40 text-pac-orange">
                        our reach
                    </div>
                </div>
                <div className="h-full lg:w-[600px] 2xl:w-[600px] grid grid-cols-2 px-8 2xl:px-0 2xl:pr-8 xs:py-4 lg:py-0 py-2 gap-y-4 lg:gap-y-0">
                    {placeholder.map((p, index) => (
                        <div key={index} className="w-content h-full flex flex-col justify-center items-center 2xl:gap-1 z-40">
                            <div className="text-3xl 2xl:text-5xl font-semibold text-[#FCFCFC]">{p.description}</div>
                            <div className="text-[#EFEFEF] uppercase text-sm 2xl:text-lg font-semibold">{p.title}</div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}