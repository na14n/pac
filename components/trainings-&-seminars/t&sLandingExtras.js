'use client'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Button from "../button";
import { motion } from "framer-motion";

const query = gql`
query fetchEventsLandingPage {
    events(where: {title: "landing-extras"}) {
      nodes {
        name
        shortDescription
        textLine1
        mediaLine1{
            sourceUrl
        }
        mediaLine2{
            sourceUrl
        }
      }
    }
  }
`

export default function EventsLandingExtras() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        })

    return (
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2">
            {data?.events?.nodes[0]?.shortDescription[0] ?
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-fit flex "
                >
                    <div className="w-1/2 h-full aspect-square relative">
                        <Image src={data?.events?.nodes[0]?.mediaLine1[0].sourceUrl} fill className="object-center object-cover" />
                    </div>
                    <div className="w-1/2 h-full square flex flex-col justify-center px-12 gap-8 bg-gradient-to-r from-[#faf0e8] to-white">
                        <h3 className="text-2xl 2xl:text-3xl font-bold text-black">
                            {data?.events?.nodes[0]?.shortDescription[0]}
                        </h3>
                        <Button type={1} name={data?.events?.nodes[0]?.textLine1[0]} link={"/news-&-updates"} />
                    </div>
                </motion.div>
                : <></>
            }
            {data?.events?.nodes[0]?.shortDescription[1] ?
                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    className="w-full h-fit flex"
                >
                    <div className="w-1/2 h-full aspect-square relative">
                        <Image src={data?.events?.nodes[0]?.mediaLine2[0].sourceUrl} fill className="object-center object-cover" />
                    </div>
                    <div className="w-1/2 h-full square flex flex-col justify-center px-12 gap-8 bg-gradient-to-r to-[#dcfdde] from-white">
                        <h3 className="text-2xl 2xl:text-3xl font-bold text-black">
                            {data?.events?.nodes[0]?.shortDescription[1]}
                        </h3>
                        <Button type={1} color={"full-green"} name={data?.events?.nodes[0]?.textLine1[1]} link={"/news-&-updates"} />
                    </div>
                </motion.div>
                : <></>
            }
        </div>
    )
}