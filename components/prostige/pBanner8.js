'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import TestimonialCard from "../testimonials/testimonialCard";


const query = gql` query FetchPBanner8 {
    prostigePages(where: {search: "banner-8"}) {
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

export default function PBanner8() {


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
        <section className="w-full h-fit flex flex-col gap-8 justify-center bg-[#E1E1E1] overflow-hidden py-16 xs:px-4 lg:px-32 2xl:px-48">
            <div className="flex w-full h-fit flex-col gap-4">
                <h1 className="lg:text-5xl xs:text-3xl font-bold text-pac-green w-full">{data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.sectionHeading : ''}</h1>
                <div className="w-4/5 h-[3px] bg-pac-orange" />
            </div>
            <h1 className="lg:text-3xl xs:text-xl w-full font-bold text-[#171717]">{data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.sectionSubheading : ''}</h1>
            <span className="flex w-fit h-fit gap-2 flex-wrap">
                {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.textLine1.map(
                    (c, i) => (
                        <h5 key={i} className="lg:text-3xl xs:text-xl peer even:font-bold text-[#272727] even:text-pac-orange w-fit shrink-0">
                            {c}
                        </h5>
                    )
                ) : ''}
            </span>
            <span className="flex flex-col w-fit h-fit gap-2">
                {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.textLine2.map(
                    (c, i) => (
                        <h5 key={i} className="lg:text-2xl xs:text-lg text-[#373737] tracking-tight w-fit">
                            {c}
                        </h5>
                    )
                ) : ''}
            </span>
        </section>
    )
}