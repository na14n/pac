'use client';

export const dynamic = 'force-dynamic'

import { sortByAttribute } from "@/lib/helpers";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
    query GetSiteMap {
        aboutContents(where: {name: "sitemap"}) {
        nodes {
                sectionTitle
                sectionHeading
                sectionSubheading
                textLine1
                textLine2
            }
        }
    }
`

const queryBrands = gql`
    query FetchBrands {
        brands (first: 999) {
            nodes {
              name
              slideNumber
            }
          }
    }
`

const queryCat = gql`
query FetchCategories{
    productCategories(first: 999){
      nodes{
        name
      }
    }
  }
`

export default function SitemapContent() {

    function sorter(inputArray, string) {

        const array = []

        inputArray.forEach(item => {
            if (item.startsWith(string)) {
                array.push(item.replace(string, ""));
            }
        });

        return array
    }


    const { data } = useSuspenseQuery(query,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        });

    const brandsSnapshot = useSuspenseQuery(queryBrands,
        {
            context: {
                fetchOptions: {
                    next: { revalidate: 60 },
                },
            },
        })

    const categoriesSnapshot = useSuspenseQuery(queryCat,
        {
            context: {
                fetchOptions: {
                    next: {revalidate: 60},
                },
            },
        })

    const brands = sortByAttribute(brandsSnapshot?.data?.brands?.nodes, 'slideNumber')

    console.log("BRANDS: ", brands);

    const pages = sorter(data?.aboutContents?.nodes[0]?.textLine1, "pages/")
    const resources = sorter(data?.aboutContents?.nodes[0]?.textLine1, "resources/")
    const pagesLinks = sorter(data?.aboutContents?.nodes[0]?.textLine2, "pages/")
    const resourcesLinks = sorter(data?.aboutContents?.nodes[0]?.textLine2, "resources/")

    console.log("PAGES: ", pages);
    console.log("RESOURCES: ", resources);
    console.log("PAGES LINKS: ", pagesLinks);
    console.log("RESOURCES LINKS: ", resourcesLinks);

    return (
        <section className="flex flex-col gap-8 py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
            <div className="w-full h-fit flex flex-col items-start gap-4">
                <h1 className="font-bold text-black text-3xl">{data?.aboutContents?.nodes[0]?.sectionSubheading[0]}</h1>
                <div className="w-fit ml-8 grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4 lg:gap-x-8 xl:gap-x-16 2xl:gap-x-32">
                    {pages ? pages.map((p, i) => (
                        <a href={pagesLinks[i]} className="max-w-[192px] hover:text-pac-orange hover:underline">{p}</a>
                    )) : <></>}
                </div>
            </div>
            <div className="w-full h-fit flex flex-col items-start gap-4">
                <h1 className="font-bold text-black text-3xl">{data?.aboutContents?.nodes[0]?.sectionSubheading[1]}</h1>
                <div className="w-fit ml-8 grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4 lg:gap-x-8 xl:gap-x-16 2xl:gap-x-32">
                    {brands ? brands.map((r, i) => (
                        <a href={`/brands/${r.name}`} className="max-w-[300px] hover:text-pac-orange hover:underline">{r.name}</a>
                    )) : <></>}
                </div>
            </div>
            <div className="w-full h-fit flex flex-col items-start gap-4">
                <h1 className="font-bold text-black text-3xl">{data?.aboutContents?.nodes[0]?.sectionSubheading[2]}</h1>
                <div className="w-fit ml-8 grid grid-cols-1 md:grid-cols-4 gap-y-4 gap-x-4 lg:gap-x-8 xl:gap-x-16 2xl:gap-x-32">
                    {categoriesSnapshot ? categoriesSnapshot?.data?.productCategories?.nodes.map((r, i) => (
                        <a href={`/categories/${r.name}`} className="max-w-[300px] hover:text-pac-orange hover:underline">{r.name}</a>
                    )) : <></>}
                </div>
            </div>
            <div className="w-full h-fit flex flex-col items-start gap-4">
                <h1 className="font-bold text-black text-3xl">{data?.aboutContents?.nodes[0]?.sectionSubheading[3]}</h1>
                <div className="w-fit ml-8 grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4 lg:gap-x-8 xl:gap-x-16 2xl:gap-x-32">
                    {resources ? resources.map((r, i) => (
                        <a href={resourcesLinks[i]} className="max-w-[300px] hover:text-pac-orange hover:underline">{r}</a>
                    )) : <></>}
                </div>
            </div>

            {/* <pre>
                {JSON.stringify(data, null, 2)}
            </pre> */}
        </section>
    )
}