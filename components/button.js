import { Icon } from '@iconify-icon/react';

const Button = ({ type, name, link }) => {
    return (
        (type === 1) ? (
            <a className="group w-content bg-white py-1 px-2 rounded-md hover:bg-nav-orange grow-0 shrink-0" href={link}>
                <span className="text-sm font-semibold text-pac-green group-hover:text-white transition-all duration-50">{name}</span>
            </a>
        ) : (type === 2) ? (
            <button className="group p-1 rounded-md bg-size-200 bg-pos-0 bg-gradient-to-b from-[#E05B25] via-[#FD8F29] to-[#E05B25] shadow-sm hover:shadow-xl hover:bg-pos-100 transition-all duration-500">
                <div className="pl-1 text-sm font-semibold text-[#F1F1F1] flex items-center">
                    <span className='text-[#F1F1F1] group-hover:text=[#FFFFFF]'>
                        {name}
                    </span>
                </div>
            </button>
        ) : (type === 3) ? (
            <button className="group ring-2 w-content ring-nav-orange py-3 px-5 rounded-md hover:ring-[#fcfcfc] grow-0 shrink-0">
                <span className="text-sm font-semibold text-nav-orange group-hover:text-[#fcfcfc]">{name}</span>
            </button>
        ) : (
            <button className="group w-fit px-2 py-1 rounded-md bg-size-200 bg-pos-0 bg-gradient-to-b from-[#E05B25] via-[#FD8F29] to-[#E05B25] shadow-sm hover:shadow-xl hover:bg-pos-100 transition-all duration-500">
                <div className="pl-1 text-sm font-semibold text-[#F1F1F1] flex items-center">
                    <span className='text-[#F1F1F1] group-hover:text=[#FFFFFF]'>{name}</span>
                    <Icon icon="ic:round-arrow-right-alt" width="24" height="24" className='pl-1 pr-1 group-hover:pl-2 group-hover:pr-0 transition-all' />
                </div>
            </button>
        )
    )
}

export default Button;