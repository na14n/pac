import { HeaderTrigger } from "@/components"
import PageWrapper from "@/components/pageWrapper";
import SalesAgentsTeamsSearchBar from "@/components/resources-pages/salesAgentsTeamsSearchbar";
import SalesForceAgentsList from "@/components/resources-pages/salesForceAgentsList"
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';

export default async function SalesAgentsTeams({ params, searchParams }) {

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
    let divisions = await GetDivisions();

    return (
        <PageWrapper>
            <main className="w-full h-fit min-h-screen">
                <HeaderTrigger>
                    <div className="relative w-full aspect-video lg:aspect-[16/3] flex flex-col items-center justify-end">
                        {params?.team === "luzon" ?
                            <div className={`w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#F0892B]/90 to-[#E66204]/90 z-0`} />
                            : params?.team === "visayas" ?
                                <div className={`w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#077232]/90 to-[#063013]/90 z-0`} />
                                : params?.team === "mindanao" ?
                                    <div className={`w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#3E3E3E]/90 to-[#121212]/90 z-0`} />
                                    :
                                    <div className={`w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#F0892B]/90 to-[#E66204]/90 z-0`} />
                        }
                        <h1 className="text-white text-3xl 2xl:text-5xl font-bold uppercase z-20 mb-16">{`${params.team} Sales Force`}</h1>
                    </div>
                </HeaderTrigger>
                <SalesAgentsTeamsSearchBar team={params?.team} divisions={divisions} queryDivision={searchParams?.division} querySearch={searchParams?.search} />
                <SalesForceAgentsList team={params?.team} divisions={divisions} division={searchParams?.division} search={searchParams?.search} />
            </main>
        </PageWrapper>
    )
}