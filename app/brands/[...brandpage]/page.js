import { HeaderTrigger, Hero, BrandLogo, BrandInfo, SearchBar, BrandCategoriesList, ProductCard } from "@/components"
import { slugFormatter, idFormatter, extractNamesFromArray, transformArrayToColorsObject } from "@/lib/helpers"
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';
import { redirect } from "next/navigation";
import BrandProductsList from "@/components/products/brandProductsList";

// export const metadata = {

//   title: "About PROS-APAC",
//   description: "Information and History about PROS-APAC Corporation",
//   keywords: ['PROS-APAC', 'PROS-APAC Brands', 'Dental Products', 'Philippines', ],
// }



export default async function BrandPage({ params, searchParams }) {

  async function GetBrand() {
    try {
      const result = await client.query({
        // (where: {search: "${slugFormatter(params.brandpage, false, false)}"})
        query: gql`
                query GetBrand {
                  brands(where: {search: "${slugFormatter(params.brandpage, false, false)}"}) {
                    nodes {
                      name
                      backgroundAccent
                      logo {
                        altText
                        sourceUrl
                      }
                      itemCategories{
                        nodes{
                          name
                        }
                      }
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
      return result;
    } catch (error) {
      console.error('Error occurred:', error);
      return error;
    }
  }

  async function GetBrandProducts() {
    try {
      const result = await client.query({
        query: gql`
                query GetBrandProducts {
                    products(where: {search: "${slugFormatter(params.brandpage, false, false)}, ${searchParams.q ? searchParams.q : ``}"}) {
                      nodes {
                        id
                        name
                        cardImage {
                          sourceUrl
                        }
                        bestSelling
                        itemCategories {
                          nodes {
                            parent {
                              node {
                                name
                              }
                            }
                          }
                        }
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
      return result;
    } catch (error) {
      console.error('Error occurred:', error);
      return error;
    }
  }

  async function GetColors() {
    try {
      const result = await client.query({
        query: gql`
              query FetchColors {
                colors {
                  nodes {
                    styleName
                    styleDetails
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
      return transformArrayToColorsObject(result?.data?.colors?.nodes);
    } catch (error) {
      console.error('Error occurred:', error);
      return error;
    }
  }

  let data = await GetBrand();
  let prods = await GetBrandProducts();
  let colors = await GetColors();
  //   let colors = {
  //     aoBackground: "text-white bg-[#193a89]",
  // }

  // console.log( data.data.brands.nodes[0].itemCategories);

  console.log(data?.data?.brands?.nodes[0]?.backgroundAccent);

  return (
    (data.data.brands.nodes.length === 0) ? (redirect('/error')) : (
      <main className="w-full flex flex-col items-center justify-center">
        <div className='w-full h-fit bg-[#121212]'>
          <HeaderTrigger>
            <Hero heroType={'slider'} title={data.data.brands.nodes.length > 0 ? data.data.brands.nodes[0].name : 'Brand Name'} mediaArray={[]} />
          </HeaderTrigger>
        </div>
        <div className="w-full h-fit">
          <BrandLogo media={data.data.brands.nodes.length > 0 ? data.data.brands.nodes[0].logo.sourceUrl : ''} />
        </div>
        <div className="w-full h-fit">
          <BrandInfo name={data.data.brands.nodes.length > 0 ? data.data.brands.nodes[0].name : ''} description={data.data.brands.nodes.length > 0 ? data.data.brands.nodes[0].description : ''} colors={colors} bg={data?.data?.brands?.nodes[0]?.backgroundAccent} />
          {/* {searchParams.q} */}
        </div>
        <div className="w-full h-fit relative flex justify-center items-center bg-[#EFEFEF]">
          <div className="py-16 flex flex-col justify-center items-center gap-8 ">
            <SearchBar type={'search'} placeholder={`Search ${slugFormatter(params.brandpage, false)} products here.`} />
            <BrandCategoriesList c={data.data.brands.nodes.length > 0 ? data.data.brands.nodes[0].itemCategories.nodes : []} p={params.brandpage} q={searchParams.q} colors={colors} bg={data?.data?.brands?.nodes[0]?.backgroundAccent} />
          </div>
        </div>
        {/* <div className="w-full h-fit lg:px-32 2xl:px-48 py-16 grid gap-4 grid-auto-fit-xs bg-[#EFEFEF]">
          {prods ? prods.data.products.nodes.map((p, i) => (
            <ProductCard
              key={i}
              name={p.name}
              best={p.bestSelling}
              category={p.itemCategories.nodes}
              media={p.cardImage.sourceUrl}
              slug={idFormatter(p.id)}
            />
          )) : ``}
        </div> */}
        <BrandProductsList queryVariables={searchParams.q} brand={data.data.brands.nodes[0].name.toLowerCase()} />
        {/* <pre>{JSON.stringify(prods.data.products.nodes, null, 2)}</pre> */}
      </main>
    )
  )
}