import BannerF from "@/components/about/BannerF";
import Coolab from "@/components/about/Coolab";
import PACabout from "@/components/about/PACabout";
import History from "@/components/about/History";
import MVC from "@/components/about/MVC";
import Founder from "@/components/about/Founder";
import Image from "next/image";
import Facilities from "@/components/about/Facilities";

export default function Page() {
  return (
    <main className="w-full min-h-screen h-fit">
      
      <BannerF />
      <PACabout />
      <Coolab />
      <section className="relative -mt-10">
      <History />
      </section>
      <MVC />
      <Facilities />
    </main>
  );
}
