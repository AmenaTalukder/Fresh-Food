import { IoCall } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Div */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-xl font-bold text-gray-800">LearnFlow</h1>
          </div>
          <div className="flex items-center space-x-2 text-gray-800">
            <IoCall />
            <p>+880 1745-457002</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-800">
            <MdAttachEmail />
            <p>learnflow23@gmail.com</p>
          </div>
          <div className="flex space-x-3 text-gray-800 text-xl mt-4">
            <FaFacebook className="text-lime-500 hover:text-blue-600 transition" />
            <FaXTwitter className=" text-lime-500 hover:text-black transition" />
            <IoLogoYoutube className=" text-lime-500 hover:text-red-600 transition" />
            <RiInstagramFill className=" text-lime-500 hover:text-pink-500 transition" />
          </div>
        </div>

        {/* Middle Div */}
        <div className="md:col-span-2 grid grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Menu</h2>
            <ul className="space-y-1 text-gray-800 text-sm">
              <li>Categories</li>
              <li>Course</li>
              <li>Details</li>
              <li>New</li>
              <li>Certificates</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Company</h2>
            <ul className="space-y-1 text-gray-800 text-sm">
              <li>About Us</li>
              <li>News</li>
              <li>Self Courses</li>
              <li>Mentor</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Support</h2>
            <ul className="space-y-1 text-gray-800 text-sm">
              <li>Terms & Conditions</li>
              <li>Career</li>
              <li>Comments</li>
              <li>Security</li>
              <li>Community</li>
            </ul>
          </div>
        </div>

        {/* Right Div */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded mb-3"
          />
          <button className="w-full px-4 py-2 bg-lime-500 text-white font-semibold rounded hover:bg-lime-600 transition">
            Subscribe Now
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
