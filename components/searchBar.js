import { Icon } from '@iconify-icon/react';


const SearchBar = () => {
    return (
        <div className="relative w-full h-content rounded-md py-2 px-1 flex gap-4 items-center">
            <input type="text" placeholder="Search Products..." className="block w-[140px] px-2 py-1 bg-[#FCFCFC] ring-2 ring-[#FCFCFC] text-[#373737] text-sm focus:outline-none focus:ring-nav-orange rounded-md placeholder:text-black/40" />
            <Icon icon="ic:round-search" width="24" height="24"/>

        </div>
    )
}

export default SearchBar;