'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"

const query = gql`
    query FetchTandC {
        prostigePages(where: {search: "terms-&-conditions"}) {
            nodes {
                contentLine1
                title
            }
        }
    }
`

export default function TandCbody() {

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        },
    );

    return (
        <section className="h-fit w-full relative flex flex-col h1-s h2-s h3-s p-justified list px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-16 gap-1">
            {parse(data?.prostigePages?.nodes[0]?.contentLine1[0])}
        </section>
    )
}