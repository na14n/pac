'use client';
export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { sortByAttribute } from "@/lib/helpers";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Button from "../button";

const query = gql` query FetchProstige {
  homepageSections(where: {search: "prostige"}) {
    nodes {
      sectionTitle
      sectionHeading
      sectionSubheading
      mediaLine1 {
        link
        title
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
        <section className="relative flex xs:flex-col lg:flex-row xs:justify-center lg:justify-between xs:items-center lg:items-end lg:gap-16 xs:gap-8 items-center justify-center xs:mt-24 lg:mt-0 lg:h-screen xs:min-h-fit max-h-fit w-full xs:px-4 lg:px-32 2xl:px-48 overflow-hidden xs:pt-12">
            <div className=" w-fit shrink-0 h-full  flex flex-col justify-center items-center gap-8 lg:gap-16 ">
                <div className="flex flex-col justify-end gap-2 relative md:w-96 md:h-48 max-md:w-full max-md:aspect-video">
                    <Image src={sortByAttribute(data?.homepageSections?.nodes[0].mediaLine1, 'title')[0].link} fill={true} className="object-contain object-left" />
                </div>
                <div className="flex flex-col justify-center max-md:items-center gap-1">
                    <h2 className="text-pac-green lg:text-5xl xs:text-2xl text-center">
                        {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[0] : ``}
                    </h2>
                    <span className="flex justify-center items-center gap-3 w-fit text-center">
                        <h2 className="text-pac-green lg:text-5xl xs:text-2xl font-bold">
                            {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[1] : ``}
                        </h2>
                        <h2 className="text-pac-green lg:text-5xl xs:text-2xl ">
                            {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[2] : ``}
                        </h2>
                    </span>
                    <h2 className="text-pac-orange lg:text-6xl xs:text-3xl font-bold text-center">
                        {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[3] : ``}
                    </h2>
                </div>
                <Button type={1} name={'Sign up Now'} link={`/products/prostige#ProstigeSignUp`} />
            </div>
            <div className="xs:w-96 xs:h-96 lg:w-[550px] lg:h-[550px] 2xl:w-[800px] 2xl:h-[800px] align-bottom overflow-hidden relative lg:mt-16 ">
                <Image src={sortByAttribute(data?.homepageSections?.nodes[0].mediaLine1, 'title')[2].link} fill={true} alt="prostige-model" className="object-cover" />
            </div>
            <div className="absolute bg-pac-green h-4 bottom-0 left-0 w-full" />
            <div className="absolute bg-pac-orange h-2 bottom-4 left-0 w-full" />
        </section>
    );
}
