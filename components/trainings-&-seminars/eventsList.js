import client from '@/lib/apollo';
import EventCard from './eventCard';
import { gql } from 'graphql-tag';

async function EventsList() {

    async function GetWorkshops() {
        try {
            const result = await client.query({
                query: gql`
                query GetWorkshops {
                    events {
                        nodes {
                          name
                          description
                          location
                          datetime
                          eventType
                        }
                    }
                  }
          `,
            });
            return result.data.events.nodes;
        } catch (error) {
            console.error('Error occurred:', error);
            return [];
        }
    }
    
    const workshops = await GetWorkshops();

    return (
        <div className='w-full h-full grid xs:grid-cols-1 lg:grid-cols-3'>
            {workshops.map((w, index) => (
                <EventCard key={index} title={w.name} description={w.description} />
            ))}
        </div>
    )
}

export default EventsList;