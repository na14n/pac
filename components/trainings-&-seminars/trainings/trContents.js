'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image"
import { Icon } from "@iconify-icon/react"
import DateCard from "../dateCard";
import parse from "html-react-parser"
import SpeakerBanner from "../seminars/speakerBanner";
import Button from "@/components/button";
import Slider from "@/components/embla/slider";
import SuggestedList from "../suggestedList";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, FacebookMessengerIcon, FacebookMessengerShareButton, ViberIcon, ViberShareButton } from "react-share"
import { usePathname } from 'next/navigation'
import EventCalendar from "./eventCalendar";
import { formatWordPressDate } from "@/lib/helpers";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const query = gql`
query FetchWorkshopContent($id: ID!) {
    workshop(id: $id) {
      id
      eventName
      eventSubheading
      description
      currentEventDate
      currentEventTime
      currentEventLocation
      currentEventSpecificLocation
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
      open
      imageGallery {
        title
        sourceUrl
      }
      relatedTags
      eventsDate
      eventsLocation
      upcomingEventsDate
      upcomingEventsLocation
    }
  }
    `

const workshop = gql`
    query FetchSuggestedSeminars($first: Int, $search: String, $notIn: [ID]) {
        workshops(first: $first, where: {search: $search, notIn: $notIn}) {
          nodes {
            id
            eventName
            currentEventDate
            currentEventSpecificLocation
            currentEventLocation
            eventBanner{
              sourceUrl
            }
          }
        }
      }
    `


export default function WorkshopContents({ id }) {

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
            <div className="w-full flex flex-col lg:flex-row items-center gap-4 xl:gap-32 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
                <div className="w-full flex flex-col gap-2">
                    <h3 className="text-3xl 2xl:text-5xl font-bold text-pac-orange">{data.workshop.eventName}</h3>
                    <div className="flex flex-col flex-wrap">
                        {data?.workshop?.eventSubheading?.map((s, index) => (
                            <h5 key={index} className="2xl:text-xl">{s}</h5>
                        ))}
                    </div>
                    <div className="h1 h2 h3 p list b 2xl:text-lg">
                        {parse(data.workshop.description)}
                    </div>
                </div>
                <DateCard
                    date={data.workshop.currentEventDate}
                    location={data.workshop.currentEventSpecificLocation}
                    time={data.workshop.currentEventTime}
                    color={"orange"}
                />
            </div>
            <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 my-8">
                <div className="h-[2px] rounded-full bg-pac-orange " />
            </div>
            <div className="flex flex-col px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
                {data?.workshop?.speakerName?.map((s, index) => (
                    <SpeakerBanner
                        name={s}
                        key={index}
                        title={data.workshop.speakerTitle[index]}
                        image={data.workshop.speakerImage[index]}
                        secondaryImage={data.workshop.speakerSecondaryImage[index]}
                        color={"orange"}
                    />
                ))}
            </div>
            <div className="w-full py-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-col lg:flex-row items-center gap-8 2xl:gap-32 bg-[#E1E1E1] justify-center ">
                <div className="flex flex-col gap-2 px-4">
                    <h3 className="text-3xl 2xl:text-5xl font-bold text-pac-orange uppercase">TOPICS</h3>
                    <div className="w-full h-[2px] rounded-full bg-pac-orange" />
                    <div className="list p h1 h2 h3 b 2xl:text-lg">
                        {parse(data.workshop.topics)}
                    </div>
                </div>
                <EventCalendar data={data} />
            </div>
            <div className=" w-full py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-col justify-center items-center 2xl:gap-12 bg-gradient-to-b to-[#f9a03c] from-[#ef6703]">
                <h1 className="font-bold text-white text-3xl 2xl:text-5xl mb-6">Grow and Elevate your Dental Practice!</h1>
                <span className={data.workshop.open ? 'mb-12' : 'hidden'}>
                    <Button type={1} color={"white-green"} name={'REGISTER HERE'} link={data?.workshop?.formsLink} newtab={true} />
                </span>
                <Slider media={data.workshop.imageGallery} />
                
            </div>
            <div className="w-full py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex flex-col items-center gap-4 2xl:gap-8 bg-[#E1E1E1] justify-center ">
                <h3 className="text-3xl 2xl:text-5xl font-bold text-pac-orange uppercase mb-8">SUGGESTED WORKSHOPS</h3>
                <SuggestedList search={data.workshop.relatedTags} id={data.workshop.id} query={workshop} type={"workshops"} />
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