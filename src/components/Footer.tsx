import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 mt-10 rounded-t-2xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div>
          <div className="text-xl font-bold mb-4">OtakuVerse</div>
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-[#760426] text-white p-2 rounded-lg hover:bg-[#b55a74] transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="bg-[#760426] text-white p-2 rounded-lg hover:bg-[#b55a74] transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="bg-[#760426] text-white p-2 rounded-lg hover:bg-[#b55a74] transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="bg-[#760426] text-white p-2 rounded-lg hover:bg-[#b55a74] transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="flex flex-wrap gap-10 mt-6 md:mt-0">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Company</h3>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact us</a>
            <a href="#" className="hover:text-gray-400">Support</a>
            <a href="#" className="hover:text-gray-400">Careers</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Quick Link</h3>
            <a href="#" className="hover:text-gray-400">Share Location</a>
            <a href="#" className="hover:text-gray-400">Orders Tracking</a>
            <a href="#" className="hover:text-gray-400">Size Guide</a>
            <a href="#" className="hover:text-gray-400">FAQs</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Legal</h3>
            <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
