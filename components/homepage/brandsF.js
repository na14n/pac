'use client';

export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { BrandSliderF } from "../embla/brandSliderF";
import { sortByAttribute, pTagRemover } from "@/lib/helpers";
import parse from "html-react-parser"
import Image from "next/image"
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';

const query = gql`
    query GetBrandsF {
      brands (first: 100) {
        nodes {
          name
          slideNumber
          logo {
            link
          }
        }
      }
      homepageSections(where: {search: "partner-brands"}) {
        nodes {
          title
          sectionHeading
          contentLine1
          mediaLine1{
            link
          }
        }
      }
    }
`

export default function BrandsF({ mediaUrl }) {

  const { data } = useSuspenseQuery(
    query,
    {
      context: {
        fetchOptions: {
          next: { revalidate: 60 },
        },
      },
    }
  );

  const brands = sortByAttribute(data.brands.nodes, 'slideNumber')

  return (
    <div className="w-full max-h-fit h-fit overflow-hidden relative shadow-lg flex flex-col items-center justify-center xs:px-0 xl:px-32 2xl:px-48 py-16">
      <div className="absolute z-10 top-0 bg-gradient-to-b from-[#b56012]/90 to-[#3E3E3E]/90 w-full h-full"></div>
      <div className="absolute z-0 top-0 w-full h-full">
        <Image fill={true} src={data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.mediaLine1[0].link : 'https://picsum.photos/2400/1600'} className="z-0 object-cover" alt="dental-website-banner" />
      </div>
      <div className=' xs:w-full lg:w-fit  flex flex-col gap-3 items-center justify-center z-40 mt-20 xs:px-4 lg:px-0 lg:mt-24 2xl:mt-32 xs:mt-28 mb-6'>
        <div className='px-4 uppercase text-3xl 2xl:text-5xl font-bold text-[#FCFCFC] text-center'>
          {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.sectionHeading : `Our Partner Brands`}
        </div>
        <div className='xs:w-full lg:w-[40rem] xl:w-[48rem] 2xl:w-[52rem] rounded-md h-[2px] bg-pac-orange' />
        {data?.homepageSections?.nodes[0] ? data?.homepageSections?.nodes[0]?.contentLine1.map((c, i) => (
          <div key={i} className='text-sm xs:w-full xs:px-4 lg:px-0 2xl:text-lg max-w-[700px] 2xl:max-w-[800px] text-center text-[#EFEFEF] mb-2'>
            {parse(c)}
          </div>
        )) : <div className='text-sm xs:w-full xs:px-4 lg:px-0 2xl:text-lg max-w-[700px] 2xl:max-w-[800px] text-center text-[#EFEFEF] mb-8'>
          Currently, PROS-APAC  is partnered with a total of 35 exclusive dental Brands from both local and international level of products, all of which are of the best quality for our dentists.
        </div>}
      </div>
      <BrandSliderF brands={brands} />
    </div>
  )
}