"use client";

export const dynamic = "force-dynamic";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { sortByAttribute } from "@/lib/helpers";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../button";

const query = gql`
  query FetchAboutContentS06 {
    aboutContents(where: { name: "section-06" }) {
      nodes {
        sectionTitle
        sectionHeading
        sectionSubheading
        contentLine1
        mediaLine1 {
          title
          link
        }
      }
    }
  }
`;

export default function AboutS06() {
  const [open, setOpen] = useState(false);

  const { data } = useSuspenseQuery(query, {
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });

  const assets = sortByAttribute(
    data?.aboutContents?.nodes[0]?.mediaLine1,
    "title"
  );

  return (
    <section className="w-full xl:h-fit max-h-fit px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-col items-center justify-center relative gap-8 2xl:gap-12 py-16">
      <span>
        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#121212]">
          {data?.aboutContents?.nodes
            ? data?.aboutContents?.nodes[0]?.sectionHeading
            : ""}
        </h2>
        <div className="w-full h-[2px] bg-pac-orange rounded-full" />
      </span>
      <span className="flex flex-col gap-4">
        {data?.aboutContents?.nodes
          ? data?.aboutContents?.nodes[0]?.contentLine1.map((c, i) => (
              <p
                key={i}
                className="max-w-[40ch] md:max-w-[75ch] min-[1700px]:max-w-[95ch] 2xl:text-lg text-justify text-[#272727]"
              >
                {c}
              </p>
            ))
          : ""}
      </span>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 items-center justify-center">
        {data?.aboutContents?.nodes
          ? data?.aboutContents?.nodes[0]?.sectionSubheading.map((s, i) => (
            //   <motion.span
            //     initial={{ y: 15, opacity: 0 }}
            //     whileInView={{ y: 0, opacity: 1 }}
            //     transition={{ delay: 0.5 * i }}
            //     key={i}
            //     className="w-[20rem] h-[11.25rem] md:w-[21rem] md:h-[11.81rem] lg:w-[24rem] lg:h-[13.5rem] xl:w-[20rem] xl:h-[11.25rem] 2xl:w-[24rem] 2xl:h-[13.5rem] flex flex-col items-center justify-end p-2 shadow-sm rounded-md hover:shadow-md cursor-pointer relative overflow-hidden"
            //   >
            //     <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-[#373737]/25 to-[#272727]/75" />
            //     <Image
            //       src={data?.aboutContents?.nodes ? assets[i]?.link : ""}
            //       alt="pros-apac-facility"
            //       fill={true}
            //       className="object-cover object-center z-0"
            //     />
            //     <h4 className="uppercase font-semibold text-[#FCFCFC] text-center text-xl z-20">
            //       {s}
            //     </h4>
            //   </motion.span>
            <FacilityItem key={i} image={data?.aboutContents?.nodes ? assets[i]?.link : ""} s={s} />
            ))
          : ""}
      </div>
    </section>
  );
}

function FacilityItem({ image, key, s }) {
    
    const [open, setOpen] = useState(false);

  return (
    <>
      <motion.span
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 * key }}
        className="w-[20rem] h-[11.25rem] md:w-[21rem] md:h-[11.81rem] lg:w-[24rem] lg:h-[13.5rem] xl:w-[20rem] xl:h-[11.25rem] 2xl:w-[24rem] 2xl:h-[13.5rem] flex flex-col items-center justify-end p-2 shadow-sm rounded-md hover:shadow-md cursor-pointer relative overflow-hidden"
        onClick={() => setOpen(!open)}
      >
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-[#373737]/25 to-[#272727]/75" />
        <Image
          src={image}
          alt="pros-apac-facility"
          fill={true}
          className="object-cover object-center z-0"
        />
        <h4 className="uppercase font-semibold text-[#FCFCFC] text-center text-xl z-20">
          {s}
        </h4>
      </motion.span>
      <div
        onClick={() => setOpen(!open)}
        className={`top-0 left-0 bg-black/80 fixed w-full h-full z-[60] px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64 flex items-end justify-center flex-col cursor-pointer gap-4  ${
          open ? `` : `hidden`
        }`}
      >
        <Button
          type={1}
          color={"white-green"}
          name={"Close"}
          onClick={() => setOpen(false)}
        />
        <div className="w-full relative aspect-video bg-white rounded-sm shadow-md cursor-default overflow-hidden">
          {/* <Image src={`https://picsum.photos/seed/${data.title}/1920/1080`} fill={true} className="object-center object-contain" /> */}
          <Image
            src={image}
            fill={true}
            className="object-center object-contain"
          />
        </div>
      </div>
    </>
  );
}
