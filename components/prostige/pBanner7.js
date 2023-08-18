'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import TestimonialCard from "../testimonials/testimonialCard";
import Image from "next/image";
import HorizontalSlider from "../embla/horizontalSlider";

const queryA = gql` query FetchPBanner7a {
    prostigePages(where: {search: "banner-7a"}) {
        nodes {
          title
          sectionHeading
          sectionSubheading
          mediaLine1 {
            link
          }
        }
      }
    }
`;

const queryB = gql` query FetchPBanner7b {
    prostigePages(where: {search: "banner-7b"}) {
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

const queryC = gql` query FetchPBanner7c {
    prostigePages(where: {search: "banner-7c"}) {
        nodes {
          title
          sectionHeading
          mediaLine1 {
            link
          }
        }
      }
    }
`;

export default function PBanner7() {

    const data7a = useSuspenseQuery(
        queryA,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    ).data;

    const data7b = useSuspenseQuery(
        queryB,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    ).data;

    const data7c = useSuspenseQuery(
        queryC,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    ).data;

    // console.log('DATA: ', data7c?.prostigePages?.nodes[0].mediaLine1);


    return (
        <section className="w-full h-fit flex flex-col items-center justify-center bg-[#FCFCFC] overflow-hidden">
            <div className="w-full min-h-[20vh] max-h-fit relative flex items-center justify-center py-16">
                <div className="w-full h-full top-0 absolute bg-gradient-to-r from-[#E1E1E1] via-[#E1E1E1]/90 to-[#EFEFEF]/60 z-10" />
                <Image fill={true} className="object-cover z-0" src={data7a?.prostigePages?.nodes[0] ? data7a?.prostigePages?.nodes[0].mediaLine1[0].link : ''} alt="dental-clinic" />
                <div className="flex flex-col gap-2 z-20  w-full xs:px-4 lg:px-32 2xl:px-48">
                    {data7a?.prostigePages?.nodes[0] ? data7a?.prostigePages?.nodes[0].sectionHeading.map(
                        (h, i) => (
                            <h1 key={i} className="peer w-full  even:text-pac-orange text-pac-green text-6xl even:text-7xl">{h}</h1>
                        )) : ''}
                </div>
            </div>
            <div className="w-full h-fit py-16 bg-gradient-to-b from-nav-orange to-pac-orange gap-16 flex flex-col">
                <div className="w-full h-fit flex xs:flex-col lg:flex-row justify-center items-center gap-16 2xl:gap-24">
                    {data7b?.prostigePages?.nodes[0] ? data7b.prostigePages?.nodes[0]?.sectionHeading.map(
                        (h, i) => (
                            <TestimonialCard
                                message={data7b?.prostigePages?.nodes[0] ? data7b.prostigePages?.nodes[0]?.contentLine2[i] : ''}
                                name={h}
                                location={data7b?.prostigePages?.nodes[0] ? data7b.prostigePages?.nodes[0]?.sectionSubheading[i] : ''}
                                type={'prostige'}
                                clinic={data7b?.prostigePages?.nodes[0] ? data7b.prostigePages?.nodes[0]?.contentLine1[i] : ''}
                            />
                        )
                    ) : ''}
                </div>
                <div className="w-full h-fit flex flex-col justify-center items-center gap-8">
                    <div className="flex flex-col gap-12 z-20 w-full xs:px-4 lg:px-32 2xl:px-48">
                        <div className="flex gap-3 z-20  w-full">
                            {data7c?.prostigePages?.nodes[0] ? data7c?.prostigePages?.nodes[0].sectionHeading.map(
                                (h, i) => (
                                    <h1 key={i} className="peer w-fit text-[#FCFCFC] even:font-bold text-5xl">{h}</h1>
                                )) : ''}
                        </div>
                        <HorizontalSlider media={data7c?.prostigePages?.nodes[0] ? data7c?.prostigePages?.nodes[0].mediaLine1 : []} />
                    </div>
                </div>
            </div>
        </section>
    )
}