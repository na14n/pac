import client from '@/lib/apollo';
import { gql } from 'graphql-tag';
import Image from 'next/image';

export async function CategoryBanner() {

    async function GetCategories() {
        try {
            const result = await client.query({
                query: gql`
                query GetCategories {
                    productCategories {
                      nodes {
                        name
                        icon {
                          link
                        }
                      }
                    }
                  }
          `,
                fetchPolicy: 'network-only',
            });
            return result.data.productCategories.nodes
        } catch (error) {
            console.error('Error occurred:', error);
            return [];
        }
    }

    let categories = await GetCategories();


    return (
        <div className='w-full h-full bg-[#FCFCFC] lg:px-32 flex justify-center items-center gap-8'>
            {categories.map((c, index) => (
                <a key={index} className="flex flex-col items-center h-content justify-center gap-2 group p-2 hover:-translate-y-1 transition-all" href="#">
                    <Image width={64} height={64} src={c.icon.link ? c.icon.link : 'https://picsum.photos/2400'} alt="dental-product-category" />
                    <div className="text-[#272727] group-hover:text-pac-orange font-semibold text-sm uppercase">
                        {c.name}
                    </div>
                </a>
            ))}

        </div>
    )
} 