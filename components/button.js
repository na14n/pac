import { Icon } from '@iconify-icon/react';

const Button = ({ type, name, link, color, newtab }) => {
    return (
        (type === 1) ? (
            (color === 'white') ? (
                <a className="group w-fit h-fit shadow-md bg-[#FCFCFC] py-2 px-3 rounded-md hover:bg-nav-orange grow-0 shrink-0" href={link} target={newtab ? 'blank' : ''}>
                    <span className="xs:text-sm 2xl:text-lg font-semibold text-nav-orange group-hover:text-[#FCFCFC] transition-all duration-50">{name}</span>
                </a>
            ) : (color === 'white-green') ? (
                <a className="group w-fit h-fit bg-size-200 shadow-md bg-gradient-to-r from-[#E1E1E1] via-[#FAFAFA] to-[#E1E1E1] py-2 px-3 rounded-md hover:bg-pos-100 grow-0 shrink-0 xs:text-sm 2xl:text-lg font-semibold text-[#F1F1F1] transition-all duration-50" href={link} target={newtab ? 'blank' : ''}>
                    <span className="xs:text-sm 2xl:text-lg font-semibold text-pac-orange group-hover:text-nav-orange transition-all duration-50">{name}</span>
                </a>
            ) : (color === 'green') ? (
                <a className="group w-fit h-fit bg-size-200 shadow-md bg-gradient-to-r from-[#E1E1E1] via-[#FAFAFA] to-[#E1E1E1] py-2 px-3 rounded-md hover:bg-pos-100 grow-0 shrink-0 xs:text-sm 2xl:text-lg font-semibold text-[#F1F1F1] transition-all duration-50" href={link} target={newtab ? 'blank' : ''}>
                    <span className="xs:text-sm 2xl:text-lg font-semibold text-pac-green group-hover:text-nav-green transition-all duration-50">{name}</span>
                </a>
            ): (color === 'gray') ? (
                <a className="group w-fit h-fit bg-size-200 shadow-md bg-gradient-to-r from-[#E1E1E1] via-[#FAFAFA] to-[#E1E1E1] py-2 px-3 rounded-md hover:bg-pos-100 grow-0 shrink-0 xs:text-sm 2xl:text-lg font-semibold text-[#F1F1F1] transition-all duration-50" href={link} target={newtab ? 'blank' : ''}>
                    <span className="xs:text-sm 2xl:text-lg font-semibold text-[#474747] group-hover:text-[#272727] transition-all duration-50">{name}</span>
                </a>
            ): (color === 'full-green') ? (
                <a className="group w-fit h-fit bg-size-200 shadow-md bg-gradient-to-r from-nav-green via-pac-green to-nav-green py-2 px-3 rounded-md hover:bg-pos-100 grow-0 shrink-0 xs:text-sm 2xl:text-lg font-semibold text-[#F1F1F1] transition-all duration-50" href={link} target={newtab ? 'blank' : ''}>
                    <span className="xs:text-sm 2xl:text-lg font-semibold text-white transition-all duration-50">{name}</span>
                </a>
            ) : (
                <a className="group w-fit h-fit bg-size-200 shadow-md bg-gradient-to-r from-[#E05B25] via-[#FD8F29] to-[#E05B25] py-2 px-3 rounded-md hover:bg-pos-100 grow-0 shrink-0 xs:text-sm 2xl:text-lg font-semibold text-[#F1F1F1] transition-all duration-50" href={link} target={newtab ? 'blank' : ''}>
                    {name}
                </a>
            )
        ) : (type === 2) ? (
            <button className="group p-1 rounded-md bg-size-200 bg-pos-0 bg-gradient-to-b from-[#E05B25] via-[#FD8F29] to-[#E05B25] shadow-sm hover:shadow-xl hover:bg-pos-100 transition-all duration-500">
                <div className="pl-1 text-sm font-semibold text-[#F1F1F1] flex items-center">
                    <span className='text-[#F1F1F1] group-hover:text=[#FFFFFF]'>
                        {name}
                    </span>
                </div>
            </button>
        ) : (type === 3) ? (
            <button className="group ring-2 w-fit ring-nav-orange py-3 px-5 rounded-md hover:ring-[#fcfcfc] grow-0 shrink-0">
                <span className="text-sm font-semibold text-nav-orange group-hover:text-[#fcfcfc]">{name}</span>
            </button>
        ) : (type === 'download') ? (
            <a className="group w-fit h-fit text-nav-orange hover:text-pac-orange transition-all duration-500 flex items-center justify-center" target='_blank' href={link} download={name} rel='noreferrer'>
                <Icon icon="material-symbols:cloud-download" width="32" height="32" />
            </a>
        ) : (type === 'inverse') ? (
            <a className="group w-fit h-fit bg-[#FCFCFC] py-1 px-2 rounded-md hover:bg-nav-orange grow-0 shrink-0" href={link}>
                <span className="xs:text-sm font-semibold text-nav-orange group-hover:text-[#FCFCFC] transition-all duration-50">{name}</span>
            </a>
        ) : (type === 'arrow') ? (
            <button className="group w-fit px-2 py-1 rounded-md bg-size-200 bg-pos-0 bg-gradient-to-b from-[#E05B25] via-[#FD8F29] to-[#E05B25] shadow-sm hover:shadow-xl hover:bg-pos-100 transition-all duration-500">
                <div className="pl-1 text-sm font-semibold text-[#F1F1F1] flex items-center">
                    <span className='text-[#F1F1F1] group-hover:text=[#FFFFFF]'>{name}</span>
                    <Icon icon="ic:round-arrow-right-alt" width="24" height="24" className='pl-1 pr-1 group-hover:pl-2 group-hover:pr-0 transition-all' />
                </div>
            </button>
        ) : (type === 'large') ? (
            <a className="group w-fit h-full bg-size-200 shadow-md bg-gradient-to-r from-[#E05B25] via-[#FD8F29] to-[#E05B25] py-2 px-3 rounded-md hover:bg-pos-100 grow-0 shrink-0 xs:text-sm lg:text-lg 2xl:text-2xl font-semibold text-[#F1F1F1] transition-all duration-50" href={link}>
                {name}
            </a>
        ) : (
            <button className="group w-fit px-2 py-1 rounded-md bg-size-200 bg-pos-0 bg-gradient-to-b from-[#E05B25] via-[#FD8F29] to-[#E05B25] shadow-sm hover:shadow-xl hover:bg-pos-100 transition-all duration-500">
                <div className="pl-1 text-sm font-semibold text-[#F1F1F1] flex items-center">
                    <span className='text-[#F1F1F1] group-hover:text=[#FFFFFF]'>{name}</span>
                </div>
            </button>
        )
    )
}

export default Button;