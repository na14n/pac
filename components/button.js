import { Icon } from '@iconify-icon/react';

const Button = ({ type, name }) => {
    return (
        (type === 1) ? (
            <button className="group ring-2 ring-white py-1 px-2 rounded-md hover:ring-[#FD8F29]">
                <span className="text-sm font-semibold text-white group-hover:text-[#FD8F29]">{name}</span>
            </button>
        ) : (
            <button className="group px-2 py-1 rounded-md bg-gradient-to-b from-[#E05B25] to-[#FD8F29] shadow-sm hover:shadow-xl transition-all ">
                <div className="pl-1 text-sm font-semibold text-[#F1F1F1] flex items-center">
                    <span className='text-[#F1F1F1] group-hover:text=[#FFFFFF]'>{name}</span>
                    <Icon icon="ic:round-arrow-right-alt" width="24" height="24" className='pl-1 pr-1 group-hover:pl-2 group-hover:pr-0 transition-all'/>
                </div>

            </button>
        )
    )
}

export default Button;