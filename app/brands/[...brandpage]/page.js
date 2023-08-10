import { HeaderTrigger, Hero, BrandLogo, BrandInfo, SearchBar, BrandCategoriesList } from "@/components"
import { slugFormatter, bgAccentFormatter, hoverTextAccentFormatter } from "@/lib/helpers"
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';

export default async function BrandPage({ params, searchParams }) {


    async function GetBrand() {
        try {
            const result = await client.query({
                query: gql`
                query GetBrand {
                    brands(where: {search: "${slugFormatter(params.brandpage, false)}"}) {
                        nodes {
                          name
                          logo {
                            link
                          }
                          description
                          itemCategories {
                            nodes {
                              name
                            }
                          }
                          brandingColor
                        }
                      }
                }
              `,
                fetchPolicy: 'no-cache',
            });
            return result;
        } catch (error) {
            console.error('Error occurred:', error);
            return error;
        }
    }

    let data = await GetBrand();
    console.log(data);

    return (
        <main className="w-full flex flex-col items-center justify-center">
            <div className='w-full h-fit bg-[#121212]'>
                <HeaderTrigger>
                    <Hero heroType={'slider'} title={data.data.brands.nodes.length > 0 ? data.data.brands.nodes[0].name : 'Brand Name'} mediaArray={[]} />
                </HeaderTrigger>
            </div>
            <div className="w-full h-fit">
                <BrandLogo media={data.data.brands.nodes[0].logo.link} />
            </div>
            <div className="w-full h-fit">
                <BrandInfo color={data.data.brands.nodes[0].brandingColor} name={data.data.brands.nodes[0].name} description={data.data.brands.nodes[0].description} />
            </div>
            <div className="w-full h-fit relative flex justify-center items-center bg-[#EFEFEF]">
                <div className="py-16 flex flex-col justify-center items-center gap-8 ">
                    <SearchBar type={'search'} placeholder={`Search ${params.brandpage} products here.`} color={data.data.brands.nodes[0].brandingColor} />
                    <BrandCategoriesList c={data.data.brands.nodes.length > 0 ? data.data.brands.nodes[0].itemCategories.nodes : []} p={params.brandpage} q={searchParams.q} color={data.data.brands.nodes[0].brandingColor} />
                </div>
            </div>
            <div className={`bg-[#EFEFEF] w-full h-[100vh]`}>
                
            </div>
        </main>

    )
}