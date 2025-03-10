"use client";

import { motion } from "framer-motion";

const Jumbotron = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center text-white px-6 md:px-16 home"
      style={{ backgroundImage: "url('/flip-kopi.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          FRESH COFFEE AND
          <br /> MEAL
        </h1>
        <p className="text-lg text-gray-200 mt-4">
          We are one of the cafes that offer high-quality products and services,
          with a guarantee of customer satisfaction. Everything you experience
          here is memorable, with unique and delicious tastes. Furthermore, we
          offer a comfy atmosphere with a natural view that can refresh your
          mind.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-6 py-3 bg-yellow-600 text-white font-semibold text-lg rounded-lg shadow-lg"
        >
          <a href="/menu">ORDER NOW</a>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Jumbotron;
