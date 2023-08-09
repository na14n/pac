import { HeaderTrigger, Hero, CategoryBanner, BrandSlider, FeaturedProductsList } from "@/components"
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

    async function GetBrands() {
        try {
            const result = await client.query({
                query: gql`
                query GetBrands {
                    brands {
                      nodes {
                        name
                        logo {
                          link
                        }
                      }
                    }
                  }
          `,
                fetchPolicy: 'network-only',
            });
            return result.data.brands.nodes
        } catch (error) {
            console.error('Error occurred:', error);
            return [];
        }
    }

    let sliderMedia = await GetMediaSlider();
    let sliderBrands = await GetBrands();

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className='w-full h-fit'>
                <HeaderTrigger>
                    <Hero heroType={'slider'} mediaArray={sliderMedia} />
                </HeaderTrigger>
            </div>
            <div className='w-full lg:h-fit'>
                <CategoryBanner />
            </div>
            <div className='w-full h-fit bg-[#F4F4F4] overflow-hidden flex justify-center items-center'>
                <BrandSlider brands={sliderBrands} />
            </div>
            <div className='w-full h-fit bg-[#F4F4F4] overflow-hidden flex justify-center items-center'>
                <FeaturedProductsList />
            </div>
        </div>
    )
}

export default Products;