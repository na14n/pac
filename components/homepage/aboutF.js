'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql` query FetchPageSection {
    homepageSections(where: {search: "about"}) {
      nodes {
        sectionTitle
        sectionHeading
        mediaLine1 {
          link
          mimeType
        }
      }
    }
  }
`;

import Image from "next/image";

export default function AboutF() {

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
        <div className="h-fit max-h-fit relative md:px-8 lg:px-16 xl:px-32 2xl:px-48 lg:py-16 xl:min-h-[50vh] xs:px-4 xs:py-20 xs:flex xs:flex-col lg:flex-row xs:items-center lg:items-center lg:justify-start xs:gap-8 xs:overflow-hidden lg:overflow-visible ">
            <div className="xs:w-56 xs:h-56 xs:relative lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-[480px] 2xl:h-[480px] rounded-md lg:absolute lg:-top-40 lg:right-16 xl:right-32 2xl:right-48 overflow-hidden flex items-center justify-center">
                <Image fill={true} alt="dental-products-distributor" className="object-cover" objectPosition="relative" src={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine1[0]?.link : 'https://picsum.photos/600/800'} />
            </div>
            <div className="text-[#121212] md:max-w-[55ch] lg:max-w-[50ch] xl:mb-40 2xl:mb-36 2xl:ml-16 xl:ml-8 2xl:text-2xl xs:text-sm text-justify md:text-lg ">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading[0] : `Over the years, PROS-APAC has built a reputation among Filipinos in the Dental Industry as a Top notch distributor offering internationally recognized brands. We attribute part of this success to the strong supplier relationships we have built over time. With the help of our suppliers, we have come so far in providing wonderful service to our customers that eventually led to the fulfillment of our vision of bringing back the smile on every Filipino.`}
            </div>
        </div>
    )
}

