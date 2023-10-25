import { HeaderTrigger } from "@/components"
import NewsPageHeader from "@/components/news-and-updates/newsPageHeader"
import PageWrapper from "@/components/pageWrapper";
import client from '@/lib/apollo';
import { partString } from "@/lib/helpers";
import { gql } from 'graphql-tag';


let pageData

export async function generateMetadata({ params }) {
    try {
        const { data } = await client.query({
            query: gql`
                    query fetchNewsHeader {
                        newsAndUpdate(id: "${params?.id}=") {
                        name
                        mediaLine1 {
                            title
                            sourceUrl
                        }
                        }
                    }
          `,
            fetchPolicy: 'no-cache',
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
        title: pageData?.newsAndUpdate?.name,
        keywords: pageData ? partString(pageData?.newsAndUpdate.name) : "prosapac",
        openGraph: {
            images: [pageData?.newsAndUpdate?.mediaLine1[0].sourceUrl]
        },
    }

}

export default async function NewsPage({ params }) {
    return (
        <PageWrapper>
            <main className="w-full min-h-screen h-fit bg-[#EFEFEF] overflow-hidden">
                <HeaderTrigger>
                    <section className="h-fit w-full pt-24 bg-[#153f00]" />
                </HeaderTrigger>
                <NewsPageHeader id={params?.id} />
            </main>
        </PageWrapper>
    )
}