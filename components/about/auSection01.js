'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import { motion } from "framer-motion";

const query = gql`
    query GetAboutContent01 {
        aboutContents(where: {name: "section-01"}) {
        nodes {
                sectionTitle
                sectionHeading
                sectionSubheading
                contentLine1
                mediaLine1 {
                    title
                    link
                }
            }
        }
    }
`

export default function AboutS01() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        });

    // console.log('DATA: ', data);

    return (
        <section className="w-full h-fit px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-col-reverse xl:flex-row max-xl:items-center justify-between py-8 xl:py-16">
            <div className="w-fit items-stretch shrink-0 flex flex-col gap-8 xl:gap-16">
                <span>
                    <h1 className="w-full h-fit uppercase max-xl:text-center text-[#121212] font-bold text-2xl md:text-4xl xl:text-5xl mb-4">
                        {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionHeading : ``}
                    </h1>
                    <h3 className="w-full h-fit max-xl:text-center text-pac-green font-semibold max-md:px-4 xl:text-2xl">
                        {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionSubheading : ``}
                    </h3>
                </span>
                <div className="w-full items-stretch flex flex-col-reverse md:flex-row ">
                    <div className="w-full h-fit flex flex-col gap-6">
                        {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.contentLine1
                            .map((c, i) => (
                                <p key={i} className="h-fit xl:w-[50ch] 2xl:w-[55ch] text-justify 2xl:text-lg text-[#272727]">
                                    {c}
                                </p>
                            ))
                            : ``}
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-96 h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[30rem] 2xl:h-[30rem] relative"
            >
                <Image src={data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.mediaLine1[0]?.link : ``} fill={true} className="object-contain object-center" />
            </motion.div>
        </section>
    )
}