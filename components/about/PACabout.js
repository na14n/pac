import React from "react";
import Image from "next/image";
export default function PACabout() {
  return (
    <div className=" mx-16 mb-8 py-10">
      <section className=" text-4xl font-bold mt-10 text-center items-center justify-center flex flex-col">
        <p className="pb-3">PROS APAC CORPORATION</p>
        <hr className=" border-pac-orange w-1/2 border-2" />
      </section>

      <section className="flex flex-row my-10 ml-10">
        <section className="indent-5 w-[50vw] h-full text-lg text-justify pt-4 mr-20">
          <p className="pb-5">
            Established in 1996, PROS-APAC Corporation stands out as a prominent
            dental company in the Philippines. The company was founded by Mr.
            Renato S. Angeles and embarked on its journey as an exclusive
            distributor of high-quality dental products and supplies.
          </p>
          <p className="pb-5">
            Over time, it gradually expanded its expertise to encompass various
            dental specializations, such as Aesthetics/Restoration, Dental
            Implants, Bone Regeneration, Imaging, Anesthesia, and Prosthetics.
          </p>

          <p className="pb-5">
            PAC&apos;s headquarters is located in Manila, with strategically
            positioned branch offices in Cebu City and Davao City.
          </p>
        </section>
        <section className="h-full w-[35vw] right-0 absolute">
          <Image
            src="https://picsum.photos/1806/1564"
            alt="Coolab Picture"
            width={410}
            height={200}
          />
        </section>
      </section>
    </div>
  );
}
