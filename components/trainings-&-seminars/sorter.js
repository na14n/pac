import { Icon } from "@iconify-icon/react";

const Sorter = () => {
    return (
        <div className="w-full h-content flex justify-end px-4">
            <select id="sorting" className="bg-[#EFEFEF] p-2 border-2 outline-none rounded-md border-[#E1E1E1] text-sm">
                <option value="date">Default</option>
                <option value="name">Name</option>
                <option value="name">Date</option>
            </select>
        </div>
    )
}

export default Sorter;