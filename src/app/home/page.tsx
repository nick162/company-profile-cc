"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Jumbotron = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center text-white home"
      style={{ backgroundImage: "url('/bg-kopi.avif')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full flex justify-start"
      >
        <div className="container mx-auto max-w-3xl px-6 md:px-10 lg:px-16">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            FRESH COFFEE AND
            <br /> MEAL
          </h1>
          <p className="text-base md:text-lg text-gray-200 mt-4">
            We are one of the cafes that offer high-quality products and
            services, with a guarantee of customer satisfaction. Everything you
            experience here is memorable, with unique and delicious tastes.
            Furthermore, we offer a comfy atmosphere with a natural view that
            can refresh your mind.
          </p>
          <motion.button
            name="order-home"
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold text-lg rounded-lg"
          >
            <Link href="/menu">ORDER NOW</Link>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Jumbotron;
