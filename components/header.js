'use client';
import { Provider, atom, useAtom } from "jotai";
import Button from "./button";
import { HeaderStateAtom } from "@/lib/stores/headerState";
import SearchBar from "./searchBar";

const Header = () => {

    let [headerState] = useAtom(HeaderStateAtom);

    const links = [
        {
            link: 'home',
            href: '#'
        },
        {
            link: 'about us',
            href: '#'
        },
        {
            link: 'products',
            href: '#'
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
            <div className={headerState ? 'fixed z-50 min-h-24 h-24 max-h-24 w-full top-0 flex min-[1280px]:justify-center xs:justify-between items-center lg:px-24 xs:px-4 transition-all duration-200 gap-16' : 'fixed z-50 min-h-20 h-16 max-h-16 w-full top-0 flex min-[1280px]:justify-center xs:justify-between items-center lg:px-16 xs:px-8 bg-nav-green transition-all duration-300 gap-4'}>
                <div className="shrink-0 h-full w-full  min-[1280px]:basis-1/4 xs:basis-1/2 flex min-[1280px]:justify-end xs:justify-start items-center">
                    <img src="/pac-white.png" className={headerState ? 'h-auto lg:w-48 xs:w-2/3' : 'h-auto lg:w-44 xs:w-2/3 '}></img>
                </div>
                <div className=" shrink-0 h-full basis-1/2 min-[1280px]:flex xs:hidden xs:w-0 justify-center items-center">
                    {links.map((item, index) => (
                        <a key={index} href={item.href} className="m-2">
                            <div className="w-content uppercase font-semibold text-sm text-[#fcfcfc] hover:text-white group">{item.link}
                                <div className="w-0 h-[2px] bg-nav-orange group-hover:w-full transition-all"></div></div>
                        </a>
                    ))}
                </div>
                <div className="= shrink-0 h-full basis-1/4 min-[1280px]:flex xs:hidden  justify-end items-center gap-4 text-[#fcfcfc]">
                    <Button type={1} name={'Shop Now'} link={'#'} />
                    <SearchBar />
                </div>
            </div>
        </Provider>
    )


}

export default Header;