'use client'
import { Icon } from '@iconify-icon/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const SalesAgentsTeamsSearchBar = ({ divisions, team, querySearch, queryDivision }) => {

    const router = useRouter();

    const d = [
        { name: "Any" },
        ...divisions
    ]

    const [selectedDivision, setSelectedDivision] = useState(d[0].name);
    const [search, setSearch] = useState(null);
    const [hadSearched, setHadSearched] = useState(false);

    useEffect(() => {
        if (querySearch || queryDivision) {
            setHadSearched(true);
        }
    }, [querySearch, queryDivision])

    let HandleSearch = (e) => {
        e.preventDefault();
        if (selectedDivision != "Any") {
            setHadSearched(true);
            if (selectedDivision && search) {
                return router.push(`/resources/sales-agent-search/${team}?division=${selectedDivision}&search=${search}`, undefined, { shallow: true })
            } else {
                return router.push(`/resources/sales-agent-search/${team}?division=${selectedDivision}`, undefined, { shallow: true })
            }
        }
        else {
            return router.push(`/resources/sales-agent-search/${team}?search=${search}`, undefined, { shallow: true })
        }
    }

    let reset = (e) => {
        e.preventDefault();
        setHadSearched(false);
        setSearch("");
        setSelectedDivision(d[0].name);
        return router.push(`/resources/sales-agent-search/${team}`, undefined, { shallow: true })
    }

    return (
        <div className='w-full min-h-full max-h-fit p-4 md:p-8 lg:px-16 xl:px-32 2xl:px-48 lg:py-8 flex flex-col items-center max-lg:mb-8'>
            <form className=' w-full p-4 flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-8'>
                <select className='py-1 h-10 w-fit px-2 rounded-md border-[#272727]/30 border-2 outline-none focus:border-pac-orange text-[#272727] capitalize' id='selectDivision' defaultValue={selectedDivision} onChange={(e) => { setSelectedDivision(e.target.value) }}>
                    {d.map((d, index) => (
                        <option key={index} value={d.name} className='capitalize'>{d.name}</option>
                    ))}
                </select>
                <input type='text' placeholder='Enter your Main Location (Manila, Cavite, ...)' className='h-10 w-[400px] px-2 rounded-md border-[#272727]/30 border-2 focus:border-pac-orange outline-none placeholder:text-[#575757]/50 text-[#272727]' id='inputLocation' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button type='submit' className='h-10 w-fit flex items-center justify-around px-2 gap-2 rounded-md shadow-md bg-nav-orange text-[#FCFCFC] hover:shadow-lg hover:bg-pac-orange transition-all'
                    onClick={HandleSearch}>
                    <Icon icon="mdi:account-search-outline" className='text-xl' />
                    <p className='font-semibold'>Search</p>
                </button>
                <button className={`h-10 w-fit flex items-center justify-around px-2 gap-2 text-[#676767]/60 hover:text-[#676767]/90 ${hadSearched ? `` : `hidden`}`}
                    onClick={reset}>
                    <Icon icon="material-symbols:cancel-outline" className='text-lg' />
                    <p className='text-xs font-semibold'>Reset Search</p>
                </button>
            </form>
        </div>
    )
}

export default SalesAgentsTeamsSearchBar;