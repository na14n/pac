'use client'

export const dynamic = 'force-dynamic'


import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Icon } from "@iconify-icon/react";
import { useEffect, useState } from "react";

const query = gql`
    query FetchProductCategories {
        productCategories(first: 999, where: {orderby: {field: DATE, order: ASC}}) {
            nodes {
                name
                subcategories
            }
        }
    }
`


export default function CategoryListSidebar({ setSearch, setSelected, selected, category, setHasFilters }) {

    const [open, setOpen] = useState(0)

    useEffect(() => {
        setSearch(`${category}, ${selected}`)
    }, [selected])

    const handleOpen = (value) => setOpen(open === value ? 0 : value)

    const { data, fetchMore, } = useSuspenseQuery(
        query,
        {
            variables: {
                "first": 6,
            },
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            }
        }
    );

    return (

        <div className="h-fit bg-[#FCFCFC] border-2 border-[#EEE] p-4 shrink-0 max-w-[16rem] w-full">
            <h1 className="text-black font-bold text-xl mb-4">Category List</h1>
            <div className="flex flex-col gap-2 items-start ml-2">
                {data?.productCategories?.nodes?.map((p, index) => (
                    <>
                        <div className="flex gap-2 items-center w-full justify-between">
                            <a key={index} href={`/categories/${p.name.toLowerCase()}`} className={`font-bold ${open === index + 1 || category === p.name.toLowerCase() ? `text-pac-orange underline` : `text-[#373737]`} hover:underline`}>{p.name}</a>
                            <a href={`/categories/${p.name.toLowerCase()}`}>
                                <Icon icon="mdi:chevron-right" className={`text-xl transition-transform ${open === index + 1 || category === p.name.toLowerCase() ? `text-pac-orange underline rotate-90` : `text-[#373737]`} hover:underline`} />
                            </a>
                        </div>
                        <div className={`flex flex-col items-start ml-4 ${open === index + 1 || category === p.name.toLowerCase() ? `` : `hidden`}`}>
                            {p?.subcategories?.map((s, i) => (
                                <button
                                    key={i}
                                    href={`/categories/${s.toLowerCase()}`}
                                    className="hover:underline hover:text-pac-orange text-[#121212] text-left"
                                    onClick={() => {setSelected(s); setHasFilters(true);}}
                                >
                                    <span className={selected === s ? `text-pac-orange underline` : ``}>{s}</span>
                                </button>
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}