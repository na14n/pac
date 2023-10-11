'use client';
export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import EventTypeCard from "../trainings-&-seminars/eventTypeCard"
import { sortByAttribute, pTagRemover } from "@/lib/helpers";
import parse from "html-react-parser"

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

    const mediaLine1 = sortByAttribute(data?.homepageSections?.nodes[0]?.mediaLine1, 'title')
    const mediaLine2 = sortByAttribute(data?.homepageSections?.nodes[0]?.mediaLine2, 'title')

    return (
        <div className="w-full max-h-fit h-fit bg-[#E1E1E1] flex flex-col lg:justify-center items-center md:px-8 lg:px-16 xl:px-32 2xl:px-48 2xl:py-32 lg:gap-8 2xl:gap-16 xs:px-4 xs:gap-16 py-12 ">
            <div className="lg:max-w-full min-w-fit flex flex-col lg:gap-1 h-fit ">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading.map((h, i) => (
                    <h1 key={i} className="lg:text-3xl xl:text-4xl xs:text-2xl text-[#272727] font-bold  text-center">
                        {pTagRemover(h)}
                    </h1>
                )) : ``}
            </div>
            <div className="lg:max-w-[75ch] xl:max-w-[900px] 2xl:max-w-full 2xl:px-48 flex flex-col gap-6">
                {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.contentLine2.map((h, i) => (
                    <div key={i} className="text-xl max-2xl:text-sm text-[#373737] text-justify">
                        {/* {pTagRemover(h)} */}
                        {parse(h)}
                    </div>
                )) : ``}
            </div>
            <div className="w-full h-fit flex xs:flex-col lg:flex-row items-center justify-center gap-8 2xl:gap-16 xs:pt-16 lg:pt-0 ">
                {data ? data?.homepageSections?.nodes[0]?.sectionSubheading.map((s, i) => (
                    <EventTypeCard
                        key={i}
                        title={data?.homepageSections?.nodes[0] ? s : 'Workshops'}
                        mediaH={data?.homepageSections?.nodes[0] ? mediaLine1[i].link : ``}
                        media={data?.homepageSections?.nodes[0] ? mediaLine2[i].link : ``}
                        link={data?.homepageSections?.nodes[0] ? `trainings-&-seminars/${s}` : ``}
                    />
                )) : <></>}
                {/* <EventTypeCard title={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionSubheading[0] :'Workshops'} media={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine1, 'title')[1].link : ``} mediaH={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine1, 'title')[0].link : ``} link={data?.homepageSections?.nodes[0] ? `trainings-&-seminars/${data?.homepageSections?.nodes[0]?.sectionSubheading[0]}` :'Workshops'} />
                <EventTypeCard title={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionSubheading[1] :'Workshops'} media={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine2, 'title')[1].link : ``} mediaH={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine2, 'title')[0].link : ``} link={data?.homepageSections?.nodes[0] ? `trainings-&-seminars/${data?.homepageSections?.nodes[0]?.sectionSubheading[1]}` :'Workshops'} />
                <EventTypeCard title={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionSubheading[2] :'Workshops'} media={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine3, 'title')[1].link : ``} mediaH={data?.homepageSections?.nodes[0] ? sortByAttribute(data?.homepageSections?.nodes[0].mediaLine3, 'title')[0].link : ``} link={data?.homepageSections?.nodes[0] ? `trainings-&-seminars/${data?.homepageSections?.nodes[0]?.sectionSubheading[2]}` :'Workshops'} /> */}
            </div>
        </div>
    )
}