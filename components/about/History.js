"use client";
import React, { useState } from "react";

export default function History() {
  const years = [
    {
      year: "1996",
      title: "YEAR FOUNDED",
      description: "Mr. Renato S. Angeles, returning to the Philippines after residing in the United States, approached Rocky Mountain Orthodontics (RMO) to propose becoming their Philippine dealer. RMO agreed, leading to the birth of Pacific Rim Orthodontic Supplies (PROS).",
      description2: "PAC's inaugural office, situated at Rm. 201, Don Santiago Building, Taft Avenue in Manila, became the hub for early operations. The team comprised two sales representatives, an inventory clerk, and an accountant, forming the core of the company's initial steps into the dental domain.",
      image:
        "https://pbs.twimg.com/media/F3cB7igXYAA6do1?format=jpg&name=medium",
      alttext: "Hakdog",
    },
    {
      year: "1997",
      title: "FIRST BREAKTHROUGH",
      description: "In parallel, another sole proprietorship emerged as 'APAC Orthodontic Supplies' (APAC), under Mr. Angeles' leadership. GAC International became APAC's first principal, adding another prominent Orthodontic products supplier to the portfolio.",
      image:
        "https://pbs.twimg.com/media/F3cB7igXYAA6do1?format=jpg&name=medium",
      alttext: "Hakdog",
    },
    {
      year: "Early 200s",
      title: "ADDITIONAL BRANDS",
      description: "Mr. Angeles secures distribution rights for Bisco, a distinguished US-based manufacturer specializing in dental cement and adhesives, including orthodontic bonding cement and accessories. This strategic partnership significantly enriches PAC's Orthodontic product offerings, marking a pivotal milestone in the company's growth trajectory.",
      image:
        "https://pbs.twimg.com/media/F3cB7igXYAA6do1?format=jpg&name=medium",
      alttext: "Hakdog",
    },
    {
      year: "2007",
      title: "CONSISTENT PROGRESS",
      description: "PROS APAC Corporation was formed, consolidating the distribution of various dental products in the Philippines.",
      image:
        "https://pbs.twimg.com/media/F3cB7igXYAA6do1?format=jpg&name=medium",
      alttext: "Hakdog",
    },
    {
      year: "2023",
      title: "COOLAB",
      description: "PROS-APAC launched COOLAB, a dynamic and transformative platform that encapsulated its visionary approach. COOLAB embodied a 'Startup Mindset', emphasizing collaboration, innovation, rapid growth, and purpose-driven initiatives. This initiative elevated team performance, underscoring PROS-APAC's dedication to shaping the future of the industry.",
      image:
        "https://pbs.twimg.com/media/F3cB7igXYAA6do1?format=jpg&name=medium",
      alttext: "Hakdog",
    },
    {
      year: "2023-Present",
      title: "OJTeam Lol",
      description: "PROS-APAC Corporation has extended its reach from not just enriching the minds of aspiring dentists but also the youth by opening their doors to their first ever On-the-Job Training program whom which designed and developed this very website you are on!",
      description2: "-Gawa gawa lang HAHAHAHA wala content sa sinend eh",
      image:
        "https://pbs.twimg.com/media/F3cB7igXYAA6do1?format=jpg&name=medium",
      alttext: "Hakdog",
    },
  ];

  const [YearClick, YearSet] = useState(years[0]);

  return (
    <div className="relative flex flex-col mx-24 items-center">
      <section className="text-white text-5xl font-bold text-center items-center justify-center flex flex-col">
        <p className="pb-4">OUR STORY</p>
        <hr className="w-2/3 border-2 border-pac-orange" />
      </section>
      <section className="flex flex-row mt-20 text-xl text-pac-orange gap-24 items-center justify-center">
        {years.map((item, index) => (
          <button
            key={index}
            className={` hover:text-pac-green focus:bg-pac-orange focus:text-white focus:font-bold px-2 py-1 focus:rounded-sm transition ease-in-out delay-100 ${
              YearClick.year === item.year
                ? "bg-pac-orange text-white font-bold"
                : ""
            }`}
            onClick={() => YearSet(item)}
          >
            {item.year}
          </button>
        ))}
      </section>
      <section className="items-center justify-center flex mt-64 mx-10 flex-row gap-5 absolute">
  <div className="w-[75vw] h-[60vh] bg-pac-green rounded-3xl absolute z-0 ml-10 mt-10"></div>
  <div className="w-[75vw] h-[60vh] bg-white rounded-3xl flex flex-row p-12 relative z-1 px-24">
    <section className="felx flex-col w-1/2 mr-28">
      <p className="text-4xl font-bold pb-8 text-pac-green">{YearClick.title}</p>
      <p className="text-sm text-justify indent-8">{YearClick.description}</p>
      <p className="text-sm text-justify indent-8 pt-3">{YearClick.description2}</p>
    </section>
    <img
      className="items-end justify-end w-1/3 h-[100%] align-middle rounded-xl"
      src={YearClick.image}
      alt={YearClick.alttext}
    />
  </div>
</section>

    </div>
  );
}
