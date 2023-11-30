import { HeaderTrigger, Hero, CatalogueCard } from "@/components";
import PageWrapper from "@/components/pageWrapper";

export default async function BrandCatalogues() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full h-[33vh]">
          <HeaderTrigger>
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <div className="absolute z-10 t-0 bg-gradient-to-b from-[#133701] to-[#107200] w-full h-full"></div>
              <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16 uppercase">
                <h1>Brand Catalogues</h1>
              </div>
            </div>
          </HeaderTrigger>
        </div>
        <div className="w-full lg:min-h-[100vh] max-h-fit  bg-[#F1F1F1] lg:px-32 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 sm:px-4 py-8">
          <CatalogueCard />
        </div>
      </div>
    </PageWrapper>
  );
}
