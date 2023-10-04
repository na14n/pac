import client from '@/lib/apollo';
import { gql } from 'graphql-tag';
import Image from 'next/image';

export async function CategoryBanner() {

    async function GetCategories() {
        try {
            const result = await client.query({
                query: gql`
                query GetCategories {
                    productCategories(first: 999) {
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
        <div className='w-full h-full bg-pac-green lg:px-32 flex justify-center items-center gap-1 py-4'>
            {categories.map((c, index) => (
                <a key={index} className="flex flex-col items-center square test h-fit justify-center gap-2 group hover:-translate-y-[2px] transition-all" href="#">
                    <Image width={48} height={48} src={c.icon.link ? c.icon.link : 'https://picsum.photos/2400'} alt="dental-product-category" />
                    <div className="text-[#FCFCFC] text-center h-[5ch] group-hover:text-nav-orange text-xs capitalize">
                        {c.name}
                    </div>
                </a>
            ))}

        </div>
    )
} 