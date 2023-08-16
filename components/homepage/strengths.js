'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql` query FetchStrengths {
    homepageSections(where: {search: "strengths"}) {
      nodes {
        sectionTitle
        sectionHeading
        sectionSubheading
        contentLine1
        contentLine2
      }
    }
  }
`;

import { Icon } from "@iconify-icon/react";
import Image from "next/image";



export default function Strengths() {

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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            icon: 'ant-design:rise-outlined',
            link: '',
        },
        {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            icon: 'tabler:book',
            link: '',
        },
        {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            icon: 'solar:cup-first-linear',
            link: '',
        },
        {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            icon: 'ant-design:field-time-outlined',
            link: '',
        },
    ]

    const strengths = []

    for (let i = 0; i < data?.homepageSections?.nodes[0]?.sectionSubheading.length; i++) {
        strengths.push({
            title: data?.homepageSections?.nodes[0]?.sectionSubheading[i],
            description: data?.homepageSections?.nodes[0]?.contentLine1[i],
            icon: data?.homepageSections?.nodes[0]?.contentLine2[i],
        })
    }

    return (strengths) ? (
        <div className="w-full h-fit lg:px-32 xs:px-4 relative flex flex-col items-center z-40 xs:pb-16">
            <div className="w-full h-fit lg:absolute xs:relative lg:-top-20 2xl:-top-28 flex xs:flex-col lg:flex-row items-center justify-center lg:gap-8 xs:gap-8 lg:px-32 xs:px-4">
                {strengths.map((s, index) => (
                    <div key={index} className="w-60 h-60 2xl:w-72 2xl:h-72 shadow-lg bg-gradient-to-b odd:from-[#FAA541] odd:to-[#EE6400] even:from-[#FCFCFC] even:to-[#EFEFEF] rounded-md flex justify-center gap-4 flex-col items-center p-4 odd:text-[#FCFCFC] even:text-[#EE6400] peer group relative overflow-hidden cursor-pointer">
                        <Icon icon={s.icon} className="text-6xl" />
                        <p className="w-full h-fit text-center text-xl font-bold peer-odd:text-[#EFEFEF] peer-even:text-[#FAA541]">
                            {s.title}
                        </p>
                        <Icon icon={'mdi:arrow-up-circle'} className="absolute -bottom-2 text-3xl peer-odd:text-[#EFEFEF] peer-even:text-[#FAA541] hover:hidden" />
                        <div className="w-full h-full absolute top-60 2xl:top-72 left-0 group-hover:top-0 transition-all p-4 bg-gradient-to-b flex items-center justify-center">
                            <p className="w-full h-fit text-center text-sm">
                                {s.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className="w-full h-fit lg:px-32 xs:px-4 relative flex flex-col items-center z-40 xs:pb-16 lg:pb-0">
            <div className="w-full h-fit lg:absolute xs:relative lg:-top-20 2xl:-top-24 flex xs:flex-col lg:flex-row items-center justify-center lg:gap-12 xs:gap-8 lg:px-32 xs:px-4">
                {placeholder.map((s, index) => (
                    <div key={index} className="w-56 h-44 2xl:w-60 2xl:h-48 shadow-lg bg-gradient-to-b odd:from-[#FAA541] odd:to-[#EE6400] even:from-[#FCFCFC] even:to-[#EFEFEF] rounded-md flex justify-center gap-4 flex-col items-center p-4 odd:text-[#FCFCFC] even:text-[#EE6400] peer">
                        <Icon icon={s.icon} height={64} width={64} />
                        <p className="w-full h-fit text-center text-sm peer-odd:text-[#EFEFEF] peer-even:text-[#FAA541]">
                            {s.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}