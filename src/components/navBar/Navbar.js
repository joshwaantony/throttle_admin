"use client";

import React from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#005F5A] shadow-md px-6 py-3 flex items-center justify-between border-b-1  border-gray-400">
      {/* Left: Title or search */}
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 text-sm border rounded-lg border-white text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <FaSearch className="absolute left-3 top-2.5 text-white" />
        </div>
      </div>

      {/* Right: Notification, Profile */}
      <div className="flex items-center gap-6">
        <button className="relative text-white hover:text-gray-200">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
        </button>

        <div className="flex items-center gap-2">
          <FaUserCircle size={24} className=" text-white hover:text-gray-200" />
          <span className="text-white text-sm font-medium">Admin</span>
        </div>
      </div>
    </nav>
  );
}
