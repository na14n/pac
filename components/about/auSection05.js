'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import parse from 'html-react-parser'
import { motion } from "framer-motion";

const query = gql`
    query GetAboutContentS05 {
        aboutContents(where: {name: "section-05"}) {
            nodes {
                    sectionTitle
                    sectionHeading
                    contentLine1
                    mediaLine1{
                        link
                    }
                }
            }
    }
`

export default function AboutS05() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        })

    return (
        <section className="w-full xl:h-fit max-h-fit px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex  items-center justify-center relative gap-0 py-16">
            <Image src={data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.mediaLine1[0]?.link : 'https://picsum.photos/1600/1600'} fill={true} alt="dental-company-background" className="object-cover object-center" />
            <span className="w-full items-stretch z-20 flex flex-col xl:flex-row place-items-center justify-center">
                {data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.sectionHeading.
                    map((h, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 * i }}
                            key={i}
                            className="z-20 w-full xl:w-[30ch] 2xl:w-[40ch] p-4 items-stretch max-h-fit flex flex-col gap-4 bg-gradient-to-b first:from-[#f9a03c]/80 first:to-[#ef6703]/80 from-[#007811]/80 to-[#153f00]/80 last:from-[#282828]/80 last:to-[#000000]/80"
                        >
                            <h4 className="text-[#FCFCFC] font-bold text-xl 2xl:text-2xl uppercase">{h}</h4>
                            <div className="w-full h-[2px] bg-[#FCFCFC]" />
                            <p className="text-justify text-[#EFEFEF] oranged__bold">{parse(data?.aboutContents?.nodes ? data?.aboutContents?.nodes[0]?.contentLine1[i] : '')}</p>
                        </motion.div>
                    ))
                    : 'https://picsum.photos/1600/1600'}
            </span>
        </section>
    )
}