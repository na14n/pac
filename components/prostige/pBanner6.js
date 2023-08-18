'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { sortByAttribute } from "@/lib/helpers";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Button from "../button";
import Image from "next/image";

const query = gql` query FetchPBanner6 {
    prostigePages(where: {search: "banner-6"}) {
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

export default function PBanner6() {

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
        <section className="w-full h-fit flex flex-col items-center justify-center gap-8 py-16 bg-[#FCFCFC] xs:px-4 lg:px-32 2xl:px-48">
            <h3 className="text-[#121212] text-3xl font-bold w-full h-fit">
                {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.sectionHeading : ``}
            </h3>
            <div className="w-full flex flex-row gap-3">
                <h4 className="shrink-0 text-pac-orange text-lg 2xl:text-2xl font-bold">{data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.sectionSubheading[0] : ``}</h4>
                <span className=" h-fit flex flex-col gap-4">
                    <p className="text-[#373737] 2xl:text-2xl">{data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.contentLine1[0] : ``}</p>
                    <div className="flex  flex-row items-center gap-4 w-fit h-fit">
                        <Button type={1} name={'Download Now'} link={data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.contentLine2[0] : ``} />
                        <h3 className="font-bold text-xl text-[#272727]">or</h3>
                        <div className="h-fit w-fit p-4 bg-[#676767] flex flex-row gap-3 rounded-md items-center">
                            <div className="relative w-32 h-32 shrink-0">
                                <Image fill={true} src={data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.mediaLine1[0]?.link : ``} alt="download-prostige-qr" className="object-contain" />
                            </div>
                            <h5 className="text-[#EFEFEF] w-28 text-center text-xl font-semibold">
                                {data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.contentLine2[1] : ``}
                            </h5>
                        </div>
                    </div>
                </span>
            </div>
            <div className="w-full flex flex-row gap-3">
                <h4 className="shrink-0 text-pac-orange text-lg 2xl:text-2xl font-bold">{data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.sectionSubheading[1] : ``}</h4>
                <span className=" h-fit flex flex-col gap-4">
                    <p className="text-[#373737] 2xl:text-2xl">{data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.contentLine1[1] : ``}</p>
                    <p className="text-[#373737] 2xl:text-lg">{data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.contentLine2[2] : ``}</p>
                </span>
            </div>
            <div className="w-full flex flex-row gap-3">
                <h4 className="shrink-0 text-pac-orange text-lg 2xl:text-2xl font-bold">{data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.sectionSubheading[2] : ``}</h4>
                <p className="text-[#373737] 2xl:text-2xl">{data?.prostigePages?.nodes[0] ? data?.prostigePages?.nodes[0]?.contentLine1[2] : ``}</p>
            </div>
        </section>
    )
}