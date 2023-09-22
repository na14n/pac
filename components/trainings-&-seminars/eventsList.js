import client from '@/lib/apollo';
import EventCard from './eventCard';
import { gql } from '@apollo/client';
import { idFormatter } from '@/lib/helpers';

async function EventsList({ sorting, eventType }) {

  async function GetConventions(after) {
    try {
      const res = await client.query({
        query: gql`
        query GetConventions($after: String, $first: Int) {
          eventTypes(where: {name: "Conventions"}) {
            nodes {
              events(after: $after, first: $first) {
                pageInfo {
                  hasNextPage
                  endCursor
                }
                nodes {
                  id
                  eventName
                  location
                  shortDescription
                }
              }
            }
          }
        }
          `,
        variables: {
          first: 1,
          after: after,
        },
        fetchPolicy: 'network-only',
        context: {
          fetchOptions: {
            next: { revalidate: 60 },
          },
        },
      });
      return res;
    } catch (error) {
      console.error('Error occurred:', error);
      return [];
    }
  }

  async function GetSeminars() {
    try {
      const { data } = await client.query({
        query: gql`
            query GetConventions {
                eventTypes(where: {name: "Seminars"}) {
                  nodes {
                    events {
                      nodes {
                        id
                        eventName
                        shortDescription
                      }
                    }
                  }
                }
              }
      `,
        fetchPolicy: 'network-only',
        context: {
          fetchOptions: {
            next: { revalidate: 60 },
          },
        },
      });
      return data?.eventTypes?.nodes[0]?.events?.nodes;
    } catch (error) {
      console.error('Error occurred:', error);
      return [];
    }
  }


  async function GetWorkshops() {
    try {
      const { data } = await client.query({
        query: gql`
          query GetConventions {
              eventTypes(where: {name: "Workshops"}) {
                nodes {
                  events {
                    nodes {
                      id
                      eventName
                      shortDescription
                      location
                      date
                    }
                  }
                }
              }
            }
    `,
        fetchPolicy: 'network-only',
        context: {
          fetchOptions: {
            next: { revalidate: 60 },
          },
        },
      });
      return data?.eventTypes?.nodes[0]?.events?.nodes;
    } catch (error) {
      console.error('Error occurred:', error);
      return [];
    }
  }

  let data
  let workshops
  let seminars
  let conventions
  let type

  if (eventType === 'workshops') {
    workshops = await GetWorkshops();
    data = workshops?.data?.eventTypes?.nodes[0]?.events?.nodes
    type = 'workshops'
  } else if (eventType === 'seminars') {
    data = await GetSeminars();
    type = 'seminars'
  } else if (eventType === 'conventions') {
    conventions = await GetConventions();
    data = conventions?.data?.eventTypes?.nodes[0]?.events?.nodes
    type = 'conventions'
  }

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


  return (
    <div className='w-[18rem] md:w-[40rem] lg:w-[60rem] xl:w-[64rem] 2xl:w-[76rem] h-full grid justify-items-center gap-4 grid-auto-fit-xl'>
      {/* {data.map((d, index) => (
        <EventCard
          key={index}
          title={d.eventName}
          location={d.location}
          link={idFormatter(d.id)}
          type={type}
          date={d.shortDescription}
          month={monthNames[new Date(d.date).getMonth() + 1]}
          day={new Date(d.date).getDate()}
        // log={new Date(d.date).getMonth()+1}
        />
      ))} */}
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      {/* {conventions?.data?.eventTypes?.nodes[0]?.events?.pageInfo?.hasNextPage ?
        <button
          className='p-4 font-bold text-black'
          onClick={() => conventions.fetchMore({
            variables: {
              first: 1,
              after: conventions?.data?.eventTypes?.nodes[0]?.events?.pageInfo?.endCursor
          },
        })}
        >
          FETCH MORE
        </button>
        : ``} */}
    </div>
  )
}

export default EventsList;