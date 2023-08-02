import React from "react";

export default function SitemapF() {
  return (
    <div className="bg-cover items-start flex-col justify-center relative mt-10 bg-[url('https://cdn-res.keymedia.com/cdn-cgi/image/f=auto/https://cdn-res.keymedia.com/cms/images/ca/120/0395_637834761430417755.jpg')] h-auto w-screen py-16">
       <div className="bg-gray-200 opacity-70 w-full border-t-2 border-b-2 h-20 flex items-center justify-center border-pac-charcoal border-opacity-20">
        <span className="text-black font-bold text-5xl opacity-100 absolute">
          SITE MAP
        </span>
      </div>

      <div className="bg-pac-orange rounded-2xl w-1/2 h-auto ml-10 text-left mt-10 p-5 gap-5 opacity-90">
        <article className="text-white mb-5">
          <h1 className="text-lg font-b">HOME</h1>
          <p className="indent-5 text-sm">
            <p>Our Reach</p>
            <p>Our Reach</p>
            <p>Our Partner Brands</p>
            <p>PROStige Platinum</p>
            <p>Why PROS-APAC Cor?</p>
            <p>Activities</p>
            <p>How to Order</p>
          </p>
        </article>

        <article className="text-white mb-5">
          <h1 className="text-lg font-b">ABOUT US</h1>
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
        </article>

        <article className="text-white mb-5">
          <h1 className="text-lg font-b">PRODUCTS</h1>
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
        </article>

        <article className="text-white mb-5">
          <h1 className="text-lg font-b">TRAININGS AND SEMINARS</h1>
          <p className="indent-5 text-sm">
            <p>Workshops</p>
            <p>Seminars</p>
            <p>Conventions</p>
          </p>
        </article>
        <article className="text-white mb-5">
          <h1 className="text-lg font-b">CONTACT US</h1>
          <h1 className="text-lg font-b">SHOP NOW</h1>
        </article>
      </div>
    </div>
  );
}
