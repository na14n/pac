import { HeaderTrigger, Hero, BrandLogo, BrandInfo, SearchBar, BrandCategoriesList, ProductCard } from "@/components"
import { slugFormatter, idFormatter, extractNamesFromArray, transformArrayToColorsObject } from "@/lib/helpers"
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';
import { redirect } from "next/navigation";
import BrandProductsList from "@/components/products/brandProductsList";
import PageWrapper from "@/components/pageWrapper";
import parse from "html-react-parser"


export default async function BrandPage({ params, searchParams }) {

  async function GetBrand() {
    try {
      const result = await client.query({
        query: gql`
                query GetBrand {
                  brands(where: {search: "${slugFormatter(params.brandpage, false, false)}"}) {
                    nodes {
                      name
                      logo {
                        altText
                        sourceUrl
                      }
                      description
                      # mediaLine1{
                      #  sourceUrl
                      #  altText
                      # }
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



  let data = await GetBrand();
  let prods = await GetBrandProducts();

  return (
    (data.data.brands.nodes.length === 0) ? (redirect('/error')) : (
      <PageWrapper>
        <main className="w-full flex flex-col items-center justify-center">
          <div className='w-full h-fit bg-[#121212]'>
            <HeaderTrigger>
              <Hero heroType={'slider'} title={data.data.brands.nodes.length > 0 ? data.data.brands.nodes[0].name : 'Brand Name'} mediaArray={[]} />
            </HeaderTrigger>
          </div>
          <div className="w-full h-fit">
            <BrandLogo media={data.data.brands.nodes.length > 0 ? data.data.brands.nodes[0].logo.sourceUrl : ''} />
          </div>
          <div className={`w-full h-fit lg:px-32 2xl:px-48 lg:pt-32 2xl:pt-40 flex flex-col items-center justify-center gap-4 xl:gap-8 pb-20 `}>
              <h1 className={`text-5xl font-bold text-[#121212]`}>{data?.data?.brands?.nodes[0]?.name}</h1>
              <div className={`text-[#373737] p h1 h2 h3 b text-sm px-16 xl:text-lg`}>{parse(data?.data?.brands?.nodes[0]?.description)}</div>
          </div>
          <div className="w-full h-fit relative flex justify-center items-center bg-[#EFEFEF]">
            <div className="py-16 flex flex-col justify-center items-center gap-8 ">
              <SearchBar type={'search'} placeholder={`Search ${slugFormatter(params.brandpage, false)} products here.`} />
              <BrandCategoriesList c={data.data.brands.nodes.length > 0 ? data.data.brands.nodes[0].itemCategories.nodes : []} p={params.brandpage} q={searchParams.q} />
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
      </PageWrapper>
    )
  )
}