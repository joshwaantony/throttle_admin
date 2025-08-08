"use client";

import React from "react";

const sampleOrders = [
  {
    id: "ORD1001",
    customer: "Alice Johnson",
    total: 3499,
    status: "Delivered",
    date: "2025-08-01",
  },
  {
    id: "ORD1002",
    customer: "Rahul Sharma",
    total: 1199,
    status: "Processing",
    date: "2025-08-03",
  },
  {
    id: "ORD1003",
    customer: "Emily Smith",
    total: 499,
    status: "Cancelled",
    date: "2025-08-04",
  },
];

export default function OrderTable() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">View Orders</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Total</th>
              <th className="p-4">Status</th>
              <th className="p-4">Order Date</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sampleOrders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="p-4 font-semibold text-gray-800">{order.id}</td>
                <td className="p-4 text-gray-700">{order.customer}</td>
                <td className="p-4 text-green-700 font-semibold">₹{order.total}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-gray-600">{order.date}</td>
                <td className="p-4 flex gap-3 text-sm">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button className="text-gray-600 hover:underline">Invoice</button>
                  <button className="text-red-500 hover:underline">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-gray-500 mt-4 p-4">
          Showing {sampleOrders.length} orders
        </p>
      </div>
    </div>
  );
}
