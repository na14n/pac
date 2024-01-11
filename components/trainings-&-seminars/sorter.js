"use client"

import { useRouter } from 'next/navigation';

const Sorter = ({current, link}) => {

    const router = useRouter();

    let search = (e) => {
        e.preventDefault();
        return router.push(`${link}${e.target.value}`, undefined, { shallow: true })
    }

    return (
            <div className="w-full h-content flex justify-end px-4">
                <select id="sorting" className=" p-2 px-3 border-2 outline-none rounded-md border-[#EFEFEF] text-sm" value={current} onChange={(e) => search(e)}>
                    <option value="DATE">Date</option>
                    <option value="TITLE">Title</option>
                </select>
            </div>
    )
}

export default Sorter;