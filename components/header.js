'use client';
import { Icon } from "@iconify-icon/react";
import { Provider, atom, useAtom } from "jotai";
import Button from "./button";
import { HeaderStateAtom, SideBarStateAtom, SearchBannerStateAtom } from "@/lib/stores/headerState";
import SearchBar from "./searchBar";
import Image from "next/image";
import { BasketAtom } from "@/lib/stores/basketAtom";

const Header = () => {

    let [headerState] = useAtom(HeaderStateAtom);
    let [sidebarState, setSidebarState] = useAtom(SideBarStateAtom);
    let [basket, setbasket] = useAtom(BasketAtom);
    let [searchBannerState, setSearchBannerState] = useAtom(SearchBannerStateAtom);

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
        <Provider>
            <div className={`fixed z-50 w-full top-0 transition-all gap-4 ${headerState ? 'min-h-24 h-24 max-h-24 duration-200 ' : ' min-h-20 h-16 max-h-16 duration-300'}`}>
                <div className={`w-full h-full bg-nav-green absolute transition-all duration-200  ${headerState ? `-top-24` : `top-0`}`} />
                <div className={`w-full h-full flex min-[1280px]:justify-center xs:justify-between items-center 2xl:px-44 lg:px-12 px-4 md:gap-16`}>
                    <div className="shrink-0 z-[60] h-full w-content  min-[1280px]:basis-1/5 xs:basis-1/2 flex min-[1280px]:justify-start xs:justify-start items-center">
                        <div className={headerState ? 'xs:h-6 lg:h-9 lg:w-48 xs:w-36 relative' : 'xs:h-6 lg:h-8 lg:w-44 xs:w-36 relative'}>
                            <a className="w-full h-full z-[60]" href="/">
                                <Image alt='pros-apac-logo' src="/pac-white.png" fill={true} />
                            </a>
                        </div>
                    </div>
                    <div className="shrink-0 z-[60] h-full basis-1/2 min-[1280px]:flex xs:hidden xs:w-0 justify-center items-center">
                        {links.map((item, index) => (
                            <a key={index} href={item.href} className="m-2">
                                <h6 className="text-center w-content uppercase font-semibold text-sm text-[#fcfcfc] hover:text-white group">{item.link}
                                    <div className="w-0 h-[2px] bg-nav-orange group-hover:w-full transition-all"></div></h6>
                            </a>
                        ))}
                    </div>
                    <div className="z-[60] shrink-0 h-full basis-1/5 min-[1280px]:flex xs:hidden  justify-end items-center gap-4 text-[#fcfcfc] ">
                        {/* <Button type={'inverse'} color={'white'} name={'Shop Now'} link={'#'} /> */}
                        {basket ? basket.length > 0 ?
                            <a
                                className="text-2xl flex items-center justify-center gap-1 hover:text-pac-orange relative"
                                href="/products/basket"
                            >
                                <Icon icon="mdi:basket-outline" />
                            </a>
                            : <></>
                            : <></>}
                            {/* <BasketIcon /> */}
                        <SearchBar />
                    </div>
                    <div className={`xl:hidden z-50 ${sidebarState === true ? `hidden` : `w-fit h-fit text-4xl text-[#FCFCFC] flex items-center justify-center gap-2`}`}>
                        {basket ? basket.length > 0 ?
                                <a
                                    className="text-2xl flex items-center justify-center gap-1 hover:text-pac-orange relative"
                                    href="/products/basket"
                                >
                                    <Icon icon="mdi:basket-outline" />
                                </a>
                                : <></>
                                : <></>}
                        <button className={`xl:hidden z-50 ${sidebarState === true ? `hidden` : `w-fit h-fit text-2xl text-[#FCFCFC] flex items-center justify-center`}`} onClick={() => setSearchBannerState(true)}>
                            <Icon icon="mdi:search" />
                        </button>      
                        <button className={`xl:hidden z-50 ${sidebarState === true ? `hidden` : `w-fit h-fit text-4xl text-[#FCFCFC] flex items-center justify-center`}`} onClick={() => setSidebarState(true)}>
                            <Icon icon="mdi:menu" />
                        </button>
                    </div>
                </div>
            </div>
        </Provider>
    )


}

export default Header;