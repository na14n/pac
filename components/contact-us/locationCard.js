'use client';
import { useState } from 'react';
import { Icon } from '@iconify-icon/react';

export const LocationCard = ({ data }) => {
    let branches = [...data].sort((a, b) => new Date(a.date) - new Date(b.date))
    const [selectedTab, setSelectedTab] = useState(branches[0].googleMapsSourceLink);

    const handleTabClick = (googleMapsSourceLink) => {
        setSelectedTab(googleMapsSourceLink);
    }

    return (
        <div className="flex w-full h-full flex-col justify-start items-center px-8 lg:px-32 py-16 gap-16">
            <div className='h-content flex lg:flex-row xs:flex-col gap-16'>
                {branches.map((b, index) => (
                    <button className={`${selectedTab === b.googleMapsSourceLink ? 'w-80 h-60 bg-gradient-to-b from-[#E66204] to-[#F0892B] shadow-md rounded-md group hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center justify-start px-8 py-4 cursor-pointer shrink-0 gap-2' : 'w-80 h-60 bg-gradient-to-b from-[#f1f1f1] to-[#efefef] hover:from-[#E66204] hover:to-[#F0892B] shadow-md rounded-md group hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center justify-start px-8 py-4 cursor-pointer shrink-0 gap-2'}`} key={index} onClick={() => handleTabClick(b.googleMapsSourceLink)}>
                        <span className={selectedTab === b.googleMapsSourceLink ? 'w-full text-xl font-bold uppercase text-center text-[#FCFCFC] group-hover:text-[#F1F1F1] mb-2' : 'w-full text-xl font-bold uppercase text-center text-[#121212] group-hover:text-[#FCFCFC] mb-2'}>{b.branchName ? b.branchName : 'Branch Name'}</span>
                        <div className='w-full flex flex-col items-start justify-start h-full gap-2'>
                            <div className={selectedTab === b.googleMapsSourceLink ? 'text-[#F1F1F1] group-hover:text-[#F0F0F0] flex items-start gap-2' : 'text-[#575757] group-hover:text-[#EFEFEF] flex items-start gap-2'}>
                                <Icon icon="mdi:location" width="24" height="24" className='pr-1' />
                                <div className='flex flex-col'>
                                    <span className="text-sm">{b.addressLine1 ? b.addressLine1 : 'Location'}</span>
                                    <span className="text-sm">{b.addressLine2 ? b.addressLine2 : 'Location'}</span>
                                    <span className="text-sm">{b.addressLine3 ? b.addressLine3 : 'Location'}</span>
                                </div>
                            </div>
                            {b.mobileNumber.length > 0 ? (
                                <div className={selectedTab === b.googleMapsSourceLink ? 'text-[#F1F1F1] group-hover:text-[#F0F0F0] flex items-start gap-2' : 'text-[#575757] group-hover:text-[#EFEFEF] flex items-start gap-2'}>
                                    <Icon icon="mdi:cellphone" width="24" height="24" className='pr-1' />
                                    <div className='flex flex-col text-sm h-full justify-center'>
                                        {b.mobileNumber.map((m, index) => (
                                            <span key={index}>{m}</span>
                                        ))}
                                    </div>
                                </div>
                            ) : b.landlineNumber.length > 0 ? (
                                <div className={selectedTab === b.googleMapsSourceLink ? 'text-[#F1F1F1] group-hover:text-[#F0F0F0] flex items-start gap-2' : 'text-[#575757] group-hover:text-[#EFEFEF] flex items-start gap-2'}>
                                    <Icon icon="mdi:phone" width="24" height="24" className='pr-1' />
                                    <div className='flex flex-col text-sm h-full justify-center'>
                                        {b.landlineNumber.map((m, index) => (
                                            <span key={index}>{m}</span>
                                        ))}
                                    </div>
                                </div>
                            ) : ''}
                            <div className={selectedTab === b.googleMapsSourceLink ? 'text-[#F1F1F1] group-hover:text-[#F0F0F0] flex items-start gap-2' : 'text-[#575757] group-hover:text-[#EFEFEF] flex items-start gap-2'}>
                                <Icon icon="mdi:email" width="24" height="24" className='pr-1' />
                                <span className="text-sm">{b.email ? b.email : 'Email'}</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
            <iframe src={selectedTab} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='border-2 border-[#121212]/25 shadow-md rounded-md w-full 2xl:h-80 lg:h-72'></iframe>
        </div>
    )
}

export default LocationCard;