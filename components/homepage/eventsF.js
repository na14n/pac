'use client';
export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { sortByAttribute } from "@/lib/helpers";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import EventTypeCard from "../trainings-&-seminars/eventTypeCard"

const query = gql` query FetchEventsF {
    homepageSections(where: {search: "events"}) {
      nodes {
        sectionTitle
        sectionHeading
        sectionSubheading
        contentLine2
        mediaLine1{
            link
            title
        }
        mediaLine2{
            link
            title
        }
        mediaLine3 {
            link
            title
        }
      }
    }
  }
`;
export default function EventsF() {

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
        <div className="w-full max-h-fit h-fit bg-[#E1E1E1] flex flex-col lg:justify-center items-center lg:px-32 2xl:px-48 2xl:py-32 lg:gap-8 2xl:gap-16 xs:px-4 xs:gap-16 py-12 ">
            <div className="lg:max-w-full min-w-fit flex flex-col lg:gap-1 h-fit ">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading.map((h, i) => (
                    <h1 key={i} className="lg:text-4xl xs:text-2xl text-[#272727] font-bold  text-center">
                        {h}
                    </h1>
                )) : ``}
            </div>
            <div className=" lg:max-w-[900px] 2xl:max-w-full 2xl:px-48 flex flex-col gap-6">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.contentLine2.map((h, i) => (
                    <p key={i} className="text-lg text-[#373737] text-justify">
                        {h}
                    </p>
                )) : ``}
            </div>
            <div className="w-full h-fit flex xs:flex-col lg:flex-row items-center justify-center gap-8 2xl:gap-16 xs:pt-16 lg:pt-0 ">
                <EventTypeCard title={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionSubheading[0] :'Workshops'} media={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine1, 'title')[1].link : ``} mediaH={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine1, 'title')[0].link : ``} />
                <EventTypeCard title={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionSubheading[1] :'Workshops'} media={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine2, 'title')[1].link : ``} mediaH={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine2, 'title')[0].link : ``} />
                <EventTypeCard title={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionSubheading[2] :'Workshops'} media={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine3, 'title')[1].link : ``} mediaH={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine3, 'title')[0].link : ``} />
            </div>
        </div>
    )
}