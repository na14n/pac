import { HeaderTrigger } from "@/components";
import PageWrapper from "@/components/pageWrapper";
import ConGrid from "@/components/trainings-&-seminars/conventions/conGrid";
import ConHero from "@/components/trainings-&-seminars/conventions/conHero";
import client from '@/lib/apollo';
import { partString } from "@/lib/helpers";
import { gql } from 'graphql-tag';

let pageData

export async function generateMetadata({ params }) {
    try {
        const { data } = await client.query({
            query: gql`
            query fetchCovention($id: ID!) {
                convention(id: $id) {
                  eventName
                  location
                  shortDescription
                  banner {
                    sourceUrl
                  }
                }
              }
          `,
            fetchPolicy: 'no-cache',
            variables: {
                "id": params.id
            },
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        });
        pageData = data
    } catch (error) {
        console.error('Error occurred:', error);
        pageData = []
    }

    return {
        title: pageData?.convention?.eventName,
        keywords: pageData ? partString(pageData?.convention.eventName) : "prosapac",
        openGraph: {
            images: [pageData?.convention?.banner?.sourceUrl]
        },
    }

}


export default function ConventionPage({ params }) {
    return (
        <PageWrapper>
            <main className="w-full min-h-screen h-fit">
                <HeaderTrigger>
                    <ConHero id={params.id} />
                </HeaderTrigger>
                <ConGrid id={params.id} />
            </main>
        </PageWrapper>
    )
}