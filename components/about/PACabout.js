import React from "react";

export default function PACabout() {
  return (
    <div className=" mx-16 mb-8">
      <section className="relative">
        <div className="flex flex-col justify-end items-end bg-pac-orange w-[40vh] h-[117vh] absolute right-0 -mt-10 -mr-16"></div>
        <section className=" text-4xl font-bold mt-10 text-center items-center justify-center flex flex-col">
          <p className="pb-3">PROS APAC CORPORATION</p>
          <hr className=" border-pac-orange w-1/2" />
        </section>
      </section>
      <section className="flex flex-row absolute mt-16">
        <section className="indent-5 w-1/2 h-full text-lg text-justify pt-4 mr-20">
          <p className="pb-5">
          Established in 1996, PROS-APAC Corporation stands out as a prominent dental company in the Philippines. The company was founded by Mr. Renato S. Angeles and embarked on its journey as an exclusive distributor of high-quality dental products and supplies. 

          </p>
          <p className="pb-5">
          Over time, it gradually expanded its expertise to encompass various dental specializations, such as Aesthetics/Restoration, Dental Implants, Bone Regeneration, Imaging, Anesthesia, and Prosthetics.
          </p>

          <p className="pb-5">
          PAC's headquarters is located in Manila, with strategically positioned branch offices in Cebu City and Davao City.

          </p>
        </section>
        <section className="h-full w-[35vw]">
          <div className=" rounded-xl flex w-full h-[50vh] bg-[url('https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/365488995_170020582711620_8774183814565137278_n.png?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH_oJ4UdZvU81xjRGHARUJ6mDLpY0CvwxqYMuljQK_DGkl1IoKrGtgS3nfqx8zeGU00KqvJbKQ3ApS8d81Wr3G2&_nc_ohc=00fXPeZAEBMAX87Oqjj&_nc_ht=scontent.fmnl3-1.fna&oh=03_AdRgUrvpMCezsr4Tubs2YfoypTGWRYGu0aiADHxpdeNXvw&oe=6501202A')]"></div>
        </section>
      </section>
    </div>
  );
}
