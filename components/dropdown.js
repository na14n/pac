import React from 'react';

const Dropdown = ({ title, content }) => {
    return (
        <div>
            <button className="group p-1 rounded-md bg-size-200 bg-pos-0 bg-gradient-to-b from-[#E05B25] via-[#FD8F29] to-[#E05B25] shadow-sm hover:shadow-xl hover:bg-pos-100 transition-all duration-500">
                <div className="pl-1 text-sm font-semibold text-[#F1F1F1] flex items-center">
                    <span className='text-[#F1F1F1] group-hover:text-[#FFFFFF]'>
                        {title}
                    </span>
                </div>
            </button>
            <div className='w w-1/2 bg-slate-700 h-auto hidden animate-open-menu'>
                {content}
            </div>
        </div>
    );
};

export default Dropdown
