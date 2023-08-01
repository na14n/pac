import { Icon } from '@iconify-icon/react';
import Button from './button';
import Image from 'next/image';

const Footer = () => {

    const footerLinks = [
        {
            name: 'Careers',
            link: '#',
            group: 'about',
        },
        {
            name: 'History',
            link: '#',
            group: 'about',
        },
        {
            name: 'Sales Agents',
            link: '#',
            group: 'about',
        },
        {
            name: 'Workshops',
            link: '/trainings-&-seminars/workshops',
            group: 'events',
        },
        {
            name: 'Seminars',
            link: '/trainings-&-seminars/seminars',
            group: 'events',
        },
        {
            name: 'Conventions',
            link: '/trainings-&-seminars/conventions',
            group: 'events',
        },
        {
            name: 'PAC Exclusive Brands',
            link: '#',
            group: 'our-products',
        },
        {
            name: 'Orthodontics',
            link: '#',
            group: 'our-products',
        },
        {
            name: 'Aesthetics',
            link: '#',
            group: 'our-products',
        },
        {
            name: 'Restorative',
            link: '#',
            group: 'our-products',
        },
        {
            name: 'Implant',
            link: '#',
            group: 'our-products',
        },
        {
            name: 'Prostige Rewards',
            link: '#',
            group: 'our-products',
        },
        {
            name: 'How to Order',
            link: '#',
            group: 'resources',
        },
        // {
        //     name: 'Sales Agents',
        //     link: '#',
        //     group: 'resources',
        // },
        {
            name: 'News and Updates',
            link: '#',
            group: 'resources',
        },
        {
            name: 'E - Catalogues',
            link: '/resources/brand-catalogues',
            group: 'resources',
        },
        {
            name: 'ri:facebook-circle-fill',
            link: '#',
            group: 'soc-med',
        },
        {
            name: 'ri:instagram-fill',
            link: '#',
            group: 'soc-med',
        },
        {
            name: 'ri:tiktok-fill',
            link: '#',
            group: 'soc-med',
        },
        {
            name: 'ri:youtube-fill',
            link: '#',
            group: 'soc-med',
        },
        {
            name: 'ri:linkedin-box-fill',
            link: '#',
            group: 'soc-med',
        },
        {
            name: 'shop now',
            link: '#',
            title: 'Already Know What to Order?',
            group: 'quick-btn',
        },
        {
            name: 'know more',
            link: '#',
            title: 'Stay Updated on our Events',
            group: 'quick-btn',
        },
        {
            name: 'Data Protection',
            link: '#',
            group: 'extras',
        },
        {
            name: 'Privacy Policy',
            link: '#',
            group: 'extras',
        }
    ]

    const aboutLinks = footerLinks.filter((link) => link.group === 'about');
    const resourcesLinks = footerLinks.filter((link) => link.group === 'resources');
    const eventLinks = footerLinks.filter((link) => link.group === 'events');
    const productLinks = footerLinks.filter((link) => link.group === 'our-products');
    const socmedLinks = footerLinks.filter((link) => link.group === 'soc-med')
    const quickLinks = footerLinks.filter((link) => link.group === 'quick-btn')
    const extraLinks = footerLinks.filter((link) => link.group === 'extras')



    return (
        <div className="w-full min-h-content lg:max-h-[67vh] xs:h-content bg-[#171717] flex flex-col divide-y py-4 lg:px-16 xs:px-4 gap-4 pt-8 z-50">
            <div className="w-full h-full shrink-0 basis-[90%] flex lg:flex-row xs:flex-col gap-4">
                <div className='w-full basis-[30%] flex flex-col justify-between gap-8'>
                    <div className='w-64 h-12 relative'>
                        <Image src="/pac-white.png" fill={true} alt='pros-apac-logo' />
                    </div>
                    <div className=" w-full h-content text-[#e1e1e1] text-sm justify-start lg:pb-4 ">
                        We put the <span className='uppercase font-bold text-pac-orange'>smile</span> back on every <span className='uppercase font-bold text-[#077232]'>filipino</span>
                    </div>
                    <div className=" w-full h-content text-[#e1e1e1] text-sm flex flex-col justify-start lg:pb-4 ">
                        <span>768 Gen. Malvar St.,</span>
                        <span>Malate, Manila, Philippines 1004</span>
                        <span>customerservice@prosapac.com</span>
                        <span>+63 2 8526 3870 / 8526 2911 / 8524 0331</span>
                    </div>
                </div>
                <div className=' w-full basis-[50%] grid lg:grid-cols-2'>
                    <div className=' w-full h-full flex flex-col xs:py-2 lg:p-2'>
                        <span className="text-[#fcfcfc] text-sm uppercase font-bold pb-1">
                            about
                        </span>
                        {aboutLinks.map((link, index) => (
                            <a key={index} className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-nav-orange text-sm" href={link.link}>{link.name}</a>
                        ))}
                    </div>
                    <div className=' w-full h-full flex flex-col xs:py-2 lg:p-2'>
                        <span className="text-[#fcfcfc] text-sm uppercase font-bold pb-1">
                            events
                        </span>
                        {eventLinks.map((link, index) => (
                            <a key={index} className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-nav-orange text-sm" href={link.link}>{link.name}</a>
                        ))}
                    </div>
                    <div className=' w-full h-full flex flex-col xs:py-2 lg:p-2'>
                        <span className="text-[#fcfcfc] text-sm uppercase font-bold pb-1">
                            our products
                        </span>
                        {productLinks.map((link, index) => (
                            <a key={index} className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-nav-orange text-sm" href={link.link}>{link.name}</a>
                        ))}
                    </div>
                    <div className=' w-full h-full flex flex-col xs:py-2 lg:p-2'>
                        <span className="text-[#fcfcfc] text-sm uppercase font-bold pb-1">
                            resources
                        </span>
                        {resourcesLinks.map((link, index) => (
                            <a key={index} className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-nav-orange text-sm" href={link.link}>{link.name}</a>
                        ))}
                    </div>
                </div>
                <div className=' w-full h-full basis-[20%] flex flex-col justify-between'>
                    <div className=' w-full h-content py-1 flex lg:justify-between gap-2'>
                        {socmedLinks.map((link, index) => (
                            <a key={index} className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-nav-orange text-sm" href={link.link}>
                                <Icon icon={link.name} width="42" height="42" />
                            </a>
                        ))}
                    </div>
                    {quickLinks.map((link, index) => (
                        <div key={index} className=" w-content h-full flex flex-col gap-2 items-start xs:py-2" >
                            <span className='text-[#fcfcfc] text-sm font-semibold'>
                                {link.title}
                            </span>
                            <a className='w-content px-5 py-3 h-content border-2 rounded-md border-nav-orange text-nav-orange font-semibold text-sm uppercase flex items-center justify-center hover:text-[#fcfcfc] hover:border-[#fcfcfc]' href={link.link}>
                                {link.name}
                            </a>
                        </div>
                    ))}

                </div>
            </div>
            <div className="w-full shrink-1 lg:px-8 flex lg:flex-row xs:flex-col-reverse justify-between pt-2">
                <span className=' w-content h-full text-xs text-[#fcfcfc]'>
                    All Rights Reeserved 2023
                </span>
                <div className=' w-content h-full flex xs:gap-8 lg:gap-4'>
                    {extraLinks.map((link, index) => (
                        <a key={index} className="text-[#e1e1e1]/90 text-xs underline-offset-2 hover:underline hover:text-nav-orange" href={link.link}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer;