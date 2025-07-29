"use client";

import React from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Title or search */}
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 text-sm border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Right: Notification, Profile */}
      <div className="flex items-center gap-6">
        <button className="relative text-teal-700 hover:text-teal-900">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
        </button>

        <div className="flex items-center gap-2">
          <FaUserCircle size={24} className="text-teal-700" />
          <span className="text-gray-800 text-sm font-medium">Admin</span>
        </div>
      </div>
    </nav>
  );
}
