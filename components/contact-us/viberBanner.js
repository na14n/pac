'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';
import Image from 'next/image';

const query = gql`
    query GetContactUsInformationS4 {
        contactUsInformations(where: {name: "section-4"}) {
            nodes {
                sectionTitle
                sectionHeading
                sectionSubheading
                mediaLine1{
                    link
                }
            }
        }
    }
    `


export default function ViberBanner() {

    const { data } = useSuspenseQuery(query);

    return (
        <div id='PACviberQR' className="w-full h-fit py-8 lg:h-64 max-h-fit bg-gradient-to-l from-[#8f5db7] via-[#8f5db7] to-[#59267c] flex max-md:flex-col justify-around items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 gap-8 lg:gap-16 2xl:gap-24">
            <div className="flex flex-col gap-2">
                <div className=" text-xl md:text-3xl 2xl:text-4xl font-bold text-[#FCFCFC] max-md:text-center">
                    {data?.contactUsInformations?.nodes ? data?.contactUsInformations?.nodes[0]?.sectionHeading[0] : ''}
                </div>
                <div className="text-sm xl:text-lg text-[#e2d4e7] max-md:text-center">
                    {data?.contactUsInformations?.nodes ? data?.contactUsInformations?.nodes[0]?.sectionSubheading[0] : ''}
                </div>
            </div>
            <div className="w-fit h-fit items-center justify-center">
                <div className="w-44 h-44 relative shadow-md">
                    <Image src={data?.contactUsInformations?.nodes ? data?.contactUsInformations?.nodes[0]?.mediaLine1[0]?.link : ''} fill={true} className="object-contain object-center rounded-md" />
                </div>
            </div>
        </div>
    )
}

