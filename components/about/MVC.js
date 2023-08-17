import React from "react";

export default function MVC() {
  return (
    <section className="w-full h-[25vh] flex flex-row gap-4 items-center justify-center pt-24">
      <div className="w-[30vw] h-[32vh] flex flex-col justify-center items-center text-white bg-pac-orange p-4 drop-shadow-xl -skew-x-6">
        <p className="font-bold text-center text-xl">OUR MISSION</p>
        <hr className="border-white border-2 w-2/3" />
        <p className="text-justify indent-5 pt-4 text-xs">
        Our mission is to create smiles at every turn.

To brighten the lives of our customers by providing education and offering reputable oral health products and services, all at reasonable prices and with the swiftest delivery.

To inspire our dedicated and skilled team members, by being a premier player in oral health product distribution, and offering them a sustainable and fulfilling livelihood.

To delight our stakeholders by embodying diversity within our company, promising a substantial return on their investments.

Above all, to bring joy to society by fostering partnerships with dental practitioners, united in our pursuit to enhance the oral health of every Filipino.

        </p>
      </div>
      <div className="w-[30vw] h-[32vh] flex flex-col justify-center items-center text-pac-orange bg-white p-4 drop-shadow-xl border -skew-x-6">
        <p className="font-bold text-center text-xl">OUR VISION</p>
        <hr className="border-pac-orange border-2 w-2/3" />
        <p className="text-justify indent-5 pt-4 text-xs">
        We put the smile back on every Filipino.
        </p>
      </div>
      <div className="w-[30vw] h-[32vh] flex flex-col justify-center items-center text-white bg-pac-green p-4 drop-shadow-xl -skew-x-6">
        <p className="font-bold text-center text-xl">OUR CORE VALUES</p>
        <hr className="border-white border-2 w-2/3" />
        <p className="text-justify indent-5 pt-4 text-xs">
        Integrity, Honesty, and Commitment:
We uphold the highest standards of integrity, operating with unwavering honesty and deep commitment.
Excellent Service:
Driven by competence, efficiency, and respect for people, we are goal-oriented and persevering, earning trust through our unwavering trustworthiness.
Social Responsibility:
Engaging with our community and prioritizing continuing education, we actively fulfill our responsibility to society.
Owner’s Mentality:
We embody an owner’s mindset, fostering a sense of ownership and accountability in all that we do.

        </p>
      </div>
    </section>
  );
}
