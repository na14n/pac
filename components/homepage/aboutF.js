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
        <div className=" max-h-fit relative lg:px-32 2xl:px-48 lg:py-16 2xl:py-36 lg:min-h-[50vh] xs:px-4 xs:py-20 xs:flex xs:flex-col xs:items-center lg:items-start xs:gap-8 xs:overflow-hidden lg:overflow-visible ">
            <div className="xs:w-48 xs:h-48 xs:relative lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 rounded-md lg:absolute lg:-top-32 lg:right-32 2xl:right-48 overflow-hidden flex items-center justify-center">
                <Image fill={true} alt="dental-products-distributor" className="object-cover" objectPosition="relative" src={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine1[0]?.link : 'https://picsum.photos/600/800'} />
            </div>
            <div className="text-[#121212] lg:max-w-[750px] 2xl:max-w-[850px] 2xl:text-lg xs:text-sm">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading[0] : `Over the years, PROS-APAC has built a reputation among Filipinos in the Dental Industry as a Top notch distributor offering internationally recognized brands. We attribute part of this success to the strong supplier relationships we have built over time. With the help of our suppliers, we have come so far in providing wonderful service to our customers that eventually led to the fulfillment of our vision of bringing back the smile on every Filipino.`}
            </div>
        </div>
    )
}

