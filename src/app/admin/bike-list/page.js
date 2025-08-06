



"use client";

import React, { useState } from "react";
import BikeTable from "@/components/Bike/BikeTable";

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [bikes, setBikes] = useState([]);

  const handleAddBike = (newBike) => {
    setBikes((prev) => [...prev, newBike]);
    setShowModal(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Bike Management</h1>
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
  const [form, setForm] = useState({
    name: "",
    price: "",
    color: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    if (!form.name || !form.price || !form.image) return;

    const bikeData = {
      name: form.name,
      price: parseFloat(form.price),
      color: form.color || "-",
      image: URL.createObjectURL(form.image), // just for preview purposes
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
            placeholder="Bike Name"
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
            className="w-full  border p-2 rounded"
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {form.image && (
            <p className="text-sm text-gray-600">
              Selected: <strong>{form.image.name}</strong>
            </p>
          )}
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
