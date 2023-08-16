'use client';

export const dynamic = 'force-dynamic'

// import { getClient } from "@/lib/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";

const query = gql`query GetBrand($search: String = "american orthodontics") {
    brands(where: {search: $search}) {
      nodes {
        name
        description
        logo {
          link
        }
        itemCategories {
          nodes {
            name
          }
        }
      }
    }
  }`

const TestPage = () => {

  // const { data } = await getClient().query({
  //     query,
  //     context: {
  //         fetchOptions: {
  //             next: { revalidate: 30 },
  //         }
  //     }
  // });

  const { data } = useSuspenseQuery(
    query,
    {
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    }
  );

  // console.log(loading);

  return <pre className="w-full h-screen flex items-center justify-center text-black">
    {JSON.stringify(data, null, 2)}
  </pre>;
};

export default TestPage;