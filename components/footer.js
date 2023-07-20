import { Icon } from '@iconify-icon/react';
import Button from './button';

const Footer = () => {
    return (
        <div className="w-full h-[52vh] bg-[#121212] flex flex-col items-center justify-center px-16 pb-2 pt-4">
            <div className=" w-full h-full grow-1 flex items-center justify-center">
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
                <div className=" w-full h-full pt-12 px-12 basis-1/2 grid grid-cols-2">
                    <div className="flex flex-col">
                        <span className="text-[#fcfcfc] uppercase font-bold pb-1">about</span>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">Careers</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">History</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">Sales Agents</a>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#fcfcfc] text-sm uppercase font-bold pb-1">events</span>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">Trainings and Workshops</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">Dental Conventions and Exhibits</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">Seminars</a>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#fcfcfc] text-sm uppercase font-bold pb-1">our products</span>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">PAC Exclusive Brands</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">Orthodontics</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">Aesthetics</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">Restorative</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">Implant</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">Prostige Platinum</a>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#fcfcfc] text-sm uppercase font-bold pb-1">resources</span>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">How to order</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">Sales Agents</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">Aesthetics</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">News and Updates</a>
                        <a className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-[#fcfcfc] text-sm" href="#">E - Catalogues</a>
                    </div>
                </div>
                <div className=" w-full h-full basis-1/4 flex flex-col items-center">
                    <div className=" w-full h-full flex gap-4 items-center text-[#fcfcfc]">
                        <a href='#' className="hover:text-nav-orange w-content h-content flex justify-center items-center">
                            <Icon icon="ri:facebook-fill" width="48" height="48" />
                        </a>
                        <a href='#' className="hover:text-nav-orange w-content h-content flex justify-center items-center">
                            <Icon icon="ri:instagram-fill" width="48" height="48" />
                        </a>
                        <a href='#' className="hover:text-nav-orange w-content h-content flex justify-center items-center">
                            <Icon icon="ri:tiktok-fill" width="48" height="48" />
                        </a>
                        <a href='#' className="hover:text-nav-orange w-content h-content flex justify-center items-center">
                            <Icon icon="ri:youtube-fill" width="48" height="48" />
                        </a>
                        <a href='#' className="hover:text-nav-orange w-content h-content flex justify-center items-center">
                            <Icon icon="ri:linkedin-fill" width="48" height="48" />
                        </a>
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
            <div className="w-full min-h-[20px] h-[30px] max-h-[30px] shrink-1 border-t-2 border-[#e1e1e1]/90 px-12 py-1 flex items-center justify-between">
                <span className="text-[#e1e1e1] text-xs ">All Rights Reeserved 2023</span>
                <div className="flex gap-8">
                    <a className="text-[#e1e1e1]/90 text-xs underline-offset-2 hover:underline hover:text-[#fcfcfc]" href="#">Data Protection</a>
                    <a className="text-[#e1e1e1]/90 text-xs underline-offset-2 hover:underline hover:text-[#fcfcfc]" href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;