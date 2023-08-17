'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Hero from "../hero"

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
        <Hero heroType={'centered'} title={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading[0] :'To know more about our Story'} buttonName={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionSubheading[0] : 'Click Here'} mediaUrl={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine1[0]?.link : ''} buttonLink={'/#'} />
    )
}