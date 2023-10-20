'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Link from "next/link"
import parse from "html-react-parser"
import CsrSlider from "../embla/csrSlider";

export default function BlogsPageContent({ params }) {

    const query = gql`query fetchBlog {
        blog(id: "${params.id}=") {
          id
          name
          mediaLine1 {
            title
            sourceUrl
          }
          blogContents
        }
      }
    `

    const { data, } = useSuspenseQuery(
        query,
        {
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
                <Link href={`/blogs`} className="font-bold hover:underline text-pac-orange hover:text-nav-orange" >Blogs</Link>
                <p className="text-white">&gt;</p>
                <span className="font-semibold text-white">{data?.blog?.name}</span>
            </div>
            {/* Page Contents */}
            <div className="w-full h-fit p-2 md:p-8 bg-white rounded-sm shadow-md flex flex-col lg:flex-row gap-4">
                <div className="md:w-2/5 aspect-video shrink-0">
                    <CsrSlider media={data ? data?.blog?.mediaLine1 : []} />
                </div>
                <div className="w-full h-fit">
                    <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                        {data?.blog?.name}
                    </h1>
                </div>
            </div>
            <div className="w-full my-12 flex flex-col items-center gap-6">
                {data?.blog?.blogContents?.map((b, i) => (
                    <div key={i} className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 2xl:text-lg">
                        {parse(b)}
                    </div>
                ))}
            </div>
        </section>
    )
}