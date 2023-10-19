'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { idFormatter } from "@/lib/helpers";
import EventCard from "./eventCard";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


export default function SuggestedList({ search, id, query, type }) {

    const { data } = useSuspenseQuery(
        query,
        {
            variables: {
                first: 3,
                search: search,
                notIn: [id]
            },
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            }
        }
    )

    return (
        <div className='w-[18rem] md:w-[40rem] lg:w-[60rem] xl:w-[64rem] 2xl:w-[76rem] h-full grid justify-items-center gap-4 grid-auto-fit-xl'>
            {data?.seminars?.nodes?.length > 0 ?
                (
                    data?.seminars?.nodes.map((d, index) => (
                        <EventCard
                            key={index}
                            title={d.eventName}
                            location={type === "seminars" ? d.location : type === "workshops" ? d.currentEventSpecificLocation : ''}
                            link={idFormatter(d.id)}
                            type={type}
                            date={d.shortDescription}
                            month={type === "seminars" ? monthNames[new Date(d.eventDate).getMonth() + 1] : type === "workshops" ? monthNames[new Date(d.currentEventDate).getMonth() + 1] : ''}
                            day={type === "seminars" ? new Date(d.eventDate).getDate() : type === "workshops" ? new Date(d.currentEventDate).getDate() : ''}
                            mediaUrl={d.eventBanner.sourceUrl}
                        />
                    ))
                )
                :
                (
                    <div className="font-semibold text-black/50">No {type} found</div>

                )}
        </div>
    )
}