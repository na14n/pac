'use client';

export const dynamic = 'force-dynamic'


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
    <section className="w-full h-fit flex flex-col px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-16 gap-8 lg:gap-0 ">
      {data ? data?.aboutContents?.nodes[0]?.sectionSubheading.map((s, i) => (
        <div key={i} className="flex flex-col lg:flex-row w-full bg-[#FCFCFC] shadow-md lg:shadow-none">
          <div className="w-full lg:w-2/5 self-stretch p-4 xl:p-8 flex flex-col gap-4 xl:gap-12">
            <h1 className="text-3xl font-bold text-[#121212]">{s ? s : ``}</h1>
            <div className="w-12 h-[2px] bg-[#373737] rounded-full" />
            <p className="text-[#272727] text-justify">{data ? data?.aboutContents?.nodes[0]?.contentLine1[i] : ``}</p>
          </div>
          <div className={`w-full lg:w-3/5 aspect-[3/2] flex justify-center items-center relative  ${i % 2 === 0 ? `` : `lg:order-first`}`}>
            <CompanyActivitiesSlider media={assets.filter((item) => item.title.includes(`${data?.aboutContents?.nodes[0]?.contentLine2[i]}`))} index={i} />
          </div>
        </div>
      )) : ``}
      <div className="w-full h-96 flex items-center justify-center bg-pac-green flex-col gap-8 shadow-md lg:shadow-none p-8">
        <h1 className="text-3xl font-bold text-[#FCFCFC]">
          {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionHeading[1] : ``}
        </h1>
        <p className="text-[#EFEFEF] text-center">
          {data?.aboutContents?.nodes[0] ? data?.aboutContents?.nodes[0]?.sectionHeading[2] : ``}
        </p>
        <Button name={'Click Here'} link={`/about-us/csr`} type={1} />
      </div>
    </section>
  )
}