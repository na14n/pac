import client from '@/lib/apollo';
import AddToBasket from '@/components/products/addToBasket';
import { gql } from 'graphql-tag';



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
  console.log('DATA', data);

  return (
    <div className="w-full h-[100vh] bg-nav-orange/50 flex flex-col items-center justify-center">
      {/* <p>PARAMS SLUG: {params.slug}</p>
            <p>PRODUCT NAME: {data.name}</p>
            <p>PRODUCT BRAND: {data.brand.node.name}</p>
            <p>PRODUCT CATEGORY: {data.category.node.name}</p>
            <p>TAGS: {data.tags}</p> */}
      <p>SEARCH SLUG: {String(params.slug).replace(/-/g, ' ')}</p>
      <p>PARAMS SLUG: {String(data.name).replace(/\s+/g, '-')}</p>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <AddToBasket item={data} />
    </div>
  )
} 