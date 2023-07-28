import { Icon } from '@iconify-icon/react';
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';


async function LocationCard() {

    async function GetBranches() {
        try {
            const result = await client.query({
                query: gql`
                query GetBranches {
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
                        date
                      }
                    }
                  }
          `,
                fetchPolicy: 'network-only',
            });
            return result.data.branchesInformation.nodes;
        } catch (error) {
            console.error('Error occurred:', error);
            return [];
        }
    }

    let data = await GetBranches();
    let branches = [...data].sort((a, b) => new Date(a.date) - new Date(b.date))

    return (
        <div className="flex w-full h-full flex-col justify-start items-center px-8 lg:px-32 py-16 gap-16">
            <div className='h-content flex lg:flex-row xs:flex-col gap-16'>
                {branches.map((b, index) => (
                    <div className="w-80 h-60 bg-gradient-to-b from-[#f1f1f1] to-[#efefef] hover:from-[#E66204] hover:to-[#F0892B] shadow-md rounded-md group hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center justify-start px-8 py-4 cursor-pointer shrink-0 gap-2" key={index}>
                        <span className="w-full text-xl font-bold uppercase text-center text-[#121212] group-hover:text-[#FCFCFC] mb-2">{b.branchName ? b.branchName : 'Branch Name'}</span>
                        <div className='w-full flex flex-col items-start justify-start h-full gap-2'>
                            <div className="text-[#575757] group-hover:text-[#EFEFEF] flex items-start gap-2">
                                <Icon icon="mdi:location" width="24" height="24" className='pr-1' />
                                <div className='flex flex-col'>
                                    <span className="text-sm">{b.addressLine1 ? b.addressLine1 : 'Location'}</span>
                                    <span className="text-sm">{b.addressLine2 ? b.addressLine2 : 'Location'}</span>
                                    <span className="text-sm">{b.addressLine3 ? b.addressLine3 : 'Location'}</span>
                                </div>
                            </div>
                            {b.mobileNumber.length > 0 ? (
                                <div className='flex justify-start items-start gap-2 text-[#575757] group-hover:text-[#EFEFEF]'>
                                    <Icon icon="mdi:cellphone" width="24" height="24" className='pr-1' />
                                    <div className='flex flex-col text-sm h-full justify-center'>
                                        {b.mobileNumber.map((m, index) => (
                                            <span key={index}>{m}</span>
                                        ))}
                                    </div>
                                </div>
                            ) : b.landlineNumber.length > 0 ? (
                                <div className='flex justify-start items-start gap-2 text-[#575757] group-hover:text-[#EFEFEF]'>
                                    <Icon icon="mdi:phone" width="24" height="24" className='pr-1' />
                                    <div className='flex flex-col text-sm h-full justify-center'>
                                        {b.landlineNumber.map((m, index) => (
                                            <span key={index}>{m}</span>
                                        ))}
                                    </div>
                                </div>
                            ) : ''}
                            <div className="text-[#575757] group-hover:text-[#EFEFEF] flex items-center gap-2">
                                <Icon icon="mdi:email" width="24" height="24" className='pr-1' />
                                <span className="text-sm">{b.email ? b.email : 'Email'}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4393091194265!2d120.98326117344628!3d14.574025546606537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c98756f234cf%3A0x4927449f66b1c985!2sPROS-APAC%20Corporation!5e0!3m2!1sen!2sph!4v1690515352500!5m2!1sen!2sph" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='border-2 border-[#121212]/25 shadow-md rounded-md w-full 2xl:h-80 lg:h-72'></iframe>
        </div>
    )
}

export default LocationCard;