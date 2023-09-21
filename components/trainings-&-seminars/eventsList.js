import client from '@/lib/apollo';
import EventCard from './eventCard';
import { gql } from '@apollo/client';
import { idFormatter } from '@/lib/helpers';

async function EventsList({ sorting, eventType }) {

  async function GetConventions() {
    try {
      const { data } = await client.query({
        query: gql`
                query GetConventions {
                    eventTypes(where: {name: "Conventions"}) {
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
  let type

  if (eventType === 'workshops') {
    data = await GetWorkshops();
    type = 'workshops'
  } else if (eventType === 'seminars') {
    data = await GetSeminars();
    type = 'seminars'
  } else if (eventType === 'conventions') {
    data = await GetConventions();
    type = 'conventions'
  }


  return (
    <div className='w-full h-full grid justify-items-center gap-4 grid-auto-fit-xl'>
      {data.map((d, index) => (
        <EventCard key={index} title={d.eventName} description={d.shortDescription[0]} link={idFormatter(d.id)} type={type} />
      ))}
    </div>
  )
}

export default EventsList;