import { ProdInfo, HeaderTrigger, Breadcrumbs, ProdContent } from '@/components';
import PageWrapper from '@/components/pageWrapper';
import client from '@/lib/apollo';
import { partString } from "@/lib/helpers";
import { gql } from 'graphql-tag';

let pageData

export async function generateMetadata({ params }) {
  // console.log(params.slug[0]);
  try {
    const { data } = await client.query({
      query: gql`
                  query productName {
                      product(id: "${params?.slug[0]}=") {
                      name
                      tags
                      imageGallery{
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
    title: pageData?.product?.name,
    // keywords: pageData ? partString(pageData?.product?.tags) : "prosapac",
    openGraph: {
      images: [pageData?.product?.imageGallery[0]?.sourceUrl]
    },
  }

}


export default async function Page({ params }) {

  return (
    <PageWrapper>
      <main className="w-full h-fit overflow-hidden bg-[#EFEFEF] flex flex-col items-center">
        <div className='w-full min-h-24 h-24 max-h-24'>
          <HeaderTrigger>
            <div className='w-full h-full bg-pac-green z-0' />
          </HeaderTrigger>
        </div>
        <Breadcrumbs id={params.slug} />
        <ProdInfo id={params.slug} />
        <ProdContent id={params.slug} />
      </main>
    </PageWrapper>
  )
} 