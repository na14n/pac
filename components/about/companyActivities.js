'use client';

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { sortByAttribute } from "@/lib/helpers";
import Image from "next/image";
import Button from "../button";
import parse from 'html-react-parser'

const query = gql`
query fetchEventsLandingPage {
    events(where: {title: "landing-page"}) {
      nodes {
        name
        eventName
        shortDescription
        extraContentLine1
        extraContentLine2
        mediaLine1{
          title
          sourceUrl
          altText
        }
      }
    }
  }
`

export default function CompanyActivitiesBanners() {
    return(
        <section className="w-full h-fit flex flex-col px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-16">
            <div className="px-8 xl:px-16 2xl:px-32 w-full py-8 bg-[#FCFCFC]"></div>
        </section>    
    )
}