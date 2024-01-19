'use client';

export const dynamic = 'force-dynamic'

import { sortByAttribute } from "@/lib/helpers";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";

const query = gql` query FetchLimitlessHero {
    aboutContents(where: {search: "limitless-page-hero"}) {
      nodes {
        sectionTitle
        sectionHeading
        mediaLine1 {
          sourceUrl
          altText
        }
        mediaLine2 {
            link
            mimeType
        }
      }
    }
  }
`;

export default function LimitlessHero() {

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
        <section className="relative w-full h-screen bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex items-center overflow-hidden">
            <div className="absolute top-0 left-0 z-0 w-full h-full text-black">
                <Image src={sortByAttribute(data?.aboutContents?.nodes[0]?.mediaLine1, "altText")[1]?.sourceUrl} fill className="object-cover object-center" />
            </div>
            <div className="z-20 w-full h-full text-black">
                <Image src={sortByAttribute(data?.aboutContents?.nodes[0]?.mediaLine1, "altText")[0]?.sourceUrl} fill className="object-contain object-center p-16" />
            </div>
            <div className="absolute z-10 top-0 left-0 w-full h-full overflow-hidden flex justify-center items-stretch">
                <video
                    autoPlay
                    loop
                    muted
                    className="z-0 block object-cover object-center w-full"
                >
                    <source
                        src={data?.aboutContents?.nodes[0]?.mediaLine2 && data?.aboutContents?.nodes[0]?.mediaLine2[0]?.mimeType == 'video/mp4' ? data?.aboutContents?.nodes[0]?.mediaLine2[0]?.link : 'https://prosapac.com/homepagesection/hero/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large/'}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}