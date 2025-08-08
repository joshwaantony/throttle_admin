"use client";

import React from "react";

const samplePayments = [
  {
    id: "TXN001",
    user: "John Doe",
    amount: 1500,
    method: "Credit Card",
    status: "Success",
    date: "2025-08-01",
  },
  {
    id: "TXN002",
    user: "Jane Smith",
    amount: 2200,
    method: "UPI",
    status: "Pending",
    date: "2025-08-03",
  },
  {
    id: "TXN003",
    user: "Michael Johnson",
    amount: 875,
    method: "PayPal",
    status: "Failed",
    date: "2025-08-04",
  },
];

export default function PaymentTable() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">View Payments</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <tr>
              <th className="p-4">User</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Method</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {samplePayments.map((payment, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="p-4 text-gray-700 font-medium">{payment.user}</td>
                <td className="p-4 text-green-600 font-semibold">
                  ₹{payment.amount.toFixed(2)}
                </td>
                <td className="p-4 text-gray-600">{payment.method}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      payment.status === "Success"
                        ? "bg-green-100 text-green-700"
                        : payment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="p-4 text-gray-600">{payment.date}</td>
                <td className="p-4 flex gap-2">
                  <button className="text-blue-600 hover:underline text-sm">
                    View
                  </button>
                  <button className="text-gray-600 hover:underline text-sm">
                    Download
                  </button>
                  <button className="text-red-500 hover:underline text-sm">
                    Refund
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-gray-500 mt-4 p-4">
          Displaying {samplePayments.length} payments
        </p>
      </div>
    </div>
  );
}
