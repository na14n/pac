'use client';
export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { pTagRemover, sortByAttribute } from "@/lib/helpers";
import { motion } from "framer-motion";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Button from "../button";
import Image from "next/image";

const query = gql` query FetchProstige {
  homepageSections(where: {search: "prostige"}) {
    nodes {
      sectionTitle
      sectionHeading
      sectionSubheading
      contentLine1
      contentLine2
      mediaLine1 {
        link
        title
      }
      mediaLine2 {
        link
        title
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
    <section className="flex flex-col items-center justify-center h-fit 2xl:h-fit max-h-fit w-full gap-8 xs:py-20 lg:py-16 xs:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 overflow-hidden">
      <div className="w-full h-fit flex xs:flex-col-reverse lg:flex-row xs:justify-center lg:justify-between 2xl:justify-around xs:items-center lg:items-center lg:gap-12 xs:gap-0 ">
        <div className="grow-0 md:max-w-full lg:max-w-[24rem] xl:max-w-fit flex flex-col gap-8 w-fit ">
          <div className="relative w-80 h-[96px]">
            <Image src={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine1, 'title')[0].link : ``} fill={true} className="object-cover flex justify-start" />
          </div>
          <div className="flex flex-col justify-center gap-1  w-fit">
            <h2 className="text-pac-green xl:text-5xl xs:text-3xl w-fit">
              {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[0] : ``}
            </h2>
            <span className="flex justify-center items-center gap-3 w-fit">
              <h2 className="text-pac-green xl:text-5xl xs:text-3xl font-bold w-fit">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[1] : ``}
              </h2>
              <h2 className="text-pac-green xl:text-5xl xs:text-3xl w-fit">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[2] : ``}
              </h2>
            </span>
            <h2 className="text-pac-orange xl:text-6xl xs:text-4xl font-bold w-fit">
              {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[3] : ``}
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4 w-fit xs:py-8 lg:py-0">
            <h2 className="text-[#373737] text-2xl w-fit ">
              {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].sectionSubheading[4] : ``}
            </h2>
            <div className="flex flex-wrap items-start xs:justify-center lg:justify-start w-fit gap-4">
              {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0].contentLine1.
                map((c, i) => (
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 * i }}
                    key={i}
                    className="w-32 flex flex-col gap-2 lg:gap-4 items-center"
                  >
                    <span className="w-24 aspect-square object-fill relative">
                      <Image src={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine2, 'title')[i].link : ``} fill={true} className="object-contain object-center" />
                    </span>
                    <h4 className="text-center text-[0.8rem] font-semibold uppercase">{pTagRemover(c)}</h4>
                  </motion.div>
                )) : ``}
            </div>
          </div>
          <div className="flex flex-col gap-2 w-fit">
            <div className="w-max h-[2px] rounded-full bg-nav-green" />
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-xl text-pac-orange font-bold uppercase">{pTagRemover(data?.homepageSections?.nodes[0].contentLine2[0])}</h2>
              <h4 className="text-[#373737] text-sm 2xl:text-lg max-w-max">{pTagRemover(data?.homepageSections?.nodes[0].contentLine2[1])}</h4>
              <Button type={1} color={'orange'} name={pTagRemover(data?.homepageSections?.nodes[0].contentLine2[2])} link={'/products/prostige'} />
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" xs:w-96 lg:w-[32rem] 2xl:w-[44rem] shrink-0 aspect-square relative "
        >
          <Image src={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine1, 'title')[1].link : ``} fill={true} alt="prostige-reward-card" className="object-contain object-center" />
        </motion.div>
      </div>
    </section>
  );
}
