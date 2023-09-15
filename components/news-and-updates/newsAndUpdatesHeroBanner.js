'use client';

export const dynamic = 'force-dynamic'

import { idFormatter } from "@/lib/helpers";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Link from "next/link";

const queryA = gql` query FetchBigPicture {
    newsFeatures(where: {name: "Big picture"}) {
      nodes {
        newsAndUpdates {
          nodes {
            name
            id
            mediaLine {
              sourceUrl
              title
              altText
            }
          }
        }
      }
    }
  }
`

const queryB = gql` query FetchFeatured {
    newsFeatures(where: {name: "featured"}) {
      nodes {
        newsAndUpdates {
          nodes {
            name
            id
            mediaLine {
                sourceUrl
                title
                altText
            }
          }
        }
      }
    }
  }
`

export default function NewsAndUpdatesBanner() {

    const bigPicture = useSuspenseQuery(
        queryA,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    );

    const featured = useSuspenseQuery(
        queryB,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    );

    // console.log(featured);

    return (
        <section className="h-fit w-full relative flex flex-col items-center justify-end px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 pt-32 gap-8">
            <div className="absolute top-0 left-0 w-full h-24 md:h-[24vh] xl:h-[32vh] 2xl:h-[36vh] bg-[#153f00]" />
            <div className="flex flex-col gap-2 z-10 font-bold self-start">
                <h1 className="text-3xl text-[#FCFCFC]">News & Updates</h1>
                <div className="w-1/2 h-[2px] rounded-full bg-nav-orange" />
            </div>
            <div className="w-full z-20 grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-0">
                <Link href={bigPicture ? `/news-&-updates/${idFormatter(bigPicture?.data?.newsFeatures?.nodes[0]?.newsAndUpdates?.nodes[0]?.id, true)}` : ``} className="group four-to-three lg:col-span-2 row-span-2 flex flex-col justify-end relative shadow-md ">
                    <div className="absolute top-0 left-0 z-0 w-full four-to-three">
                        <Image fill src={bigPicture ? bigPicture?.data?.newsFeatures?.nodes[0]?.newsAndUpdates?.nodes[0]?.mediaLine[0].sourceUrl : ``} alt={bigPicture ? bigPicture?.data?.newsFeatures?.nodes[0]?.newsAndUpdates?.nodes[0]?.mediaLine[0].altText : ``} />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-[#121212]/90 transition-all group-hover:to-[#121212] z-10" />
                    <div className="w-full h-fit z-20 p-4">
                        <h4 className="font-semibold text-[#FCFCFC] md:text-2xl text-justify">
                            {bigPicture ? bigPicture?.data?.newsFeatures?.nodes[0]?.newsAndUpdates?.nodes[0]?.name : ``}
                        </h4>
                    </div>
                </Link>
                {featured ? featured.data.newsFeatures.nodes[0].newsAndUpdates.nodes.map((n, i) => (
                    <Link key={i} href={featured ? `/news-&-updates/${idFormatter(n?.id, true)}` : ``} className=" group four-to-three bg-[#FCFCFC] shadow-md flex flex-col justify-end relative overflow-hidden">
                        <div className="absolute top-0 left-0 z-0 h-full four-to-three">
                            <Image fill src={featured ? n.mediaLine[0].sourceUrl : ``} alt={featured ? n.mediaLine[0].altText : ``} />
                        </div>
                        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-[#121212]/90 z-10 transition-all group-hover:to-[#121212]" />
                        <div className="w-full p-2 md:text-[0.875rem] text-justify z-20 text-[#FCFCFC] font-semibold">
                            {featured ? n.name : ``}
                        </div>
                    </Link>
                )) : ``}
            </div>
        </section>
    )
}