const Footer = () => {
    return (
        <div className="w-full h-[52vh] bg-slate-950 flex flex-col items-center justify-center px-16 pb-2 pt-4">
            <div className=" w-full h-full grow-1 flex items-center justify-center">
                <div className=" w-full h-full basis-1/4 flex flex-col justify-center items-center">
                    <div className=" w-full h-full flex flex-col justify-start pt-12 pb-8">
                        <img src="/pac-white.png" className='w-56'></img>
                    </div>
                    <div className=" w-full h-content text-[#e1e1e1] text-sm flex flex-col justify-start py-4">
                        <span>768 General Malvar St., Malate, Manila</span>
                        <span>PROSAPAC@prosapac.com</span>
                        <span>+63 912 3456 789</span>
                    </div>
                </div>
                <div className=" w-full h-full basis-1/2"></div>
                <div className=" w-full h-full basis-1/4 flex flex-col justify-center items-center">
                    <div className=" w-full h-full"></div>
                    <div className=" w-full h-full"></div>
                    <div className=" w-full h-full"></div>
                </div>
            </div>
            <div className="w-full min-h-[20px] h-[30px] max-h-[30px] shrink-1"></div>
        </div>
    )
}

export default Footer;