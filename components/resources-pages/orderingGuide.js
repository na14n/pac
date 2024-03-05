'use client';

export const dynamic = 'force-dynamic'

import { sortByAttribute } from "@/lib/helpers";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import Image from "next/image";
import { useState } from 'react';

const query = gql`
    query FetchOrderingGuide {
        contactUsContents(where: {search: "ordering-guide"}) {
            nodes {
                title
                sectionHeading
                sectionSubheading
            }
        }
        orderingOptions {
            nodes {
                id
                order
                name
                orderingSteps
                icon{
                    sourceUrl
                }
            }
        }
    }
`

const OrderingGuide = () => {

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
        <div className="w-full h-full flex flex-col justify-center 2xl:justify-start items-center bg-gradient-to-b from-[#F9A03C] to-[#EF6703] gap-8 xl:gap-12 py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 2xl:py-32">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="w-fit h-fit text-3xl 2xl:text-6xl text-white font-black uppercase text-center">
                    {data?.contactUsContents?.nodes[0]?.sectionHeading}
                </h1>
                <h3 className="w-fit h-fit text-xl 2xl:text-3xl font-bold text-[#FCFCFC] text-center">
                    {data?.contactUsContents?.nodes[0]?.sectionSubheading}
                </h3>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-4 w-fit bg-[#F1F1F1] p-2 rounded-md mb-8">
                {sortByAttribute(data?.orderingOptions?.nodes, "order").map((option, index) => (
                    <button key={index} className={`p-4 gap-4 rounded-md self-stretch w-[128px] lg:w-[160px] flex flex-col items-center ${selectedTab === index ? `bg-nav-orange text-[#FCFCFC]` : `text-[#575757]/50 hover:text-nav-orange`}`} onClick={() => handleTabClick(index)}>
                        <div className="w-1/3 aspect-square relative">
                            <Image fill src={option?.icon?.sourceUrl} className="object-contain object-center" />
                        </div>
                        <p className={`uppercase rounded-md font-bold lg:text-sm flex justify-center items-center transition-all`}>
                            {option.name}
                        </p>
                    </button>
                ))}
            </div>
            <div className="w-full xl:w-2/3 flex flex-col rounded-md overflow-hidden">
                {sortByAttribute(data?.orderingOptions?.nodes, "order")[selectedTab].orderingSteps.map((step, index) => (
                    <div key={index} className="w-full h-fit even:bg-[#FFFFFF] odd:bg-[#EBEBEB] flex items-center justify-center px-8">
                        <div className="w-fit h-full flex gap-2 items-center justify-center p-2 text-xl">
                            <p className="text-[#FF852F] font-bold">Step</p>
                            <div className="bg-[#FF852F] text-white font-bold h-fit p-4 flex items-center justify-center rounded-full relative">
                                <span className="absolute">{index + 1}</span>
                            </div>
                        </div>
                        <span className="w-full b p p-4 p b a">{parse(step)}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderingGuide;