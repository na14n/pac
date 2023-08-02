import React from "react";
import Button from "../button";
import Link from "next/link";

export default function ProstigeF() {
  return (
    <div className="bg-[url('https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/359897511_1039866690356735_2947693243556521007_n.png?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFg_RMWZjz2k69X0jJU7F6-K_MzKS6jmh8r8zMpLqOaH2SsgQP0x7VEbeTKAESPmoNg2gjmcQwUJopr7ISbn5Vf&_nc_ohc=O2G5R-uPgSAAX90DKk-&_nc_ht=scontent.fmnl3-4.fna&oh=03_AdR-8QTFrUmLd0bF6O3d68VvklJqiovYNG7rNAxmXGqAgQ&oe=64F12481')] bg-cover bg-center w-full flex md:flex-row flex-col items-center justify-center h-screen pt-10 md:py-10">
      <div className="flex md:flex-row flex-col items-center max-w-7xl h-auto">
        <article className="md:max-w-lg max-w-full flex-col gap-8">
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
              program by Availing our PROSTIGE Reward card now to earn points
              and get special rewards and discounts.
            </div>
            <Link href="/components/sitemap/sitemapF.js">
              <Button name={"Learn More Here"} />
            </Link>
          </div>
        </article>
        <img
          src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.15752-9/359685073_773142744818063_6970793800610648065_n.png?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGpYUNt1nOTLjAiG4akJCrQqPho9gWwYdqo-Gj2BbBh2tJUAlKXAwKRa_tutEReu--wk8qJPU-lzP07y7dLekx8&_nc_ohc=3WnblSDGXYIAX-dNs27&_nc_ht=scontent.fmnl3-3.fna&oh=03_AdTmPYRBuE__T6EsvOS2Jz-Lodxu1Eul-LfD1XMWpcxjlg&oe=64F124F1"
          alt="dental-products-distributor"
          className="ml-10 md:mt-0 -mt-10 flex scale-125 rotate-6"
        />
      </div>
    </div>
  );
}
