"use client"

import { useState } from "react"
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { idFormatter } from "@/lib/helpers";
import Image from "next/image";

function transformData(inputData) {
  const transformedArray = [];

  // Process products
  if (inputData.products && inputData.products.nodes) {
    inputData.products.nodes.forEach((product) => {
      transformedArray.push({
        id: product.id,
        title: product.name,
        thumbnail: product.cardImage.sourceUrl,
        type: 'products',
        link: `products/${idFormatter(product.id, true)}`
      });
    });
  }

  // Process newsAndUpdates
  if (inputData.newsAndUpdates && inputData.newsAndUpdates.nodes) {
    inputData.newsAndUpdates.nodes.forEach((news) => {
      const thumbnail =
        news.mediaLine1 && news.mediaLine1.length > 0
          ? news.mediaLine1[0].sourceUrl
          : '';
      transformedArray.push({
        id: news.id,
        title: news.name,
        thumbnail,
        type: 'news',
        link: `/news-&-updates/${idFormatter(news.id, true)}`
      });
    });
  }

  // Process seminars
  if (inputData.seminars && inputData.seminars.nodes) {
    inputData.seminars.nodes.forEach((seminar) => {
      transformedArray.push({
        id: seminar.id,
        title: seminar.title,
        thumbnail: seminar.eventBanner.sourceUrl,
        type: 'seminars',
        link: `/trainings-&-seminars/seminars/${idFormatter(seminar.id, true)}`
      });
    });
  }

  // Process workshops
  if (inputData.workshops && inputData.workshops.nodes) {
    inputData.workshops.nodes.forEach((workshop) => {
      transformedArray.push({
        id: workshop.id,
        title: workshop.title,
        thumbnail: workshop.eventBanner.sourceUrl,
        type: 'workshops',
        link: `/trainings-&-seminars/workshops/${idFormatter(workshop.id, true)}`
      });
    });
  }

  return transformedArray;
}

export default function SearchUI({search}){

        const query = gql`
        query Search($search: String) {
                products(first: 3, where: {search: $search}) {
                  nodes {
                    id
                    name
                    cardImage{
                      sourceUrl
                    }
                  }
                }
                newsAndUpdates(first: 3, where: {search: $search}) {
                  nodes {
                    id
                    name
                    mediaLine1{
                      sourceUrl
                    }
                  }
                }
                seminars(first: 3, where: {search: $search}) {
                  nodes {
                    id
                    title
                    eventBanner{
                      sourceUrl
                    }
                  }
                }
                workshops(first: 3, where: {search: $search}) {
                  nodes {
                    id
                    title
                    eventBanner{
                      sourceUrl
                    }
                  }
                }
              }
                `
        const { data, fetchMore } = useSuspenseQuery(
                query,
                        {
                            context: {
                                fetchOptions: {
                                    next: { revalidate: 60 },
                                },
                            },
                            variables: {
                              search: search
                            }
                        }
        )

        return (
                <main className="flex flex-col w-full lg:w-3/5 h-fit gap-4">
                        {/* <pre>{JSON.stringify(typeof search)}</pre>
                        {data? <pre>
                          {JSON.stringify(transformData(data), null, 2)}
                        </pre> : <></>} */}
                        {search ? (data ? 
                          <section className=" w-full flex flex-col gap-4">
                            {transformData(data).map((data, index) => 
                            <a href={data.link} key={index} className="w-full aspect-[8/1] bg-[#F5F5F5] rounded-md shadow-sm flex items-center justify-center overflow-hidden">
                              <div className="h-full w-full relative">
                                <Image fill src={data.thumbnail} className="object-cover object-center" />
                              </div>
                              <div className="p-4 w-5/6 h-full shrink-0">
                                <h6 className="font-bold text-sm opacity-60 capitalize">{data.type}</h6>
                                <h6 className="font-bold text-xl opacity-95 capitalize">{data.title}</h6>
                              </div>
                            </a>)}
                          </section> : <>no data</>) : <></>}
                </main>
        )
}