'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const query = gql`
    query GetContactUsInformationS4 {
        contactUsContents(where: {name: "section-4"}) {
            nodes {
                title
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
        <div id='PACviberQR' className="w-full h-fit py-8 lg:h-64 max-h-fit bg-gradient-to-l from-[#8f5db7] via-[#8f5db7] to-[#59267c] flex max-md:flex-col justify-around items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 gap-8 lg:gap-16 2xl:gap-24">
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .45 }}
                className="flex flex-col gap-2"
            >
                <div className=" text-xl md:text-3xl 2xl:text-4xl font-bold text-[#FCFCFC] max-md:text-center">
                    {data?.contactUsContents?.nodes ? data?.contactUsContents?.nodes[0]?.sectionHeading[0] : ''}
                </div>
                <div className="text-sm xl:text-lg text-[#e2d4e7] max-md:text-center">
                    {data?.contactUsContents?.nodes ? data?.contactUsContents?.nodes[0]?.sectionSubheading[0] : ''}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .45 }}
                className="w-fit h-fit items-center justify-center p-2 bg-[#FFF] rounded-md shadow-md"
            >
                <div className="w-36 square relative ">
                    <Image src={data?.contactUsContents?.nodes ? data?.contactUsContents?.nodes[0]?.mediaLine1[0]?.link : ''} fill={true} className="object-contain object-center" />
                </div>
                <h5 className='uppercase text-center self-center text-lg font-bold text-[#8f5db7] mt-2 '>scan here</h5>
            </motion.div>
        </div>
    )
}

