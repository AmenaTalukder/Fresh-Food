import React from "react";
import img1 from "../../../Assets/ala cart.webp";
import img2 from "../../../Assets/mixed roll.jpg";
import img3 from "../../../Assets/salmon.webp";

const data = [
  {
    id: 1,
    imgSrc: img1,
    name: "Salmon Platter",
    details: "Mixed platter Roll"
  },
  {
    id: 1,
    imgSrc: img2,
    name: "Salmon Platter",
    details: "Mixed platter Roll"
  },
  {
    id: 1,
    imgSrc: img3,
    name: "Salmon Platter",
    details: "Mixed platter Roll"
  }
];

const ExpartlyCraft = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Enjoy Our Expertly Crafted Sushi Combinations
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Our sushi is crafted from the freshest ingredients, delivering a
          perfect blend of flavor, quality, and visual appeal.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-lime-400  rounded-xl shadow-md p-6 flex flex-col items-center transition hover:shadow-lg hover:scale-105 duration-300"
            >
              <img
                src={item.imgSrc}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-white shadow"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {item.name}
              </h2>
              <p className="text-gray-600 text-sm text-center">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpartlyCraft;
