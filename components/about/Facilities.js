import React from "react";
import FaciCard from "./FaciCard";

export default function Facilities() {
  return (
    <div>
      <section className=" text-center p-16 px-[10rem] items-center justify-center flex flex-col">
        <p className="font-bold text-3xl pb-2">OUR FACILITIES</p>
        <hr className="border-pac-orange w-1/2 border-2 mb-8" />
        <p className=" font-normal">
          PROS-APAC Corporation extends its role beyond mere dental product and
          equipment supply. The company prides itself on its outstanding dental
          facilities, thoughtfully crafted to deliver immersive education and
          training experiences. These state-of-the-art facilities serve as
          dynamic learning hubs where licensed dentists, who are also product
          managers, impart their extensive expertise. Equipped with leading-edge
          dental equipment, these spaces provide a conducive environment for
          dental practitioners to learn and master the proper usage of our
          distributed products.
        </p>
      </section>
      <section className=" flex flex-row items-center justify-center gap-32">
        
        <FaciCard title={"Implant & Dental Center"} alttext={"Implant & Dental Center"} description={"Very clean and shiny"} image={"https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/368270016_276953958384751_5299138067373393167_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE_I45ACIncL-OHj6_tdjkNS82lLYJyPAdLzaUtgnI8B7wkMnGw3ENFJYtc1-6OyQwxeLgKq3L0b_zxoQ0p3Tj4&_nc_ohc=HLLp__LaiK8AX98rY_O&_nc_ht=scontent.fmnl3-2.fna&oh=03_AdRgbZDF_ou5h1dSAE3VeF4HAmIZjM9C4igte9JHp49QeA&oe=65057AFA"}/>

        <FaciCard title={"Training Center"} alttext={"Implant & Dental Center"} description={"Very clean and shiny"} image={"https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/368147533_816396096642014_5774481560725594869_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFfwhqiw8YnJQSaeDswXdquoB9bfg6tiKigH1t-Dq2IqDQ-8_094HqHxiaZ-pwpqJtXc4Ue5vNBIkziYSaBQoal&_nc_ohc=-vkwrH0EmqcAX8edZAz&_nc_ht=scontent.fmnl3-1.fna&oh=03_AdR9o0NiMBoiSoWGN_dZSqcbSO4NnXHRPPnsGLfbkyckPw&oe=65055135"}/>

        <FaciCard title={"Digital Center"} alttext={"Implant & Dental Center"} description={"Very clean and shiny"} image={"https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.15752-9/368369850_6538851896235061_7032837355142532871_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFmYAq5lzecThONA4KxB2UvCvz7xWaYITAK_PvFZpghMNyjmvnFvywYz4Wrq7C18x6LB27XRm6hIjmC1wtxeKwr&_nc_ohc=MnfANY196UIAX9DgD3d&_nc_ht=scontent.fmnl3-3.fna&oh=03_AdTuK3hB4P78PbGHzv762z4_PzKfK5C07RDS6gp5ULiNvQ&oe=65057700"}/>
      </section>
    </div>
  );
}
