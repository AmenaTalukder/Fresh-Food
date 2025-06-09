import React from "react";
import HomeImage from "../../Assets/homejpg.jpg";

const Home = () => {
  return (
    <section className="bg-white py-12">
      {/* Main Content Row */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Box */}
        <div className="bg-lime-400 p-10 rounded-lg shadow-md flex flex-col justify-between h-full">
          <div>
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Fresh Food <br />
              Great Taste with
            </h1>
            <p className="text-base leading-relaxed mb-6">
              We use only the freshest ingredients to create sushi that is both
              visually stunning and incredibly flavorful. Every bite is crafted
              with care, ensuring the perfect balance of taste and texture. Our
              commitment to quality guarantees a delightful dining experience.
              Enjoy sushi that looks as good as it tastes!
            </p>
          </div>
          <button className="w-fit px-6 py-2 mt-4 border-2 border-white rounded-md hover:bg-white hover:text-black transition">
            Book Your Reservation
          </button>
        </div>

        {/* Image Box */}
        <div className="w-full h-full">
          <img
            src={HomeImage}
            alt="Delicious Food"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Testimonial / Quote Box */}
      <div className="max-w-4xl mx-auto mt-16 bg-lime-400 p-8 rounded-xl shadow-sm">
        <p className="text-lg relative pl-10">
          <span className="absolute text-4xl left-2 top-0 text-white">“</span>
          We prioritize freshness and health by using locally sourced, seasonal
          ingredients. Our dishes are crafted with care, ensuring natural
          flavors shine. We consciously avoid artificial ingredients and food
          additives. Every meal is prepared with a commitment to quality and
          well-being. Enjoy a pure and wholesome dining experience with us!
          <span className="absolute text-4xl right-2 bottom-[-10px] text-white">
            ”
          </span>
        </p>
      </div>
    </section>
  );
};

export default Home;
