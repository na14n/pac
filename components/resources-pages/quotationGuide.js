'use client';
import { useState } from 'react';

const QuotationGUide = ({ props }) => {

    const placeholder = [
        {
            title: 'Contact a Sales Agent',
            steps: [
                {
                    title: 'Step One',
                    description: 'Sales Agent Step One is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Two',
                    description: 'Sales Agent Step Two is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Three',
                    description: 'Sales Agent Step Three is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Four',
                    description: 'Sales Agent Step Four is lorem ipsum dolor amet.'
                },
            ],
        },
        {
            title: 'Customer Support',
            steps: [
                {
                    title: 'Step One',
                    description: 'Customer Support Step One is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Two',
                    description: 'Customer Support Step Two is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Three',
                    description: 'Customer Support Step Three is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Four',
                    description: 'Customer Support Step Four is lorem ipsum dolor amet.'
                },
            ],
        },
        {
            title: 'Facebook Messenger',
            steps: [
                {
                    title: 'Step One',
                    description: 'Facebook Messenger Step One is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Two',
                    description: 'Facebook Messenger Step Two is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Three',
                    description: 'Facebook Messenger Step Three is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Four',
                    description: 'Facebook Messenger Step Four is lorem ipsum dolor amet.'
                },
            ],
        },
        {
            title: 'Email',
            steps: [
                {
                    title: 'Step One',
                    description: 'Email Step One is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Two',
                    description: 'Email Step Two is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Three',
                    description: 'Email Step Three is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Four',
                    description: 'Email Step Four is lorem ipsum dolor amet.'
                },
            ],
        },
    ]

    const [selectedTab, setSelectedTab] = useState(placeholder[0]);
    const [selectedSteps, setSelectedSteps] = useState(placeholder[0])

    const handleTabClick = (props) => {
        setSelectedTab(props);
    }

    return (
        <div className="w-full h-full max-h-fit flex flex-col justify-center 2xl:justify-start items-center gap-8 py-12 lg:px-32 2xl:px-48 2xl:py-32">
            <h1 className="w-fit h-fit lg:text-3xl 2xl:text-5xl text-[#121212] font-bold uppercase">
                Quotation Inquiry Guide
            </h1>
            <div className="grid grid-cols-4 bg-[#DFDFDF] py-2 rounded-md divide-x-[2px] divide-[#D1D1D1] border-2 border-[#D1D1D1] mb-8">
                {placeholder.map((p, index) => (
                    <button key={index} className={` px-4 lg:max-w-[180px]`} onClick={() => handleTabClick(p)}>
                        <p className={`uppercase h-full px-6 py-2 rounded-md font-bold lg:text-sm flex justify-center items-center transition-all ${selectedTab.title === p.title ? `bg-pac-green text-[#FCFCFC]` : `text-[#575757]/50 hover:text-pac-green`}`}>
                            {p.title}
                        </p>
                    </button>
                ))}
            </div>
            <div className="w-full grid grid-cols-2 bg-[#DFDFDF] py-12 px-16 rounded-md border-2 border-[#D1D1D1] justify-items-center align-items-center gap-y-16">
                {selectedTab.steps.map((s, index) => (
                    <div key={index} className='w-full lg:max-w-[400px] 2xl:max-w-[500px] h-fit flex flex-col gap-2'>
                        <h1 className='flex items-center gap-2'>
                            <span className='bg-nav-orange w-6 h-6 flex justify-center items-center rounded-full text-[#FCFCFC] font-bold'>{index+1}</span>
                            <span className='font-bold text-lg'>{s.title}</span>
                        </h1>
                        <p className='text-[#373737]'>
                            {s.description}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default QuotationGUide;