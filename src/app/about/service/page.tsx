"use client";

import { Coffee, Bean, Store } from "lucide-react"; // Importing icons
import Image from "next/image";

const services = [
  {
    icon: <Coffee size={40} className="text-[#8B5A2B]" />,
    title: "Expertly Brewed Coffee",
    description:
      "Our baristas craft every cup with precision, ensuring the perfect balance of aroma, taste, and texture.",
  },
  {
    icon: <Bean size={40} className="text-[#8B5A2B]" />,
    title: "Premium Coffee Beans",
    description:
      "We source only the finest organic beans from ethical farms, providing a rich and flavorful experience.",
  },
  {
    icon: <Store size={40} className="text-[#8B5A2B]" />,
    title: "Cozy Atmosphere",
    description:
      "Relax and enjoy your coffee in our warm, inviting space, designed for comfort and conversation.",
  },
];

const OurService = () => {
  return (
    <section className="bg-[#F8F5F2] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-semibold text-[#3C2F2F] mb-4">
          Our Services
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Experience the best coffee, sourced ethically and brewed to
          perfection, in a space designed for relaxation and connection.
        </p>

        {/* Service Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <div className="bg-[#F4E1D2] p-4 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#3C2F2F] mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
