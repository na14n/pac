'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Link from "next/link"
import parse from "html-react-parser"
import CsrSlider from "../embla/csrSlider";
import { formatWordPressDate, idFormatter } from "@/lib/helpers";
import BlogCard from "./blogCard";
import RecommendedProductCard from "../products/recProductCard";

const query = gql`query fetchBlog($id: ID!) {
    blog(id: $id) {
      id
      name
      mediaLine1 {
        title
        sourceUrl
      }
      uploadDate
      blogContents
      relatedBlog {
        nodes {
          id
          name
          uploadDate
          shortDescription
          mediaLine1 {
            title
            sourceUrl
          }
        }
      }
      relatedProduct {
        nodes {
          id
          name
          bestSelling
          cardImage {
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
          brand {
            node {
              name
            }
          }
        }
      }
    }
  }
`

export default function BlogsPageContent({ params }) {


    const { data, } = useSuspenseQuery(
        query,
        {
            variables: {
                id: `${params.id}=`
            },
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            }
        }
    );

    return (
        <section className="flex flex-col w-full h-fit gap-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
            {/* Breadcrumbs */}
            <div className="mt-24 w-full h-fit flex gap-2 mb-8">
                <Link href={`/blogs`} className="font-bold hover:underline text-[#EFEFEF] hover:text-white" >Blogs</Link>
                <p className="text-[#FCFCFC]">&gt;</p>
                <span className="text-[#FCFCFC] font-semibold">{data?.blog?.name}</span>
            </div>
            {/* Page Contents */}
            <div className="w-full h-fit bg-nav-green rounded-sm shadow-md flex flex-col items-center lg:flex-row gap-4">
                <div className="md:w-2/5 aspect-video shrink-0">
                    <CsrSlider media={data ? data?.blog?.mediaLine1 : []} />
                </div>
                <div className="w-full h-fit flex-col gap-2">
                    <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
                        {data?.blog?.name}
                    </h1>
                    <h5 className="text-[#EFEFEF] text-sm font-semibold">
                        {formatWordPressDate(data?.blog?.uploadDate)}
                    </h5>
                </div>
            </div>
            <div className="w-full my-12 flex flex-col items-center gap-6">
                {data?.blog?.blogContents?.map((b, i) => (
                    <div key={i} className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 2xl:text-lg">
                        {parse(b)}
                    </div>
                ))}
            </div>
            <div className="w-full h-fit flex flex-col gap-4">
                <div className="w-fit py-6 flex flex-col gap-1 items-center ">
                    <h3 className="mx-3 text-xl text-[#121212] uppercase font-semibold">Related Blogs</h3>
                    <span className="w-full h-[4px] bg-pac-orange rounded-md" />
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {data ? data?.blog?.relatedBlog?.nodes?.map((b, i) => (
                        <BlogCard
                            key={i}
                            name={b.name}
                            id={b.id}
                            media={b.mediaLine1}
                            text={b.shortDescription}
                            date={b.uploadDate}
                        />
                    )) : ``}
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-8 mb-16">
                <div className="w-fit py-6 flex flex-col gap-1 items-center ">
                    <h3 className="mx-3 text-xl text-[#121212] uppercase font-semibold">Related Products</h3>
                    <span className="w-full h-[4px] bg-pac-orange rounded-md" />
                </div>
                <div className=" w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 min-[1080px]:grid-cols-6 gap-4">
                    {data ? data?.blog?.relatedProduct?.nodes?.map((p, i) => (
                        <RecommendedProductCard
                            key={i}
                            name={p.name}
                            brand={p.brand.node.name}
                            best={p.bestSelling}
                            category={p.itemCategories.nodes}
                            media={p.cardImage.sourceUrl}
                            slug={idFormatter(p.id)}
                        />
                    )) : ``}
                </div>
            </div>
        </section>
    )
}