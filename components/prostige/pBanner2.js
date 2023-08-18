'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";

const query = gql` query FetchPBanner2 {
  prostigePages(where: {search: "banner-2"}) {
    nodes {
      title
      sectionHeading
      contentLine2
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
        <section className="w-full h-fit flex lg:flex-row lg:items-center justify-around lg:gap-32 xs:px-4 lg:px-32 2xl:px-48 py-16 bg-[#FCFCFC]">
            <div className="w-fit shrink-0 h-full flex flex-col justify-center gap-8">
                <span className="w-fit h-fit flex flex-col items-center gap-1">
                    <h1 className="w-fit lg:text-5xl text-pac-green ">
                        {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.sectionHeading[0] : ``}
                    </h1>
                    <h1 className="w-fit lg:text-6xl text-pac-orange">
                        {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.sectionHeading[1] : ``}
                    </h1>
                </span>
                <span className="lg:max-w-[400px] h-fit flex flex-col gap-4 2xl:text-lg">
                    {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.contentLine2.map((c, i) => (
                        <p key={i} className="text-[#373737] text-justify">
                            {c}
                        </p>
                    )) : ``}
                </span>
            </div>
            <div className="xs:w-48 xs:h-36 lg:w-[480px] lg:h-[360px] 2xl:w-[720px] 2xl:h-[560px] overflow-hidden relative">
                <Image src={data?.prostigePages?.nodes[0]?.mediaLine1[0]?.link} fill={true} alt="prostige-reward-card" className="object-contain" />
            </div>
        </section>
    )
}