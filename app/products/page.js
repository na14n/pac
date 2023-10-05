import { HeaderTrigger, Hero, CategoryBanner, BrandSlider, FeaturedProductsList, BrandSliderF } from "@/components"
import NewsHeroSlider from "@/components/embla/newsHeroSlider";
import CompactHeader from "@/components/products/compactHeader";
import client from '@/lib/apollo';
import { extractNamesFromArray } from "@/lib/helpers";
import { gql } from 'graphql-tag';

export async function generateMetadata() {

    let pageData
  
    try {
      const { data } = await client.query({
        query: gql`
              query GetBrand {
                brands(first: 999) {
                    nodes {
                      name
                      }
                    }
                  }
          `,
        fetchPolicy: 'no-cache',
        context: {
          fetchOptions: {
            next: { revalidate: 60 },
          },
        },
      });
      pageData = extractNamesFromArray(data.brands.nodes)
    } catch (error) {
      console.error('Error occurred:', error);
      pageData = []
    }
  
    return {
      title: "PROS-APAC's Products",
      description: "Products List of PROS-APAC Corporation",
      keywords: ["PROS-APAC", "PROS-APAC Products", "Dental Products", "Philippines", ...pageData],
    }
  
  }

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
                    query GetProdLanding {
                        products(where: {search: "landing"}) {
                            nodes {
                                id
                                imageGallery {
                                    link
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
            return result.data.products.nodes[0].imageGallery;
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
                    {/* <Hero heroType={'slider'} mediaArray={sliderMedia} /> */}
                    <CompactHeader media={sliderMedia} />
                </HeaderTrigger>
            </div>
            {/* <div className='w-full lg:h-fit'>
                <CategoryBanner />
            </div> */}
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