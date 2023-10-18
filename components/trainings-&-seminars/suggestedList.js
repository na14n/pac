'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { idFormatter } from "@/lib/helpers";
import EventCard from "./eventCard";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const query = gql`
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

export default function SuggestedList({ search, id }) {

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
                            location={d.location}
                            link={idFormatter(d.id)}
                            type={"seminars"}
                            date={d.shortDescription}
                            month={monthNames[new Date(d.eventDate).getMonth() + 1]}
                            day={new Date(d.eventDate).getDate()}
                            mediaUrl={d.eventBanner.sourceUrl}
                        />
                    ))
                )
                :
                (
                    <div className="font-semibold text-black/50">No Seminars Found</div>

                )}
        </div>
    )
}