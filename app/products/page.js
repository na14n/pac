import { HeaderTrigger, Hero } from "@/components"
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';

async function Products() {

    async function GetMediaSlider() {
        try {
            const result = await client.query({
                query: gql`
                query GetMediaSlider {
                    mediaSliders(where: {name: "Products Page Media Slider"}) {
                      nodes {
                        media {
                          link
                        }
                      }
                    }
                  }
          `,
                fetchPolicy: 'network-only',
            });
            return result.data.mediaSliders.nodes[0].media;
        } catch (error) {
            console.error('Error occurred:', error);
            return [];
        }
    }

    let sliderMedia = await GetMediaSlider();

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className='w-full h-[50vh]'>
                <HeaderTrigger>
                    <Hero heroType={'slider'} mediaArray={sliderMedia} />
                </HeaderTrigger>
            </div>
            <div className='w-full h-[100vh] bg-green-400'>
            </div>
        </div>
    )
}

export default Products;