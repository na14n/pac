'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Button from '../button';

const query = gql`
    query GetContactUsInformationS5 {
        contactUsContents(where: {name: "section-5"}) {
            nodes {
                title
                sectionHeading
                sectionSubheading
                textLine1
            }
        }
    }
    `


export default function Careersbanner() {

    const { data } = useSuspenseQuery(
        query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        }
    );

    return (
        <div className="w-full h-fit lg:min-h-64 bg-gradient-to-b from-[#ef6703] to-[#f9a03c] flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 gap-4 py-16">
            <div className=" text-xl md:text-3xl 2xl:text-4xl font-bold text-[#FFF] text-center">
                {data?.contactUsContents?.nodes ? data?.contactUsContents?.nodes[0]?.sectionHeading[0] : ''}
            </div>
            <div className="text-sm 2xl:text-lg md:max-w-[75ch] text-[#FCFCFC] text-center">
                {data?.contactUsContents?.nodes ? data?.contactUsContents?.nodes[0]?.sectionSubheading[0] : ''}
            </div>
            <Button type={1} color={"white-green"} name={data?.contactUsContents?.nodes ? data?.contactUsContents?.nodes[0]?.textLine1[0] : "See all Open Positions"} link={"/resources/careers"} />
        </div>
    )
}

