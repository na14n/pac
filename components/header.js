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
            href: '#'
        },
    ]

    return (
        <Provider>
            <div className={headerState ? 'fixed z-50 min-h-24 h-24 max-h-24 w-full top-0 flex justify-center items-center px-24 transition-all duration-200 gap-16' : 'fixed z-50 min-h-20 h-16 max-h-16 w-full top-0 flex justify-center items-center px-16 bg-nav-green transition-all duration-300 gap-4'}>
                <div className="flex-shrink-0 h-full basis-1/4 flex justify-end items-center">
                    <img src="/pac-white.png" className={headerState ? 'h-auto w-48' : 'h-auto w-44'}></img>
                </div>
                <div className="flex-shrink-0 h-full basis-1/2 flex justify-center items-center">
                    {links.map((item, index) => (
                        <a key={index} href={item.href} className="m-2">
                            <div className="uppercase font-semibold text-sm text-[#fcfcfc] hover:text-white group">{item.link}
                                <div className="w-0 h-[2px] bg-nav-orange group-hover:w-full transition-all"></div></div>
                        </a>
                    ))}
                </div>
                <div className="flex-shrink-0 h-full basis-1/4 flex justify-start items-center gap-4 text-[#fcfcfc]">
                    <Button type={1} name={'Shop Now'} />
                    <SearchBar/>
                </div>
            </div>

        </Provider>
    )


}

export default Header;