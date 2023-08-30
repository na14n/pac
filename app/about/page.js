import BannerF from "@/components/about/BannerF";
import Coolab from "@/components/about/Coolab";
import Founder from "@/components/about/Founder";
import MVC from "@/components/about/MVC";
import PACabout from "@/components/about/PACabout";
import History from "@/components/about/History";
import React from "react";
import Facilities from "@/components/about/Facilities";
import SalesTeam from "@/components/about/SalesTeam";

export default function page() {
  return (
    <div>
      <div className="w-full lg:h-[100vh] max-h-fit">
        <BannerF />
      </div>
      

      <div className="w-full lg:h-[110vh] max-h-fit">
        <PACabout />
        <div className="flex justify-end items-end h-screen -mb-10">
          <MVC />
        </div>
      </div>


      <div className="w-full lg:h-[140vh] max-h-fit bg-pac-charcoal pt-2 pl-16">
        <Founder />
      </div>


      <div className="w-full lg:h-[230vh] max-h-fit bg-[url('https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/365538850_328863899572736_1827216221858357976_n.png?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFe60aj2IfZ_XJOPMIPFfZk2sUWOrBem1_axRY6sF6bXwHLyIQB3g0yta9sVOdJgLTvXvbsj9bccbTrEXfbGQ4j&_nc_ohc=R51NyNu8G58AX_BvigF&_nc_oc=AQkYSXBXdqCorfXslGYu8tTMGQdSTnKxiX7XG2ncM4SJoVTyWSbfZrlWR23CdjzgUog&_nc_ht=scontent.fmnl3-2.fna&oh=03_AdTl_odYGhsgh5i4xrHDVUR8WFP-ulMHlKfzF2YK7DHj7w&oe=65014347')] bg-cover">
        <section>
        <Coolab />
        </section>
        <section className="pt-96 mt-52">
        <History />
        </section>
      </div>

      
      <div className="w-full lg:h-[100vh] max-h-fit bg-[#F1F1F1]">
        <Facilities />
      </div>


      <div className="w-full lg:h-[100vh] max-h-fit bg-[#F1F1F1]">
        <SalesTeam />
      </div>
    </div>
  );
}
