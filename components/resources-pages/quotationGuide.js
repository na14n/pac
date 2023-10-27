'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import parse from "html-react-parser"

const query = gql`
    query FetchQuotationGuide {
        contactUsContents(where: {search: "quotation"}) {
            nodes {
                title
                sectionHeading
                sectionSubheading
                contentLine1
            }
        }
    }
`

const QuotationGUide = () => {

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

    const placeholder = [
        {
            title: 'Contact a Sales Agent',
            steps: [
                {
                    title: 'Step One',
                    description: 'Sales Agent Step One is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Two',
                    description: 'Sales Agent Step Two is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Three',
                    description: 'Sales Agent Step Three is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Four',
                    description: 'Sales Agent Step Four is lorem ipsum dolor amet.'
                },
            ],
        },
        {
            title: 'Customer Support',
            steps: [
                {
                    title: 'Step One',
                    description: 'Customer Support Step One is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Two',
                    description: 'Customer Support Step Two is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Three',
                    description: 'Customer Support Step Three is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Four',
                    description: 'Customer Support Step Four is lorem ipsum dolor amet.'
                },
            ],
        },
        {
            title: 'Facebook Messenger',
            steps: [
                {
                    title: 'Step One',
                    description: 'Facebook Messenger Step One is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Two',
                    description: 'Facebook Messenger Step Two is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Three',
                    description: 'Facebook Messenger Step Three is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Four',
                    description: 'Facebook Messenger Step Four is lorem ipsum dolor amet.'
                },
            ],
        },
        {
            title: 'Email',
            steps: [
                {
                    title: 'Step One',
                    description: 'Email Step One is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Two',
                    description: 'Email Step Two is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Three',
                    description: 'Email Step Three is lorem ipsum dolor amet.'
                },
                {
                    title: 'Step Four',
                    description: 'Email Step Four is lorem ipsum dolor amet.'
                },
            ],
        },
    ]

    return (
        <div className="w-full h-full max-h-fit flex flex-col justify-center 2xl:justify-start items-center gap-8 py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 2xl:py-32">
            <h1 className="w-fit h-fit text-3xl 2xl:text-5xl text-[#121212] font-bold uppercase text-center">
                {data?.contactUsContents?.nodes[0] ? data?.contactUsContents?.nodes[0]?.sectionHeading : 'Quotation Inquiry Guide'}
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-md justify-items-center align-items-center gap-y-16">
                {data?.contactUsContents?.nodes[0]?.sectionSubheading?.map((s, index) => (
                    <div key={index} className='w-full lg:max-w-[400px] 2xl:max-w-[500px] h-fit flex flex-col gap-2'>
                        <h1 className='flex items-center gap-2'>
                            <span className='bg-nav-orange w-6 h-6 flex justify-center items-center rounded-full text-[#FCFCFC] font-bold'>{index + 1}</span>
                            <span className='font-bold text-lg'>{s}</span>
                        </h1>
                        <span className='text-[#373737]'>
                            {parse(data?.contactUsContents?.nodes[0] ? data?.contactUsContents?.nodes[0]?.contentLine1[index] : `Step ${index + 1}`)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuotationGUide;