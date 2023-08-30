'use client';

export const dynamic = 'force-dynamic'

import { useState } from 'react';
import { Icon } from '@iconify-icon/react';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';

const query = gql`
        query GetBranchesInformation {
            branchesInformation {
            nodes {
                branchName
                addressLine1
                addressLine2
                addressLine3
                landlineNumber  
                mobileNumber
                email
                googleMapsSourceLink
                officeHours
                date
            }
            }
        }
    `

export const LocationCard = () => {

    const { data, networkStatus } = useSuspenseQuery(query);

    let branches = [...data.branchesInformation.nodes].sort((a, b) => new Date(a.date) - new Date(b.date))

    const [selectedTab, setSelectedTab] = useState(branches[0]);

    const handleTabClick = (branch) => {
        setSelectedTab(branch);
    }

    return (networkStatus === 7) ? (
        <div className="flex w-full h-fit flex-col justify-start items-center px-4 md:px-8 lg:px-16 xl:px-32 py-16 gap-16">
            <div className='h-fit flex lg:flex-row flex-col gap-6 2xl:gap-16'>
                {branches.map((b, index) => (
                    <button className={`lg:w-72 xl:w-80 h-[360px] bg-gradient-to-b shadow-md rounded-md group hover:-translate-y-1 transition-all flex flex-col items-center justify-start px-4 xl:px-8 py-4 cursor-pointer shrink-0 gap-2 hover:shadow-lg ${selectedTab.googleMapsSourceLink === b.googleMapsSourceLink ? 'first:from-[#E66204] first:to-[#F0892B] from-[#077232] to-[#063013] last:from-[#3E3E3E] last:to-[#2A2A2A]' : 'from-[#f1f1f1] to-[#efefef] hover:first:from-[#E66204] hover:first:to-[#F0892B] hover:from-[#077232] hover:to-[#063013] hover:last:from-[#5E5E5E] hover:last:to-[#3E3E3E]'}`} key={index} onClick={() => handleTabClick(b)}>
                        <span className={selectedTab.googleMapsSourceLink === b.googleMapsSourceLink ? 'w-full text-xl font-bold uppercase text-center text-[#FCFCFC] group-hover:text-[#F1F1F1] mb-2' : 'w-full text-xl font-bold uppercase text-center text-[#121212] group-hover:text-[#FCFCFC] mb-2'}>{b.branchName ? b.branchName : 'Branch Name'}</span>
                        <div className='w-full flex flex-col items-start justify-start h-full gap-2'>
                            <div className={selectedTab.googleMapsSourceLink === b.googleMapsSourceLink ? 'text-[#F1F1F1] group-hover:text-[#F0F0F0] flex items-start gap-2' : 'text-[#575757] group-hover:text-[#EFEFEF] flex items-start gap-2'}>
                                <Icon icon="mdi:location" width="24" height="24" className='pr-1' />
                                <div className='flex flex-col'>
                                    <span className="text-sm w-full text-left">{b.addressLine1 ? b.addressLine1 : 'Location'}</span>
                                    <span className="text-sm text-left w-full">{b.addressLine2 ? b.addressLine2 : 'Location'}</span>
                                    <span className="text-sm text-left w-full">{b.addressLine3 ? b.addressLine3 : 'Location'}</span>
                                </div>
                            </div>
                            {b.mobileNumber.length > 0 ? (
                                <div className={selectedTab.googleMapsSourceLink === b.googleMapsSourceLink ? 'text-[#F1F1F1] group-hover:text-[#F0F0F0] flex items-start gap-2' : 'text-[#575757] group-hover:text-[#EFEFEF] flex items-start gap-2'}>
                                    <Icon icon="mdi:cellphone" width="24" height="24" className='pr-1' />
                                    <div className='flex flex-col text-sm h-full justify-center'>
                                        {b.mobileNumber.map((m, index) => (
                                            <span key={index} className='text-left w-full'>{m}</span>
                                        ))}
                                    </div>
                                </div>
                            ) : ''}
                            {b.landlineNumber.length > 0 ? (
                                <div className={selectedTab.googleMapsSourceLink === b.googleMapsSourceLink ? 'text-[#F1F1F1] group-hover:text-[#F0F0F0] flex items-start gap-2' : 'text-[#575757] group-hover:text-[#EFEFEF] flex items-start gap-2'}>
                                    <Icon icon="mdi:phone" width="24" height="24" className='pr-1' />
                                    <div className='flex flex-col text-sm h-full justify-center'>
                                        {b.landlineNumber.map((m, index) => (
                                            <span key={index} className='text-left w-full'>{m}</span>
                                        ))}
                                    </div>
                                </div>
                            ) : ''}
                            <div className={selectedTab.googleMapsSourceLink === b.googleMapsSourceLink ? 'text-[#F1F1F1] group-hover:text-[#F0F0F0] flex items-start gap-2' : 'text-[#575757] group-hover:text-[#EFEFEF] flex items-start gap-2'}>
                                <Icon icon="mdi:email" width="24" height="24" className='pr-1' />
                                <a className="text-sm text-left w-full hover:underline" href={`mailto:${b.email}`}>{b.email ? b.email : 'Email'}</a>
                            </div>
                            {b.officeHours.length > 0 ? (
                                <div className={selectedTab.googleMapsSourceLink === b.googleMapsSourceLink ? 'text-[#F1F1F1] group-hover:text-[#F0F0F0] flex items-start gap-2' : 'text-[#575757] group-hover:text-[#EFEFEF] flex items-start gap-2'}>
                                    <Icon icon="mdi:clock" width="24" height="24" className='pr-1' />
                                    <div className='flex flex-col text-sm h-full justify-center'>
                                        {b.officeHours.map((m, index) => (
                                            <span key={index} className='text-left w-full'>{m}</span>
                                        ))}
                                    </div>
                                </div>
                            ) : ''}
                        </div>
                    </button>
                ))}
            </div>
            <iframe src={selectedTab.googleMapsSourceLink} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='border-2 border-[#121212]/25 shadow-md rounded-md w-full h-96 2xl:h-80 lg:h-72'></iframe>
        </div>
    ) : (
        <main className='w-full h-full flex items-center justify-center'>
            <h1 className='text-4xl font-bold text-[#373737]'>Loading...</h1>
        </main>
    )
}

export default LocationCard;