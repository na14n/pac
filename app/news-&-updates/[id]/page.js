import { HeaderTrigger } from "@/components"
import NewsPageHeader from "@/components/news-and-updates/newsPageHeader"
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';


let pageData

export async function generateMetadata({ params }, parent) {
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
        });
        pageData = data
    } catch (error) {
        console.error('Error occurred:', error);
        pageData = []
    }

    return{
        title: pageData?.newsAndUpdate?.name,
        openGraph: {
            images: [pageData?.newsAndUpdate?.mediaLine1[0].sourceUrl]
        }
    }

}

export default async function NewsPage({ params }) {
    return (
        <main className="w-full min-h-screen h-fit bg-[#EFEFEF] overflow-hidden">
            <HeaderTrigger>
                <section className="h-fit w-full pt-24 bg-[#153f00]" />
            </HeaderTrigger>
            <NewsPageHeader id={params?.id} />
        </main>
    )
}