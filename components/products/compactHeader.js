import client from '@/lib/apollo';
import { gql } from 'graphql-tag';
import Image from "next/image";
import ProductHeroSlider from '../embla/productHeroSlider';
import { sortByAttribute } from '@/lib/helpers';

export default async function CompactHeader({ media }) {

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
    let assets = sortByAttribute(media, 'title')

    return (
        <section className="h-fit w-full relative flex flex-col items-center justify-end md:px-8 lg:px-16 xl:px-32 2xl:px-48 md:pt-32 gap-8 bg-[#F4F4F4]">
            <div className="absolute top-0 left-0 w-full z-0 h-24 md:h-[24vh] xl:h-[32vh] 2xl:h-[36vh] bg-gradient-to-b from-[#e66200] to-[#ffa200]" />
            <div className="w-full h-fit shadow-lg rounded-sm z-10 max-md:mt-24">
                <div className="w-full aspect-[8/3] bg-white">
                    <ProductHeroSlider media={assets} />
                </div>
                <div className="w-full items-center grid-cols-3 grid md:grid-cols-6 xl:grid-cols-12 bg-[#ec6501]">
                    {categories.map((c, index) => (
                        <a key={index} className="aspect-square md:p-2 flex flex-col items-center justify-center gap-1 max-md:gap-2 group" href={`/categories?category=${c?.name.toLowerCase()}`}>
                            <span className="w-1/2 xl:w-3/5 square relative border-[1.5px] rounded-md border-white/25 group-hover:border-white/80">
                                <Image src={c?.icon?.link} fill={true} className="object-contain object-center p-1" />
                            </span>
                            <p className="text-[0.7rem] md:text-[.9rem] font-semibold text-[#EFEFEF] w-full text-center group-hover:text-white">
                                {c?.name}
                            </p>
                        </a>
                    ))}

                </div>
            </div>

        </section>
    )
}