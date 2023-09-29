import { HeaderTrigger, Hero, SalesAgentSearchBar, SalesAgentCard } from "@/components"
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';


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
                            productDepartments {
                            nodes {
                                name
                            }
                            }
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
                    query QuerySalesAgents {
                        productDepartments(where: {name: "${searchParams.division}"}) {
                            nodes {
                              salesAgents(where: {search: "${searchParams?.location ? searchParams?.location : ''}"}) {
                                nodes {
                                  name
                                  mobileNumber
                                  email
                                  specificLocations
                                  position
                                  image{
                                    sourceUrl
                                  }
                                  productDepartments {
                                    nodes {
                                      name
                                    }
                                  }
                                }
                              }
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
            return result.data.productDepartments.nodes[0].salesAgents.nodes;
        } catch (error) {
            console.error('Error occurred:', error);
            return [];
        }

    }

    let divisions = await GetDivisions();

    let salesAgents = searchParams.division ? await QuerySalesAgents() : []

    let defaultResult = await GetDms();

    // console.log("DIVISIONS: ", divisions);

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className='w-full h-[33vh]'>
                <HeaderTrigger>
                    <Hero heroType={'orange'} title={'Search a Sales Agent'} />
                </HeaderTrigger>
            </div>
            <div className='w-full lg:min-h-[67vh] max-h-fit  bg-[#F1F1F1]'>
                <SalesAgentSearchBar divisions={divisions} />
                <div className="grid grid-auto-fit-[16rem] gap-y-8 pb-16 lg:px-32 2xl:px-48 place-items-center">
                    {(salesAgents?.length > 0) ? (
                        salesAgents?.map((s, index) => (
                            <SalesAgentCard key={index} i={s} />
                        ))
                    ) : (defaultResult?.length > 0) ? (
                        defaultResult?.map((s, index) => (
                            <SalesAgentCard key={index} i={s} />
                        ))
                    ) : (
                        <h1>(show something when no results)</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

