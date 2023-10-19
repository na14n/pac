'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image"
import { Icon } from "@iconify-icon/react"
import DateCard from "../dateCard";
import parse from "html-react-parser"
import SpeakerBanner from "./speakerBanner";
import Button from "@/components/button";
import Slider from "@/components/embla/slider";
import SuggestedList from "../suggestedList";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, FacebookMessengerIcon, FacebookMessengerShareButton, ViberIcon, ViberShareButton } from "react-share"
import { usePathname } from 'next/navigation'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const query = gql`
query FetchSeminarContent($id: ID!) {
    seminar(id: $id) {
      id
      eventName
      eventSubheading
      description
      eventDate
      eventSecondaryImage {
        title
        sourceUrl
      }
      time
      location
      speakerName
      speakerTitle
      speakerImage {
        title
        sourceUrl
      }
      speakerSecondaryImage {
        title
        sourceUrl
      }
      topics
      formsLink
      finished
      imageGallery {
        title
        sourceUrl
      }
      relatedTags
    }
  }
    `

const seminar = gql`
query FetchSuggestedSeminars($first: Int, $search: String, $notIn: [ID]) {
    seminars(first: $first, where: {search: $search, notIn: $notIn}) {
      nodes {
        id
        eventName
        eventDate
        location
        eventBanner {
          sourceUrl
        }
      }
    }
  }
`

export default function SeminarContents({ id }) {

    const pathname = `${process.env.NEXT_PUBLIC_BASE_URL}${usePathname()}`

    const { data } = useSuspenseQuery(
        query,
        {
            variables: {
                "id": `${id}=`
            },
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            }
        }
    )

    return (
        <section className="flex flex-col w-full h-fit">
            <div className="w-full flex gap-4 xl:gap-32 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
                <div className="w-full flex flex-col gap-2">
                    <h3 className="text-3xl 2xl:text-5xl font-bold text-pac-green">{data.seminar.eventName}</h3>
                    <div className="flex flex-col flex-wrap">
                        {data?.seminar?.eventSubheading?.map((s, index) => (
                            <h5 key={index} className="2xl:text-xl">{s}</h5>
                        ))}
                    </div>
                    <div className="h1 h2 h3 p list b 2xl:text-lg">
                        {parse(data.seminar.description)}
                    </div>
                </div>
                <DateCard date={data.seminar.eventDate} location={data.seminar.location} time={data.seminar.time} />
            </div>
            <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 my-8">
                <div className="h-[2px] rounded-full bg-pac-green " />
            </div>
            <div className="flex flex-col px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
                {data?.seminar?.speakerName?.map((s, index) => (
                    <SpeakerBanner
                        name={s}
                        key={index}
                        title={data.seminar.speakerTitle[index]}
                        image={data.seminar.speakerImage[index]}
                        secondaryImage={data.seminar.speakerSecondaryImage[index]}
                    />
                ))}
            </div>
            <div className="w-full py-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex gap-16 2xl:gap-32 bg-[#E1E1E1] justify-center ">
                <div className="flex flex-col gap-2 px-4">
                    <h3 className="text-3xl 2xl:text-5xl font-bold text-pac-green uppercase">TOPICS</h3>
                    <div className="w-full h-[2px] rounded-full bg-pac-green" />
                    <div className="list p h1 h2 h3 b 2xl:text-lg">
                        {parse(data.seminar.topics)}
                    </div>
                </div>
                <div className="w-72 aspect-[3/4] h-fit relative rounded-sm shadow-md">
                    <Image fill className="object-center object-cover" src={data.seminar.eventSecondaryImage.sourceUrl} />
                </div>
            </div>
            <div className=" w-full py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-col justify-center items-center gap-8 2xl:gap-12 bg-gradient-to-b to-[#007811] from-[#153f00]">
                <h1 className="font-bold text-white text-3xl 2xl:text-5xl">Grow and Elevate your Dental Practice!</h1>
                <Slider media={data.seminar.imageGallery} />
                <Button type={1} color={"green"} name={data.seminar.finished ? 'INQUIRE NOW' : 'REGISTER HERE'} link={data?.seminar?.formsLink} newtab={true} />
            </div>
            <div className="w-full py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-col items-center gap-4 2xl:gap-8 bg-[#E1E1E1] justify-center ">
                <h3 className="text-3xl 2xl:text-5xl font-bold text-pac-green uppercase mb-8">SUGGESTED SEMINARS</h3>
                <SuggestedList search={data.seminar.relatedTags} id={data.seminar.id} query={seminar} type={"seminars"} />
            </div>
            <div className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-col items-center gap-4 2xl:gap-8 justify-center">
                <h1 className="font-semibold text-[#272727] text-xl 2xl:text-2xl">Share this Event</h1>
                <div className="flex flex-wrap gap-2">
                    <FacebookShareButton url={pathname}>
                        <FacebookIcon size={36} className="rounded-md" />
                    </FacebookShareButton>
                    <TwitterShareButton url={pathname}>
                        <TwitterIcon size={36} className="rounded-md" />
                    </TwitterShareButton>
                    <ViberShareButton url={pathname}>
                        <ViberIcon size={36} className="rounded-md" />
                    </ViberShareButton>
                    <button
                        onClick={() => { navigator.clipboard.writeText(pathname) }}
                        className=" px-2 rounded-md square self-stretch w-[36px] bg-gray-600 text-white flex items-center justify-center"
                    >
                        <Icon icon="material-symbols:link" size={48} />
                    </button>
                </div>
            </div>
        </section>
    )
}