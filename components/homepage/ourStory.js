'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Hero from "../hero"
import Button from "../button";
import Image from "next/image";

const query = gql` query FetchStoryF {
    homepageSections(where: {search: "our-story"}) {
      nodes {
        sectionTitle
        sectionHeading
        sectionSubheading
        mediaLine1 {
          link
        }
      }
    }
  }
`;

export default function OurStory() {

  const { data } = useSuspenseQuery(query)

  return (
    // <Hero heroType={'centered'} title={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading[0] :'To know more about our Story'} buttonName={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionSubheading[0] : 'Click Here'} mediaUrl={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine1[0]?.link : ''} buttonLink={'/about-us'} buttonProp={'white-green'} />
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden z-30 h-screen md:max-h-[70vh]">
      <div className="absolute z-10 t-0 bg-gradient-to-b from-[#3E3E3E]/90 to-[#b56012]/90 w-full h-full"></div>
      <div className="absolute z-0 t-0 w-full h-full">
        <Image
          fill={true}
          src={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine1[0]?.link : ''} className='object-cover object-top'
          alt="dental-website-banner"
        />
      </div>
      <div className=" z-20 font-bold text-[#FCFCFC] lg:text-3xl xs:text-2xl text-center 2xl:text-4xl flex flex-col items-center justify-center gap-4 lg:mb-0 xs:mb-32 xs:px-4 py-16">
        {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading[0] :'To know more about our Story'}
        <Button
          name={(data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionSubheading[0] : 'Click Here')}
          type={1}
          link={'/about-us'}
          color={'white-green'} />
      </div>
    </div>
  )
}