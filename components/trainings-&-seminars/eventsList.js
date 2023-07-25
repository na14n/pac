import client from '@/lib/apollo';
import EventCard from './eventCard';
import { gql } from 'graphql-tag';

async function EventsList({ sorting, eventType }) {

    async function GetConventions() {
        try {
            const result = await client.query({
                query: gql`
                query GetConventions {
                    eventsType(where: {name: "Conventions"}) {
                      nodes {
                        events {
                          nodes {
                            name
                            description
                            location
                          }
                        }
                      }
                    }
                  }
          `,
                fetchPolicy: 'network-only',
            });
            return result.data.eventsType.nodes[0].events.nodes;
        } catch (error) {
            console.error('Error occurred:', error);
            return [];
        }
    }

    async function GetSeminars() {
        try {
            const result = await client.query({
                query: gql`
                query GetSeminars {
                    eventsType(where: {name: "Seminars"}) {
                      nodes {
                        events {
                          nodes {
                            name
                            description
                            location
                          }
                        }
                      }
                    }
                  }
          `,
                fetchPolicy: 'network-only',
            });
            return result.data.eventsType.nodes[0].events.nodes;
        } catch (error) {
            console.error('Error occurred:', error);
            return [];
        }
    }


    async function GetWorkshops() {
        try {
            const result = await client.query({
                query: gql`
                query GetWorkshops {
                    eventsType(where: {name: "Workshops"}) {
                      nodes {
                        events {
                          nodes {
                            name
                            description
                            location
                          }
                        }
                      }
                    }
                  }
          `,
                fetchPolicy: 'network-only',
            });
            return result.data.eventsType.nodes[0].events.nodes;
        } catch (error) {
            console.error('Error occurred:', error);
            return [];
        }
    }

    let data

    if (eventType === 'workshops') {
        data = await GetWorkshops();
    } else if (eventType === 'seminars') {
        data = await GetSeminars();
    } else if (eventType === 'conventions') {
        data = await GetConventions();
    }

    let workshops = [...data]

    const nameSortedAsc = [...data].sort((a, b) => a.name.localeCompare(b.name));
    const nameSortedDesc = [...data].sort((a, b) => b.name.localeCompare(a.name));
    const dateSortedAsc = [...data].sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
    const dateSortedDesc = [...data].sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

    return (

        (sorting === 'default') ? (
            <div className='w-full h-full grid justify-items-center xs:grid-cols-1 lg:grid-cols-3 gap-8 '>
                {workshops.map((w, index) => (
                    <EventCard key={index} title={w.name} description={w.description} />
                ))}
            </div>

        ) : (sorting === 'nameAsc') ? (
            <div className='w-full h-full grid justify-items-center xs:grid-cols-1 lg:grid-cols-3 gap-8 '>
                {nameSortedAsc.map((w, index) => (
                    <EventCard key={index} title={w.name} description={w.description} />
                ))}
            </div>

        ) : (sorting === 'nameDesc') ? (
            <div className='w-full h-full grid justify-items-center xs:grid-cols-1 lg:grid-cols-3 gap-8 '>
                {nameSortedDesc.map((w, index) => (
                    <EventCard key={index} title={w.name} description={w.description} />
                ))}
            </div>

        ) : (sorting === 'dateAsc') ? (
            <div className='w-full h-full grid justify-items-center xs:grid-cols-1 lg:grid-cols-3 gap-8 '>
                {dateSortedAsc.map((w, index) => (
                    <EventCard key={index} title={w.name} description={w.description} />
                ))}
            </div>

        ) : (sorting === 'dateDesc') ? (
            <div className='w-full h-full grid justify-items-center xs:grid-cols-1 lg:grid-cols-3 gap-8 '>
                {dateSortedDesc.map((w, index) => (
                    <EventCard key={index} title={w.name} description={w.description} />
                ))}
            </div>

        ) : (
            <div className='w-full h-full grid justify-items-center xs:grid-cols-1 lg:grid-cols-3 gap-8 '>
                {workshops.map((w, index) => (
                    <EventCard key={index} title={w.name} description={w.description} />
                ))}
            </div>
        )
    )
}

export default EventsList;