'use client';

export const dynamic = 'force-dynamic'

import Button from "../button";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql` query FetchPageSection {
    homepageSections(where: {search: "hero"}) {
      nodes {
        sectionTitle
        sectionHeading
        sectionSubheading
        contentLine1
        mediaLine1 {
          link
          mimeType
        }
      }
    }
  }
`;

export default function HeroBanner() {

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
        <div className="relative w-full h-full bg-[#171717] flex items-center overflow-hidden">
            <div className="z-10 lg:max-w-[900px] 2xl:max-w-fit 2xl:max-w-1/2 2xl:ml-48 lg:ml-32 xs:px-4 sm:ml-16 py-10">
                <h1 className="font-bold text-[#FCFCFC] lg:text-4xl 2xl:text-5xl xs:text-3xl uppercase">
                    {data?.homepageSections?.nodes[0]?.sectionHeading ? data?.homepageSections?.nodes[0]?.sectionHeading : 'Insert Heading'}
                </h1>
                <h1 className="font-bold text-nav-orange lg:text-4xl 2xl:text-5xl xs:text-3xl uppercase">
                    {data?.homepageSections?.nodes[0]?.sectionSubheading ? data?.homepageSections?.nodes[0]?.sectionSubheading : 'Insert Heading'}
                </h1>
                <h3 className="text-[#F0F0F0]/90 font-regular mt-4 mb-8 lg:max-w-[600px] 2xl:max-w-[750px] 2xl:text-lg xs:text-sm xs:max-w-[280px]">
                    {data?.homepageSections?.nodes[0]?.contentLine1[0] ? data?.homepageSections?.nodes[0]?.contentLine1[0] : 'Insert Subheading'}
                </h3>
                <Button name={('Browse our Products')} type={1} link={'/products'} />
            </div>
            <div className="absolute z-0 t-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    className="z-10 w-auto min-w-full min-h-full max-w-none"
                >
                    <source
                        src={data?.homepageSections?.nodes[0]?.mediaLine1 && data?.homepageSections?.nodes[0]?.mediaLine1[0]?.mimeType == 'video/mp4' ? data?.homepageSections?.nodes[0]?.mediaLine1[0]?.link : 'https://prosapac.com/homepagesection/hero/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large/'}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}