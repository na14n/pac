import { HeaderTrigger, Hero, CategoryBanner, BrandSlider, FeaturedProductsList, BrandSliderF } from "@/components"
import NewsHeroSlider from "@/components/embla/newsHeroSlider";
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';

async function Products() {

    const GET_BRANDS = gql`
        query getBrands {
            brands {
            nodes {
                id
                name
                logo {
                link
                }
            }
            }
        }
    `

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
            <div className='w-full h-fit'>
                <HeaderTrigger>
                    <Hero heroType={'slider'} mediaArray={sliderMedia} />
                    {/* <NewsHeroSlider media={sliderMedia} /> */}
                </HeaderTrigger>
            </div>
            <div className='w-full lg:h-fit'>
                <CategoryBanner />
            </div>
            <div className='w-full h-fit bg-[#F4F4F4] overflow-hidden flex justify-center items-center'>
                <BrandSlider />
            </div>
            <div className='w-full h-fit bg-[#F4F4F4] overflow-hidden flex justify-center items-center'>
                <FeaturedProductsList />
            </div>
        </div>
    )
}

export default Products;