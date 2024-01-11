'use client'

export const dynamic = 'force-dynamic'

import Image from "next/image"
import { gql } from "@apollo/client";
import { useSuspenseQuery, useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import { sortByAttribute } from "@/lib/helpers";
import { Icon } from "@iconify-icon/react";

const query = gql`
query FetchCareers4($search: String) {
    contactUsContents(where: {title: $search}) {
      nodes {
        title
        sectionHeading
        sectionSubheading
        contentLine1
        mediaLine1{
            title
            sourceUrl
        }
        textLine1
        textLine2
      }
    }
  }
`

export default function CareersSection4() {

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
            variables: {
                search: "careers-4"
            }
        }
    );

    const assets = sortByAttribute(data?.contactUsContents?.nodes[0]?.mediaLine1, "title")

    return (
        <section className="w-full h-fit flex flex-col px-4 md:px-8 gap-8 lg:px-16 xl:px-32 2xl:px-48 py-12 bg-[#EFEFEF]">
            <div className="flex gap-4 items-center">
                <Icon icon="mdi:email-open-outline" className="text-[#373737] text-5xl 2xl:text-6xl" />
                <h2 className="text-3xl 2xl:text-4xl font-bold text-[#373737] uppercase">
                    {data?.contactUsContents?.nodes[0]?.sectionHeading}
                </h2>
            </div>
            <div>
                <h4>{data?.contactUsContents?.nodes[0]?.sectionSubheading}</h4>
                <div className="p-4 bg-white w-fit rounded-md flex flex-col gap-2">
                    <span className="flex gap-2 items-center">
                        <Icon icon="mdi:account-circle-outline" className="text-xl 2xl:text-2xl" />
                        <p className="2xl:text-lg text-pac-orange font-semibold">
                            {data?.contactUsContents?.nodes[0]?.textLine1[0]}
                        </p>
                    </span>
                    <span className="flex gap-2 items-center">
                        <Icon icon="mdi:email-outline" className="text-xl 2xl:text-2xl" />
                        <p className="2xl:text-lg text-pac-orange font-semibold">
                            {data?.contactUsContents?.nodes[0]?.textLine1[2]}
                        </p>
                    </span>
                    <span className="flex gap-2 items-center">
                        <Icon icon="mdi:phone-outline" className="text-xl 2xl:text-2xl" />
                        <p className="2xl:text-lg text-pac-orange font-semibold">
                            {data?.contactUsContents?.nodes[0]?.textLine1[3]}
                        </p>
                    </span>
                </div>
            </div>
            <div className="flex gap-4">
                {data?.contactUsContents?.nodes[0]?.textLine2?.map((t, index) => (
                    <a key={index} href={t} className="flex flex-col gap-2 items-center group">
                        <span className="w-[48px] h-[48px] relative overflow-hidden rounded-md">
                            <Image fill className="object-center object-cover opacity-95 group-hover:opacity-100" src={assets[index].sourceUrl} />
                        </span>
                        <span className="text-sm text-[#474747]/75 group-hover:text-[#272727]">
                            {parse(data?.contactUsContents?.nodes[0]?.contentLine1[index])}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    )
}