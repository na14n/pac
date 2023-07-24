import { Icon } from '@iconify-icon/react';

const branches = [
    {
        name: '',
        location: '',
        contact: '',
        email: '',
        maps: '',
    },
    {
        name: '',
        location: '',
        contact: '',
        email: '',
        maps: '',
    },
    {
        name: '',
        location: '',
        contact: '',
        email: '',
        maps: '',
    },
]

const LocationCard = () => {
    return (
        <div className="flex w-full h-full flex-col justify-center items-center p-8 gap-16">
            <div className='h-content flex gap-16'>
                {branches.map((b, index) => (
                    <div className="w-72 h-56 bg-gradient-to-b from-[#f1f1f1] to-[#efefef] hover:from-[#E66204] hover:to-[#F0892B] shadow-md rounded-md group hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center justify-around p-8 cursor-pointer " key={index}>
                        <span className="text-2xl font-bold uppercase text-[#121212] group-hover:text-[#FCFCFC] mb-8">{b.name ? b.name : 'Branch Name'}</span>
                        <div className='flex flex-col items-center justify-around h-full '>
                            <div className="text-[#575757] group-hover:text-[#EFEFEF] flex items-center">
                                <Icon icon="mdi:location" width="24" height="24" className='pr-1' />
                                <span className="text-l">{b.location ? b.location : 'Location'}</span>
                            </div>
                            <div className="text-[#575757] group-hover:text-[#EFEFEF] flex items-center">
                                <Icon icon="mdi:phone" width="24" height="24" className='pr-1' />
                                <span className="text-l">{b.contact ? b.contact : 'Contact'}</span>
                            </div>
                            <div className="text-[#575757] group-hover:text-[#EFEFEF] flex items-center">
                                <Icon icon="mdi:email" width="24" height="24" className='pr-1' />
                                <span className="text-l">{b.email ? b.email : 'Email'}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.3597214861439!2d120.98738826963395!3d14.574049697071853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c98756f234cf%3A0x4927449f66b1c985!2sPROS-APAC%20Corporation!5e0!3m2!1sen!2sph!4v1690178925291!5m2!1sen!2sph" width="1000" height="300" style={{ border: 0 }} allowfullscreen="false" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='shadow-xl rounded-md'></iframe>
        </div>
    )
}

export default LocationCard;