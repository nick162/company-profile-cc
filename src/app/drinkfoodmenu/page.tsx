"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import FoodMenu from "../cardfoodmenu/page";

const coffeeMenu = [
  {
    name: "White Chocolate",
    price: "$5.00",
    volume: "300 ml",
    image: "/americano.png",
  },
  {
    name: "Cappuccino with coconut milk",
    price: "$3.00",
    volume: "250 ml",
    image: "/hazelnut.png",
  },
  {
    name: "Cold Brew Latte",
    price: "$5.00",
    volume: "300 ml",
    image: "/latte-milk.png",
  },
  {
    name: "Caramel Macchiato",
    price: "$5.00",
    volume: "300 ml",
    image: "/milk-tea.png",
  },
  {
    name: "Mocha Frappuccino",
    price: "$4.00",
    volume: "300 ml",
    image: "/mocacino.png",
  },
  {
    name: "Espresso",
    price: "$2.00",
    volume: "90 ml",
    image: "/vanilla-moca.png",
  },
];

const Menu = () => {
  return (
    <>
      {" "}
      <section className="bg-[#F3E5D8] py-12 px-6 md:px-16 lg:px-24 text-gray-900 menu">
        <div className="text-center">
          <h2 className="text-4xl font-bold">COFFEE MENU</h2>
          <p className="text-lg text-gray-600 mt-2">
            From warm and smooth to cold and refreshing, there are endless drink
            options to enjoy at Coffee House.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
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
              className="bg-white text-gray-800 px-3 py-1 text-sm rounded-full shadow-md cursor-pointer transition-all"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Coffee Items Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          className="mt-10"
        >
          {coffeeMenu.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-lg text-center"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
                <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
                <p className="text-gray-500">{item.volume}</p>
                <p className="text-lg font-bold mt-2">{item.price}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <FoodMenu />
    </>
  );
};

export default Menu;
