'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Hero from "../hero"

const query = gql` query FetchOrderF {
    homepageSections(where: {search: "order"}) {
      nodes {
        sectionTitle
        sectionHeading
        sectionSubheading
        textLine1
        mediaLine1 {
          link
        }
      }
    }
  }
`;

export default function OrderF() {

  const { data } = useSuspenseQuery(query)
  
  return (
    <div className="w-full h-full">
      <Hero heroType={'order'} title={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading[0] : 'want to order?'} subheading={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionSubheading[0] : 'To know more about our purchase and delivery information'} buttonName={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.textLine1[0] : 'Click Here'} mediaUrl={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine1[0]?.link : ''} buttonLink={'/resources/how-to-order'} />
    </div>
  )
}