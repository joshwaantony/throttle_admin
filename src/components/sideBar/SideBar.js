"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { GiScooter } from "react-icons/gi";
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
  FaBolt,
  FaMotorcycle,
  FaGasPump,
  FaStar,
  FaRoad,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { BiCategoryAlt, BiSolidUserAccount } from "react-icons/bi";

export default function SideBar() {
  const router = useRouter();
  const [productsOpen, setProductsOpen] = useState(false);

  const productMenus = [
    { label: "Trending", href: "/admin/bike-list", icon: <FaBoxOpen /> },
    { label: "Popular", href: "/admin/add-bike", icon: <FaStar /> },
    { label: "Electric", href: "/admin/add-bike", icon: <FaBolt /> },
    { label: "Adventure", href: "/admin/add-bike", icon: <FaMotorcycle /> },
    { label: "Scooters", href: "/admin/add-bike", icon: <GiScooter /> },
    {
      label: "Best Mileage Bike",
      href: "/admin/add-bike",
      icon: <FaGasPump />,
    },
    { label: "Sports", href: "/admin/add-bike", icon: <FaRoad /> },
    { label: "Cruiser", href: "/admin/add-bike", icon: <FaMotorcycle /> },
  ];

  return (
    <div className="flex h-full bg-gray-100">
      <aside className="w-full bg-teal-800 text-white flex flex-col">
        {/* Header with logo image and title */}
        <div className="p-4 flex items-center gap-3 border-b border-teal-700">
          <img
            src="/throttle-point-tittle-create-a-logo-for-using-bike.png"
            alt="Throttle Point Logo"
            className="h-8 w-8 object-contain rounded-full"
          />
          <span className="text-xl font-bold">Throttle Point</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <NavItem
            icon={<FaTachometerAlt />}
            label="Dashboard"
            href="/admin/dashboard"
          />

          {/* Products Dropdown */}
          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex justify-between items-center w-full p-2 rounded hover:bg-teal-700"
            >
              <span className="flex items-center gap-3">
                <FaBoxOpen />
                Products
              </span>
              {productsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                productsOpen ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <ul className="ml-6 space-y-1">
                {productMenus.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded hover:bg-teal-600 cursor-pointer"
                    onClick={() => router.push(item.href)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <NavItem
            icon={<FaList />}
            label="Product Categories"
            href="/admin/product-categories"
          />
          <NavItem
            icon={<BiCategoryAlt />}
            label="Categories"
            href="/categories"
          />
          <NavItem
            icon={<FaTags />}
            label="Terms & Policy"
            href="/terms-policy"
          />
          <NavItem icon={<FaChartPie />} label="Slides" href="/slides" />
          <NavItem icon={<FaQuestionCircle />} label="FAQs" href="/faqs" />
          <NavItem
            icon={<FaUsers />}
            label="View Customers"
            href="/admin/view-customer"
          />
          <NavItem
            icon={<FaShoppingCart />}
            label="View Orders"
            href="/admin/view-orders"
          />
          <NavItem
            icon={<FaMoneyCheckAlt />}
            label="View Payments"
            href="/admin/payment"
          />
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
      className="flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-teal-700"
      onClick={() => router.push(href)}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </div>
  );
}
