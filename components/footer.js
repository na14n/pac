import { Icon } from '@iconify-icon/react';
import Button from './button';

const Footer = () => {
    return (
        <div className="w-full h-content bg-[#121212] flex flex-col items-center justify-center px-16 pb-2 pt-4">
            <div className=" w-full h-full grow-1 flex items-center justify-center lg:flex-row xs:flex-col">
                <div className=" w-full h-full basis-1/4 flex flex-col justify-center items-center">
                    <div className=" w-full h-full flex flex-col justify-start pt-12 pb-4">
                        <img src="/pac-white.png" className='w-64'></img>
                    </div>
                    <div className=" w-full h-full flex flex-col justify-start pb-4">
                        {/* <img src="/pac-white.png" className='w-56'></img> */}
                    </div>
                    <div className=" w-full h-content text-[#e1e1e1] text-sm flex flex-col justify-start pb-8">
                        <span>768 General Malvar St., Malate, Manila</span>
                        <span>PROSAPAC@prosapac.com</span>
                        <span>+63 912 3456 789</span>
                    </div>
                </div>
                <div className=" w-full h-full lg:pt-12 lg:px-12 xs:py-4 basis-1/2 grid lg:grid-cols-2 xs:grid-cols-1">
                    <div className="flex flex-col xs:py-4 lg:py-0">
                        <span className="text-[#fcfcfc] uppercase font-bold pb-1">about</span>
                    </div>
                    <div className="flex flex-col xs:py-4 lg:py-0">
                        <span className="text-[#fcfcfc] text-sm uppercase font-bold pb-1">events</span>
                    </div>
                    <div className="flex flex-col xs:py-4 lg:py-0">
                        <span className="text-[#fcfcfc] text-sm uppercase font-bold pb-1">our products</span>
                    </div>
                    <div className="flex flex-col xs:py-4 lg:py-0">
                        <span className="text-[#fcfcfc] text-sm uppercase font-bold pb-1">resources</span>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-pac-orange text-sm" href="#">How to order</a>
                    </div>
                </div>
                <div className=" w-full h-full basis-1/4 flex flex-col items-center xs:gap-8 xs:py-6 lg:gap-4">
                    <div className=" w-full h-full flex gap-4 items-center text-[#fcfcfc]">
                    </div>
                    <div className=" w-full h-full flex flex-col gap-2 items-start">
                        <span className='text-[#fcfcfc] text-sm font-semibold'>Already Know What to Order?</span>
                        <Button type={3} name={'SHOP NOW'} />
                    </div>
                    <div className=" w-full h-full flex flex-col gap-2 items-start">
                        <span className='text-[#fcfcfc] text-sm font-semibold'>Stay Updated on our activities</span>
                        <Button type={3} name={'KNOW MORE'} />
                    </div>
                </div>
            </div>
            <div className="w-full h-content shrink-1 border-t-2 border-[#e1e1e1]/90 sm:px-0 py-1 flex items-start justify-between flex-row">
                <span className="text-[#e1e1e1] text-xs ">All Rights Reeserved 2023</span>
                <div className="flex xs:flex-col lg:flex-row lg:gap-4 xs:gap-2">
                    <a className="text-[#e1e1e1]/90 text-xs underline-offset-2 hover:underline hover:text-[#fcfcfc]" href="#">Data Protection</a>
                    <a className="text-[#e1e1e1]/90 text-xs underline-offset-2 hover:underline hover:text-[#fcfcfc]" href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;