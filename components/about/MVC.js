import React from "react";

const mission = [
  "To brighten the lives of our customers by providing education and offering reputable oral health products and services, all at reasonable prices and with the swiftest delivery.",

  "To inspire our dedicated and skilled team members, by being a premier player in oral health product distribution, and offering them a sustainable and fulfilling livelihood.",

  "To delight our stakeholders by embodying diversity within our company, promising a substantial return on their investments.",

  "Above all, to bring joy to society by fostering partnerships with dental practitioners, united in our pursuit to enhance the oral health of every Filipino.",
];

const missionList = mission.map((number) => {
  return <li className="pb-2">{number}</li>;
});

const CV = [
  {
    title: "INTEGRITY, HONESTY AND COMMITMENT",
    description:
      "We uphold the highest standards of integrity,     operating with unwavering honesty and deep commitment.",
  },
  {
    title: "EXCELLENT SERVICE",
    description:
      "Driven by competence, efficiency, and respect for people, we are goal-oriented and persevering, earning trust through our unwavering trustworthiness.",
  },
  {
    title: "SOCIAL RESPONSIBILITY",
    description:
      "Engaging with our community and prioritizing continuing education, we actively fulfill our responsibility to society.",
  },
  {
    title: "OWNER’S MENTALITY",
    description:
      "We embody an owner’s mindset, fostering a sense of ownership and accountability in all that we do.",
  },
];

export default function MVC() {
  return (
    <div className="flex flex-row">
      <div className=" bg-gradient-to-t to-[#FF9839] from-[#FF650F] from-[40%] text-white w-1/3 h-[90vh] px-6 py-10">
        <section className="px-4 pb-6">
          <p className="font-bold text-xl indent-5 pb-1">OUR VISION</p>
          <hr className=" w-full px-4 border-2 indent-3" />
        </section>
        <p className="text-md px-4 indent-5">
          We put the smile back on every Filipino.
        </p>
      </div>

      <div className=" bg-gradient-to-t to-[#4F9E59] from-[#103B33] from-[40%] text-white w-1/3 h-[90vh] px-6 py-10">
        <section className="px-4 pb-6">
          <p className="font-bold text-xl indent-5 pb-1">OUR MISSION</p>
          <hr className=" w-full px-4 border-2 indent-3" />
        </section>
        <p className="text-md px-4 indent-5 pb-2">
          Our mission is to create smiles at every turn.
        </p>
        <ul className=" text-md list-disc pl-8">{missionList}</ul>
      </div>

      <div className=" bg-gradient-to-t to-[#404040] from-[#1C1C1C] from-[40%] text-white w-1/3 h-[90vh] px-6 py-10">
        <section className="px-4 pb-6">
          <p className="font-bold text-xl indent-5 pb-1">OUR CORE VALUES</p>
          <hr className=" w-full px-4 border-2 indent-3" />
        </section>
        <section className="RAWR">
          {CV.map((CoreV, index) => (
            <div key={index}>
              <h2 className="text-md font-bold text-[#F37D28] pt-2">{CoreV.title}</h2>
              <p className="text-md indent-5 text-white pb-1">{CoreV.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
