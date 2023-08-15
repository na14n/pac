import client from '@/lib/apollo';
import AddToBasket from '@/components/products/addToBasket';
import { gql } from 'graphql-tag';
import { redirect } from 'next/navigation';
import { slugFormatter } from '@/lib/helpers';
import { ProdInfo, HeaderTrigger } from '@/components';



export default async function Page({ params }) {

  async function GetProduct() {
    try {
      const result = await client.query({
        query: gql`
        query FetchProducts {
          products(where: {search: "${slugFormatter(params.slug, false, false)}", orderby: {field: TITLE, order: ASC}}) {
            nodes {
              name
              brand {
                node {
                  name
                  logo {
                    link
                  }
                }
              }
              shortDescription
              inclusions
              bestSelling
              imageGallery {
                link
              }
              instructionFileLink
              mainWebsiteLink
              longDescription
              youtubeVideoEmbedSource
              new
              awards {
                link
              }
              productLogo {
                link
              }
              itemCategories {
                nodes {
                  parent {
                    node {
                      name
                    }
                  }
                  name
                }
              }
            }
          }
        }
          `,
        fetchPolicy: 'no-cache',
      });
      return result;
    } catch (error) {
      console.error('Error occurred:', error);
      return [];
    }
  }

  let data = await GetProduct();

  return (
    (data.data.products.nodes.length === 0) ? (
      redirect('/error')
    ) : (
      <main className="w-full h-fit overflow-hidden bg-[#EFEFEF] flex flex-col items-center">
        <div className='w-full min-h-24 h-24 max-h-24'>
          <HeaderTrigger>
            <div className='w-full h-full bg-pac-green z-0' />
          </HeaderTrigger>
        </div>
        <ProdInfo data={data.data.products.nodes[0]} />
        <section className="w-full h-screen test">
          <pre>{JSON.stringify(data.data.products.nodes[0].itemCategories.nodes, null, 2)}</pre>
        </section>
      </main>
    )
  )


} 