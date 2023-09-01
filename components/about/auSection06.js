'use client';

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import parse from 'html-react-parser'

const query = gql`
    query GetAboutContentS05 {
        aboutContents(where: {name: "section-05"}) {
            nodes {
                    sectionTitle
                    sectionHeading
                    contentLine2
                    mediaLine1{
                        link
                    }
                }
            }
    }
`

export default function AboutS06(){
    return (
        <>
        </>
    )
}