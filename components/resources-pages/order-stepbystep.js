'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import Image from "next/image";
import { motion } from "framer-motion";

const query = gql`
    query FetchOrderingSteps {
        contactUsContents(where: {search: "ordering-steps"}) {
            nodes {
                title
                sectionHeading
                sectionSubheading
                contentLine1
                mediaLine1{
                    link
                    altText
                    title
                }
            }
        }
    }
`

export default function OrderingStepByStep() {

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

    return (
        <section className="relative w-full h-fit py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-wrap gap-8 items-center justify-center overflow-hidden z-0 bg-[#D0CFCD]">
            {data?.contactUsContents?.nodes[0]?.contentLine1?.map((content, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 * index }}
                    key={index}
                    className="w-60 last:w-72 p-4 flex flex-col gap-4 justify-start items-center bg-white shadow-sm hover:shadow-md rounded-md hover:-translate-y-1 transition-all self-stretch group"
                >
                    {data?.contactUsContents?.nodes[0]?.sectionHeading &&
                        <h4 className={`w-full text-xl font-bold italic  ${index < 3 ? "text-[#068310]" : "text-white"}`}>{index < 3 ? `Step ${index + 1}` : "Step 4"}</h4>
                    }
                    <div className="w-full aspect-square relative rounded-sm">
                        <Image src={data?.contactUsContents?.nodes[0]?.mediaLine1[index]?.link} fill={true} className="object-contain" />
                    </div>
                    <div className="flex flex-col w-full h-fit gap-1 group-last:items-center">
                        <h4 className="font-bold text-pac-orange capitalize text-xl group-last:text-2xl">{data?.contactUsContents?.nodes[0]?.sectionSubheading[index]}</h4>
                        <span className="b text-sm font-semibold text-[#373737] group-last:text-center">{parse(content)}</span>
                    </div>
                </motion.div>
            ))}
        </section>
    )
}