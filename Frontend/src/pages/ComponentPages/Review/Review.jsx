import React, { useState } from "react";
import img1 from "../../../Assets/female.jpg";
import img2 from "../../../Assets/male-1.jpg";
import img3 from "../../../Assets/male-3.jpg";
import img4 from "../../../Assets/Men-1.jpg";
import img5 from "../../../Assets/Women.jpg";
import img6 from "../../../Assets/Men-4.webp";
import img7 from "../../../Assets/Men-2.jpg";

const customerImg = [
  {
    id: 1,
    image: img1,
    quote:
      "I had an amazing experience! The sushi melted in my mouth and the ambiance was perfect. I’ll be back soon!"
  },
  {
    id: 2,
    image: img2,
    quote:
      "Service was top-notch, and the flavors were unforgettable. Easily one of the best meals of my life!"
  },
  {
    id: 3,
    image: img3,
    quote:
      "This place is a hidden gem. Everything was so fresh, flavorful, and beautifully presented."
  },
  {
    id: 4,
    image: img4,
    quote:
      "Hands down the best sushi restaurant I’ve been to. Exceptional service and atmosphere!"
  },
  {
    id: 5,
    image: img5,
    quote:
      "Absolutely delicious food! Every dish surprised me in the best way possible. Highly recommended."
  },
  {
    id: 6,
    image: img6,
    quote:
      "From start to finish, this was a delightful dining experience. Five stars!"
  },
  {
    id: 7,
    image: img7,
    quote:
      "Great vibes and even better food. Perfect for date night or a family dinner!"
  }
];

const Review = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleImageClick = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          What Our Happy Customers Say About Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Our sushi is crafted from the freshest ingredients, delivering a
          perfect blend of flavor, quality, and visual appeal.
        </p>

        {/* Customer Avatars */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {customerImg.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={`Customer ${item.id}`}
              onClick={() => handleImageClick(item)}
              className={`w-14 h-14 rounded-full object-cover border-2 shadow-md transition cursor-pointer ${
                selectedCustomer?.id === item.id
                  ? "scale-125 border-lime-600 shadow-lg ring-2 ring-lime-300"
                  : "hover:scale-110 border-lime-500"
              }`}
            />
          ))}
        </div>

        {/* Testimonial / Quote Box */}
        {selectedCustomer && (
          <div className="max-w-4xl mx-auto mt-16 bg-lime-400 p-10 rounded-ss-3xl rounded-ee-3xl shadow-lg relative flex flex-col items-center gap-6 transition-all duration-300">
            <img
              src={selectedCustomer.image}
              alt="Selected Customer"
              className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover transform scale-105"
            />
            <p className="text-lg text-black relative max-w-2xl italic leading-relaxed">
              <span className="absolute text-4xl left-[-1rem] top-[-1rem]">
                “
              </span>
              {selectedCustomer.quote}
              <span className="absolute text-4xl right-[-1rem] bottom-[-1rem]">
                ”
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Review;
