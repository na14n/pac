import React from "react";
import FaciCard from "./FaciCard";
import Image from "next/image";

export default function Facilities() {
  return (
    <div>
      <section className=" text-center p-16 px-[20rem] items-center justify-center flex flex-col">
        <p className="font-bold text-3xl pb-2">OUR FACILITIES</p>
        <hr className="border-pac-orange w-1/2 border-2 mb-8" />
        <p className=" font-normal pb-10">
          PROS-APAC Corporation extends its role beyond mere dental product and
          equipment supply. The company prides itself on its outstanding dental
          facilities, thoughtfully crafted to deliver immersive education and
          training experiences.
        </p>
        <p>
          These state-of-the-art facilities serve as dynamic learning hubs where
          licensed dentists, who are also product managers, impart their
          extensive expertise. Equipped with leading-edge dental equipment,
          these spaces provide a conducive environment for dental practitioners
          to learn and master the proper usage of our distributed products.
        </p>
      </section>
      <section className=" flex flex-row items-center justify-center gap-10">
        <FaciCard
          title={"Implant & Dental Center"}
          alttext={"Implant & Dental Center"}
          description={"Very clean and shiny"}
          image={"https://picsum.photos/2200/1001"}
        />

        <FaciCard
          title={"Training Center"}
          alttext={"Implant & Dental Center"}
          description={"Very clean and shiny"}
          image={"https://picsum.photos/2030/1002"}
        />

        <FaciCard
          title={"Digital Center"}
          alttext={"Implant & Dental Center"}
          description={"Very clean and shiny"}
          image={"https://picsum.photos/2800/1003"}
        />
      </section>
      <section className=" w-full h-[50vh] relative -mt-40">
        <Image
          src="https://picsum.photos/2321/1600"
          alt="banner"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#4F9E59] to-[#103B33] from-[20%] opacity-60" />
      </section>
    </div>
  );
}
