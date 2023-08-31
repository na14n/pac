'use client';

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import VerticalSlider from "../embla/verticalSlider";
import AboutHorizontalSlider from "../embla/aboutHorizontalSlider";

const query = gql`
    query GetAboutContent02 {
        aboutContents(where: {name: "section-02"}) {
        nodes {
                sectionTitle
                sectionHeading
                contentLine1
                mediaLine1 {
                    title
                    link
                }
            }
        }
    }
`

export default function AboutS02() {

    const { data } = useSuspenseQuery(query);

    return (
        <section className="w-full h-fit relative flex flex-col max-xl:items-center justify-between bg-[#EFEFEF] xl:flex-row">
            <div className="w-fit h-fit py-8 xl:py-16 shrink-0 flex flex-col items-center xl:items-start gap-6 xl:gap-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:pl-48 bg-pac-orange">
                <span className="flex flex-col gap-2 w-fit">
                    <h1 className="w-fit h-fit uppercase max-xl:text-center text-[#FCFCFC] font-bold text-2xl md:text-4xl xl:text-5xl">
                        {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionHeading : ``}
                    </h1>
                    <div className="w-full h-[2px] bg-[#FCFCFC]" />
                </span>
                <div className="w-full items-stretch flex">
                    <div className="w-full h-fit flex flex-col gap-6">
                        {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.contentLine1
                        .map((c, i) => (
                            <p key={i} className="h-fit w-full xl:w-[50ch] 2xl:w-[55ch] xl:pr-6 text-justify 2xl:text-lg text-[#EFEFEF]">
                                {c}
                            </p>
                        ))
                        : ``}
                    </div>
                </div>
            </div>
            <div className="py-8 xl:py-0 xl:absolute xl:top-0 xl:right-32 2xl:right-48 h-full w-fit z-30 flex flex-col justify-center">
                <VerticalSlider media={data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.mediaLine1 : ``} />
                <AboutHorizontalSlider media={data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.mediaLine1 : ``} />
            </div>
        </section>
    )
}