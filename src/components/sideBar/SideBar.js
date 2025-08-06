

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  FaUsers,
  FaBoxOpen,
  FaChartPie,
  FaShoppingCart,
  FaList,
  FaTags,
  FaMoneyCheckAlt,
  FaUserCircle,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { BiCategoryAlt, BiSolidUserAccount } from "react-icons/bi";

export default function SideBar() {
  return (
    <div className="flex h-full bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full bg-teal-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-teal-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-3">
          <NavItem icon={<FaTachometerAlt />} label="Dashboard" href="/admin/dashboard" />
          <NavItem icon={<FaBoxOpen />} label="Products" href="/admin/bike-list" />
          <NavItem icon={<FaList />} label="Product Categories" href="/product-categories" />
          <NavItem icon={<BiCategoryAlt />} label="Categories" href="/categories" />
          <NavItem icon={<FaTags />} label="Terms & Policy" href="/terms-policy" />
          <NavItem icon={<FaChartPie />} label="Slides" href="/slides" />
          <NavItem icon={<FaQuestionCircle />} label="FAQs" href="/faqs" />
          <NavItem icon={<FaUsers />} label="View Customers" href="/customers" />
          <NavItem icon={<FaShoppingCart />} label="View Orders" href="/orders" />
          <NavItem icon={<FaMoneyCheckAlt />} label="View Payments" href="/payments" />
          <NavItem icon={<BiSolidUserAccount />} label="Users" href="/users" />
          <NavItem icon={<FaUserCircle />} label="Profile" href="/profile" />
        </nav>

        <button className="flex items-center gap-2 p-4 bg-teal-700 hover:bg-teal-600 text-white w-full">
          <FaSignOutAlt /> Logout
        </button>
      </aside>
    </div>
  );
}

function NavItem({ icon, label, href }) {
  const router = useRouter();

  return (
    <div
      className="flex items-center justify-between hover:bg-teal-700 p-2 rounded cursor-pointer"
      onClick={() => router.push(href)}
    >
      <div className="flex items-center gap-3">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </div>
  );
}
