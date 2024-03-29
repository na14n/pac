'use client';

export const dynamic = 'force-dynamic'

import { pTagRemover } from "@/lib/helpers";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import { motion } from "framer-motion";

const query = gql` query FetchPBanner2 {
  prostigePages(where: {search: "banner-2"}) {
    nodes {
      title
      sectionHeading
      contentLine1
      mediaLine1{
        link
      }
    }
  }
}
`;

export default function PBanner2() {

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

    return (
        <section className="w-full h-fit flex xs:flex-col-reverse lg:flex-row items-center justify-around lg:gap-16 xs:px-4 lg:px-32 2xl:px-48 py-16 bg-[rgb(252,252,252)] overflow-hidden">
            <div className="lg:w-fit xs:w-full h-full flex flex-col justify-center gap-8 2xl:gap-16">
                <span className="h-fit lg:w-fit xs:w-full flex flex-col xs:items-center lg:items-start gap-1">
                    <h1 className="w-fit lg:text-6xl xs:text-2xl text-pac-green ">
                        {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.sectionHeading[0] : ``}
                    </h1>
                    <h1 className="w-fit lg:text-7xl xs:text-3xl text-pac-orange">
                        {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.sectionHeading[1] : ``}
                    </h1>
                </span>
                <span className="lg:max-w-[400px] 2xl:max-w-fit  h-fit flex flex-col gap-4 2xl:text-xl">
                    {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.contentLine1.map((c, i) => (
                        <p key={i} className="text-[#373737] text-justify">
                            {pTagRemover(c)}
                        </p>
                    )) : ``}
                </span>
            </div>
            <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="xs:w-96 xs:h-96 lg:w-[480px] lg:h-[480px] 2xl:w-[720px] 2xl:h-[720px] 2xl:shrink-0 overflow-hidden relative "
            >
                <Image src={data?.prostigePages?.nodes[0]?.mediaLine1[0]?.link} fill={true} alt="prostige-reward-card" className="object-contain" />
            </motion.div>
        </section>
    )
}