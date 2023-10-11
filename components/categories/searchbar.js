'use client'

import { Icon } from "@iconify-icon/react";

export default function CategorySearchBar({ setSearch, setSearchTerm, searchTerm, category, setHasFilters, hasFilters, clearFilters }) {

    const HandleSearchBar = () => {
        setSearch(category);
        if (searchTerm) {
            setSearch(`${category}, ${searchTerm}`);
            setSearchTerm("")
            setHasFilters(true);
        }
    }

    return (
        <section className="flex items-center gap-2 justify-center">
            <div className="w-fit h-fit p-1 border-2 rounded-md flex items-center gap-1">
                <input
                    type="text"
                    className="2xl:w-[48rem] xl:w-[32rem] w-[16rem] h-fit border-0 outline-none"
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Product Name"
                />
                <button onClick={HandleSearchBar} className="bg-pac-orange rounded-md px-2 py-2 text-white font-bold text-xl flex items-center justify-center ">
                    <Icon icon="mdi:search" />
                </button>

            </div>
            {hasFilters ?
                <button onClick={clearFilters} className="hover:text-red-500 rounded-md px-2 py-2 text-black text-sm flex items-center justify-center ">
                    <Icon icon="material-symbols:close" />
                    Clear Filters
                </button>
                : <></>}
        </section>
    )
}