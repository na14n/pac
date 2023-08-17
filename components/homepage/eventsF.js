'use client';
export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import EventTypeCard from "../trainings-&-seminars/eventTypeCard"

const query = gql` query FetchEventsF {
    homepageSections(where: {search: "events"}) {
      nodes {
        sectionTitle
        sectionHeading
        contentLine2
        mediaLine1{
            link
        }
        mediaLine2{
            link
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
        <div className="w-full max-h-fit h-fit bg-[#E1E1E1] flex flex-col lg:justify-center items-center lg:px-32 2xl:px-48 2xl:py-32 lg:gap-8 2xl:gap-16 xs:px-4  py-12 ">
            <div className="lg:max-w-full min-w-fit flex lg:flex-col lg:gap-4 h-fit ">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading.map((h, i) => (
                    <h1 key={i} className="text-4xl text-[#272727] font-bold  text-center">
                        {h}
                    </h1>
                )) : ``}
            </div>
            <div className=" lg:max-w-[900px] 2xl:max-w-full 2xl:px-48 flex flex-col gap-2 ">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.contentLine2.map((h, i) => (
                    <p key={i} className="text-sm text-[#373737] text-center">
                        {h}
                    </p>
                )) : ``}
            </div>
            <div className="w-full h-fit flex xs:flex-col lg:flex-row items-center justify-center gap-8 2xl:gap-16 xs:pt-16 lg:pt-0 ">
                <EventTypeCard title={'Workshops'} media={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine1[0].link : ''} mediaH={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine2[0].link : ''} />
                <EventTypeCard title={'seminars'} media={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine1[1].link : ''} mediaH={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine2[1].link : ''} />
                <EventTypeCard title={'conventions'} media={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine1[2].link : ''} mediaH={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine2[2].link : ''} />
            </div>
        </div>
    )
}