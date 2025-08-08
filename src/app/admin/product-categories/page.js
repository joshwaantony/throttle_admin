"use client";

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Electric Bikes",
    count: 12,
    icon: "https://img.icons8.com/color/96/electric-bike.png",
  },
  {
    id: 2,
    name: "Scooters",
    count: 9,
    icon: "https://img.icons8.com/color/96/scooter.png",
  },
  {
    id: 3,
    name: "Helmets",
    count: 18,
    icon: "https://img.icons8.com/color/96/motorcycle-helmet.png",
  },
  {
    id: 4,
    name: "Accessories",
    count: 7,
    icon: "https://img.icons8.com/color/96/tools.png",
  },
];

export default function ProductCategories() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Product Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={cat.icon}
              alt={cat.name}
              className="w-20 h-20 object-contain mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-700">{cat.name}</h3>
            <p className="text-gray-500 text-sm mb-4">
              {cat.count} product{cat.count > 1 ? "s" : ""}
            </p>

            <div className="flex gap-3">
              <button className="text-blue-600 hover:text-blue-800">
                <FaEdit />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
