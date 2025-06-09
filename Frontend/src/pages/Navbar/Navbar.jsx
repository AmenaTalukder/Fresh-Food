import React, { useState } from "react";
import Logo from "../../Assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Menu", "Our Services", "About", "Contact"];

  return (
    <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Fresh Food Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">Fresh Food</h1>
        </div>

        {/* Desktop Menu (visible on large and up) */}
        <ul className="hidden lg:flex gap-6 font-semibold">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="hover:text-lime-600 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Login Buttons (only on large screens) */}
        <div className="hidden lg:flex gap-3">
          <button className="bg-lime-500 hover:bg-lime-400 transition px-4 py-2 rounded-xl text-sm font-semibold text-white">
            Login
          </button>
          <button className="bg-lime-500 hover:bg-lime-400 transition px-4 py-2 rounded-xl text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon (for mobile + tab screens) */}
        <button
          className="lg:hidden text-3xl text-lime-600"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile/Tab Menu (shown on lg:hidden) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md absolute top-0 left-0 w-full z-50 p-6 flex flex-col gap-6 min-h-screen">
          {/* Top row: logo + close */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Fresh Food Logo" className="w-10 h-10" />
              <h1 className="text-xl font-bold">Fresh Food</h1>
            </div>
            <button
              className="text-2xl text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              ✖
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col gap-4 font-semibold text-gray-800">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-lime-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Login buttons */}
          <div className="flex flex-col gap-3 mt-6">
            <button className="bg-lime-500 hover:bg-lime-400 transition px-4 py-2 rounded-xl text-sm font-semibold text-white">
              Login
            </button>
            <button className="bg-lime-500 hover:bg-lime-400 transition px-4 py-2 rounded-xl text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
