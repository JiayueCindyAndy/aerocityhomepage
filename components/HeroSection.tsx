// File: components/HeroSection.tsx

import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Gradient Border Around Screen */}
      <div className="absolute inset-0">
        <div className="w-full h-full border-[16px] border-transparent rounded-lg bg-clip-padding bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 p-4">
          <div className="w-full h-full bg-white rounded-lg"></div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-8xl w-full p-8 space-y-8 md:space-y-0 md:space-x-10">
        {/* Text Section */}
        <div className="text-center md:text-left pl-0 lg:ml-20">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
            <span className="text-blue-600"><span className="text-blue-600 text-7xl font-thin">e</span>-Dashboard</span><br />
            Pengelolaan Asset <br /> Kawasan Logistik Aerocity
          </h1>
          <Link href={"https://aerocity.vercel.app/"} className="px-6 py-3 mt-4 text-lg font-semibold text-white bg-purple-700 rounded-3xl shadow-md hover:bg-purple-800 focus:ring focus:ring-purple-300 transition">
            Bandar Udara
          </Link >
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/plane-transformed-6hrydJz3z-transformedc.png"
            style={{ height: '360px' }}
            alt="Airplane Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
