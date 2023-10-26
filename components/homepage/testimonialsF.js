'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import TestimonialCard from "../testimonials/testimonialCard"
import Image from "next/image"
import { motion } from "framer-motion";

const query = gql` query FetchTestimonialsF {
    homepageSections(where: {search: "why-choose-us"}) {
      nodes {
        sectionTitle
        sectionHeading
        sectionSubheading
        contentLine1
        contentLine2
        mediaLine1{
            link
        }
      }
    }
  }
`;


export default function TestimonialsF() {

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

    const testimonialsF = []

    console.log(data?.homepageSections?.nodes[0]?.mediaLine1[0].link);

    for (let i = 0; i < data?.homepageSections?.nodes[0]?.sectionSubheading.length; i++) {
        testimonialsF.push({
            name: data?.homepageSections?.nodes[0]?.sectionSubheading[i],
            location: data?.homepageSections?.nodes[0]?.contentLine1[i],
            message: data?.homepageSections?.nodes[0]?.contentLine2[i],
        })
    }

    return (
        <div className="w-full h-full max-h-fit lg:px-16 xl:px-32 relative flex flex-col items-center overflow-hidden gap-24 py-16">
            <div className="xs:relative lg:absolute z-10 t-0 w-full xs:h-52 2xl:h-2/5 top-0 overflow-hidden flex items-center justify-center">
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 z-40">
                    <div className="uppercase lg:hidden text-[#FCFCFC] font-bold text-3xl 2xl:text-4xl">
                        {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading[0] : `why choose us`}
                    </div>
                    <div className="lg:hidden w-1/3 h-[2px] rounded-md bg-[#EFEFEF]"></div>
                </div>
                <Image fill={true} className="z-0 object-cover object-center" src={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine1[0].link : 'https://picsum.photos/1920/1080'} alt="dental-website-banner" />
            </div>
            <div className="z-20 w-full xs:hidden lg:flex h-fit flex-col items-center justify-center gap-2 ">
                <div className="uppercase text-[#FCFCFC] font-bold text-3xl 2xl:text-4xl">
                    {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading[0] : `why choose us`}
                </div>
                <div className=" w-1/3 h-[2px] rounded-md bg-[#EFEFEF]"></div>
            </div>
            <div className="w-full h-fit z-30 flex xs:flex-col lg:flex-row justify-center items-center xs:gap-24 lg:gap-8 2xl:gap-8 ">
                {testimonialsF.map((t, i) => (
                    <motion.span
                        key={i}
                        initial={{ y: 15, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.25 * i }}
                    >
                        <TestimonialCard key={i} data={t} />
                    </motion.span>
                ))}
            </div>
        </div>
    )
}