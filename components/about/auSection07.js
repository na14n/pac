'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { sortByAttribute } from "@/lib/helpers";
import Image from "next/image";
import AboutS07a from "./auSection07a";
import AboutS07b from "./auSection07b";
import AboutS07c from "./auSection07c";

export default function AboutS07() {
    return (
        <section className="flex flex-col w-full h-fit px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
            <AboutS07a />
            <AboutS07b />
            <AboutS07c />
        </section>
    )
}