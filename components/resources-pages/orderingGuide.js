'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import { useState } from 'react';

const query = gql`
    query FetchOrderingGuide {
        contactUsContents(where: {search: "ordering-guide"}) {
            nodes {
                title
                sectionHeading
                sectionSubheading
                contentLine1
            }
        }
    }
`

const OrderingGuide = () => {

    // const placeholder = [
    //     {
    //         title: 'Contact a Sales Agent',
    //         steps: [
    //             {
    //                 title: 'Step One',
    //                 description: 'Sales Agent Step One is lorem ipsum dolor amet.'
    //             },
    //             {
    //                 title: 'Step Two',
    //                 description: 'Sales Agent Step Two is lorem ipsum dolor amet.'
    //             },
    //             {
    //                 title: 'Step Three',
    //                 description: 'Sales Agent Step Three is lorem ipsum dolor amet.'
    //             },
    //             {
    //                 title: 'Step Four',
    //                 description: 'Sales Agent Step Four is lorem ipsum dolor amet.'
    //             },
    //         ],
    //     },
    //     {
    //         title: 'Customer Support',
    //         steps: [
    //             {
    //                 title: 'Step One',
    //                 description: 'Customer Support Step One is lorem ipsum dolor amet.'
    //             },
    //             {
    //                 title: 'Step Two',
    //                 description: 'Customer Support Step Two is lorem ipsum dolor amet.'
    //             },
    //             {
    //                 title: 'Step Three',
    //                 description: 'Customer Support Step Three is lorem ipsum dolor amet.'
    //             },
    //             {
    //                 title: 'Step Four',
    //                 description: 'Customer Support Step Four is lorem ipsum dolor amet.'
    //             },
    //         ],
    //     },
    //     {
    //         title: 'Facebook Messenger',
    //         steps: [
    //             {
    //                 title: 'Step One',
    //                 description: 'Facebook Messenger Step One is lorem ipsum dolor amet.'
    //             },
    //             {
    //                 title: 'Step Two',
    //                 description: 'Facebook Messenger Step Two is lorem ipsum dolor amet.'
    //             },
    //             {
    //                 title: 'Step Three',
    //                 description: 'Facebook Messenger Step Three is lorem ipsum dolor amet.'
    //             },
    //             {
    //                 title: 'Step Four',
    //                 description: 'Facebook Messenger Step Four is lorem ipsum dolor amet.'
    //             },
    //         ],
    //     },
    //     {
    //         title: 'Email',
    //         steps: [
    //             {
    //                 title: 'Step One',
    //                 description: 'Email Step One is lorem ipsum dolor amet.'
    //             },
    //             {
    //                 title: 'Step Two',
    //                 description: 'Email Step Two is lorem ipsum dolor amet.'
    //             },
    //             {
    //                 title: 'Step Three',
    //                 description: 'Email Step Three is lorem ipsum dolor amet.'
    //             },
    //             {
    //                 title: 'Step Four',
    //                 description: 'Email Step Four is lorem ipsum dolor amet.'
    //             },
    //         ],
    //     },
    // ]

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        },
    );

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (props) => {
        setSelectedTab(props);
    }



    return (
        <div className="w-full h-full flex flex-col justify-center 2xl:justify-start items-center bg-gradient-to-b from-[#F0892B]/90 to-[#E66204]/90 gap-8 py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 2xl:py-32">
            <h1 className="w-fit h-fit text-3xl 2xl:text-5xl text-[#FCFCFC] font-bold uppercase text-center">
                Step-by-Step Ordering Guide
            </h1>
            <div className="grid grid-cols-1 max-md:w-full md:grid-cols-2 lg:grid-cols-4 bg-[#F1F1F1] py-2 rounded-md divide-x-[2px] divide-[#E1E1E1] border-2 border-[#E1E1E1] mb-8">
                {data?.contactUsContents?.nodes[0]?.sectionSubheading.map((s, index) => (
                    <button key={index} className={` px-4 lg:max-w-[180px]`} onClick={() => handleTabClick(index)}>
                        <p className={`uppercase h-full px-6 py-2 rounded-md font-bold lg:text-sm flex justify-center items-center transition-all ${selectedTab === index ? `bg-nav-orange text-[#FCFCFC]` : `text-[#575757]/50 hover:text-nav-orange`}`}>
                            {s}
                        </p>
                    </button>
                ))}
            </div>
            {/* <div className="w-full md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-12">
                {selectedTab.steps.map((s, index) => (
                    
                ))}

            </div> */}
            <div className="w-full h-fit b p rounded-md bg-white p-4">
                {parse(data?.contactUsContents?.nodes[0]?.contentLine1[selectedTab])}
            </div>
        </div>
    )
}

export default OrderingGuide;