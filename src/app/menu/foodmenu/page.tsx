"use client";

import { useState } from "react";
import Image from "next/image";

const foodItems = [
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

const categories = [
  "Pancakes",
  "Avocado toast",
  "Hot baked goods",
  "Healthy eating",
  "Nutritious omelette",
];

const FoodMenu = () => {
  return (
    <section className="bg-[#F2E6D9] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#3D2C1D]">BREAKFAST MENU</h2>
          <p className="text-gray-600 mt-2">
            From warm and smooth to cold and refreshing, there are endless dish
            options to find and love at Coffee House.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {categories.map((category, index) => (
            <button
              name="category"
              key={index}
              className="border border-gray-500 px-4 py-2 text-sm rounded-full hover:bg-gray-800 hover:text-white transition"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Food Grid - Displays all 6 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {foodItems.map((food, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <Image
                src={food.image}
                alt={food.name}
                width={300}
                height={300}
                className="rounded-lg object-cover w-full"
              />
              <h3 className="mt-4 font-semibold text-lg">{food.name}</h3>
              <p className="text-gray-500 text-sm">{food.weight}</p>
              <p className="text-[#D29034] font-bold">{food.price}</p>
              <button
                name="order"
                className="button-order mt-2 font-semibold text-1xl bg-black text-white w-[120px] h-[50px] rounded-lg"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
