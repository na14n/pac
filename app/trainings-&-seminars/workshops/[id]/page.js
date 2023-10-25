import { HeaderTrigger } from "@/components";
import PageWrapper from "@/components/pageWrapper";
import WorkshopContents from "@/components/trainings-&-seminars/trainings/trContents";
import TrHero from "@/components/trainings-&-seminars/trainings/trHero";
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';


let pageData

export async function generateMetadata({ params }) {
    try {
        const { data } = await client.query({
            query: gql`
            query fetchWorkshopMeta($id: ID!) {
                workshop(id: $id) {
                  eventName
                  tags
                  eventBanner {
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
        title: pageData?.workshop?.eventName,
        keywords: pageData ? pageData?.workshop?.tags : "prosapac",
        openGraph: {
            images: [pageData?.workshop?.eventBanner?.sourceUrl]
        },
    }
}

export default function Page({ params }) {
    return (
        <PageWrapper>
            <main className="w-full min-h-screen h-fit">
                <HeaderTrigger>
                    <TrHero id={params.id} />
                </HeaderTrigger>
                <WorkshopContents id={params.id} />
            </main>
        </PageWrapper>
    )
}