import React from "react";
import Image from "next/image";

export default function Coolab() {
  return (
    <div className="flex flex-row -mt-10">
      <div className="bg-pac-orange w-[40%] h-[90vh] p-10 pt-16 z-10 drop-shadow-2xl">
        <section className="w-[90%] text-white">
          <p className="text-5xl font-bold indent-5 pb-3">COOLAB</p>
          <hr className="border-2 w-full" />
          <div className="text-sm indent-3 w-full text-justify">
            <p className="py-5">
              COOLAB, the latest brainchild of PROS-APAC, is a groundbreaking
              platform designed to propel teams toward their goals while
              fostering a culture of innovation and collaboration.
            </p>
            <p className="pb-5">
              Embracing the core tenets of the Startup Mindset, COOLAB empowers
              team members to think beyond conventional boundaries, encouraging
              collaboration, rapid growth, purpose-driven endeavors, and
              risk-taking.
            </p>
            <p className="">
              By blending existing processes with innovative practices, COOLAB
              creates an environment where efficiency, agility, and creativity
              thrive. This platform is set to revolutionize the way teams
              collaborate, inspire cross-functional synergy, and catalyze the
              birth of novel teams, channels, and products.
            </p>
          </div>
        </section>
      </div>
      <div className="w-[70%] h-[80vh] relative mt-8 z-20">
        <Image
          src="https://picsum.photos/2200/1604"
          alt="Coolab Picture"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
