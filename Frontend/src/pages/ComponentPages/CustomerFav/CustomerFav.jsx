import React, { useState } from "react";
import img1 from "../../../Assets/ala cart.webp";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const menuItems = [
  {
    title: "Salmon Platter",
    image: img1,
    price: 12.99
  },
  {
    title: "Tuna Delight",
    image: img1,
    price: 10.49
  },
  {
    title: "Avocado Roll",
    image: img1,
    price: 8.99
  }
];

const CustomerFav = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const deliveryCharge = 3.5;

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setQuantity(1); // reset quantity when new item is selected
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const totalPrice =
    selectedItem && (selectedItem.price * quantity + deliveryCharge).toFixed(2);

  return (
    <section className="bg-white py-12 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Customer Favorites – The Most Loved Menu
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Our sushi is crafted from the freshest ingredients, delivering a
          perfect blend of flavor, quality, and visual appeal.
        </p>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-20">
          {/* Left Image */}
          <div className="p-2 w-full h-72 flex flex-col items-center justify-center mx-20">
            <div className="bg-lime-400 rounded-full w-64 h-64 flex items-center justify-center mt-10">
              <img
                src={img1}
                alt="Main Dish"
                className="rounded-full w-full h-full object-cover p-3"
              />
            </div>
            <p className="mt-10">
              Our sushi is crafted from the freshest ingredients, delivering a
              perfect blend of flavor, quality, and visual appeal.
            </p>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-4 w-full h-72 md:w-2/3">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-lime-400 rounded-l-2xl shadow-md p-4 flex items-center justify-between transition hover:shadow-lg hover:scale-105 duration-300"
              >
                <div className="flex items-center gap-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                </div>
                <button
                  onClick={() => handleOrderClick(item)}
                  className="px-4 py-2 bg-white text-black rounded-ss-xl rounded-ee-xl hover:border-2 hover:border-black transition"
                >
                  Order Now
                </button>
              </div>
            ))}
            <div className="flex justify-end gap-4 mt-2">
              <FaArrowCircleLeft className="w-8 h-8 text-lime-500" />
              <FaArrowCircleRight className="w-8 h-8 text-lime-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      {selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-2xl text-gray-500 hover:text-red-500"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
              Order: {selectedItem.title}
            </h2>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />

            <div className="text-left space-y-2">
              <p>
                🍣 <strong>Price:</strong> ${selectedItem.price.toFixed(2)}
              </p>
              <p>
                🚚 <strong>Delivery:</strong> ${deliveryCharge.toFixed(2)}
              </p>
              <div className="flex justify-between items-center">
                <label htmlFor="qty">
                  📦 <strong>Quantity:</strong>
                </label>
                <input
                  type="number"
                  id="qty"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border px-2 py-1 rounded w-16 text-center"
                />
              </div>
              <p className="text-lg font-semibold mt-2">
                🧾 Total: ${totalPrice}
              </p>
            </div>

            <button className="w-full mt-4 bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 rounded-xl">
              Place Order
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomerFav;
