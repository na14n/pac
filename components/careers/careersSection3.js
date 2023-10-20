'use client'

export const dynamic = 'force-dynamic'

import Image from "next/image"
import { gql } from "@apollo/client";
import { useSuspenseQuery, useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"
import { sortByAttribute } from "@/lib/helpers";

const query = gql`
query FetchCareers3($search: String) {
    contactUsContents(where: {title: $search}) {
      nodes {
        title
        sectionHeading
        sectionSubheading
      }
    }
  }
`

export default function CareersSection3() {

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
            variables: {
                search: "careers-3"
            }
        }
    );

    return (
        <section className="w-full h-fit flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 my-12">
            <h2 className="text-3xl 2xl:text-5xl font-bold text-pac-orange w-full mb-4 uppercase">{data?.contactUsContents?.nodes[0]?.sectionHeading}</h2>
            {data?.contactUsContents?.nodes[0]?.sectionSubheading?.map((sh, index) => (
                <span className="2xl:text-lg font-semibold text-[#272727] w-full mb-2" key={index}>{parse(sh)}</span>
            ))}
        </section>
    )
}