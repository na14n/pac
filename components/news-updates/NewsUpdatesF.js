import Link from "next/link";
import React from "react";

export default function NewsUpdatesF() {
  return (
    <div className="bg-[#FCFCFC] items-center flex-col md:flex-row gap-5 p-20 pt-28">
      
      <section className="text-pac-green w-full h-auto text-5xl font-bold flex flex-col">
        RECENT NEWS
        <hr className="bg-pac-green w-2/3 h-1" />
      </section>
      
      <section className="text-white gap-5 w-1/2 h-auto">
        <section className="flex flex-col items-start mr-5 relative">
          <img
            className="w-full h-80 rounded-xl my-2 hover:border-pac-green hover:border-4 hover:border-solid"
            src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.15752-9/364630537_3318900905075253_1247562838478209209_n.png?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGQhq-gri-3UMqZDRpkd4FOTF_qtUpCCOlMX-q1SkII6Uoh_LrraSX6i7KCaXF9cksdritKFfZgLPqQt3l5DrHD&_nc_ohc=_HaCBrTaUmgAX9Rgros&_nc_ht=scontent.fmnl3-3.fna&oh=03_AdScw2dFoLBL3dWnuMi4k0myyiwetFpSo1m2rajUvqblag&oe=64F296C7"
          />
          <span className="absolute bottom-0 left-0 mb-8 mx-5 text-xl font-semibold flex flex-col">
            <span className="font-normal text-sm">Dental Technology</span>
            BABY BOY MAKES BREAKTHROUGH IN
            DENTAL TECHNOLOGY
          </span>
        </section>
      </section>
      </Link>
    </div>
  );
}
