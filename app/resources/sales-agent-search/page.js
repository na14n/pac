import { HeaderTrigger, Hero, SalesAgentSearchBar, SalesAgentCard } from "@/components"
import PageWrapper from "@/components/pageWrapper";
import SalesTeamsCards from "@/components/resources-pages/salesTeamsCards";
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';
import Image from "next/image";

export const metadata = {
    title: 'PROS-APAC Sales Agents',
    description: 'All Sales Agents of PROS-APAC Corporation.',
    keywords: ['PROS-APAC', 'PROS-APAC Sales Agents', 'Philippines', 'Sales Agent', 'Dental Products Sales', 'Dental Products Sales Agent']
}

export default async function SalesAgentSearch({ searchParams }) {

    async function GetDivisions() {
        try {
            const result = await client.query({
                query: gql`
                    query FetchProducts {
                        productDepartments {
                            nodes {
                              name
                            }
                          }
                    }
              `,
                fetchPolicy: 'no-cache',
                context: {
                    fetchOptions: {
                        next: { revalidate: 5 },
                    }
                }
            });
            return result.data.productDepartments.nodes;
        } catch (error) {
            console.error('Error occurred:', error);
            return [];
        }
    }

    async function GetDms() {
        try {
            const result = await client.query({
                query: gql`
                    query FetchDMs {
                        salesAgents(where: {search: "district manager"}) {
                        nodes {
                            name
                            mobileNumber
                            email
                            position
                            specificLocations
                            image{
                                sourceUrl
                            }
                            division
                        }
                        }
                    }
              `,
                fetchPolicy: 'no-cache',
                context: {
                    fetchOptions: {
                        next: { revalidate: 5 },
                    }
                }
            });
            return result.data.salesAgents.nodes;
        } catch (error) {
            console.error('Error occurred:', error);
            return [];
        }
    }

    async function QuerySalesAgents() {
        try {
            const result = await client.query({
                query: gql`
                query QuerySalesAgents($search: String) {
                    salesAgents(where: {search: $search}) {
                      nodes {
                        name
                        mobileNumber
                        email
                        specificLocations
                        position
                        image {
                          sourceUrl
                        }
                        division
                      }
                    }
                  }
              `,
                fetchPolicy: 'no-cache',
                variables: {
                    "search": `${searchParams.location ? searchParams.location : ""} ${searchParams.division ? searchParams.division : ""}`,
                },
                context: {
                    fetchOptions: {
                        next: { revalidate: 5 },
                    },
                }
            });
            return result.data.salesAgents.nodes;
        } catch (error) {
            console.error('Error occurred:', error);
            return [];
        }

    }

    let divisions = await GetDivisions();

    let salesAgents = await QuerySalesAgents()

    let defaultResult = await GetDms();

    return (
        <PageWrapper>
            <div className="w-full flex flex-col items-center justify-center">
                <div className='w-full h-[33vh]'>
                    <HeaderTrigger>
                        {/* <Hero heroType={'orange'} title={'Search a Sales Agent'} mediaUrl="https://web.prosapac.com/wp-content/uploads/2024/01/Search-a-sales-agent-Banner.jpg" /> */}
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-0">
                            <div className="absolute z-0 t-0 w-full h-full">
                                <Image fill src="https://web.prosapac.com/wp-content/uploads/2024/01/Search-a-sales-agent-Banner.jpg" className='object-cover object-center' alt="dental-website-banner" />
                            </div>
                            <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16 uppercase">
                                Search a Sales Agent
                            </div>
                        </div>
                    </HeaderTrigger>
                </div>
                <div className='w-full lg:min-h-[67vh] max-h-fit  bg-[#F1F1F1]'>
                    <SalesAgentSearchBar divisions={divisions} />
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 min-[1920px]:grid-cols-5 gap-y-8 pb-16 px-4 md:px-8 lg:px-16 2xl:px-48 place-items-center gap-4">
                        {(salesAgents?.length > 0 && searchParams.division || searchParams.location) ? (
                            salesAgents?.map((s, index) => (
                                <SalesAgentCard key={index} i={s} />
                            ))
                        ) : (defaultResult?.length > 0) ? (
                            defaultResult?.map((s, index) => (
                                <SalesAgentCard key={index} i={s} />
                            ))
                        ) : (
                            <h1>No Sales Agent Found.</h1>
                        )}
                    </div>
                    <div className="w-full h-fit justify-items-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-16 px-4 md:px-8 lg:px-16 2xl:px-48 place-items-center gap-4">
                        <SalesTeamsCards />
                    </div>

                </div>
            </div>
        </PageWrapper>
    )
}

