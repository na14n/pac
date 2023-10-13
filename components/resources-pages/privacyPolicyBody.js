'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"

const query = gql`
    query FetchPrivacyPolicy {
        contactUsContents(where: {search: "privacy-policy"}) {
            nodes {
                contentLine1
                title
            }
        }
    }
`

export default function PrivacyPolicyBody() {

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
        <section className="h-fit w-full relative flex flex-col h1 h2 h3 p list px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-16 gap-1">
            {parse(data?.contactUsContents?.nodes[0]?.contentLine1[0])}
        </section>
    )
}