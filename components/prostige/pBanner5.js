'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { sortByAttribute } from "@/lib/helpers";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";

const query = gql` query FetchPBanner5 {
    prostigePages(where: {search: "banner-5"}) {
        nodes {
          title
          sectionHeading
          sectionSubheading
          contentLine1
          contentLine2
          mediaLine1 {
            title
            link
          }
        }
      }
    }
`;

export default function PBanner5() {

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
        <section className="w-full h-fit max-h-fit flex flex-col items-end justify-center gap-16 bg-gradient-to-r from-[#0E6200] to-[#103900] overflow-hidden">
            <div className="flex lg:flex-row xs:flex-col max-lg:gap-8 w-full h-fit justify-between lg:pl-32 2xl:pl-48 xs:pl-4 ">
                <div className="flex flex-col w-fit h-full justify-center shrink-0 gap-16 2xl:ml-48  py-16">
                    <span className="flex flex-col w-fit h-fit gap-4">
                        {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.sectionHeading.map((
                            h, i) => (
                            <h1 key={i} className="xl:text-6xl xs:text-5xl font-bold text-[#FCFCFC]">
                                {h}
                            </h1>
                        ))
                            : ``}
                    </span>
                    <div className="flex flex-col gap-4">
                        <span className="flex w-fit h-fit gap-2">
                            {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.sectionSubheading.map((
                                h, i) => (
                                <h3 key={i} className="text-4xl xs:text-2xl peer even:font-bold text-[#FCFCFC]">
                                    {h}
                                </h3>
                            ))
                                : ``}
                        </span>
                        <span className="flex w-fit h-fit gap-2">
                            {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.contentLine1.map((
                                h, i) => (
                                <h3 key={i} className="text-4xl xs:text-2xl peer odd:font-bold text-[#FCFCFC]">
                                    {h}
                                </h3>
                            ))
                                : ``}
                        </span>
                    </div>
                    <div>
                        <h4 className="p-4 bg-[#DC6101] rounded-sm w-fit text-3xl xs:text-xl text-[#FCFCFC]">
                            {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.contentLine2 : ''}
                        </h4>
                    </div>
                </div>
                <div className="lg:w-[700px] lg:h-[600px] xs:w-96 xs:h-96  relative">
                    <Image fill={true} className="object-cover" src={data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.mediaLine1[0].link : ''} />
                </div>
            </div>
        </section>
    )
}