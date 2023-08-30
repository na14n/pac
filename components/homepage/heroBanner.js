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
            <div className="z-30 xl:max-w-[900px] 2xl:max-w-fit 2xl:max-w-1/2 2xl:ml-48 xl:ml-32 xs:px-4 sm:ml-16 py-10">
                <h1 className="font-bold text-[#FCFCFC] xl:text-4xl 2xl:text-5xl xs:text-3xl uppercase">
                    {data?.homepageSections?.nodes[0]?.sectionHeading ? data?.homepageSections?.nodes[0]?.sectionHeading : 'Insert Heading'}
                </h1>
                <h1 className="font-bold text-nav-orange xl:text-4xl 2xl:text-5xl xs:text-3xl uppercase">
                    {data?.homepageSections?.nodes[0]?.sectionSubheading ? data?.homepageSections?.nodes[0]?.sectionSubheading : 'Insert Heading'}
                </h1>
                <h3 className="text-[#F0F0F0]/90 font-regular mt-4 mb-8 xl:max-w-[600px] 2xl:max-w-[750px] 2xl:text-xl xs:text-lg xs:max-w-[280px] lg:max-w-fit">
                    {data?.homepageSections?.nodes[0]?.contentLine1[0] ? data?.homepageSections?.nodes[0]?.contentLine1[0] : 'Insert Subheading'}
                </h3>
                <Button name={('Browse our Products')} type={1} link={'/products'} />
            </div>
            <div className="absolute top-0 z-10 w-full h-full overflow-hidden bg-[#121212]/25" />
            <div className="absolute z-0 top-0 w-full h-full overflow-hidden flex justify-center items-stretch">
                <video
                    autoPlay
                    loop
                    muted
                    className="z-0 block object-cover object-center w-full"
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