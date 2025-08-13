


"use client";

import React, { useState, useRef } from "react";
import BikeTable from "@/components/Bike/BikeTable";

export default function BikeListPage() {
  const [showModal, setShowModal] = useState(false);
  const [bikes, setBikes] = useState([]);

  const handleAddBike = (newBike) => {
    setBikes((prev) => [...prev, newBike]);
    setShowModal(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Bike Management
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md"
        >
          + Add Bike
        </button>
      </div>

      <BikeTable externalBikes={bikes} />

      {showModal && (
        <AddBikeModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddBike}
        />
      )}
    </div>
  );
}

function AddBikeModal({ onClose, onSubmit }) {
  const fileInputRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    color: "",
    category: "",
    image: null,
    imagePreview: null,
  });

  const categories = [
    "TRENDING",
    "POPULAR",
    "ELECTRIC",
    "ADVENTURE",
    "SCOOTERS",
    "BEST MILEAGE BIKES",
    "SPORTS",
    "CRUISER",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      const file = files[0];
      setForm((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    if (!form.name || !form.price || !form.image || !form.category) return;

    const bikeData = {
      name: form.name,
      price: parseFloat(form.price),
      color: form.color || "-",
      category: form.category,
      image: form.imagePreview,
    };

    onSubmit(bikeData);
  };

  return (
    <div className="fixed inset-0 bg-[#08070731] backdrop-blur-xs flex justify-center items-center z-50">
      <div className="bg-white text-black p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Bike</h2>
        <div className="space-y-4">
            <input
            type="text"
            name="name"
            placeholder="Brand"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="name"
            placeholder="Model"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="color"
            placeholder="Color (optional)"
            value={form.color}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Category</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Image Upload Button */}
          <div className=" flex-col gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="px-4 py-2  text-black rounded hover:bg-[#00786F]"
            >
              📷 Add Image
            </button>
            <input
              type="file"
              name="image"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleChange}
              className="hidden"
            />
            {form.imagePreview && (
              <img
                src={form.imagePreview}
                alt="Preview"
                className="w-full h-40 object-cover rounded border"
              />
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
