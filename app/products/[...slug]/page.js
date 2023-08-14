import client from '@/lib/apollo';
import AddToBasket from '@/components/products/addToBasket';
import { gql } from 'graphql-tag';
import { redirect } from 'next/navigation';



export default async function Page({ params }) {

  async function GetProduct() {
    try {
      const result = await client.query({
        query: gql`
                query FetchProducts {
                  products(where: {search: "${String(params.slug).replace(/-/g, ' ')}", orderby: {field: TITLE, order: ASC}}) {
                    nodes {
                      id
                      name
                      tags
                      brand {
                        node {
                          name
                        }
                      }
                      category {
                        node {
                          name
                        }
                      }
                      description
                    }
                  }
                }
          `,
        fetchPolicy: 'no-cache',
      });
      return result.data.products.nodes[0];
    } catch (error) {
      console.error('Error occurred:', error);
      return [];
    }
  }

  let data = await GetProduct();
  return (
    (data.length === 0) ? (redirect('/error')) :
      (
        <div className="w-full h-[100vh] bg-nav-orange/50 flex flex-col items-center justify-center">
          <p>SEARCH SLUG: {String(params.slug).replace(/-/g, ' ')}</p>
          <p>PARAMS SLUG: {String(data.name).replace(/\s+/g, '-')}</p>
          <pre>
            {JSON.stringify(data, null, 2)}
          </pre>
          <AddToBasket item={data} />
  //   </div>
      )
  )


} 