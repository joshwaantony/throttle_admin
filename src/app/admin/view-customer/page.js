"use client";

import React from "react";

const customers = [
  {
    id: "CUST001",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+91 98765 43210",
    joined: "2025-07-01",
    status: "Active",
  },
  {
    id: "CUST002",
    name: "Rahul Mehta",
    email: "rahul@example.com",
    phone: "+91 99887 76654",
    joined: "2025-07-15",
    status: "Blocked",
  },
  {
    id: "CUST003",
    name: "Emily Singh",
    email: "emily@example.com",
    phone: "+91 95643 12345",
    joined: "2025-08-01",
    status: "Active",
  },
];

export default function CustomerTable() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">View Customers</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <tr>
              <th className="p-4">Customer ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Join Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="p-4 font-semibold text-gray-800">{customer.id}</td>
                <td className="p-4">{customer.name}</td>
                <td className="p-4 text-blue-700">{customer.email}</td>
                <td className="p-4">{customer.phone}</td>
                <td className="p-4 text-gray-600">{customer.joined}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="p-4 flex gap-3 text-sm">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button className="text-red-500 hover:underline">Block</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-gray-500 mt-4 p-4">
          Showing {customers.length} customers
        </p>
      </div>
    </div>
  );
}
