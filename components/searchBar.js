import { Icon } from '@iconify-icon/react';


const SearchBar = () => {
    return (
        <div className="relative w-content justify-end h-content rounded-md py-2 px-1 flex gap-2 items-center">
            <input type="text" placeholder="Search Products..." className="bg-white/0 w-[140px] px-1 py-1 ring-2 ring-[#FCFCFC] text-[#373737] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#575757] focus:bg-[#f1f1f1] placeholder:text-[#f1f1f1]" />
            <Icon icon="ic:round-search" width="24" height="24"/>

        </div>
    )
}

export default SearchBar;