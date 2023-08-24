'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from 'html-react-parser'
import { useState } from "react";
import { Icon } from "@iconify-icon/react";


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
            title: 'Main Website',
            body: 'mainWebsiteLink',
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
            title: 'Video',
            body: 'youtubeEmbedSourceLink',
        },
    ]

    const [selected, setSelected] = useState(moreInformation[0])

    return (
        <section className="w-full h-fit flex flex-col py-16 gap-8 ">
            <div className="bg-[#272727] rounded-r-lg w-fit lg:px-32 2xl:px-48 py-6 flex flex-col gap-1 items-center">
                <h3 className="mx-3 text-3xl text-[#FCFCFC] uppercase font-semibold">Description</h3>
                <span className="w-full h-[4px] bg-pac-orange rounded-md" />
            </div>
            <div className="lg:px-32 2xl:px-48 w-full h-fit py-16 bg-[#FCFCFC] flex flex-col gap-8">
                <p className='2xl:text-lg text-[#373737] text-justify'>
                    {parse(
                        data ? data?.product?.longDescription : ``
                    )}
                </p>
            </div>
            <div className="py-16 flex flex-col lg:px-32 2xl:px-48 w-full h-fit bg-[#FCFCFC]">
                <span className="flex">
                    {moreInformation.map((m, i) => (
                        <button key={i} className={
                            `border-[1px] px-4 py-2 
                            hover:border-pac-orange/70 hover:shadow-md  hover:text-[#272727] transition-all duration-75
                            ${selected.title === m.title ? `text-pac-orange border-nav-orange shadow-sm font-semibold`
                                : `border-pac-orange/30 text-[#575757]/70`}
                            `
                        }
                            onClick={() => setSelected(moreInformation[i])}>
                            {m.title}
                        </button>
                    ))}
                </span>
                <div className={`px-6 py-8 w-full h-fit  ${selected.body === 'mainWebsiteLink' ? `flex` : `hidden`}`}>
                    <a
                        href={data?.product ? data?.product?.mainWebsiteLink : ``}
                        className="flex w items-center text-[#272727] hover:text-pac-orange underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Go to Manufacturer's Website</p>
                        <Icon icon='mdi:arrow-top-right' className='text-sm' />
                    </a>
                </div>
                <div className={`px-6 py-8 w-full h-fit flex gap-8 flex-wrap  ${selected.body === 'youtubeEmbedSourceLink' ? `flex` : `hidden`}`}>
                    {data?.product ? data?.product?.youtubeEmbedSourceLink?.map((y, i) => (
                        <iframe
                            key={i}
                            className="h-48 w-72 shadow-sm rounded-sm"
                            src={y} title="YouTube video player" frameborder="0"
                            allow="accelerometer; clipboard-write; encrypted-media;" allowfullscreen
                        />
                    )) : ``}
                </div>
                <div className={`px-6 py-8 w-full h-fit flex gap-8 flex-wrap  ${selected.body === 'instructionFile' ? `flex` : `hidden`}`}>
                    {data?.product ? data?.product?.instructionFileTitle?.map((f, i) => (
                        <div key={i} className="h-36 w-64 shadow-sm rounded-sm bg-[#FFF] border-[2px] border-[#676767]/20 flex flex-col justify-between p-4 overflow-hidden">
                            <h5 className="text-lg font-bold text-pac-orange">{f}</h5>
                            <a
                                href={data?.product ? data?.product?.instructionFileDownloadLink[0] : ``}
                                className="flex w items-center text-[#272727] hover:text-pac-orange underline"
                                target="_blank"
                            >
                                <p>View Instruction File</p>
                                <Icon icon='mdi:arrow-top-right' className='text-sm' />
                            </a>
                        </div>
                    )) : ``}
                </div>
                <div className={`px-6 py-8 w-full h-fit flex gap-8 flex-wrap  ${selected.body === 'catalogueLink' ? `flex` : `hidden`}`}>
                    {data?.product ? data?.product?.catalogueTitle?.map((c, i) => (
                        <div key={i} className="h-36 w-64 shadow-sm rounded-sm bg-[#FFF] border-[2px] border-[#676767]/20 flex flex-col justify-between p-4 overflow-hidden">
                            <h5 className="text-lg font-bold text-pac-orange">{c}</h5>
                            <a
                                href={data?.product ? data?.product?.catalogueDownloadLink[0] : ``}
                                className="flex w items-center text-[#272727] hover:text-pac-orange underline"
                                target="_blank"
                            >
                                <p>Download Catalogue</p>
                                <Icon icon='mdi:download-outline' className='text-sm' />
                            </a>
                        </div>
                    )) : ``}
                </div>
            </div>
        </section>
    )
}