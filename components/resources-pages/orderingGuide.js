'use client';
import { useState } from 'react';

const OrderingGuide = ({ props }) => {

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

    const handleTabClick = (props) => {
        setSelectedTab(props);
    }

    return (
        <div className="w-full h-full flex flex-col justify-center 2xl:justify-start items-center bg-gradient-to-b from-[#F0892B]/90 to-[#E66204]/90 gap-8 py-12 lg:px-32 2xl:px-48 2xl:py-32">
            <h1 className="w-fit h-fit lg:text-3xl 2xl:text-5xl text-[#FCFCFC] font-bold uppercase">
                Step-by-Step Ordering Guide
            </h1>
            <div className="grid grid-cols-4 bg-[#F1F1F1] py-2 rounded-md divide-x-[2px] divide-[#E1E1E1] border-2 border-[#E1E1E1] mb-8">
                {placeholder.map((p, index) => (
                    <button key={index} className={` px-4 lg:max-w-[180px]`} onClick={() => handleTabClick(p)}>
                        <p className={`uppercase h-full px-6 py-2 rounded-md font-bold lg:text-sm flex justify-center items-center transition-all ${selectedTab.title === p.title ? `bg-nav-orange text-[#FCFCFC]` : `text-[#575757]/50 hover:text-nav-orange`}`}>
                            {p.title}
                        </p>
                    </button>
                ))}
            </div>
            <div className="w-full flex px-16 justify-center align-center gap-4 2xl:gap-12">
                {selectedTab.steps.map((s, index) => (
                    <div key={index} className='w-[500px] lg:w-[500px] 2xl:w-[300px] h-fit flex flex-col items-center gap-2'>
                        <span className='bg-[#EFEFEF] w-8 h-8 flex justify-center items-center rounded-full text-nav-orange font-bold'>
                            {index + 1}
                        </span>
                        <h1 className='font-bold text-lg text-[#FCFCFC] mb-4'>
                            {s.title}
                        </h1>
                        <p className='text-[#373737] text-center w-full bg-[#FCFCFC] p-4 rounded-md lg:h-[250px]'>
                            {s.description}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default OrderingGuide;