import React from "react";
import Button from "../button";

export default function ProstigeF() {
  return (
    <div className="flex md:flex-row  flex-col items-center my-10 mx-32 test">
      <article className="md:max-w-lg max-w-full flex-col gap-8 test">
        <div className="text-3xl text-gray-600 font-bold">
          PROSTIGE PLATINUM
        </div>
        <hr className="bg-pac-green mb-5 w-full h-1" />
        <div className="max-w-lg">
          <div className="text-xl mb-3">
            <span className="font-semibold">Turn your</span>{" "}
            <span className="text-pac-orange mb-10 font-bold">Purchases</span>
            <br />
            <span className="font-semibold">Into more</span>{" "}
            <span className="text-pac-green font-bold">Rewards</span>
            <br />
          </div>
          <div className="text-xl text-pac-green mb-3 font-bold">
            NEVER MISS A POINT!
          </div>
          <div className="text-sm mb-5">
            What are you waiting for? Become a member of PROS-APAC’s loyalty
            program by Availing our PROSTIGE Reward card now to earn points and
            get special rewards and discounts.
          </div>
          <Button name={"Learn More Here"} />
        </div>
      </article>
      <div className="border-dashed border-red-500 bg-slate-700 rounded-md w-96 h-52 rotate-6 border-8 text-center align-middle md:ml-28 pt-20">
        PLACE IMAGE HERE
      </div>
    </div>
  );
}
