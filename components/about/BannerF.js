import React from "react";
import Image from "next/image";

export default function BannerF() {
  return (
    <div className="w-full h-[100vh] relative">
      <Image
        src="https://picsum.photos/2300/1600"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-transparent to-pac-orange">
        <div className="text-white text-center text-7xl font-bold drop-shadow-xl">
          ABOUT US
        </div>
      </div>
    </div>
  );
}
