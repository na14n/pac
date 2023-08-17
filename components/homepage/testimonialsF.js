'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import TestimonialCard from "../testimonials/testimonialCard"
import Image from "next/image"

const query = gql` query FetchTestimonialsF {
    homepageSections(where: {search: "why-choose-us"}) {
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

    for (let i = 0; i < data?.homepageSections?.nodes[0]?.sectionSubheading.length; i++) {
        testimonialsF.push({
            name: data?.homepageSections?.nodes[0]?.sectionSubheading[i],
            location: data?.homepageSections?.nodes[0]?.contentLine1[i],
            message: data?.homepageSections?.nodes[0]?.contentLine2[i],
        })
    }

    return (
        <div className="w-full h-fit lg:px-32 lg:py-24 relative flex flex-col justify-center items-center overflow-hidden lg:gap-32 xs:gap-24 xs:pb-32 bg-gradient-to-b last:from-[#3E3E3E] last:to-[#2A2A2A] lg:pb-0">
            <div className="w-full xs:h-52 lg:h-2/5 bg-gradient-to-b from-[#F0892B]/90 to-[#E66204]/90 absolute z-20 top-0"></div>
            <div className="absolute z-10 t-0 w-full xs:h-52 lg:h-2/5 top-0 overflow-hidden">
                <Image width={2400} height={1600} src={'https://picsum.photos/1920/1080'} alt="dental-website-banner" />
            </div>
            <div className="z-20 w-full xs:h-52 lg:h-1/3 flex flex-col items-center justify-center gap-2 ">
                <div className="uppercase text-[#FCFCFC] font-bold text-3xl 2xl:text-4xl">
                    {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading[0] : `why choose us`}
                </div>
                <div className="w-1/3 h-[2px] rounded-md bg-[#EFEFEF]"></div>
            </div>
            <div className="w-full h-full z-30 flex xs:flex-col lg:flex-row justify-center items-center lg:py-8 xs:gap-24 lg:gap-8 2xl:gap-8">
                {testimonialsF.map((t,i) => (
                    <TestimonialCard key={i} data={t} />
                ))}
            </div>
        </div>
    )
}