'use client';

export const dynamic = 'force-dynamic'

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { sortByAttribute } from "@/lib/helpers";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";

export default function AboutS07a() {
    return (
        <section className="flex flex-col xl:flex-row gap-8 w-full h-fit">
            <div>
                <span>
                    <h3></h3>
                    <h1></h1>
                    <div />
                </span>
                <h2></h2>
                <span>
                    <Icon src="" />
                    <p></p>
                </span>
            </div>
            <div>
                <Image src={''} fill={true} />
            </div>
        </section>
    )
}