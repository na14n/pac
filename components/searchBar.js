'use client'
import { Icon } from '@iconify-icon/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { hoverTextAccentFormatter, focusBorderAccentFormatter } from '@/lib/helpers';

const SearchBar = (props) => {

    const router = useRouter();
    const [searchInput, setSearchInput] = useState(' ')

    let search = (e) => {
        e.preventDefault();
        return router.push(`${searchInput}`, undefined, { shallow: true })
    }

    let generalSearch = (e) => {
        e.preventDefault();
        return router.push(`/search?q=${searchInput}`, undefined, { shallow: true })
    }

    let generalSearchM = (e) => {
        e.preventDefault();
        props.setSidebarState(false);
        return router.push(`/search?q=${searchInput}`, undefined, { shallow: true, reload: true });
    }

    const text = props.textAccent

    return (
        (props.type === 'header') ? (
            <div className="relative w-content justify-end h-content rounded-md py-2 px-1 flex gap-2 items-center">
                <input type="text" placeholder="Search Products..." className="bg-white/0 w-[140px] px-1 py-1 ring-2 ring-[#FCFCFC] text-[#373737] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#575757] focus:bg-[#f1f1f1] placeholder:text-[#f1f1f1]" />
                <Icon icon="ic:round-search" width="24" height="24" />
            </div>
        ) : (props.type === 'search') ? (
            <div className='w-full min-h-full max-h-fit flex flex-col items-center'>
                <form className=' h-10 lg:w-[600px] flex items-center justify-center relative overflow-hidden' onSubmit={search}>
                    <input type='text' placeholder={props.placeholder} className={`w-full h-full px-3 py-2 rounded-l-sm outline-none border-2 border-[#575757] focus:border-nav-orange bg-[#FCFCFC]`} onChange={(e) => { setSearchInput(e.target.value) }} />
                    <button type='submit' className={`h-10 w-fit flex items-center z-10 justify-around px-4 gap-2 rounded-r-sm shadow-md bg-[#575757] text-[#FCFCFC] hover:text-nav-orange text-2xl transition-all`}>
                        <Icon icon="material-symbols:search-rounded" />
                    </button>
                </form>
            </div>
        ) : (props.type === 'general-lg') ? (
            <div className="relative max-md:w-4/5 w-1/2 h-content rounded-md py-2 px-1 flex gap-2 items-center">
                <form className="w-full h-content flex items-center gap-4" onSubmit={generalSearch}>
                    <input type="text" placeholder="Search" className="bg-white/0 w-full px-2 py-1 ring-2 ring-pac-orange text-[#777] text-xl xl:text-3xl focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#575757] focus:bg-[#f1f1f1] placeholder:text-[#777]" onChange={(e) => { setSearchInput(e.target.value) }}/>
                    <button className="flex items-center justify-center bg-pac-orange text-white p-2 rounded-md" type="submit">
                        <Icon icon="ic:round-search" width="24" height="24" />
                    </button>
                </form>
            </div>
        ) : (props.type === 'm') ? (
            <div className="relative w-full justify-center h-content rounded-md py-2 px-1 flex gap-2 items-center">
                <form className="flex items-center gap-4" onSubmit={() => {generalSearchM; }}>
                    <input type="text" placeholder="Search" className="bg-white/0 w-full px-1 py-1 ring-2 ring-[#FCFCFC] text-white text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#575757] focus:bg-[#f1f1f1] placeholder:text-[#f1f1f1]" onChange={(e) => { setSearchInput(e.target.value) }}/>
                    <button className="flex items-center justify-center text-nav-orange bg-white p-1 rounded-sm hover:text-pac-orange" type="submit">
                        <Icon icon="ic:round-search" width="24" height="24" />
                    </button>
                </form>
            </div>
        ) : (
            <div className="relative w-content justify-end h-content rounded-md py-2 px-1 flex gap-2 items-center">
                <form className="flex items-center gap-4" onSubmit={generalSearch}>
                    <input type="text" placeholder="Search" className="bg-white/0 w-[140px] px-1 py-1 ring-2 ring-[#FCFCFC] text-white text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#575757] focus:bg-[#f1f1f1] placeholder:text-[#f1f1f1]" onChange={(e) => { setSearchInput(e.target.value) }}/>
                    <button className="flex items-center justify-center hover:text-pac-orange" type="submit">
                        <Icon icon="ic:round-search" width="24" height="24" />
                    </button>
                </form>
            </div>
        )
    )
}

export default SearchBar;