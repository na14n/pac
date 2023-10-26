'use client';

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { sortByAttribute, idFormatter } from "@/lib/helpers";
import Image from "next/image";
import Button from "../button";
import parse from 'html-react-parser'
import { motion } from "framer-motion";

const query = gql`
query fetchEventsLandingPage {
    events(where: {title: "landing-page"}) {
      nodes {
        name
        eventName
        shortDescription
        longDescription
        textLine1
        textLine2
        mediaLine1{
          title
          sourceUrl
          altText
        }
      }
    }
  }
`

export default function EventsLandingPage() {

    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        })

    // console.log(data?.events?.nodes[0]?.longDescription);

    const assets = sortByAttribute(data?.events?.nodes[0]?.mediaLine1, 'title');

    return (
        <section className="w-full h-fit pt-24 overflow-hidden flex flex-col items-center">
            <div className="px-4 lg:px-8 md:px-16 xl:px-32 2xl:px-48 flex flex-col items-center w-full gap-12 pt-24 mb-24">
                <span className="flex flex-col gap-4 items-center">
                    <h1 className="text-5xl w-fit text-[#121212] font-bold text-center">
                        {data?.events?.nodes ? data?.events?.nodes[0]?.eventName : ``}
                    </h1>
                    <div className="w-2/5 h-[4px] rounded-full bg-nav-orange" />
                </span>
                <span className="flex flex-col gap-4 w-fit items-center">
                    {data?.events?.nodes ? data?.events?.nodes[0]?.shortDescription.map((c, i) => (
                        <p key={i} className="max-w-[40ch] md:max-w-[75ch] min-[1700px]:max-w-[95ch] text-justify text-[#272727]">
                            {c}
                        </p>
                    )) : ''}
                </span>
            </div>
            <div className="h-fit grid xs:grid-cols-1 lg:grid-cols-3 place-items-center overflow-hidden self-stretch">
                {data?.events?.nodes ? data?.events?.nodes[0]?.longDescription.map((c, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 * i }}
                        key={i}
                        className="square w-full relative flex flex-col items-center justify-center p-8"
                    >
                        <Image fill={true} src={data?.events?.nodes[0] ? assets[i].sourceUrl : 'https://picsum.photos/1080/1080'} className='object-cover object-center z-10' alt={data?.events?.nodes[0] ? assets[i].altText : ``} />
                        <div className={`absolute z-20 top-0 left-0 w-full h-full bg-gradient-to-b ${i === 1 ? `from-[#f9a03c]/80 to-[#ef6703]/80` : ``} ${i === 0 ? `from-[#007811]/80 to-[#153f00]/80` : ``} ${i === 2 ? ` from-[#282828]/80 to-[#000000]/80` : ``}`} />
                        <span className="z-30 mb-12 flex flex-col gap-4">
                            <h1 className="text-3xl text-center font-bold text-[#FCFCFC]">
                                {parse(c)}
                            </h1>
                            <p className="text-xs 2xl:text-lg text-justify text-[#EFEFEF] h-28 max-h-fit">
                                {parse(data?.events?.nodes ? data?.events?.nodes[0]?.textLine1[i] : ``)}
                            </p>
                        </span>
                        <span className="z-30">
                            <Button type={1} color="white-green" name={'View More'} link={`/trainings-&-seminars/${data?.events?.nodes[0]?.textLine2[i]}`} />
                        </span>
                    </motion.div>

                )) : ''}
            </div>
            <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2">
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    className="w-full h-fit flex"
                >
                    <div className="w-full square relative">
                        <Image src={''} fill className="object-center object-fill" />
                    </div>
                    <div className="w-full square flex flex-col justify-center px-12 gap-8">
                        <h3 className="text-2xl 2xl:text-3xl font-bold text-black">Check out our Latest News & Updates</h3>
                        <Button type={1} name={"Click here"} link={"/news-&-updates"} />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    className="w-full h-fit flex">
                    <div className="w-full square relative">
                        <Image src={''} fill className="object-center object-fill" />
                    </div>
                    <div className="w-full square flex flex-col justify-center px-12 gap-8">
                        <h3 className="text-2xl 2xl:text-3xl font-bold text-black">Check out our Latest Blogs</h3>
                        <Button type={1} name={"Click here"} link={"/blogs"} />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}