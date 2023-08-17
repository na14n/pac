'use client';
export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";

const query = gql` query FetchProstige {
  homepageSections(where: {search: "prostige"}) {
    nodes {
      sectionTitle
      sectionHeading
      sectionSubheading
      mediaLine1 {
        link
      }
    }
  }
}
`;

export default function PHero() {

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
        <section className="relative flex flex-col xs:flex-col-reverse lg:flex-row xs:justify-center lg:justify-between xs:items-center lg:items-end lg:gap-12 xs:gap-24 items-center justify-center h-screen max-h-fit w-full gap-8 xs:px-4 lg:px-32 2xl:px-48 overflow-hidden">
            <div className="w-fit shrink-0 h-full  flex flex-col justify-center gap-8 lg:gap-16 ">
                <div className="flex flex-col justify-end gap-2 relative w-80 h-[90px]">
                    <span className="flex justify-start items-center top-0">
                        <Image src={data?.homepageSections?.nodes[0].mediaLine1[1].link} fill={true} className="object-cover flex justify-start" />
                    </span>
                    <h3 className="font-bold text-lg uppercase 2xl:text-xl tracking-wider text-[#272727] ">
                        {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionHeading : `PROSTIGE PLATINUM`}
                    </h3>
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <h2 className="text-pac-green text-4xl ">
                        {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[0] : ``}
                    </h2>
                    <span className="flex justify-center items-center gap-3 w-fit">
                        <h2 className="text-pac-green text-4xl font-bold">
                            {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[1] : ``}
                        </h2>
                        <h2 className="text-pac-green text-4xl ">
                            {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[2] : ``}
                        </h2>
                    </span>
                    <h2 className="text-pac-orange text-5xl font-bold">
                        {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[3] : ``}
                    </h2>
                </div>

            </div>
            <div className="lg:w-[500px] lg:h-[500px] align-bottom  overflow-hidden relative mt-16">
                <Image src={data?.homepageSections?.nodes[0].mediaLine1[2].link} fill={true} alt="prostige-model" className="object-cover" />
            </div>
            <div className="absolute bg-pac-green h-4 bottom-0 left-0 w-full" />
            <div className="absolute bg-pac-orange h-2 bottom-4 left-0 w-full" />
        </section>
    );
}
