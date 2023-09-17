'use client'

export const dynamic = 'force-dynamic'

import { idFormatter } from "@/lib/helpers";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import parse from 'html-react-parser'

export default function NewsPageRec({ rec, id }) {

    const query = gql`query FetchRelatedNews {
        newsAndUpdates(where: {search: "${rec}", notIn: "${id}"}, first: 3) {
          nodes {
            id
            name
            tags
            relatedTags
            mediaLine{
                sourceUrl
                altText
                title
            }
          }
        }
      }
    `

    const { data } = useSuspenseQuery(query);

    return (
        <section className="flex flex-col gap-4 bg-[#FCFCFC] h-fit p-4 rounded-sm">
            {data?.newsAndUpdates?.nodes.length >= 1 ?
                <div>
                    <h5 className="text-xl font-semibold text-[#171717]">Related News</h5>
                    <div className="w-1/2 h-[2px] rounded-full bg-pac-orange" />
                </div>
                : ``}
            <div className="flex max-md:flex-col lg:flex-col divide-y-2">
                {data ? data?.newsAndUpdates?.nodes.map((n, i) => (
                    <a key={i} href={`/news-&-updates/${idFormatter(n.id, true)}`} className="flex gap-4 w-full h-fit items-start justify-center pt-4 mb-4">
                        <div className="w-1/3 aspect-[4/3] relative shrink-0">
                            <Image src={n?.mediaLine[0]?.sourceUrl} fill={true} alt="" className="object-contain object-center" />
                        </div>
                        <h4 href={`/news-&-updates/${idFormatter(n.id, true)}`} className="text-[#373737] hover:text-[#121212] hover:underline max-w-[30ch] text-justify">
                            {n.name}
                        </h4>
                    </a>
                )) : ``}
            </div>
        </section>
    )
}