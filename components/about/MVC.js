import React from "react";

export default function MVC() {
  return (
    <section className="w-full h-[25vh] flex flex-row gap-4 items-center justify-center pt-24">
      <div className="w-[30vw] h-[32vh] flex flex-col justify-center items-center text-white bg-pac-orange p-4 drop-shadow-xl -skew-x-6">
        <p className="font-bold text-center text-xl">OUR MISSION</p>
        <hr className="border-white border-2 w-2/3" />
        <p className="text-justify indent-5 pt-4 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="w-[30vw] h-[32vh] flex flex-col justify-center items-center text-pac-orange bg-white p-4 drop-shadow-xl border -skew-x-6">
        <p className="font-bold text-center text-xl">OUR VISION</p>
        <hr className="border-pac-orange border-2 w-2/3" />
        <p className="text-justify indent-5 pt-4 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="w-[30vw] h-[32vh] flex flex-col justify-center items-center text-white bg-pac-green p-4 drop-shadow-xl -skew-x-6">
        <p className="font-bold text-center text-xl">OUR CORE VALUES</p>
        <hr className="border-white border-2 w-2/3" />
        <p className="text-justify indent-5 pt-4 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}
