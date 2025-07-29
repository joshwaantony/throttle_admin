"use client";

import React from "react";
import { FaUsers, FaBoxOpen, FaChartPie, FaShoppingCart, FaList, FaTags, FaMoneyCheckAlt, FaUserCircle, FaQuestionCircle, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import { BiCategoryAlt, BiSolidUserAccount } from "react-icons/bi";

export default function SideBar() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-teal-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-teal-700">Admin Panel</div>
        <nav className="flex-1 p-4 space-y-3">
          <NavItem icon={<FaTachometerAlt />} label="Dashboard" />
          <NavItem icon={<FaBoxOpen />} label="Products" dropdown />
          <NavItem icon={<FaList />} label="Product Categories" />
          <NavItem icon={<BiCategoryAlt />} label="Categories" dropdown />
          <NavItem icon={<FaTags />} label="Terms & Policy" dropdown />
          <NavItem icon={<FaChartPie />} label="Slides" dropdown />
          <NavItem icon={<FaQuestionCircle />} label="FAQs" />
          <NavItem icon={<FaUsers />} label="View Customers" />
          <NavItem icon={<FaShoppingCart />} label="View Orders" />
          <NavItem icon={<FaMoneyCheckAlt />} label="View Payments" />
          <NavItem icon={<BiSolidUserAccount />} label="Users" dropdown />
          <NavItem icon={<FaUserCircle />} label="Profile" />
        </nav>
        <button className="flex items-center gap-2 p-4 bg-teal-700 hover:bg-teal-600 text-white w-full">
          <FaSignOutAlt /> Logout
        </button>
      </aside>

    
  
    </div>
  );
}

function NavItem({ icon, label, dropdown }) {
  return (
    <div className="flex items-center justify-between hover:bg-teal-700 p-2 rounded cursor-pointer">
      <div className="flex items-center gap-3">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      {dropdown && <span className="text-sm">▾</span>}
    </div>
  );
}

function SummaryCard({ icon, label, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2 items-start">
      <div className="flex items-center gap-2 text-teal-700">{icon} <span className="text-xl font-semibold">{value}</span></div>
      <div className="text-sm text-gray-600">{label}</div>
      <button className="text-xs text-teal-700 mt-auto hover:underline">View details</button>
    </div>
  );
}
