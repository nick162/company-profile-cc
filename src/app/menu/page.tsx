"use client";

import { useState } from "react";
import Image from "next/image";
import FoodMenu from "./foodmenu/page";

const drinkItems = [
  {
    name: "White Chocolate Mocha",
    price: "$5.00",
    size: "300 ml",
    image: "/americano.png",
  },
  {
    name: "Cappuccino with Coconut Milk",
    price: "$3.00",
    size: "300 ml",
    image: "/vanilla-moca.png",
  },
  {
    name: "Cold Brew Latte",
    price: "$5.00",
    size: "300 ml",
    image: "/hazelnut.png",
  },
  {
    name: "Caramel Macchiato",
    price: "$5.00",
    size: "300 ml",
    image: "/latte-milk.png",
  },
  {
    name: "Mocha Frappuccino",
    price: "$4.00",
    size: "300 ml",
    image: "/milk-tea.png",
  },
  {
    name: "Espresso",
    price: "$2.00",
    size: "100 ml",
    image: "/mocacino.png",
  },
];

const drinkCategories = [
  "Cold coffee",
  "Craft drinks",
  "With coconut milk",
  "Espresso based",
  "Cappuccino/latte",
];

const MenuDrink = () => {
  return (
    <>
      <section className="bg-[#c4c2c1] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#3D2C1D]">COFFEE MENU</h2>
            <p className="text-gray-600 mt-2">
              From warm and smooth to cold and refreshing, there are endless
              drink options to find and love at Coffee House.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {drinkCategories.map((category, index) => (
              <button
                key={index}
                className="border border-gray-500 px-4 py-2 text-sm rounded-full hover:bg-gray-800 hover:text-white transition"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Drink Grid - Displays all 6 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {drinkItems.map((drink, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <Image
                  src={drink.image}
                  alt={drink.name}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <h3 className="mt-4 font-semibold text-lg">{drink.name}</h3>
                <p className="text-gray-500 text-sm">{drink.size}</p>
                <p className="text-[#D29034] font-bold">{drink.price}</p>
                <button className="button-order mt-2 font-semibold text-1xl bg-black text-white w-[120px] h-[50px] rounded-lg">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FoodMenu />
    </>
  );
};

export default MenuDrink;
