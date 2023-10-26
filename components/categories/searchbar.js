'use client'

import { Icon } from "@iconify-icon/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CategoryListSidebar from "./categoryList";

export default function CategorySearchBar({ setSearch, setSearchTerm, searchTerm, category, setHasFilters, hasFilters, clearFilters, setSelected, selected }) {

    const HandleSearchBar = () => {
        setSearch(category);
        if (searchTerm) {
            setSearch(`${category}, ${searchTerm}`);
            setSearchTerm("")
            setHasFilters(true);
        }
    }

    const [open, setOpen] = useState(false)

    return (
        <section className="flex items-center gap-2 justify-center px-4 flex-wrap">
            <AnimatePresence>
                {open ?
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed w-screen h-screen top-0 left-0 bg-black/25 shadow-md z-[60] "
                        onClick={() => setOpen(!open)}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -25 }}
                            className="w-fit h-screen shadow-md bg-white overflow-y-auto"
                        >
                            <CategoryListSidebar setSearch={setSearch} setSelected={setSelected} selected={selected} category={category} setHasFilters={setHasFilters} />
                        </motion.div>
                    </motion.div>
                    :
                    <></>
                }
            </AnimatePresence>
            <button
                className="lg:hidden text-lg text-pac-orange px-2 flex items-center justify-center gap-2"
                onClick={() => setOpen(!open)}
            >
                <Icon icon="ic:outline-filter-alt" />
                <h5 className="text-xs text-pac-orange">Filter</h5>
            </button>
            <div className="w-fit h-fit p-1 border-2 rounded-md flex items-center gap-1">
                <input
                    type="text"
                    className="2xl:w-[48rem] xl:w-[32rem] md:w-[16rem] w-48 h-fit border-0 outline-none"
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