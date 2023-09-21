'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import ProdGallerySlider from "../embla/prodGallerySlider"
import AddToBasket from "./addToBasket"


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
            bestSelling
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
    <main className="w-full h-fit flex justify-between gap-12 pb-12 pt-6 lg:px-24 xl:px-40 2xl:px-56">
      <section className="lg:w-2/5 2xl:w-[600px] h-fit ">
        <ProdGallerySlider slides={Array.from(Array(data.product.imageGallery.length).keys())} images={data.product.imageGallery ? data.product.imageGallery : ``} />
      </section>
      <section className="w-[600px] 2xl:w-[800px] h-fit flex flex-col gap-4 2xl:gap-8 ">
        <h1 className="text-4xl 2xl:text-5xl font-bold text-[#121212] uppercase ">{data.product.name ? data.product.name : ``}</h1>
        <p className="text-[#272727] text-sm 2xl:text-lg h-[150px]">
          {data.product.shortDescription ? data.product.shortDescription : ``}
        </p>
        <AddToBasket item={data.product} />
        <div className="bg-[#121212]/50 h-[1px] w-full" />
        <div className="w-fit h-fit flex flex-col gap-1">
          <h4 className="text-[#575757] font-semibold text-xs 2xl:text-sm uppercase">inclusions</h4>
          <p className="text-[#272727] text-sm h-fit capitalize 2xl:text-lg">{data.product.inclusions ? data.product.inclusions : ``}</p>
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