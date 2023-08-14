import {
  HeaderTrigger,
  Hero,
  AboutF,
  Strengths,
  Reach,
  BrandsF,
  TestimonialsF,
  EventsF,
  ProstigeF,
  LandingF,
} from "@/components";
import TestimonyPageCard from "@/components/TestimonyPageCard";
import BannerF from "@/components/about/BannerF";
import NewsUpdatesF from "@/components/news-updates/NewsUpdatesF";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="w-full h-[100vh]">
        <HeaderTrigger>
          <Hero
            heroType={"video"}
            title={"PHILIPPINE’S LEADING DENTAL DISTRIBUTOR"}
            title2={"AND PROVIDER OF CONTINUOUS EDUCATION"}
            subheading={
              "We are one of the leading distributors of quality dental materials, equipment, and accessories provided to dentists from Luzon, to Visayas, and Mindanao."
            }
            buttonName={"Browse our Products"}
          />
        </HeaderTrigger>
      </div>
      <div className="w-full max-h-fit lg:h-[50vh] bg-[#F1F1F1]">
        <AboutF />
      </div>
      <div className="w-full min-h-4 max-h-fit bg-[#F1F1F1]">
        <Strengths />
      </div>
      <div className="w-full xs:h-[50vh] lg:h-[80vh] 2xl:h-[60vh] max-h-fit bg-[#F1F1F1]">
        <Hero
          heroType={"centered"}
          title={"To know more about our Story"}
          buttonName={"Click Here"}
          buttonLink={"/#"}
        />
      </div>
      <div className="w-full max-h-fit bg-[#F1F1F1]">
        <Reach type={"green"} />
      </div>
      <div className="w-full min-h-min lg:h-[100vh] max-h-fit bg-[#F1F1F1]">
        <BrandsF />
      </div>
      <div className="w-full lg:h-[100vh] max-h-fit bg-[#F1F1F1]">
        <ProstigeF link={"https://picsum.photos/1280/720"} />
      </div>

      <div className="w-full lg:h-[100vh] max-h-fit bg-[#F1F1F1]">
      <a href="/TestimonyPage" className="text-7xl font-extrabold text-center"> RAWR </a>
      </div>

      <div className="w-full lg:h-[100vh] max-h-fit bg-[#F1F1F1]">
      <a href="/about">HAKDOG</a>
      </div>

      <div className="w-full max-h-fit lg:h-[100vh] 2xl:h-fit bg-[#F1F1F1]">
        <EventsF />
      </div>
      <div className="w-full min-h-fit max-h-fit bg-[#F1F1F1]">
        <Hero
          heroType={"centered3"}
          title={"want to order?"}
          subheading={
            "To know more about our purchase and delivery information"
          }
          buttonName={"Click Here"}
          buttonLink={"/resources/how-to-order"}
        />
      </div>
    </main>
  );
}
