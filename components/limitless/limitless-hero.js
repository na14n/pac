'use client';

export const dynamic = 'force-dynamic'

import { pTagRemover } from "@/lib/helpers";
import Button from "../button";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql` query FetchLimitlessHero {
    aboutContents(where: {search: "limitless-page-hero"}) {
      nodes {
        sectionTitle
        sectionHeading
        mediaLine1 {
          sourceUrl
          mimeType
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
        <div className="relative w-full h-screen bg-[#171717] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex items-center overflow-hidden">
            <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden flex justify-center items-stretch text-white">
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
            {/* <pre>
                {JSON.stringify(data?.aboutContents?.nodes[0]?.mediaLine2[0].link, null, 4)}
            </pre> */}
        </div>
    )
}