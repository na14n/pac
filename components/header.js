'use client';
import { Provider, atom, useAtom } from "jotai";
import Button from "./button";
import { HeaderStateAtom } from "@/lib/stores/headerState";
import SearchBar from "./searchBar";
import Image from "next/image";

const Header = () => {

    let [headerState] = useAtom(HeaderStateAtom);

    const links = [
        {
            link: 'home',
            href: '/'
        },
        {
            link: 'about us',
            href: '#'
        },
        {
            link: 'products',
            href: '/products'
        },
        {
            link: 'trainings & seminars',
            href: '#'
        },
        {
            link: 'contact us',
            href: '/contact-us'
        },
    ]

    return (
        <Provider>
            <div className={headerState ? 'fixed z-50 min-h-24 h-24 max-h-24 w-full top-0 flex min-[1280px]:justify-center xs:justify-between items-center 2xl:px-44 lg:px-16 xs:px-4 transition-all duration-200 gap-16' : 'fixed z-50 min-h-20 h-16 max-h-16 w-full top-0 flex min-[1280px]:justify-center xs:justify-between items-center 2xl:px-12 xs:px-6 lg:px-24 bg-nav-green transition-all duration-300 gap-4'}>
                <div className="shrink-0 h-full w-content  min-[1280px]:basis-1/5 xs:basis-1/2 flex min-[1280px]:justify-start xs:justify-start items-center">
                    <div className={headerState ? 'xs:h-6 lg:h-9 lg:w-48 xs:w-36 relative' : 'xs:h-6 lg:h-8 lg:w-44 xs:w-36 relative'}>
                        <a className="w-full h-full z-50" href="/">
                            <Image alt='pros-apac-logo' src="/pac-white.png" fill={true} />
                        </a>
                    </div>
                </div>
                <div className="shrink-0 h-full basis-1/2 min-[1280px]:flex xs:hidden xs:w-0 justify-center items-center">
                    {links.map((item, index) => (
                        <a key={index} href={item.href} className="m-2">
                            <h6 className="w-content uppercase font-semibold text-sm text-[#fcfcfc] hover:text-white group">{item.link}
                                <div className="w-0 h-[2px] bg-nav-orange group-hover:w-full transition-all"></div></h6>
                        </a>
                    ))}
                </div>
                <div className="= shrink-0 h-full basis-1/5 min-[1280px]:flex xs:hidden  justify-end items-center gap-4 text-[#fcfcfc]">
                    <Button type={'inverse'} color={'white'} name={'Shop Now'} link={'#'} />
                    <SearchBar />
                </div>
            </div>
        </Provider>
    )


}

export default Header;