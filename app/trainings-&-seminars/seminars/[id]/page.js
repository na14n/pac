import { HeaderTrigger } from "@/components";
import SeminarContents from "@/components/trainings-&-seminars/seminars/seminarContents";
import SeminarHero from "@/components/trainings-&-seminars/seminars/seminarHero";
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';


let pageData

export async function generateMetadata({ params }) {
    try {
        const { data } = await client.query({
            query: gql`
            query fetchSeminar($id: ID!) {
                seminar(id: $id) {
                  eventName
                  location
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
        title: pageData?.seminar?.eventName,
        keywords: pageData ? pageData?.seminar?.tags : "prosapac",
        openGraph: {
            images: [pageData?.seminar?.eventBanner?.sourceUrl]
        },
    }
}

export default function Page({ params }) {
    return (
        <main className="w-full min-h-screen h-fit">
            <HeaderTrigger>
                <SeminarHero id={params.id} />
            </HeaderTrigger>
            <SeminarContents id={params.id} />
        </main>
    )
}