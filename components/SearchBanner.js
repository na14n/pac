"use client"

import { SearchBannerStateAtom, HeaderStateAtom } from "@/lib/stores/headerState"
import { Provider, atom, useAtom } from "jotai";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBanner () {

    const router = useRouter();

    const [searchBannerState, setSearchBannerState] = useAtom(SearchBannerStateAtom)
    const [headerState, setHeaderState] = useAtom(HeaderStateAtom)
    const [searchInput, setSearchInput] = useState(' ')

    const submit = (e) => {
        e.preventDefault();
        setSearchBannerState(false);
        return router.push(`/search?q=${searchInput}`, undefined, { shallow: true, reload: true });
    }

    return(
        <div className={`transition-all ease-in-out w-full h-fit fixed ${searchBannerState === true ? `bg-[#067133] z-50 translate-x-0 ${headerState === true ? 'mt-24' : 'mt-16'} ` : `z-50 bg-[#067133]/0 translate-x-96 pointer-events-none`}`}>
            <div className={`w-full h-full flex items-center p-4 gap-4 ${searchBannerState === true ? `` : `hidden`}`}>
                <button className={searchBannerState === false ? `hidden` : `rounded-sm bg-white/80 w-fit h-fit text-xl text-red-500 flex items-center justify-center`} onClick={() => setSearchBannerState(false)} >
                    <Icon icon="mdi:close" />
                </button>
                <form className="w-full h-fit flex items-center justify-between " onSubmit={submit}>
                    <input type="text" className="border-0 focus:border-b-2 transition-all outline-none text-white placeholder:text-white/75 bg-transparent" placeholder="Search..." onChange={(e) => { setSearchInput(e.target.value) }} />
                    <button className={searchBannerState === false ? `hidden` : `w-fit h-fit text-2xl text-[#FCFCFC] flex items-center justify-center`} type="submit" >
                        <Icon icon="mdi:arrow-right" />
                    </button>
                </form>
            </div>
        </div>
    )
}