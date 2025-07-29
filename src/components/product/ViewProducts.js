



"use client";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const sampleProducts = [
  {
    id: 1,
    brand: "Honda",
    model: "Activa 6G",
    price: "78,000",
    color: "White",
    image: "/images/activa.jpg",
  },
  {
    id: 2,
    brand: "TVS",
    model: "Jupiter",
    price: "75,000",
    color: "Grey",
    image: "/images/jupiter.jpg",
  },
  {
    id: 3,
    brand: "Suzuki",
    model: "Access 125",
    price: "83,000",
    color: "Blue",
    image: "/images/access125.jpg",
  },
  {
    id: 4,
    brand: "Hero",
    model: "Pleasure Plus",
    price: "72,000",
    color: "Red",
    image: "/images/pleasure.jpg",
  },
  {
    id: 5,
    brand: "Yamaha",
    model: "Ray ZR 125",
    price: "86,000",
    color: "Green",
    image: "/images/rayzr.jpg",
  },
  {
    id: 6,
    brand: "Ather",
    model: "450X",
    price: "1,35,000",
    color: "Black",
    image: "/images/ather450x.jpg",
  },
  {
    id: 7,
    brand: "Ola",
    model: "S1 Pro",
    price: "1,25,000",
    color: "Pink",
    image: "/images/ola_s1.jpg",
  },
  {
    id: 8,
    brand: "Bajaj",
    model: "Chetak Electric",
    price: "1,20,000",
    color: "Blue",
    image: "/images/chetak.jpg",
  },
  {
    id: 9,
    brand: "TVS",
    model: "NTorq 125",
    price: "85,000",
    color: "Yellow",
    image: "/images/ntorq.jpg",
  },
  {
    id: 10,
    brand: "Vespa",
    model: "VXL 125",
    price: "1,10,000",
    color: "Maroon",
    image: "/images/vespa.jpg",
  },
  {
    id: 11,
    brand: "Suzuki",
    model: "Access 125",
    price: "83,000",
    color: "Blue",
    image: "/images/access.jpg",
  },
  {
    id: 12,
    brand: "Yamaha",
    model: "Fascino 125",
    price: "89,000",
    color: "Red",
    image: "/images/fascino.jpg",
  },
];

function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null); // for confirmation

  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  const handleDeleteConfirmed = () => {
    setProducts(products.filter((p) => p.id !== deleteProduct.id));
    setDeleteProduct(null);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setProducts((prev) =>
      prev.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    );
    setEditingProduct(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-700">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.model}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {product.brand} - {product.model}
              </h2>
              <p className="text-gray-600">Price: ₹{product.price}</p>
              <p className="text-gray-600 mb-2">Color: {product.color}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingProduct(product)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => setDeleteProduct(product)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative">
            <h2 className="text-xl text-black  font-bold mb-4">Edit Product</h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <input
                name="brand"
                value={editingProduct.brand}
                onChange={handleEditChange}
                className="w-full px-3 py-2 text-black border hover:border-green-500 outline-none rounded placeholder:text-black  "
                placeholder="Brand"
              />
              <input
                name="model"
                value={editingProduct.model}
                onChange={handleEditChange}
                className="w-full px-3 py-2 text-black border  hover:border-green-500 outline-none rounded placeholder:text-black"
                placeholder="Model"
              />
              <input
                name="price"
                value={editingProduct.price}
                onChange={handleEditChange}
                className="w-full px-3 py-2 text-black border  hover:border-green-500 outline-none rounded placeholder:text-black"
                placeholder="Price"
              />
              <input
                name="color"
                value={editingProduct.color}
                onChange={handleEditChange}
                className="w-full px-3 py-2 border text-black  hover:border-green-500 outline-none rounded placeholder:text-black"
                placeholder="Color"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 "
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl text-center">
            <h2 className="text-xl font-bold mb-4 text-red-600">Confirm Delete</h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete{" "}
              <strong>{deleteProduct.brand} - {deleteProduct.model}</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDeleteConfirmed}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setDeleteProduct(null)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewProducts;
