'use client'

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"

const query = gql`
    query FetchOrderGuideHeader {
        contactUsContents(where: {search: "order-banner"}) {
            nodes {
                title
                sectionHeading
            }
        }
    }
`

export default function OrderGuideHeader() {

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
        <div className="relative w-full aspect-video md:aspect-[16/5] flex items-center justify-center overflow-hidden z-0">
            <div className="absolute z-10 t-0 bg-gradient-to-b from-[#F0892B]/90 to-[#E66204]/90 w-full h-full"></div>
            {/* <div className="absolute z-0 t-0 w-full h-full">
                <Image width={2400} height={1600} src={mediaUrl ? mediaUrl : 'https://picsum.photos/1920/1080'} className='object-cover' alt="dental-website-banner" />
            </div> */}
            <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16 uppercase">
                {data?.contactUsContents?.nodes[0] ? data?.contactUsContents?.nodes[0]?.sectionHeading : 'How to Order'}
            </div>
        </div>
    )
}