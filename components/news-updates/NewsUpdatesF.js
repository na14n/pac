import React from "react";
import Updates from "../updates";
import Button from "../button";
export default function NewsUpdatesF() {
  return (
    <div className="bg-[#F1F1F1] items-center flex-col md:flex-row ">
      {/* -----BANNER----- */}
      <section>
        <div class="relative mb-10">
          <img
            class="mx-auto w-screen h-[30rem] object-cover"
            src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/364649594_1364689507516886_1912653761893186058_n.png?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEBju6oQglZV8bt-ZWIERKkxlVfLr9f_AXGVV8uv1_8BY2MAHDSQAxKygWw1T04jY9U0r_3GZ3s-OHupAskcs0S&_nc_ohc=JFoAwZpCCqsAX9ayWju&_nc_ht=scontent.fmnl3-4.fna&oh=03_AdQdWHONwM0ZR1yaeVNN0HbCKvL8X8AcQ1kHOXuBGFCaDA&oe=64F7D1FE"
            alt="Website Banner"
          />
          <div class="absolute bottom-0 left-0 ml-8 mb-8 max-w-4xl">
            <p className=" text-pac-orange text-lg font-medium">Trending</p>
            <p className="text-white text-3xl font-bold mb-2">
              STUDY FROM HARVARD PROVES THAT PROPER ORAL HYGIENE IMPROVES HEALTH
            </p>
            <Button type={2} color={"orange"} name={"Learn More"} link={"/#"} />
          </div>
        </div>
      </section>

      <div className="gap-5 pl-20 pb-28">
        {/* -----TITLE----- */}
        <section className="text-pac-green w-full h-auto text-5xl font-bold flex flex-col mb-16">
          RECENT NEWS
          <hr className="bg-pac-green w-2/3 h-1" />
        </section>

        <section className="flex flex-row gap-5 w-full">
          {/* -----NEWS----- */}
          <section className="flex flex-col w-1/2">
            <Updates
              title={"BABY BOY MAKES BREAKTHROUGH IN DENTAL TECHNOLOGY"}
              description={"Dental Technology"}
              type={1}
              image={
                "https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.15752-9/364630537_3318900905075253_1247562838478209209_n.png?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGQhq-gri-3UMqZDRpkd4FOTF_qtUpCCOlMX-q1SkII6Uoh_LrraSX6i7KCaXF9cksdritKFfZgLPqQt3l5DrHD&_nc_ohc=_HaCBrTaUmgAX9Rgros&_nc_ht=scontent.fmnl3-3.fna&oh=03_AdScw2dFoLBL3dWnuMi4k0myyiwetFpSo1m2rajUvqblag&oe=64F296C7"
              }
            />
            <Updates
              title={
                "LAUGHING GAS HAS PROVED TO INCREASE DENTAL PROCEDURE EFFECTIVENESS"
              }
              description={"Dentistry"}
              type={1}
              image={
                "https://static.independent.co.uk/2021/04/29/23/newFile-1.jpg?quality=75&width=1200&auto=webp"
              }
              className="w-8"
            />
          </section>

          <section className="text-white gap-6 w-1/2 flex flex-col">
            <section className="flex flex-col items-start mr-5 relative">
              <Updates
                type={2}
                description={"Research"}
                title={"LIST OF DENTAL BRANDS THAT 9/10 DENTISTS APPROVE"}
                image={
                  "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2023_12/3599096/230320-toothpaste-kb-2x1.jpg"
                }
              />
              <Updates
                type={2}
                description={"Research"}
                title={"LIST OF DENTAL BRANDS THAT 9/10 DENTISTS APPROVE"}
                image={
                  "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2023_12/3599096/230320-toothpaste-kb-2x1.jpg"
                }
              />
              <Updates
                type={2}
                description={"Research"}
                title={"LIST OF DENTAL BRANDS THAT 9/10 DENTISTS APPROVE"}
                image={
                  "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2023_12/3599096/230320-toothpaste-kb-2x1.jpg"
                }
              />
            </section>
          </section>
        </section>
      </div>

      <div className="gap-5 pl-20 pb-28 flex flex-row">
        {/* -----UPDATES----- */}
        <section className="w-1/2">
          {/* -----TITLE----- */}
          <section className="text-pac-green w-full h-auto text-5xl font-bold flex flex-col mb-16">
            NEW UPDATES
            <hr className="bg-pac-green w-2/3 h-1" />
          </section>

          <section>
            <Updates
              type={3}
              title={"HUGE BENEFITS FROM PROS-APAC’S REWARD CARD"}
              date={"June 5, 2023"}
              image={
                "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/364810775_3268509163371504_957841328500730817_n.png?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHmIuEC--tD2s6TO0GcFgTYW_1i7l_eCgBb_WLuX94KAO_gMLY5_AZTzySds-7pecnv_vCPHH2T2d_R1iy-L8vx&_nc_ohc=0pwO6RBDjm4AX9QJo7_&_nc_ht=scontent.fmnl3-1.fna&oh=03_AdTc5E3KYH5JCRBnRwMqo6zhTJ-N2PI4UjMY0M2jTZ_WwQ&oe=64F80E32"
              }
              description={
                "PROS-APAC Corporation launches Prostige Platinum, the company’s very own reward card of multiple benefits!"
              }
            />
            <Updates
              type={3}
              title={"SALE THIS JULY 7! UP TO 25% OFF OF SELECTED BRANDS"}
              date={"June 5, 2023"}
              description={
                "A special sale to commemorate this 7-7! Shop now to save on selected brands"
              }
              image={
                "https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.15752-9/364660597_308502588359580_221902651065028950_n.png?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFa_zu0K3K2-JBBSdi0Lws_8kCafsWWeMvyQJp-xZZ4y25F9xqTV38Y1PvZv170W0zAxb94vdizNhrYlGy-pJXD&_nc_ohc=c3I7FACsFm0AX84b6fp&_nc_oc=AQnmxJH6Vdhs1cj8cX9DDA5WblZZ0bOFPICT5wQHF2D91rcXYmSuu2sEQtF1zhDs4gE&_nc_ht=scontent.fmnl3-3.fna&oh=03_AdTpespHZqF3QmfQ2L8ccHa3_6mZ8XgnrpYw5RJcy1LuNg&oe=64F825D2"
              }
            />
          </section>
        </section>

        {/* -----POPULAR----- */}
        <section className="w-1/2 pr-20">
          {/* -----TITLE----- */}
          <section className="text-pac-green w-full h-auto text-5xl font-bold flex flex-col mb-16">
            POPULAR
            <hr className="bg-pac-green w-2/3 h-1" />
          </section>

          {/* -----POPULAR CARDS----- */}
          <section className="gap-3">
            <Updates
              type={4}
              title={
                "LAUGHING GAS HAS PROVED TO INCREASE DENTAL PROCEDURE EFFECTIVENESS"
              }
              image={"https://i.gifer.com/Td9n.gif"}
              alttext={"Popular type image"}
              date={"June 5, 2023"}
            />
            <Updates
              type={4}
              title={
                "LAUGHING GAS HAS PROVED TO INCREASE DENTAL PROCEDURE EFFECTIVENESS"
              }
              image={"https://i.gifer.com/Td9n.gif"}
              alttext={"Popular type image"}
              date={"June 5, 2023"}
            />
            <Updates
              type={4}
              title={
                "LAUGHING GAS HAS PROVED TO INCREASE DENTAL PROCEDURE EFFECTIVENESS"
              }
              image={"https://i.gifer.com/Td9n.gif"}
              alttext={"Popular type image"}
              date={"June 5, 2023"}
            />
            <Updates
              type={4}
              title={
                "LAUGHING GAS HAS PROVED TO INCREASE DENTAL PROCEDURE EFFECTIVENESS"
              }
              image={"https://i.gifer.com/Td9n.gif"}
              alttext={"Popular type image"}
              date={"June 5, 2023"}
            />
          </section>
        </section>
      </div>
    </div>
  );
}
