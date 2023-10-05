'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import ProdGallerySlider from "../embla/prodGallerySlider"
import AddToBasket from "./addToBasket"
import { pTagRemover } from "@/lib/helpers";
import parse from "html-react-parser"


export default function ProdInfo(props) {

  const query = gql`query FetchProduct {
        product(id: "${props.id}") {
            id
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
            imageGallery {
              link
            }
            productLogo {
              link
            }
            productAwards {
              title
              sourceUrl
            }
        }
      }
    
    `


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


  return (
    <main className="w-full h-fit flex justify-between gap-4 pb-4 pt-6 lg:px-30 xl:px-48 2xl:px-64 min-[1920px]:px-80 bg-white ">
      <section className="lg:w-2/5 2xl:w-[600px] h-fit ">
        <ProdGallerySlider slides={Array.from(Array(data.product.imageGallery.length).keys())} images={data.product.imageGallery ? data.product.imageGallery : ``} />
      </section>
      <section className="max-w-[50ch] 2xl:max-w-[65ch] h-fit flex flex-col gap-4 2xl:gap-8">
        <h1 className="text-4xl 2xl:text-5xl font-bold text-[#121212] uppercase text-justify">{data.product.name ? data.product.name : ``}</h1>
        <div className="text-[#272727] text-justify text-sm 2xl:text-lg h-[150px]">
          {data.product.shortDescription ? parse(data.product.shortDescription) : ``}
        </div>
        <AddToBasket item={data.product} />
        <div className="bg-[#121212]/50 h-[1px] w-full" />
        <div className="w-fit h-fit flex flex-col gap-1">
          <h4 className="text-[#575757] font-semibold text-xs 2xl:text-sm uppercase">inclusions</h4>
          <div className="flex flex-wrap gap-2">
            {data.product.inclusions ? data.product.inclusions.map((inc, index) => (
              <p key={index} className="text-[#272727] text-sm h-fit capitalize 2xl:text-lg">{inc}</p>
            ))
              : ``}
          </div>
        </div>
        <div className="w-full h-fit flex gap-4 flex-wrap">
          <img src={data.product.productLogo ? data.product.productLogo.link : ''} className={`w-auto h-32 ${data.product.productLogo ? `` : `hidden`}`} />
          {data.product.productAwards.map((a, index) => (
            <img key={index} src={a.sourceUrl} className={`w-auto h-32 ${a.title === 'Empty' ? `hidden` : ``}`} />
          ))}
        </div>
      </section>
    </main>
  )
}