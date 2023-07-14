'use client';
import { Provider, atom, useAtom } from "jotai";
import { HeaderStateAtom } from "@/lib/stores/headerState";

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
            <div className={headerState ? 'min-h-24 h-24 max-h-24 w-full fixed top-0 flex justify-center items-center px-24 transition-all' : 'min-h-20 h-16 max-h-16 w-full fixed top-0 flex justify-center items-center px-20 bg-red-500 transition-all'}>
                <div className="flex-shrink-0 h-full basis-1/4 flex justify-center items-center">
                    <img src="/pac-white.png" className="w-[60%]"></img>
                </div>
                <div className="flex-shrink-0 h-full basis-1/2 flex justify-center items-center">
                    {links.map((item, index) => (
                        <a key={index} href={item.href} className="m-2">
                            <div className="uppercase font-semibold text-sm text-[#fcfcfc]">{item.link}</div>
                        </a>
                    ))}
                </div>
                <div className="flex-shrink-0 h-full basis-1/4 test flex justify-center items-center">(shop now && search)</div>
            </div>
            
        </Provider>
    )


}

export default Header;