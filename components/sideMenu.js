'use client';
import { Icon } from "@iconify-icon/react";
import { useAtom } from "jotai";
import { SideBarStateAtom } from "@/lib/stores/headerState";
import SearchBar from "./searchBar";
import Image from "next/image";

const SideMenu = () => {


    let [sidebarState, setSidebarState] = useAtom(SideBarStateAtom);

    const links = [
        {
            link: 'home',
            href: '/'
        },
        {
            link: 'about us',
            href: '/about-us'
        },
        {
            link: 'products',
            href: '/products'
        },
        {
            link: 'prostige',
            href: '/products/prostige'
        },
        {
            link: 'trainings & seminars',
            href: '/trainings-&-seminars'
        },
        {
            link: 'contact us',
            href: '/contact-us'
        },
    ]

    return (
        <div className={`transition-all ease-in-out w-full h-full fixed ${sidebarState === true ? `bg-nav-green z-50 translate-x-0 ` : `z-50 bg-nav-green/0 translate-x-96 pointer-events-none`}`}>
            <div className={`w-full h-full flex flex-col px-8 py-4 gap-24 ${sidebarState === true ? `` : `hidden`}`}>
                <div className="w-full h-fit flex items-center justify-between">
                    <div className='xs:h-6 lg:h-9 lg:w-48 xs:w-36 relative'>
                        <a className="w-full h-full z-50" href="/">
                            <Image alt='pros-apac-logo' src="/pac-white.png" fill={true} />
                        </a>
                    </div>
                    <button className={sidebarState === false ? `hidden` : `w-fit h-fit text-4xl text-[#FCFCFC] flex items-center justify-center`} onClick={() => setSidebarState(false)}>
                        <Icon icon="mdi:close" />
                    </button>
                </div>
                <div className=" h-fit w-full flex flex-col justify-center items-center ">
                    {links.map((item, index) => (
                        <a key={index} href={item.href} className="m-2  w-fit h-fit">
                            <h6 className="w-fit uppercase font-semibold text-xl text-center text-[#fcfcfc] hover:text-pac-orange group">
                                {item.link}
                                <div className="w-0 h-[2px] group-hover:w-full bg-nav-orange" />
                            </h6>
                        </a>
                    ))}
                </div>
                {/* <SearchBar type="m" setSidebarState={setSidebarState} /> */}
            </div>
        </div>
    )
}

export default SideMenu;
