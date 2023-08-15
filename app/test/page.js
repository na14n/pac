import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`query GetBrand($search: String = "jeil") {
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

export default async function testPage() {

    const { data } = await getClient().query({
        query,
        context: {
            fetchOptions: {
                next: { revalidate: 30 },
            }
        }
    });

    // console.log(data);

    return <pre className="w-full h-screen flex items-center justify-center text-black">{JSON.stringify(data, null, 2)}</pre>;
};