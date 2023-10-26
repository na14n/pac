'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { motion } from "framer-motion";
import Counter from "./counter"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql` query FetchPageSection {
    homepageSections(where: {search: "our-reach"}) {
      nodes {
        sectionTitle
        sectionHeading
        sectionSubheading
        textLine1
      }
    }
  }
`;

export default function Reach({ type }) {

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    );

    const placeholder = [
        {
            title: 'products',
            description: '3500'
        },
        {
            title: 'active customers',
            description: '8000'
        },
        {
            title: 'brands',
            description: '35'
        },
        {
            title: 'social followers',
            description: '22000'
        },
    ]

    const stats = []

    for (let i = 0; i < data?.homepageSections?.nodes[0]?.sectionSubheading.length; i++) {
        stats.push({
            title: data?.homepageSections?.nodes[0]?.sectionSubheading[i],
            description: data?.homepageSections?.nodes[0]?.textLine1[i],
        })
    }

    return (data) ? (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full relative z-40 px-32 flex flex-col items-center"
        >
            <div className={`lg:h-48 xs:h-56 2xl:h-64 w-content shadow-lg rounded-md overflow-hidden bg-gradient-to-b max-lg:mx-2 ${type === 'orange' ? ' from-[#EF873C] to-[#D95B00]' : 'from-[#0E6200] to-[#103900]'} absolute xs:-top-28 lg:-top-24 2xl:-top-32 flex xs:flex-col lg:flex-row`}>
                <div className="h-full lg:w-[400px] 2xl:w-[600px] flex items-center justify-center overflow-hidden relative">
                    <div className="w-[150px] 2xl:w-[350px] h-full bg-[#FCFCFC] xs:hidden lg:block lg:absolute left-0">
                    </div>
                    <div className=" w-[250px] h-[250px] 2xl:w-[400px] 2xl:h-[400px] xs:hidden lg:block bg-[#FCFCFC] lg:absolute rotate-45">
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center xs:py-4 lg:py-0 bg-[#FCFCFC] lg:bg-transparent lg:pr-16 text-3xl 2xl:text-5xl uppercase font-bold z-40 text-pac-orange">
                        our reach
                    </div>
                </div>
                <div className="h-full lg:w-[600px] 2xl:w-[600px] grid grid-cols-2 px-8 2xl:px-0 2xl:pr-8 xs:py-4 lg:py-0 py-2 gap-y-4 lg:gap-y-0">
                    {stats.map((p, index) => (
                        <div key={index} className="w-content h-full flex flex-col justify-center items-center 2xl:gap-1 z-40">
                            {/* <div className="text-3xl 2xl:text-5xl font-semibold text-[#FCFCFC]">{p.description}</div> */}
                            <Counter target={parseInt(p.description)} duration={1} />
                            <div className="text-[#EFEFEF] uppercase text-sm max-lg:text-xs text-center 2xl:text-lg font-semibold">{p.title}</div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </motion.div>
    ) : (
        <div className="w-full h-full relative z-40 px-32 flex flex-col items-center">
            <div className={`lg:h-48 xs:h-56  2xl:h-64 w-content shadow-lg rounded-md overflow-hidden bg-gradient-to-b ${type === 'orange' ? ' from-[#EF873C] to-[#D95B00]' : 'from-pac-green to-nav-green'} absolute xs:-top-28 lg:-top-24 2xl:-top-28 flex xs:flex-col lg:flex-row`}>
                <div className="h-full lg:w-[400px] 2xl:w-[600px] flex items-center justify-center overflow-hidden relative">
                    <div className="w-[150px] 2xl:w-[350px] h-full bg-[#FCFCFC] xs:hidden lg:block lg:absolute left-0">
                    </div>
                    <div className="w-[250px] h-[250px] 2xl:w-[400px] 2xl:h-[400px] xs:hidden lg:block bg-[#FCFCFC] lg:absolute rotate-45">
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center xs:py-4 lg:py-0 bg-[#FCFCFC] lg:bg-transparent lg:pr-16 text-3xl 2xl:text-5xl uppercase font-bold z-40 text-pac-orange">
                        our reach
                    </div>
                </div>
                <div className="h-full lg:w-[600px] 2xl:w-[600px] grid grid-cols-2 px-8 2xl:px-0 2xl:pr-8 xs:py-4 lg:py-0 py-2 gap-y-4 lg:gap-y-0">
                    {placeholder.map((p, index) => (
                        <div key={index} className="w-content h-full flex flex-col justify-center items-center 2xl:gap-1 z-40">
                            {/* <div className="text-3xl 2xl:text-5xl font-semibold text-[#FCFCFC]">{p.description}</div> */}
                            <Counter target={parseInt(p.description)} duration={1} />
                            <div className="text-[#EFEFEF] uppercase text-sm 2xl:text-lg font-semibold">{p.title}</div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}