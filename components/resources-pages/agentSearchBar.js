'use client'
import { Icon } from '@iconify-icon/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SalesAgentSearchBar = ({divisions}) => {

    const router = useRouter();

    const [selectedDivision, setSelectedDivision] = useState(divisions[0].name)
    const [locationInput, setLocationInput] = useState(' ')

    let search = (e) => {
        e.preventDefault();
        return router.push(`/resources/sales-agent-search?division=${selectedDivision}&location=${locationInput}`, undefined, { shallow: true })
    }

    return (
        <div className='w-full min-h-full max-h-fit lg:px-32 lg:py-8 flex flex-col items-center'>
            <form className=' w-full p-4 flex items-center justify-center gap-8'>
                <select className='py-1 h-10 w-fit px-2 rounded-md border-[#272727]/30 border-2 outline-none focus:border-pac-orange text-[#272727] capitalize' id='selectDivision'defaultValue={selectedDivision} onChange={(e) => {setSelectedDivision(e.target.value)}}>
                    {divisions.map((d, index) => (
                        <option key={index} value={d.name} className='capitalize'>{d.name}</option>
                    ))}
                </select>
                <input type='text' placeholder='Enter your Locaton' className='h-10 w-[400px] px-2 rounded-md border-[#272727]/30 border-2 focus:border-pac-orange outline-none placeholder:text-[#575757]/50 text-[#272727]' id='inputLocation' onChange={(e) => {setLocationInput(e.target.value)}} />
                <button type='submit' className='h-10 w-fit flex items-center justify-around px-2 gap-2 rounded-md shadow-md bg-nav-orange text-[#FCFCFC] hover:shadow-lg hover:bg-pac-orange transition-all'
                    onClick={search}>
                    <Icon icon="mdi:account-search-outline" className='text-xl' />
                    <p className='font-semibold'>Search</p>
                </button>
            </form>
            {/* {selectedDivision}, {locationInput} */}
        </div>
    )
}

export default SalesAgentSearchBar;