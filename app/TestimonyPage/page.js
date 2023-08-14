import React from "react";
import TestimonyPageCard from "@/components/TestimonyPageCard";

export default function Page() {
  return (
    <div className=" flex-col flex items-center justify-center px-2 md:px-16 pb-36 bg-[url('https://w0.peakpx.com/wallpaper/243/628/HD-wallpaper-colors-septum-2-kor4-rts-abstract-flat-gradient-green-line-orange-texture.jpg')] bg-cover">
      <section className=" h-[90vh] md:h-[70vh] bg-left w-screen bg-cover relative bg-[url('https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/365873500_305728315312336_8628825155772971017_n.png?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHP1qngOPiv9L1h7t6Pl_wbYeL42QqmoCdh4vjZCqagJyInEbicQa3ZpSz2SGV4E_6Xknry3YRKPjwwhY7e1hxi&_nc_ohc=tnLCJiHUM2gAX8oPU0P&_nc_ht=scontent.fmnl3-2.fna&oh=03_AdS9-3_49COu_mFkmWIV5nLdkg4pPKI0HwMPAfvVtVsKSQ&oe=64FD66A7')] bg-opacity-60">
        <div className="w-full h-full">
          <div className="bg-gradient-to-t from-[#004828] from-[1%] to-transparent h-full w-full opacity-50 absolute top-0 left-0"></div>
          <div className="w-full md:w-2/3 md:text-left text-center absolute z-10 px-8 pt-64 md:pt-32 text-gray-800 font-bold">
            <p className="md:text-7xl text-4xl">WHY PROS APAC?</p>
            <hr className=" w-2/3 border-pac-green" />
            <p className="md:text-3xl text-lg">Know what people say about our company</p>
          </div>
        </div>
      </section>
      <section className="pt-24">
        <section className=" h-auto w-full flex flex-col md:flex-row items-center justify-center gap-2 m-1 mt-2">
          <TestimonyPageCard
            name={"Rawr"}
            title={"Dinosaur"}
            comment={"Rawr I am a dinosaur, I might be extinct but I <3 PAC"}
            alttext={"Mr.Dino"}
            image={
              "https://profiles.ph/wp-content/uploads/2021/03/Megan-Young-3.jpg"
            }
          />
          <TestimonyPageCard
            name={"Rawr"}
            title={"Dinosaur"}
            comment={"Rawr I am a dinosaur, I might be extinct but I <3 PAC"}
            alttext={"Mr.Dino"}
            image={
              "https://pbs.twimg.com/media/Dg6rt05UwAAVFxS?format=jpg&name=medium"
            }
          />
          <TestimonyPageCard
            name={"Rawr"}
            title={"Dinosaur"}
            comment={"Rawr I am a dinosaur, I might be extinct but I <3 PAC"}
            alttext={"Mr.Dino"}
            image={"https://i.mydramalist.com/B3WNbf.jpg"}
          />
        </section>
        <section className=" h-auto w-full flex flex-col md:flex-row items-center justify-center gap-2 m-1 mt-2">
          <TestimonyPageCard
            name={"Rawr"}
            title={"Dinosaur"}
            comment={"Rawr I am a dinosaur, I might be extinct but I <3 PAC"}
            alttext={"Mr.Dino"}
            image={
              "https://profiles.ph/wp-content/uploads/2021/03/Megan-Young-3.jpg"
            }
          />
          <TestimonyPageCard
            name={"Rawr"}
            title={"Dinosaur"}
            comment={"Rawr I am a dinosaur, I might be extinct but I <3 PAC"}
            alttext={"Mr.Dino"}
            image={
              "https://pbs.twimg.com/media/Dg6rt05UwAAVFxS?format=jpg&name=medium"
            }
          />
          <TestimonyPageCard
            name={"Rawr"}
            title={"Dinosaur"}
            comment={"Rawr I am a dinosaur, I might be extinct but I <3 PAC"}
            alttext={"Mr.Dino"}
            image={"https://i.mydramalist.com/B3WNbf.jpg"}
          />
        </section>
        
        
      </section>
    </div>
  );
}
