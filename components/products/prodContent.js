'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from 'html-react-parser'
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import Recommended from "./recommended";



export default function ProdContent(props) {

    const query = gql`query FetchProduct {
        product(id: "${props.id}") {
            id
            name
            shortDescription
            mainWebsiteLink
            youtubeEmbedSourceLink
            longDescription
            instructionFileDownloadLink
            instructionFileTitle
            catalogueTitle
            relatedTags
            catalogueDownloadLink
            productLogo {
                link
            }
        }
      }
    `

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

    const moreInformation = [

        {
            title: 'Video',
            body: 'youtubeEmbedSourceLink',
        },
        {
            title: 'Catalogue',
            body: 'catalogueLink',
        },
        {
            title: 'Instructions',
            body: 'instructionFile',
        },
        {
            title: 'Main Website',
            body: 'mainWebsiteLink',
        },

    ]

    const [selected, setSelected] = useState(moreInformation[0])

    return (
        <section className="w-full h-fit flex flex-col bg-[#EFEFEF]">
            <div className="w-fit px-4 md:px-12 lg:px-32 2xl:px-48 py-6 flex flex-col gap-1 items-center ">
                <h3 className="mx-3 text-3xl text-[#121212] uppercase font-semibold">Description</h3>
                <span className="w-full h-[4px] bg-pac-orange rounded-md" />
            </div>
            <div className="px-4 md:px-12 lg:px-48 2xl:px-64 min-[1920px]:px-80 w-full h-fit py-12  flex flex-col gap-8 ">
                <div className='2xl:text-lg text-[#373737] text-justify max-w-[75ch] h1 h2 h3 p oranged_bold list'>
                    {parse(
                        data ? data?.product?.longDescription : ``
                    )}
                </div>
            </div>
            <div className="py-6 flex flex-col px-4 md:px-12 lg:px-32 2xl:px-48 w-full h-fit ">
                <span className="flex flex-wrap">
                    {moreInformation.map((m, i) => (
                        <button key={i} className={
                            `border-[1px] px-4 py-2 max-md:w-1/2
                            hover:border-pac-orange/70 hover:shadow-md text-xl transition-all duration-75
                            ${selected.title === m.title ? `text-pac-orange border-nav-orange shadow-sm font-bold`
                                : `border-pac-orange/30 text-[#575757]/70 font-semibold`}
                            `
                        }
                            onClick={() => setSelected(moreInformation[i])}>
                            {m.title}
                        </button>
                    ))}
                </span>
                <div className={`p-8 w-full h-fit  ${selected.body === 'mainWebsiteLink' ? `flex` : `hidden`}`}>
                    <a
                        href={data?.product ? data?.product?.mainWebsiteLink : ``}
                        className="flex w items-center text-[#272727] hover:text-pac-orange underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Go to Manufacturer&apos;s Website</p>
                        <Icon icon='mdi:arrow-top-right' className='text-sm' />
                    </a>
                </div>
                <div className={`p-8 w-full h-fit flex gap-8 flex-wrap  ${selected.body === 'youtubeEmbedSourceLink' ? `flex` : `hidden`}`}>
                    {data?.product ? data?.product?.youtubeEmbedSourceLink?.map((y, i) => (
                        <iframe
                            key={i}
                            className="w-72 md:w-[24rem] lg:w-[28rem] xl:w-[32rem] 2xl:w-[36rem] aspect-video shadow-sm rounded-sm"
                            src={y} title="YouTube video player"
                            allow="accelerometer; clipboard-write; encrypted-media;" allowfullscreen
                        />
                    )) : ``}
                </div>
                <div className={`p-8 w-full h-fit flex gap-8 flex-wrap  ${selected.body === 'instructionFile' ? `flex` : `hidden`}`}>
                    {data?.product ? data?.product?.instructionFileTitle?.map((f, i) => (
                        <div key={i} className="h-36 w-64 shadow-sm rounded-sm bg-[#FFF] border-[2px] border-[#676767]/20 flex flex-col justify-between p-4 overflow-hidden">
                            <h5 className="text-lg font-bold text-pac-orange">{f}</h5>
                            <a
                                href={data?.product ? data?.product?.instructionFileDownloadLink[0] : ``}
                                className="flex w items-center text-[#272727] hover:text-pac-orange underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p>View Instruction File</p>
                                <Icon icon='mdi:arrow-top-right' className='text-sm' />
                            </a>
                        </div>
                    )) : ``}
                </div>
                <div className={`p-8 w-full h-fit flex gap-8 flex-wrap  ${selected.body === 'catalogueLink' ? `flex` : `hidden`}`}>
                    {data?.product ? data?.product?.catalogueTitle?.map((c, i) => (
                        <div key={i} className="h-36 w-64 shadow-sm rounded-sm bg-[#FFF] border-[2px] border-[#676767]/20 flex flex-col justify-between p-4 overflow-hidden">
                            <h5 className="text-lg font-bold text-pac-orange">{c}</h5>
                            <a
                                href={data?.product ? data?.product?.catalogueDownloadLink[0] : ``}
                                className="flex w items-center text-[#272727] hover:text-pac-orange underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p>Download Catalogue</p>
                                <Icon icon='mdi:download-outline' className='text-sm' />
                            </a>
                        </div>
                    )) : ``}
                </div>
            </div>
            {/* <Recommended /> */}
            <div className="py-6 flex flex-col px-4 md:px-12 lg:px-32 2xl:px-48 w-full h-fit ">
                <div className="w-fit py-6 flex flex-col gap-1 items-center ">
                    <h3 className="mx-3 text-3xl text-[#121212] uppercase font-semibold">Related Products</h3>
                    <span className="w-full h-[4px] bg-pac-orange rounded-md" />
                </div>
                <Recommended tags={`${data?.product?.relatedTags}`} id={`${props.id}=`}/>
            </div>
        </section>
    )
}