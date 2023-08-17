'use client';
export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Button from "../button";
import Image from "next/image";

const query = gql` query FetchProstigeF {
  homepageSections(where: {search: "prostige"}) {
    nodes {
      sectionTitle
      sectionHeading
      sectionSubheading
      contentLine1
      contentLine2
      mediaLine1 {
        link
      }
      mediaLine2 {
        link
      }
    }
  }
}
`;

export default function ProstigeF(props) {

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
    <section className="flex flex-col items-center justify-center h-screen max-h-fit w-full gap-8 xs:py-20 lg:py-16 xs:px-4 lg:px-32 2xl:px-48">
      <div className="w-full h-fit flex xs:flex-col-reverse lg:flex-row xs:justify-center lg:justify-between xs:items-center lg:items-center lg:gap-12 xs:gap-24">
        <div className="md:max-w-lg max-w-full flex flex-col gap-8 ">
          <div className="flex flex-col justify-end gap-2 relative w-80 h-[90px]">
            <span className="flex justify-start items-center top-0">
              <Image src={data?.homepageSections?.nodes[0].mediaLine1[1].link} fill={true} className="object-cover flex justify-start" />
            </span>
            <h3 className="font-bold text-lg uppercase 2xl:text-2xl text-[#272727] ">
              {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionHeading : `PROSTIGE PLATINUM`}
            </h3>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-pac-green text-3xl ">
              {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[0] : ``}
            </h2>
            <span className="flex justify-center items-center gap-3 w-fit">
              <h2 className="text-pac-green text-3xl font-bold">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[1] : ``}
              </h2>
              <h2 className="text-pac-green text-3xl ">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[2] : ``}
              </h2>
            </span>
            <h2 className="text-pac-orange text-4xl font-bold">
              {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[3] : ``}
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-[#373737] text-2xl">
              {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[4] : ``}
            </h2>
            <div className="flex items-start w-fit gap-4">
              {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].contentLine1.
                map((c, i) => (
                  <div key={i} className="w-32 flex flex-col gap-2 items-center">
                    <span className="w-20 h-20 object-fill relative">
                      <Image src={data?.homepageSections?.nodes[0].mediaLine2[i].link} fill={true} className="object-contain" />
                    </span>
                    <h4 className="text-center text-xs font-semibold uppercase">{c}</h4>
                  </div>
                )) : ``}
            </div>
          </div>
        </div>
        <div className="xs:w-64 xs:h-36 lg:w-[448px] lg:h-[280px] rotate-12 shadow-md rounded-3xl overflow-hidden">
          <Image src={data?.homepageSections?.nodes[0].mediaLine1[0].link} fill={true} alt="prostige-reward-card" className="object-contain" />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="lg:w-1/2 h-[2px] rounded-full bg-nav-green" />
        <div className="flex flex-col gap-1 w-full px-8">
          <h2 className="text-xl text-pac-orange font-bold uppercase">{data?.homepageSections?.nodes[0].contentLine2[0]}</h2>
          <h4 className="text-[#373737]">{data?.homepageSections?.nodes[0].contentLine2[1]}</h4>
          <Button type={1} color={'orange'} name={"Learn More Here"} link={'/#'} />
        </div>
      </div>
    </section>
  );
}
