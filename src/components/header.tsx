"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative flex justify-between items-center px-4 py-4 bg-white border-b shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-xl font-sans font-bold text-gray-800">
        <img src="/logo.png" alt="Logo" className="w-12 h-12" />
        <span className="text-lg">Furniro</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-16 font-bold font-poppins">
        <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
        <a href="/shop" className="text-gray-600 hover:text-blue-500">Shop</a>
        <a href="/blog" className="text-gray-600 hover:text-blue-500">Blog</a>
        <a href="/contact" className="text-gray-600 hover:text-blue-500">Contact</a>
      </nav>

      {/* Icon Section */}
      <div className="flex space-x-6 text-lg text-gray-600">
        <span className="cursor-pointer hover:text-gray-800 text-xl">
          <FiUser />
        </span>
        <span className="cursor-pointer hover:text-gray-800 text-xl">
          <CiSearch />
        </span>
        <span className="cursor-pointer hover:text-gray-800 text-xl">
          <CiHeart />
        </span>
        <span className="cursor-pointer hover:text-gray-800 text-xl">
          <AiOutlineShoppingCart />
        </span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-2xl text-gray-600 hover:text-gray-800"
        onClick={toggleMenu} // Toggle the menu when clicked
      >
        &#9776;
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-gray-500 opacity-50 z-10"
          onClick={toggleMenu} // Close menu when clicking overlay
        ></div>
      )}

    
      <div
        className={`fixed top-16 left-0 w-full bg-white shadow-lg md:hidden z-20 transition-all duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-4 py-4 px-8 font-bold font-poppins">
        <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link href="/shop" className="text-gray-600 hover:text-blue-500">Shop</Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-500">Blog</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
