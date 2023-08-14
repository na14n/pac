"use client";
import React, { useState } from "react";

export default function History() {
  const years = [
    {
      year: "1996",
      title: "YEAR FOUNDED",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://pbs.twimg.com/media/F3cB7igXYAA6do1?format=jpg&name=medium",
      alttext: "Hakdog",
    },
    {
      year: "1997-2006",
      title: "RAWR",
      description: " adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://pbs.twimg.com/media/F3cB7igXYAA6do1?format=jpg&name=medium",
      alttext: "Hakdog",
    },
    {
      year: "2007-2010",
      title: "HAKDOG",
      description: "Lorem ipsum dolor  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://pbs.twimg.com/media/F3cB7igXYAA6do1?format=jpg&name=medium",
      alttext: "Hakdog",
    },
    {
      year: "2011-2015",
      title: "BOMBASTIC SIDEYE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://pbs.twimg.com/media/F3cB7igXYAA6do1?format=jpg&name=medium",
      alttext: "Hakdog",
    },
    {
      year: "2016-2019",
      title: "BOOM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://pbs.twimg.com/media/F3cB7igXYAA6do1?format=jpg&name=medium",
      alttext: "Hakdog",
    },
    {
      year: "2020-Present",
      title: "AYEEEE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.",
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
        <hr className="w-1/4 border-2 border-pac-orange" />
      </section>
      <section className="flex flex-row mt-20 text-xl text-pac-orange gap-24 items-center justify-center">
        {years.map((item, index) => (
          <button
            key={index}
            className={` hover:text-pac-green focus:bg-pac-orange focus:text-white focus:font-bold focus:px-2 focus:py-1 focus:rounded-sm transition ease-in-out delay-100 ${
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
