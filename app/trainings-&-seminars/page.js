import React from "react";
import LandingF from "@/components/event-landing/LandingF";
import Image from "next/image";

export default function Page() {
  return (
    <div className=" bg-[#F1F1F1] pb-24">
      <div className="relative h-[50vh] mb-12">
        <Image
          src="https://picsum.photos/2400/1600"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-transparent to-pac-green to-[85%]" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          <p>TRAININGS AND SEMINARS</p>
        </div>
      </div>
      <article className="flex flex-col gap-6 text-MD mx-32 indent-5 mb-24 text-justify">
        <p>
          At PROS-APAC, our commitment to elevating dental excellence is
          unwavering. A cornerstone of our mission is to provide tailored
          continuing education programs, exclusively created for dental
          professionals.
        </p>
        <p>
          In dentistry, staying ahead isn't just a preference – it's a
          necessity. Our comprehensive range of training and seminars is
          meticulously crafted to cater to this exact need. Designed for dental
          professionals of all levels, these sessions are your gateway to
          unlocking the latest insights, mastering cutting-edge techniques, and
          harnessing advancements that define modern dental care.
        </p>
        <p>
          Led by industry experts who are as passionate about dentistry as you
          are, our training and seminars offer a dynamic platform for skill
          enhancement and knowledge enrichment. Whether you're an experienced
          practitioner looking to stay updated or a budding professional eager
          to immerse yourself in the intricacies of the field, our offerings
          cater to diverse needs and aspirations.
        </p>
        <p>
          Explore our programs, connect with experts, and join a community of
          like-minded individuals driven by the pursuit of excellence. Your path
          to continuous improvement starts here.
        </p>
      </article>
      <section className="h-[40vh]">
        <LandingF />
      </section>
    </div>
  );
}
