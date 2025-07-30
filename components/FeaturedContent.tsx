"use client";
import Image from "next/image";
import React, { use } from "react";
import LogoScroller from "./LogoScroller";
import Link from "next/link";

const carImageSrc = "/images/car-image.png";

const logosStripImageSrc = "/images/featured-logos-strip.png";

const FeaturedContent: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto p-10 bg-[#F3F4F6]">
        {/* Featured In Section */}
        <div className="max-w-screen-2xl mx-auto">
          <section className="mb-12 md:mb-16 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: "#004D40" }}
            >
              Featured In
            </h2>
            <div className="flex justify-center items-center px-4">
              {/* Single image for all logos */}
              {/* <Image
            src={'/featuredImage/featuredLogos.png'}
            alt="Featured publications logos"
            width={1200}
            height={60}
            className="object-contain w-full h-auto max-w-4xl"
          /> */}
              <LogoScroller />
            </div>
          </section>

          {/* Car Price in Nepal Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content Area */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 flex flex-col justify-center border border-gray-200 rounded-2xl rounded-r-none">
                <p className="text-sm mb-1" style={{ color: "#008080" }}>
                  Nepal Motor News
                </p>
                <h3
                  className="text-3xl sm:text-4xl font-bold mb-3"
                  style={{ color: "#004D40" }}
                >
                  Car Prices in Nepal
                </h3>
                <p
                  className="mb-6 text-base md:text-lg"
                  style={{ color: "#004D40" }}
                >
                  How will car prices in Nepal affect your next purchase? Our
                  experts explain everything you need to know.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href={"/readMore"}
                    className="px-6 py-3 border cursor-pointer font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ease-in-out w-full sm:w-auto read-more-btn"
                    style={{
                      borderColor: "#008080",
                      color: "#008080",
                    }}
                  >
                    Read More
                  </Link>
                  <Link
                    href="/exchange"
                    className="px-6 py-3 bg-[#008080] cursor-pointer text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ease-in-out w-full sm:w-auto exchange-btn"
                  >
                    Exchange To Ev
                  </Link>
                </div>

                <style jsx>{`
                  .read-more-btn:hover {
                    background-color: #008080 !important;
                    color: white !important;
                  }

                  .exchange-btn:hover {
                    background-color: #008080 !important;
                  }
                `}</style>
              </div>

              {/* Right Image Area - Simplified */}
              <div className="">
                {/* Car Image Placeholder */}
                <div className="relative z-10 w-full h-full">
                  <Image
                    src={"/featuredImage/featuredCar.png"}
                    alt="Car"
                    width={800}
                    height={250}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
