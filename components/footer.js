import { Icon } from '@iconify-icon/react';
import Button from './button';
import Image from 'next/image';

const Footer = () => {

    const footerLinks = [
        {
            name: 'Careers',
            link: '/resources/careers',
            group: 'about',
        },
        // {
        //     name: 'History',
        //     link: '/about-us',
        //     group: 'about',
        // },
        {
            name: 'Search for Sales Agents',
            link: '/resources/sales-agent-search',
            group: 'about',
        },
        {
            name: 'Company Activities',
            link: '/about-us/company-activities',
            group: 'about',
        },
        {
            name: 'Corporate Social Responsibility',
            link: '/about-us/csr',
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
            name: 'Implant & Regenerative',
            link: '#',
            group: 'our-products',
        },
        {
            name: 'PROSTIGE Rewards',
            link: '/products/prostige',
            group: 'our-products',
        },
        {
            name: 'How to Order',
            link: '/resources/how-to-order',
            group: 'resources',
        },
        // {
        //     name: 'Sales Agents',
        //     link: '#',
        //     group: 'resources',
        // },
        {
            name: 'News and Updates',
            link: '/news-&-updates',
            group: 'resources',
        },
        {
            name: 'E - Catalogues',
            link: '/resources/brand-catalogues',
            group: 'resources',
        },
        {
            name: 'Blogs',
            link: '/blogs',
            group: 'resources',
        },
        {
            name: 'ri:facebook-circle-fill',
            link: 'https://www.facebook.com/pros.apac',
            group: 'soc-med',
        },
        {
            name: 'ri:instagram-fill',
            link: 'https://www.instagram.com/pros.apac/',
            group: 'soc-med',
        },
        {
            name: 'ri:tiktok-fill',
            link: 'https://www.tiktok.com/@pros.apac',
            group: 'soc-med',
        },
        {
            name: 'ri:youtube-fill',
            link: 'https://www.youtube.com/@PROSAPACchannel',
            group: 'soc-med',
        },
        {
            name: 'ri:linkedin-box-fill',
            link: 'https://www.linkedin.com/in/pros-apac-corporation-b6a50059/',
            group: 'soc-med',
        },
        {
            name: 'shop now',
            link: '#',
            title: 'Already Know What to Order?',
            group: 'quick-btn',
        },
        {
            name: 'Sign Up',
            link: '#',
            title: 'Be Updated on our Events!',
            group: 'quick-btn',
        },
        // {
        //     name: 'Data Protection',
        //     link: '#',
        //     group: 'extras',
        // },
        {
            name: 'Sitemap',
            link: '/resources/sitemap',
            group: 'extras',
        },
        {
            name: 'Privacy Policy',
            link: '/resources/privacy-policy',
            group: 'extras',
        },
    ]

    const aboutLinks = footerLinks.filter((link) => link.group === 'about');
    const resourcesLinks = footerLinks.filter((link) => link.group === 'resources');
    const eventLinks = footerLinks.filter((link) => link.group === 'events');
    const productLinks = footerLinks.filter((link) => link.group === 'our-products');
    const socmedLinks = footerLinks.filter((link) => link.group === 'soc-med')
    const quickLinks = footerLinks.filter((link) => link.group === 'quick-btn')
    const extraLinks = footerLinks.filter((link) => link.group === 'extras')



    return (
        <div className="w-full min-h-content xl:max-h-[67vh] xs:h-content bg-[#171717] flex flex-col divide-y py-4 2xl:px-44 lg:px-12 xs:px-4 gap-4 pt-8 z-50">
            <div className="w-full h-full shrink-0 lg:basis-[90%] flex lg:flex-row xs:flex-col gap-4">
                <div className='w-full lg:basis-[30%] flex flex-col justify-start gap-4'>
                    <div className='w-64 h-12 relative shrink-0'>
                        <Image src="/pac-white.png" fill={true} alt='pros-apac-logo' />
                    </div>
                    <div className=" w-full h-content text-[#e1e1e1] text-sm justify-start">
                        We put the <span className='uppercase font-bold text-pac-orange'>smile</span> back on every <span className='uppercase font-bold text-[#077232]'>filipino</span>.
                    </div>
                    <div className=" w-full h-content text-[#e1e1e1] text-sm flex flex-col justify-start justify-self-end">
                        <span>768 Gen. Malvar St.,</span>
                        <span>Malate, Manila, Philippines 1004</span>
                        <a href="mailto:customerservice@prosapac.com" className='hover:text-nav-orange hover:underline'>customerservice@prosapac.com</a>
                        <span>+63 2 8526 3870 / 8526 0331 / 8524 2911</span>
                    </div>
                    <div className="w-full h-full text-[#e1e1e1] text-sm flex flex-col gap-2 justify-self-end">
                        <h5>Members of the PROS-APAC Group of Companies</h5>
                        <div className="flex gap-4 items-center self-stretch grow-1 h-full xl:pr-16">
                            <div className="relative w-full h-16">
                                <Image src="/otaner-logo.png" alt="otaner" fill className="object-contain object-left" />
                            </div>
                            <div className="relative w-full h-16 ">
                                <Image src="/unipro-logo.png" alt="unipro" fill className="object-contain object-left" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full h-fit grid-gap-0 lg:basis-[50%] grid lg:grid-cols-2'>
                    <div className=' w-fit h-fit flex flex-col xs:py-2 lg:p-2'>
                        <a href='/about-us' className="text-[#fcfcfc] hover:text-nav-orange text-sm uppercase font-bold pb-1">
                            about
                        </a>
                        {aboutLinks.map((link, index) => (
                            <a key={index} className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-nav-orange text-sm" href={link.link}>{link.name}</a>
                        ))}
                    </div>
                    <div className=' w-fit h-fit flex flex-col xs:py-2 lg:p-2'>
                        <a href='/trainings-&-seminars' className="text-[#fcfcfc] hover:text-nav-orange text-sm uppercase font-bold pb-1">
                            events
                        </a>
                        {eventLinks.map((link, index) => (
                            <a key={index} className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-nav-orange text-sm" href={link.link}>{link.name}</a>
                        ))}
                    </div>
                    <div className=' w-fit h-fit flex flex-col xs:py-2 lg:p-2'>
                        <a href='/products' className="hover:text-nav-orange text-[#fcfcfc] text-sm uppercase font-bold pb-1">
                            our products
                        </a>
                        {productLinks.map((link, index) => (
                            <a key={index} className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-nav-orange text-sm" href={link.link}>{link.name}</a>
                        ))}
                    </div>
                    <div className=' w-fit h-fit flex flex-col xs:py-2 lg:p-2'>
                        <span className="text-[#fcfcfc] text-sm uppercase font-bold pb-1">
                            resources
                        </span>
                        {resourcesLinks.map((link, index) => (
                            <a key={index} className="text-[#e1e1e1]/90 underline-offset-2 hover:underline hover:text-nav-orange text-sm" href={link.link}>{link.name}</a>
                        ))}
                    </div>
                </div>
                <div className=' w-full h-full lg:basis-[20%] flex flex-col justify-between'>
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
                    © 2023 to © 2024 PROS-APAC Corp. All rights reserved.
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