"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const foodMenu = [
  {
    name: "An Empty Croissant with Raspberry Jam",
    price: "$11.00",
    weight: "350 gr",
    image: "/croissant.png",
  },
  {
    name: "Avocado and Eggs Toast",
    price: "$8.00",
    weight: "450 gr",
    image: "/boiled-egg.png",
  },
  {
    name: "Sweet Croutons with Honey & Banana",
    price: "$5.00",
    weight: "200 gr",
    image: "/honey-bread.png",
  },
  {
    name: "Pancake With Blubbery and Honey",
    price: "$9.00",
    weight: "400 gr",
    image: "/pancake.png",
  },
  {
    name: "Avocado Toast With Omelette",
    price: "$7.00",
    weight: "400 gr",
    image: "/telur-mata-sapi.png",
  },
  {
    name: "Empty Croissant with Choice of Fruits",
    price: "$4.00",
    weight: "380 gr",
    image: "/croissant-2.png",
  },
];

const FoodMenu = () => {
  return (
    <section className="bg-[#F3E5D8] py-12 px-6 md:px-16 lg:px-24 text-gray-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold">BREAKFAST MENU</h2>
        <p className="text-lg text-gray-600 mt-2">
          From warm and smooth to cold and refreshing, there are endless food
          options to enjoy at Coffee House.
        </p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {[
          "Pancakes",
          "Avocado toast",
          "Hot baked goods",
          "Healthy eating",
          "Nutritious omelette",
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

      {/* Food Items Slider */}
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
        {foodMenu.map((item, index) => (
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
              <p className="text-gray-500">{item.weight}</p>
              <p className="text-lg font-bold mt-2">{item.price}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FoodMenu;
