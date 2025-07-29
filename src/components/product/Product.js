"use client";
import React, { useState } from "react";

function Product() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    price: "",
    color: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can use FormData to send file with other data to backend
    const productData = new FormData();
    productData.append("brand", formData.brand);
    productData.append("model", formData.model);
    productData.append("price", formData.price);
    productData.append("color", formData.color);
    productData.append("image", formData.image);

    console.log("Submitting Product:", {
      ...formData,
      image: formData.image?.name || "No image selected",
    });

    // Example: send to backend
    // fetch("/api/products", {
    //   method: "POST",
    //   body: productData,
    // });

    // Reset
    setFormData({
      brand: "",
      model: "",
      price: "",
      color: "",
      image: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">Add Product Details</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Brand Name</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full px-4 py-2  text-black border rounded focus:outline-none focus:ring focus:ring-teal-400 placeholder:text-gray-600"
              placeholder="Enter brand"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring focus:ring-teal-400 placeholder:text-gray-600"
              placeholder="Enter model"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring focus:ring-teal-400 placeholder:text-gray-600"
              placeholder="Enter price"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Color</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring focus:ring-teal-400 placeholder:text-gray-600"
              placeholder="Enter color"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 placeholder:text-gray-600"
              required
            />
            {formData.image && (
              <p className="text-sm text-gray-500 mt-1">Selected: {formData.image.name}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
          >
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Product;
