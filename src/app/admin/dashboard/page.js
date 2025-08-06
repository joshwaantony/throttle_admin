


"use client";

import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  LineChart, Line
} from "recharts";

const summary = [
  { title: "Total Sales", value: 1260 },
  { title: "Orders", value: 389 },
  { title: "Customers", value: 245 },
  { title: "Revenue", value: "$52,340" },
];

const barData = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 450 },
  { name: "May", sales: 600 },
  { name: "Jun", sales: 700 },
];

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Bikes", value: 300 },
  { name: "Accessories", value: 300 },
];

const COLORS = ["#14b8a6", "#0f766e", "#2dd4bf"];

const lineData = [
  { month: "Jan", value: 30 },
  { month: "Feb", value: 50 },
  { month: "Mar", value: 80 },
  { month: "Apr", value: 40 },
  { month: "May", value: 100 },
  { month: "Jun", value: 90 },
];

export default function DashboardPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {summary.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4">
            <h2 className="text-gray-600 text-sm">{item.title}</h2>
            <p className="text-xl font-semibold text-teal-700">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Monthly Sales</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#14b8a6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Product Categories</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-xl shadow p-4 col-span-1 md:col-span-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">User Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#0f766e" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
