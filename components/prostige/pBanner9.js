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
          textLine1
          contentLine1
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
          textLine1
          textLine2
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
                <h3 className="text-4xl text-pac-orange font-bold uppercase text-center">
                    {data9a?.data?.prostigePages?.nodes[0] ? data9a?.data?.prostigePages?.nodes[0]?.sectionHeading : `faq`}
                </h3>
                <div className="flex flex-col gap-8">
                    {data9a?.data?.prostigePages?.nodes[0] ? data9a?.data?.prostigePages?.nodes[0]?.textLine1.map((
                        q, i) => (
                        <FaqItem key={i} question={q} answer={data9a?.data?.prostigePages?.nodes[0] ? data9a?.data?.prostigePages?.nodes[0]?.contentLine1[i] : `answer for question ${i}`} />
                    )) : ``}
                </div>
            </div>
            <div className="w-full h-fit flex flex-col lg:gap-2 gap-3">
                <a className="flex gap-2 items-center group hover:underline hover:text-pac-orange hover:cursor-pointer" href="/products/prostige/terms-&-conditions">
                    <Icon className="text-[#474747] group-hover:text-pac-orange font-semibold lg:text-lg xs:text-lg" icon="mdi:information-variant-circle" />
                    <h3 className="text-[#474747] group-hover:text-pac-orange font-semibold lg:text-xl xs:text-xl">
                        {data9b?.data?.prostigePages?.nodes[0] ? data9b?.data?.prostigePages?.nodes[0]?.sectionHeading[0] : `faq`}
                    </h3>
                    <Icon className="text-[#474747] group-hover:text-pac-orange font-semibold lg:text-xl xs:text-lg group-hover:opacity-100 opacity-0" icon="mdi:arrow-top-right-bold-box-outline" />
                </a>
                <div className="w-full h-[2px] bg-pac-green" />
                <div className="flex flex-col gap-3">
                    <h2 className="text-[#121212] lg:text-xl xs:text-2xl font-bold">
                        {data9b?.data?.prostigePages?.nodes[0] ? data9b?.data?.prostigePages?.nodes[0]?.sectionHeading[1] : `faq`}
                    </h2>
                    <h1 className="text-[#373737] lg:text-lg xs:text-2xl">
                        {data9b?.data?.prostigePages?.nodes[0] ? data9b?.data?.prostigePages?.nodes[0]?.sectionHeading[2] : `faq`}
                    </h1>
                </div>
                <div className="flex lg:gap-12 xs:gap-8 flex-wrap">
                    {data9b?.data?.prostigePages?.nodes[0] ? data9b?.data?.prostigePages?.nodes[0]?.textLine1.
                        map((c, i) => (
                            <div key={i} className="flex flex-col gap-2 items-center">
                                <a className="w-fit h-fit rounded-full bg-gradient-to-b from-nav-orange to-pac-orange flex items-center justify-center" href={data9b?.data?.prostigePages?.nodes[0] ? data9b?.data?.prostigePages?.nodes[0]?.textLine2[i] : ``}>
                                    <Icon icon={c} className="lg:text-4xl xs:text-2xl p-3 text-[#FCFCFC]" />
                                </a>
                                <h4 className="lg:text-lg xs:text-xs text-[#272727]">
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