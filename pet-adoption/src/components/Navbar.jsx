import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";
import { FiSearch, FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4 lg:px-20">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center gap-2">
          <span className="bg-[#e2c6aa] p-2 rounded-full">
            <FaPaw />
          </span>
          <span>Scooby</span>
        </div>

        {/* Desktop menu */}
        <nav className="flex items-center gap-6 text-sm font-medium text-[#2f1e0e]">
          <a href="/" className="hover:text-[#d1733d]">
            Home
          </a>
          <div
            className="relative group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span>
              Services
              <span>
                <IoMdArrowDropdown size={20} />
              </span>
            </span>
            {showDropdown && (
              <div>
                <a href="/">Grooming</a>
                <a href="/">Training</a>
                <a href="/">Pet Sitting</a>
              </div>
            )}
          </div>
          <a href="/">About</a>
          <a href="/">Shop</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
        </nav>

        {/* icons */}
        <div>
          {[FiSearch, FiHeart, FiShoppingBag, FiUser].map((Icon, idx) => (
            <span>
              <Icon />
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
