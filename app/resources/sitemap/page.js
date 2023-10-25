import React from "react";
import Image from "next/image";
import { HeaderTrigger } from "@/components";
import SitemapContent from "@/components/resources-pages/sitemapContent";
import PageWrapper from "@/components/pageWrapper";

export default function Sitemap() {
  return (
    <PageWrapper>
      <main className="min-h-screen h-fit w-full bg-[#EFEFEF]">
        <HeaderTrigger>
          <div className="relative w-full aspect-[16/9] md:aspect-[16/3] py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 flex items-end justify-start overflow-hidden z-0 bg-[#153f00]">
            <span className="w-fit">
              <h1 className="text-3xl 2xl:text-5xl xl:text-4xl mb-2 font-bold text-white">PROS-APAC Site Map</h1>
              <div className="w-full h-[4px] bg-pac-orange rounded-full" />
            </span>
          </div>
        </HeaderTrigger>
        {/* <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-16">
        <div className="text-black mb-5">
          <h1 className="text-lg font-bold">HOME</h1>
          <p className="indent-5 text-sm">
            <p>Our Reach</p>
            <p>Our Reach</p>
            <p>Our Partner Brands</p>
            <p>PROStige Platinum</p>
            <p>Why PROS-APAC Cor?</p>
            <p>Activities</p>
            <p>How to Order</p>
          </p>
        </div>

        <div className="text-black mb-5">
          <h1 className="text-lg font-bold">ABOUT US</h1>
          <p className="indent-5 text-sm">
            <p>Coolab</p>
            <p>Company History</p>
            <p>Facilities</p>
            <p>Sales Team</p>
            <p className="indent-10 text-sm">
              <p>Marketing Team</p>
              <p>Sale Agents</p>
              <p>Careers</p>
            </p>
          </p>
        </div>

        <div className="text-black mb-5">
          <h1 className="text-lg font-bold">PRODUCTS</h1>
          <p className="indent-5 text-sm">
            <p>Shop by Category</p>
            <p className="indent-10 text-sm mb-2">
              <p>Orthodontics, Aesthetics, Implants, and Restorative</p>
            </p>
            <p>Shop by Brands</p>
            <p className="indent-10 text-sm mb-2">
              <p>Brand 1, Brand 2, Brand 3, Brand 4, Brand 5, and Brand 6 </p>
            </p>
            <p>Featured Products</p>
          </p>
        </div>

        <div className="text-black mb-5">
          <h1 className="text-lg font-bold">TRAININGS AND SEMINARS</h1>
          <p className="indent-5 text-sm">
            <p>Workshops</p>
            <p>Seminars</p>
            <p>Conventions</p>
          </p>
        </div>
        <div className="text-black mb-5">
          <h1 className="text-lg font-bold">CONTACT US</h1>
          <h1 className="text-lg font-bold">SHOP NOW</h1>
        </div>
      </div> */}
        <SitemapContent />
      </main >
    </PageWrapper>
  );
}
