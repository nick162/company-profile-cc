"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Rachel Ellison",
    role: "Traveller",
    image: "/Ellipse 1.png",
    review:
      "The taste makes us unforgettable and will make us come and come again. The service is excellent, feels comfy for everybody. I will always recommend this place to everyone.",
    rating: 5,
  },
  {
    name: "Jessica Jane",
    role: "Model",
    image: "/Ellipse 2.png",
    review:
      "This Restaurant is great for anyones, it is not just offeri the service but also the food and the drink are so excelent, it was so wonderfull",
    rating: 5,
  },
  {
    name: "Eric Moreno",
    role: "Sales Property",
    image: "/Ellipse 3.png",
    review:
      "Come here is one of the best decision i've ever made, because it so refreshing with all of the service, the menu and the atmosphere, 100% recomended for everyone.",
    rating: 5,
  },
  {
    name: "Eric Jackusercontent",
    role: "Sales Toyota",
    image: "/orang 4.png",
    review:
      "If you want to visit the great place to self reward, this is one of the place that i recomended because of everything they offer, atmosphere, service and all the product menu si excelentw.",
    rating: 5,
  },
];

const Testimonial = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="bg-[#EAF0F8] py-16 relative">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0A1247] mb-10">
          What Our Customers <br /> Are Saying
        </h2>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              setTimeout(() => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation === "object"
                ) {
                  // ✅ FIXED: Ensuring it's an object before modifying
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }, 0);
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto">
                  <h4 className="font-semibold">So Tasty</h4>
                  <p className="text-gray-600 text-sm mt-2">
                    {testimonial.review}
                  </p>

                  {/* Profile */}
                  <div className="mt-6 flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                    />
                    <h3 className="mt-2 font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>

                    {/* Star Rating */}
                    <div className="flex mt-2 text-yellow-500">
                      {"★".repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 shadow-md rounded-full hover:bg-gray-100 z-10"
          >
            <FaArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#D29034] text-white p-3 shadow-md rounded-full hover:bg-[#b4762a] z-10"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
