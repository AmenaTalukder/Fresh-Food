import React, { useRef } from "react";
import img1 from "../../../Assets/ala cart.webp";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const menuItems = [
  {
    title:
      "Our sushi is crafted from the freshest ingredients resulting in superior taste and quality.",
    image: img1,
    button: "$40 Order Now"
  },
  {
    title:
      "Our sushi is crafted from the freshest ingredients resulting in superior taste and quality.",
    image: img1,
    button: "$45 Order Now"
  },
  {
    title:
      "Our sushi is crafted from the freshest ingredients resulting in superior taste and quality.",
    image: img1,
    button: "$43 Order Now"
  },
  {
    title:
      "Our sushi is crafted from the freshest ingredients resulting in superior taste and quality.",
    image: img1,
    button: "$60 Order Now"
  },
  {
    title:
      "Our sushi is crafted from the freshest ingredients resulting in superior taste and quality.",
    image: img1,
    button: "$30 Order Now"
  }
];

const ChooseDish = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Choose The Taste That Suit with Your Tounge
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Our food is made from the freshest ingredients, resulting in superior
          sushi with a vibrant appearance and an unbeatable taste guarantee.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="text-2xl p-2 bg-lime-500 text-white rounded-full hover:bg-lime-600"
        >
          <IoIosArrowDropleftCircle />
        </button>

        {/* Scrollable Grid Container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ overflow: "hidden" }}
        >
          <div className="grid grid-flow-col auto-cols-[300px] gap-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="border-2 border-lime-500 flex flex-col items-center justify-between transition hover:shadow-lg hover:scale-105 duration-300 rounded-ss-xl rounded-ee-xl"
              >
                <div className="flex flex-col items-center gap-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-ss-xl"
                  />
                  <div className="px-4 py-2 text-lg font-bold text-gray-800">
                    <h2 className="text-sm text-gray-800">{item.title}</h2>
                  </div>

                  <button className="px-4 py-2 bg-lime-500 text-white rounded-ss-xl rounded-ee-xl  transition  mb-8">
                    {item.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="text-2xl p-2 bg-lime-500 text-white rounded-full hover:bg-lime-600"
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </section>
  );
};

export default ChooseDish;
