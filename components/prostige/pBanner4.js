'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";

const query = gql` query FetchPBanner4 {
    prostigePages(where: {search: "banner-4"}) {
        nodes {
          title
          sectionHeading
          sectionSubheading
          contentLine1
          contentLine2
          mediaLine1 {
            link
          }
        }
      }
    }
`;

export default function PBanner4() {

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
        <section className="w-full h-fit max-h-fit flex flex-col items-center justify-center gap-16 xs:px-4 lg:px-32 2xl:px-48 py-16 bg-[#FCFCFC]">
            <div className="w-full h-fit flex flex-col gap-1">
                <h1 className="text-center lg:text-4xl xs:text-2xl font-semibold text-pac-green">
                    {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0].sectionHeading : ''}
                </h1>
                <h1 className="text-center lg:text-2xl xs:text-xl text-pac-orange">
                    {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0].sectionSubheading : ''}
                </h1>
            </div>
            <div className="flex max-lg:flex-col items-start w-fit gap-8 lg:gap-24">
                {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0].contentLine1.
                    map((c, i) => (
                        <div key={i} className="w-48 h-72 p-4 flex flex-col gap-2 justify-start items-center bg-[#E1E1E1] shadow-sm hover:shadow-md rounded-sm cursor-pointer hover:-translate-y-1 transition-all">
                            <div className="w-fit h-fit flex-col">
                                <div className="w-40 h-40 object-fill relative">
                                    <Image src={data?.prostigePages?.nodes[0]?.mediaLine1[i]?.link} fill={true} className="object-contain" />
                                </div>
                                <div className="w-full h-2 bg-gradient-to-r from-nav-green to-pac-green" />
                            </div>
                            <div className="flex flex-col w-full h-fit gap-1">
                                <h4 className="font-semibold text-lg text-pac-orange capitalize">{c}</h4>
                                <h6 className="text font-semibold text-[#373737]">{data?.prostigePages?.nodes[0]?.contentLine2[i]}</h6>
                            </div>
                        </div>
                    )) : ``}
            </div>
        </section>
    )
}