'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";

const query = gql` query FetchContactUsHero {
    homepageSections(where: {search: "contact-us"}) {
      nodes {
        sectionTitle
        sectionHeading
        mediaLine1 {
          link
          title
        }
      }
    }
  }
  `;

export default function ContactUsHero() {

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
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-0">
            <div className="absolute z-0 t-0 w-full h-full">
                <Image width={2400} height={1600} src={data?.homepageSections?.nodes ? data?.homepageSections?.nodes[0]?.mediaLine1[0].link : 'https://picsum.photos/1920/1080'} className='object-cover object-center' alt="dental-website-banner" />
            </div>
            <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16 uppercase">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionHeading[0] : ``}
            </div>
        </div>
    )
}