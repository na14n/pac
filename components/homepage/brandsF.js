import { BrandSliderF } from "../embla/brandSliderF";
import Image from "next/image"
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';

async function GetBrands() {
  try {
    const result = await client.query({
      query: gql`
          query GetBrands {
              brands {
                nodes {
                  name
                  logo {
                    link
                  }
                }
              }
            }
    `,
      fetchPolicy: 'network-only',
    });
    return result.data.brands.nodes
  } catch (error) {
    console.error('Error occurred:', error);
    return [];
  }
}

const b = await GetBrands();

export async function BrandsF({ mediaUrl }) {
  return (
    <div className="w-full h-full overflow-hidden relative shadow-lg flex flex-col items-center justify-center px-32 2xl:px-48">
      <div className="absolute z-10 t-0 bg-gradient-to-b from-[#F0892B]/60 via-[#3E3E3E]/90 to-[#3E3E3E]/90 w-full h-full"></div>
      <div className="absolute z-0 t-0 w-full h-full">
        <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} alt="dental-website-banner" />
      </div>
      <div className='w-content py-2 flex flex-col gap-2 items-center justify-center pt-16 z-40'>
        <div className='px-4 uppercase text-3xl 2xl:text-5xl font-bold text-[#FCFCFC]'>Our Partner Brands</div>
        <div className='w-[600px] 2xl:w-[900px] rounded-md h-[2px] bg-pac-orange'></div>
        <div className='text-sm 2xl:text-lg max-w-[700px] 2xl:max-w-[800px] text-center text-[#EFEFEF]'> Currently, PROS-APAC  is partnered with a total of 35 exclusive dental Brands from both local and international level of products, all of which are of the best quality for our dentists.</div>
      </div>
      <BrandSliderF brands={b} />
    </div>
  )
}