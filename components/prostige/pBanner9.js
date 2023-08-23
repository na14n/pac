'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import FaqItem from "../resources-pages/faqItem";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Icon } from "@iconify-icon/react";
// import TestimonialCard from "../testimonials/testimonialCard";


const queryA = gql` query FetchPBanner9a {
    prostigePages(where: {search: "banner-9a"}) {
        nodes {
          title
          sectionHeading
          contentLine1
          contentLine2
        }
      }
    }
`;
const queryB = gql` query FetchPBanner9b {
    prostigePages(where: {search: "banner-9b"}) {
        nodes {
          title
          sectionHeading
          sectionSubheading
          contentLine1
          contentLine2
        }
      }
    }
`;

export default function PBanner9() {


    const data9a = useSuspenseQuery(
        queryA,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    );

    const data9b = useSuspenseQuery(
        queryB,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    );

    // console.log('DATA B: ', data9b);

    return (
        <section className="w-full h-fit flex flex-col gap-16 justify-center bg-gradient-to-t from-[#EFEFEF] to-[#FCFCFC] overflow-hidden py-16 xs:px-4 lg:px-32 2xl:px-48">
            <div className="w-full h-fit flex flex-col items-center gap-12">
                <h3 className="text-4xl text-pac-orange font-bold uppercase">
                    {data9a?.data?.prostigePages?.nodes[0] ? data9a?.data?.prostigePages?.nodes[0]?.sectionHeading : `faq`}
                </h3>
                <div className="flex flex-col gap-8">
                    {data9a?.data?.prostigePages?.nodes[0] ? data9a?.data?.prostigePages?.nodes[0]?.contentLine1.map((
                        q, i) => (
                        <FaqItem question={q} answer={data9a?.data?.prostigePages?.nodes[0] ? data9a?.data?.prostigePages?.nodes[0]?.contentLine2[i] : `answer for question ${i}`} />
                    )) : ``}
                </div>
            </div>
            <div className="w-full h-fit flex flex-col gap-8">
                <div className="flex gap-2 items-center">
                    <Icon className="text-[#474747] font-semibold text-2xl " icon="mdi:information-variant-circle" />
                    <h3 className="text-[#474747] font-semibold text-3xl ">
                        {data9b?.data?.prostigePages?.nodes[0] ? data9b?.data?.prostigePages?.nodes[0]?.sectionHeading[0] : `faq`}
                    </h3>
                </div>
                <div className="w-full h-[2px] bg-pac-green" />
                <div className="flex flex-col gap-3">
                    <h2 className="text-[#121212] text-4xl font-bold">
                        {data9b?.data?.prostigePages?.nodes[0] ? data9b?.data?.prostigePages?.nodes[0]?.sectionHeading[1] : `faq`}
                    </h2>
                    <h1 className="text-[#373737] text-4xl">
                        {data9b?.data?.prostigePages?.nodes[0] ? data9b?.data?.prostigePages?.nodes[0]?.sectionHeading[2] : `faq`}
                    </h1>

                </div>
                <div className="flex gap-12">
                    {data9b?.data?.prostigePages?.nodes[0] ? data9b?.data?.prostigePages?.nodes[0]?.contentLine1.
                        map((c, i) => (
                            <div key={i} className="flex flex-col gap-2 items-center">
                                <span className="w-fit h-fit rounded-full bg-gradient-to-b from-nav-orange to-pac-orange flex items-center justify-center">
                                    <Icon icon={c} className="text-6xl p-3 text-[#FCFCFC]" />
                                </span>
                                <h4 className="text-xl text-[#272727]">
                                    {data9b?.data?.prostigePages?.nodes[0] ? data9b?.data?.prostigePages?.nodes[0]?.sectionSubheading[i] : ``}
                                </h4>
                            </div>
                        ))
                        : `faq`}
                </div>
            </div>
        </section>
    )
}