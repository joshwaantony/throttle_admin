"use client";

import React from "react";

const bikes = [
  {
    image: "/images/giant-escape.jpg",
    name: "Giant Escape",
    price: 2100,
    oldPrice: null,
  },
  {
    image: "/images/trek-powerfly.jpg",
    name: "Trek Powerfly",
    price: 3650,
    oldPrice: 3800,
  },
  {
    image: "/images/turbo-vado-sl.jpg",
    name: "Turbo Vado SL",
    price: 3500,
    oldPrice: null,
  },
  {
    image: "/images/recumbent-trike.jpg",
    name: "Recumbent Trike",
    price: 3650,
    oldPrice: 3800,
  },
  {
    image: "/images/santa-cruz-hightower.jpg",
    name: "Santa Cruz Hightower",
    price: 2350,
    oldPrice: null,
  },
  {
    image: "/images/specialized-allez-sprint.jpg",
    name: "Specialized Allez Sprint",
    price: 2200,
    oldPrice: null,
  },
];

export default function BikeTable() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl text-black font-semibold mb-4">Bikes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border rounded-lg">
          <thead className="bg-red-600">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4"> Brand</th>
              <th className="p-4">Model</th>

              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Old Price</th>
            </tr>
          </thead>
          <tbody>
            {bikes.map((bike, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </td>
                <td className="p-4">{bike.name}</td>
                <td className="p-4">${bike.price.toFixed(2)}</td>
                <td className="p-4">
                  {bike.oldPrice ? (
                    <span className="line-through text-gray-500">
                      ${bike.oldPrice.toFixed(2)}
                    </span>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-gray-600 mt-4">
          Displayed records: 1-{bikes.length} of {bikes.length}
        </p>
      </div>
    </div>
  );
}
