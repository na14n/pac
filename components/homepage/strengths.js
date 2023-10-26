'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import { pTagRemover, sortByAttribute } from "@/lib/helpers";

const query = gql` query FetchStrengths {
    homepageSections(where: {search: "strengths"}) {
      nodes {
        sectionTitle
        sectionHeading
        sectionSubheading
        contentLine1
        # contentLine2
        mediaLine1 {
          title
          sourceUrl
          altText
        }
      }
    }
  }
`;


const item = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
}

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

    const assets = sortByAttribute(data?.homepageSections?.nodes[0]?.mediaLine1, 'title')


    for (let i = 0; i < data?.homepageSections?.nodes[0]?.sectionSubheading.length; i++) {
        strengths.push({
            title: data?.homepageSections?.nodes[0]?.sectionSubheading[i],
            description: data?.homepageSections?.nodes[0]?.contentLine1[i],
            // icon: data?.homepageSections?.nodes[0]?.contentLine2[i],
        })
    }

    return (strengths) ? (
        <div className="w-full h-fit xl:h-0 relative flex flex-col items-center justify-center z-40 xs:pb-16 2xl:px-48 lg:px-32 xs:px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.5, delayChildren: 0.5 }}
                className="w-fit h-fit xl:absolute relative xl:-top-36 2xl:-top-32 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-6 xl:gap-8 xs:gap-4 "
            >
                {strengths.map((s, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{delay: 0.15 * index}}
                        className="w-72 h-72 shrink-0 md:h-[16rem] xl:h-[16rem] 2xl:h-64 shadow-md bg-gradient-to-b odd:from-[#FAA541] odd:to-[#EE6400] even:from-[#FCFCFC] even:to-[#EFEFEF] rounded-md flex justify-start gap-2 flex-col items-center p-4 odd:text-[#FCFCFC] even:text-[#EE6400] peer group relative overflow-hidden"
                    >
                        {/* <Icon icon={s.icon} className="text-6xl" /> */}
                        <Image src={assets[index].sourceUrl} alt={assets[index].altText} height={60} width={60} className="object-contain object-center" />
                        <p className="w-full h-fit text-center text-xl lg:text-lg 2xl:text-xl font-bold peer-odd:text-[#EFEFEF] peer-even:text-[#FAA541]">
                            {s.title}
                        </p>
                        <p className="w-full h-fit text-center text-sm">
                            {pTagRemover(s.description)}
                            {/* {assets[index].sourceUrl} */}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    ) : (
        <div className="w-full h-fit lg:px-32 xs:px-4 relative flex flex-col items-center z-40 xs:pb-16 lg:pb-0">
            <div className="w-full h-fit lg:absolute xs:relative lg:-top-20 2xl:-top-24 flex xs:flex-col lg:flex-row items-center justify-center lg:gap-12 xs:gap-8 lg:px-32 xs:px-4">
                {placeholder.map((s, index) => (
                    <div key={index} className="w-56 h-44 2xl:w-60 2xl:h-fit shadow-lg bg-gradient-to-b odd:from-[#FAA541] odd:to-[#EE6400] even:from-[#FCFCFC] even:to-[#EFEFEF] rounded-md flex justify-center gap-4 flex-col items-center px-4 py-6 test odd:text-[#FCFCFC] even:text-[#EE6400] peer">
                        <Icon icon={s.icon} height={64} width={64} className="test" />
                        <p className="w-full h-fit text-center text-sm peer-odd:text-[#EFEFEF] peer-even:text-[#FAA541] test">
                            {s.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}