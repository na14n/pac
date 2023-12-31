'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import parse from "html-react-parser"
import { motion } from "framer-motion";

const query = gql` query FetchPBanner3 {
    prostigePages(where: {search: "banner-3"}) {
        nodes {
          title
          sectionHeading
          contentLine1
          mediaLine1 {
            link
          }
        }
      }
    }
`;

export default function PBanner3() {

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
        <section className="w-full h-fit flex flex-col items-center justify-center gap-16 xs:px-4 lg:px-32 2xl:px-48 py-16 bg-gradient-to-b from-nav-orange/90 via-nav-orange to-nav-orange">
            <div className="w-full h-fit flex flex-col gap-1 items-center">
                <h1 className="text-center lg:text-3xl xs:text-xl font-semibold uppercase text-[#FCFCFC]">
                    {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0].sectionHeading[0] : ''}
                </h1>
                <h1 className="text-center lg:text-4xl xs:text-3xl font-semibold uppercase text-[#FCFCFC]">
                    {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0].sectionHeading[1] : ''}
                </h1>
            </div>
            <div className="flex flex-wrap items-start max-lg:justify-center w-fit lg:gap-24 xs:gap-8">
                {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0].contentLine1.
                    map((c, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 * i }}
                            key={i}
                            className="lg:w-40 xs:w-40 flex flex-col gap-4 items-center group cursor-pointer"
                        >
                            <span className="lg:w-32 lg:h-32 xs:w-32 xs:h-32 object-fill relative group-hover:-translate-y-1">
                                <Image src={data?.prostigePages?.nodes[0].mediaLine1[i].link} fill={true} className="object-contain" />
                            </span>
                            <div className="text-center text-sm  font-semibold uppercase text-[#F0F0F0]">{parse(c)}</div>
                        </motion.div>
                    )) : ``}
            </div>
        </section>
    )
}