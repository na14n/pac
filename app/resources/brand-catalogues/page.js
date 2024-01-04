import { HeaderTrigger, Hero, CatalogueCard } from "@/components";
import PageWrapper from "@/components/pageWrapper";
import CatalogueList from "@/components/resources-pages/catalogueList";

export default async function BrandCatalogues() {
  return (
    <PageWrapper>
      <main className="w-full min-h-screen h-fit bg-[#EFEFEF] overflow-hidden">
        <section className="w-full h-[33vh]">
          <HeaderTrigger>
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <div className="absolute z-10 t-0 bg-gradient-to-b from-[#133701] to-[#107200] w-full h-full"></div>
              <div className="z-20 font-bold text-[#FCFCFC] text-4xl mt-16 uppercase">
                <h1>Brand Catalogues</h1>
              </div>
            </div>
          </HeaderTrigger>
        </section>
        <section>
          <CatalogueList />
        </section>
      </main>
    </PageWrapper>
  );
}
