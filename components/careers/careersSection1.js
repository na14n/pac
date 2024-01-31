'use client'

export const dynamic = 'force-dynamic'

import Image from "next/image"
import { gql } from "@apollo/client";
import { useSuspenseQuery, useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import { sortByAttribute } from "@/lib/helpers";

const query = gql`
query FetchCareers1($search: String) {
    contactUsContents(where: {title: $search}) {
      nodes {
        title
        sectionHeading
        sectionSubheading
        contentLine1
        contentLine2
        mediaLine1 {
          sourceUrl
          title
        }
      }
    }
  }
`

export default function CareersSection1() {

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
            variables: {
                search: "careers-1"
            }
        }
    );

    const assets = sortByAttribute(data?.contactUsContents?.nodes[0]?.mediaLine1, "title")

    return (
        <section className="w-full h-fit flex flex-col items-center ">
            {/* Paragraph and Group Picture */}
            <div className="flex gap-16 py-16 w-full h-fit bg-[#EFEFEF] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
                <div className="flex flex-col gap-12 shrink-0 w-full md:w-[55ch] h-fit">
                    {data?.contactUsContents?.nodes[0].contentLine1?.map((c, index) => (
                        <span key={index} className="text-lg 2xl:text-xl text-justify">
                            {parse(c)}
                        </span>
                    ))}
                </div>
                <div className="w-full h-full aspect-video relative">
                    <Image fill src={assets[0].sourceUrl} className="object-center object-contain" />
                </div>
            </div>
            {/* Section Title and Four Cards */}
            <div className="w-full h-fit flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 relative mb-8 gap-16 ">
                <div className="w-full h-24 bg-[#EFEFEF] absolute top-0 left-0 z-0" />
                {/* Title Card */}
                <div className=" w-full lg:w-1/3 2xl:w-96 aspect-[4/3] md:aspect-[16/5] lg:aspect-square relative rounded-md shadow-md overflow-hidden flex items-center flex-col justify-end px-4 py-16 2xl:px-8 shrink-0">
                    <div className="w-full h-full absolute top-0 left-0 z-10">
                        <Image fill src={assets[1].sourceUrl} className="object-cover object-center" />
                    </div>
                    <h1 className="text-white text-2xl md:text-3xl z-20 font-bold uppercase">
                        {data?.contactUsContents?.nodes[0]?.sectionHeading}
                    </h1>
                </div>
                {/* Four Cards */}
                <div className="z-10 flex flex-col gap-4 h-full w-full items-stretch self-stretch content-stretch ">
                    {data?.contactUsContents?.nodes[0]?.sectionSubheading?.map((sh, index) => (
                        <div key={index} className="flex rounded-md shadow-md bg-white overflow-hidden h-full">
                            <div className="text-white font-bold text-3xl bg-[#fe7b11] flex items-center justify-center shrink-0 p-4">{index + 1}</div>
                            <div className="p-2">
                                <span className="font-bold text-lg text-[#fe7b11]">{sh}</span>
                                <span className="text-sm text-[#171717]">{parse(data?.contactUsContents?.nodes[0]?.contentLine2[index])}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}