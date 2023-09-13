'use client';

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { sortByAttribute } from "@/lib/helpers";
import Image from "next/image";
import Button from "../button";
import parse from 'html-react-parser'
import CompanyActivitiesSlider from "../embla/companyActivitiesSlider";

const query = gql`
query fetchCompanyActivitiesPage {
    aboutContents(where: {title: "company-activities"}) {
      nodes {
        sectionTitle
        sectionHeading
        sectionSubheading
        contentLine1
        contentLine2
        mediaLine2{
          sourceUrl
          title
          altText
        }
      }
    }
  }
`

export default function CompanyActivitiesBanners() {

  const { data } = useSuspenseQuery(query,
    {
      context: {
        fetchOptions: {
          next: { revalidate: 60 },
        },
      },
    })

  const assets = sortByAttribute(data?.aboutContents?.nodes[0]?.mediaLine2, 'title')

  return (
    <section className="w-full h-fit flex flex-col px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-16">
      {data ? data?.aboutContents?.nodes[0]?.sectionSubheading.map((s, i) => (
        <div key={i} className="flex w-full bg-[#FCFCFC]">
          <div className="w-2/5 self-stretch p-8 flex flex-col gap-12">
            <h1 className="text-3xl font-bold text-[#121212]">{s ? s : ``}</h1>
            <div className="w-12 h-[2px] bg-[#373737] rounded-full" />
            <p className="text-[#272727] text-justify">{data ? data?.aboutContents?.nodes[0]?.contentLine1[i] : ``}</p>
          </div>
          <div className={`w-3/5 aspect-[3/2] flex justify-center items-center relative  ${i % 2 === 0 ? `` : `order-first`}`}>
            {/* <Image fill={true} src={assets.filter((item) => item.title.includes(`${data?.aboutContents?.nodes[0]?.contentLine2[i]}`))[2].sourceUrl} className="object-contain object-center" /> */}
            <CompanyActivitiesSlider media={assets.filter((item) => item.title.includes(`${data?.aboutContents?.nodes[0]?.contentLine2[i]}`))} index={i} />
          </div>
        </div>
      )) : ``}
      <div className="w-full h-96 flex items-center justify-center bg-pac-green flex-col gap-8">
        <h1 className="text-3xl font-bold text-[#FCFCFC]">CSR Page</h1>
        <p className="text-[#EFEFEF]">Discover how we're contributing to a better future through meaningful initiatives and community engagement.</p>
        <Button name={'Click Here'} link={`/about-us/csr`} type={1} />
      </div>
    </section>
  )
}