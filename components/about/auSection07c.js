'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { sortByAttribute } from "@/lib/helpers";
import Image from "next/image";
import Button from "../button";

const query = gql`
    query FetchAboutContentS07c {
        aboutContents(where: {name: "section-07c"}) {
            nodes {
                    sectionTitle
                    sectionHeading
                    sectionSubheading
                    contentLine1
                    mediaLine1{
                        title
                        sourceUrl
                        altText
                    }
                }
            }
    }
`

export default function AboutS07c() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        })

    const assets = sortByAttribute(data?.aboutContents?.nodes[0]?.mediaLine1, 'title');

    // console.log(assets);

    return (
        <section className="flex flex-col items-center w-full h-fit">
            <div className="grid gap-0 grid-cols-1 min-[512px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center">
                <div className="bg-[#FCFCFC] xs:h-[20rem] md:h-[32rem] 2xl:h-[38rem] md:self-start md:col-span-2 md:row-span-2 four-to-three-p relative flex flex-col justify-end">
                    <div className="z-20 w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-[#121212]/90" />
                    <Image className='object-cover object-center z-10' fill={true} src={data?.aboutContents?.nodes[0] ? assets[0].sourceUrl : ''} alt={data?.aboutContents?.nodes[0] ? assets[0].altText : ''} />
                    <span className="z-30 mb-4 lg:mb-6 lg:px-4 px-2">
                        <h5 className="w-full text-lg font-bold text-[#eb8420] uppercase">
                            {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionHeading[0] : ''}
                        </h5>
                        <h3 className="w-full text-[#FCFCFC]">
                            {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionSubheading[0] : ''}
                        </h3>
                        <h3 className="w-full text-[#FCFCFC]">
                            {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.contentLine1[0] : ''}
                        </h3>
                    </span>
                </div>
                {assets.slice(1).map((a, i) => (
                    <div key={i} className="xs:h-[20rem] md:h-[16rem] 2xl:h-[19rem] four-to-three-p relative flex flex-col justify-end">
                        <div className="z-20 w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-[#eb8420]/90" />
                        <Image className='object-cover object-center' fill={true} src={data?.aboutContents?.nodes[0] ? a.sourceUrl : ''} alt={data?.aboutContents?.nodes[0] ? a.altText : ''} />
                        <span className="z-30 mb-2 px-2">
                        <h5 className="w-full text-xs font-semibold text-[#FFF] uppercase">
                            {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionHeading[i+1] : ''}
                        </h5>
                        <h3 className="w-full text-[8px] text-[#FCFCFC]">
                            {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionSubheading[i+1] : ''}
                        </h3>
                        <h3 className="w-full text-[8px] text-[#FCFCFC]">
                            {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.contentLine1[i+1] : ''}
                        </h3>
                    </span>
                    </div>
                ))}

                <div className="xs:h-[20rem] md:h-[16rem] 2xl:h-[19rem] min-[512px]:col-span-2 min-[512px]:w-full md:col-span-3 lg:col-span-1 four-to-three-p relative bg-[#eb8420] flex flex-col items-center justify-center gap-3">
                    <span>
                        <h5 className="text-center text-[#EFEFEF]">SEE MORE OF OUR</h5>
                        <h3 className="text-xl font-bold text-center text-[#FCFCFC]">SALES TEAM</h3>
                    </span>
                    <Button type={1} color={'white-green'} name={'CLICK HERE'} link={`resources/sales-agent-search`} />
                </div>
            </div>
        </section>
    )
}