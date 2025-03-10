"use client";

import Image from "next/image";
import Team from "../team/page";
import OurService from "./service/page";
import Milestone from "./milestone/page";

const About = () => {
  return (
    <section className="bg-[#92918e] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-4">
        {/* Left Section - Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/kopi-jumbotron.png"
            alt="Coffee Shop"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white shadow-md p-4 rounded-lg">
            <p className="text-sm text-gray-700 font-semibold">
              Serving Quality Coffee Since 1999
            </p>
          </div>
        </div>

        {/* Right Section - About Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold text-[#3C2F2F]">
            About Our Coffee House
          </h2>
          <p className="text-gray-700 mt-4">
            At <span className="font-bold">Coffe Mantan</span>, we believe that
            coffee is more than just a drink—it's an experience. From sourcing
            the finest beans to creating the perfect ambiance, we are dedicated
            to bringing you the best coffee moments.
          </p>
          <p className="text-gray-600 mt-4">
            Our journey began over 20 years ago with a simple mission: to serve
            high-quality, ethically sourced coffee in a warm and welcoming
            environment. Today, we continue to uphold that mission by working
            directly with farmers and roasting each batch with care.
          </p>

          {/* Company Highlights */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-[#3C2F2F]">
                20+ Years
              </h3>
              <p className="text-sm text-gray-600">Serving Quality Coffee</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-[#3C2F2F]">
                100% Organic
              </h3>
              <p className="text-sm text-gray-600">Ethically Sourced Beans</p>
            </div>
          </div>

          {/* Call to Action */}
          <button className="mt-6 px-6 py-3 bg-[#D4A373] text-white font-semibold rounded-lg shadow-md hover:bg-[#b8865b] transition">
            Visit Our Shop
          </button>
        </div>
      </div>
      <div>
        <Milestone />
      </div>
      <div>
        <OurService />
      </div>
      <div>
        <Team />
      </div>
    </section>
  );
};

export default About;
