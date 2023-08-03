import { MyComponent, HeaderTrigger, Hero, LocationCard, MessageUsForm, ViberBanner } from "@/components"
import client from '@/lib/apollo';
import { gql } from 'graphql-tag';

export default async function ContactUs() {

  async function GetBranches() {
    try {
      const result = await client.query({
        query: gql`
            query GetBranchesInformation {
                branchesInformation {
                  nodes {
                    branchName
                    addressLine1
                    addressLine2
                    addressLine3
                    landlineNumber
                    mobileNumber
                    email
                    googleMapsSourceLink
                    officeHours
                    date
                  }
                }
              }
      `,
        fetchPolicy: 'no-cache',
      });
      return result.data.branchesInformation.nodes;
    } catch (error) {
      console.error('Error occurred:', error);
      return [];
    }
  }

  let data = await GetBranches();

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className='w-full h-[33vh]'>
        <HeaderTrigger>
          <Hero heroType={'orange'} title={'Contact Us'} />
        </HeaderTrigger>
      </div>
      <div className="w-full lg:min-h-[100vh] 2xl:min-h-fit max-h-fit lg:px-32">
        <LocationCard data={data} />
      </div>
      <div className="w-full lg:h-[63vh] ">
        <MessageUsForm />
      </div>
      <div className="w-full max-h-fit">
        <ViberBanner />
      </div>
    </main>
  )
}

