import { Icon } from '@iconify-icon/react';

const Updates = ({ type, title, category, link, image, date }) => {
    return (
        (type === 1) ? (
            <section className="text-white gap-5 w-1/2 h-auto">
        <section className="flex flex-col items-start mr-5 relative">
          <img
            className="w-full h-80 rounded-xl my-2 hover:border-pac-green hover:border-4 hover:border-solid"
            src={image}
          />
          <span className="absolute bottom-0 left-0 mb-8 mx-5 text-xl font-semibold flex flex-col">
            <span className="font-normal text-sm">{category}</span>
            {title}
          </span>
        </section>
      </section>
            


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
        ) : (type === 'download') ? (
            <a className="group w-fit h-fit px-2 py-1 rounded-md bg-size-200 bg-pos-0 bg-gradient-to-b from-[#E05B25] via-[#FD8F29] to-[#E05B25] shadow-sm hover:shadow-xl hover:bg-pos-100 transition-all duration-500" target='_blank' href={link} download={name} rel='noreferrer'>
                <div className="pl-1 text-sm font-semibold text-[#F1F1F1] flex items-center">
                    <span className='text-[#F1F1F1] group-hover:text=[#FFFFFF]'>{name}</span>
                    <Icon icon="mdi:file-download" width="24" height="24" className='pl-1' />
                </div>
            </a>
        ) : (type === 'inverse') ? (
            <a className="group w-fit px-2 py-1 rounded-md bg-size-200 bg-pos-0 bg-gradient-to-b from-[#EFEFEF] via-[#FCFCFC] to-[#EFEFEF] shadow-sm hover:shadow-xl hover:bg-pos-100 transition-all duration-500" href={link ? link : '/#'}>
                <div className="pl-1 text-sm font-semibold text-pac-orange group-hover:text-nav-orange flex items-center">
                    {name}
                    <Icon icon="ic:round-arrow-right-alt" width="24" height="24" className='pl-1 pr-1 group-hover:pl-2 group-hover:pr-0 transition-all' />
                </div>
            </a>
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

export default Updates;