import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa"; // For dropdown arrow
import logo from "../assets/images/konoha logo.png";

import home from "../assets/images/home.png";
import profile from "../assets/images/profile.png";
import forum from "../assets/images/forum.png";
import product from "../assets/images/product.png";
import bell from "../assets/images/bell.png";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between ">
      {/* Left - Logo */}
      <div className="ml-6">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Center - Navigation Links */}
      <ul className="flex items-center gap-12">
        <li className="flex flex-col items-center">
          <img src={home} alt="Home" className="h-8 w-auto mb-1" />
          <Link to="/" className="text-xs font-bold">HOME</Link>
        </li>
        <li className="flex flex-col items-center">
          <img src={product} alt="Products" className="h-8 w-auto mb-1" />
          <Link to="/products" className="text-xs font-bold">PRODUCTS</Link>
        </li>
        <li className="flex flex-col items-center">
          <img src={forum} alt="Forum" className="h-8 w-auto mb-1" />
          <Link to="/forum" className="text-xs font-bold">FORUM</Link>
        </li>
        <li className="flex flex-col items-center">
          <img src={bell} alt="Notifications" className="h-8 w-auto mb-1" />
          <Link to="/notifications" className="text-xs font-bold">NOTIFICATION</Link>
        </li>
       
      </ul>

      {/* Right - Profile Section */}
      <div className="flex items-center gap-2 mr-6">
        <img src={profile} alt="Profile" className="h-8 w-auto" />
        <Link to="/view-profile" className="text-xs font-bold">PROFILE</Link>
        <FaChevronDown size={14} />
      </div>
    </nav>
  );
};

export default Navbar;
