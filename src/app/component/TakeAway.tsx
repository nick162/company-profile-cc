"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TakeAway = () => {
  return (
    <section className="bg-[#8B5E3B] text-white py-12 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Coffee Bag Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-[250px] md:w-[350px]"
      >
        <Image
          src="/coffee-bag.png"
          alt="Coffee to Go"
          width={350}
          height={350}
          className="w-full h-auto drop-shadow-lg"
        />

        {/* Floating Coffee Details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="top-10 -left-6 bg-[#3D2B1F] text-sm px-4 py-2 rounded-lg shadow-lg"
        >
          ☕ ½ espresso, ⅓ warm milk, ⅙ milk froth <br />
          📏 180ml
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          DELICIOUS COFFEE TO GO
        </h2>
        <p className="text-lg text-gray-200 mb-4">
          For the price of one espresso, get two cappuccinos. The excellent deal
          is available till <strong>May 20</strong>.
        </p>

        {/* Tag Buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            "Cold coffee",
            "Craft drinks",
            "With coconut milk",
            "Espresso based",
            "Cappuccino/latte",
          ].map((tag, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white text-[#8B5E3B] px-3 py-1 text-sm rounded-full shadow-md cursor-pointer transition-all"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TakeAway;
