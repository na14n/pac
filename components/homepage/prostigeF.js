import React from "react";
import Button from "../button";
import Image from "next/image";

export default function ProstigeF(props) {

  return (
    <div className="w-full h-full flex xs:flex-col-reverse lg:flex-row xs:justify-center lg:justify-around items-center xs:px-4 lg:px-32 2xl:px-48 lg:gap-16 xs:gap-32 xs:py-20 lg:py-0">
      <div className="md:max-w-lg max-w-full flex flex-col gap-4 ">
        <div className="flex flex-col justify-center gap-1">
          <h2 className="font-bold text-4xl 2xl:text-5xl text-[#121212] ">PROSTIGE PLATINUM</h2>
          <div className="bg-pac-green w-full h-[2px]" />
        </div>
        <div className="flex flex-col w-fit items-start">
          <h3 className="font-semibold text-xl 2xl:text-2xl text-[#373737] ">
            Turn your <span className="text-pac-orange mb-10 font-bold">Purchases</span>
          </h3>
          <h3 className="font-semibold text-xl 2xl:text-2xl text-[#373737] self-end ">
            Into more <span className="text-pac-green font-bold">Rewards</span>
          </h3>
        </div>
        <div className="">
          <h3 className="text-pac-green font-bold text-xl 2xl:text-2xl">NEVER MISS A POINT!</h3>
          <p className="text-sm 2xl:text-lg text-[#373737]">
            What are you waiting for? Become a member of PROS-APAC’s loyalty
            program by Availing our PROSTIGE Reward card now to earn points and
            get special rewards and discounts
          </p>
        </div>
        <Button type={1} color={'orange'} name={"Learn More Here"} link={'/#'}/>
      </div>
      <div className="2xl:w-[640px] 2xl:h-[360px] xs:w-64 xs:h-36 lg:w-[384px] lg:h-[216px] rotate-12 bg-[#E3E3E3] shadow-md rounded-md overflow-hidden ">
        <Image src={props.link} fill={true} alt="prostige-reward-card" />
      </div>
    </div>
  );
}
