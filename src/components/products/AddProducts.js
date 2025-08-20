
// "use client";
// import React, { useState, useRef } from "react";
// import { addProduct } from "@/api/product/addproducts";

// function AddBikeModal({ onClose, onSubmit }) {
//   const fileInputRef = useRef(null);

//   const [form, setForm] = useState({
//     brand: "",
//     model: "",
//     price: "",
//     color: "",
//     category: "",
//     image: null,
//     imagePreview: null,
//   });

//   const [loading, setLoading] = useState(false);

//   const categories = [
//     "TRENDING",
//     "POPULAR",
//     "ELECTRIC",
//     "ADVENTURE",
//     "SCOOTERS",
//     "BEST MILEAGE BIKES",
//     "SPORTS",
//     "CRUISER",
//   ];

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image" && files.length > 0) {
//       const file = files[0];
//       setForm((prev) => ({
//         ...prev,
//         image: file,
//         imagePreview: URL.createObjectURL(file),
//       }));
//     } else {
//       setForm((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async () => {
//     if (!form.brand || !form.model || !form.price || !form.image || !form.category) {
//       alert("Please fill all required fields");
//       return;
//     }

//     try {
//       setLoading(true);

//       // ✅ prepare FormData with correct backend key
//       const formData = new FormData();
//       formData.append("brand", form.brand);
//       formData.append("model", form.model);
//       formData.append("price", form.price);
//       formData.append("color", form.color || "-");
//       formData.append("category", form.category);
//       formData.append("productImage", form.image); // 👈 correct key

//       // ✅ Call API
//       const response = await addProduct(formData);

//       // ✅ Add to UI
//       onSubmit(response);

//       onClose();
//     } catch (error) {
//       console.error("Error adding bike:", error);
//       alert("Failed to add bike!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-[#08070731] backdrop-blur-xs flex justify-center items-center z-50">
//       <div className="bg-white text-black p-6 rounded-lg w-full max-w-md shadow-lg">
//         <h2 className="text-xl font-semibold mb-4">Add New Bike</h2>

//         {/* Brand */}
//         <input
//           type="text"
//           name="brand"
//           placeholder="Brand"
//           value={form.brand}
//           onChange={handleChange}
//           className="w-full border p-2 mb-3 rounded"
//         />

//         {/* Model */}
//         <input
//           type="text"
//           name="model"
//           placeholder="Model"
//           value={form.model}
//           onChange={handleChange}
//           className="w-full border p-2 mb-3 rounded"
//         />

//         {/* Price */}
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={form.price}
//           onChange={handleChange}
//           className="w-full border p-2 mb-3 rounded"
//         />

//         {/* Color */}
//         <input
//           type="text"
//           name="color"
//           placeholder="Color"
//           value={form.color}
//           onChange={handleChange}
//           className="w-full border p-2 mb-3 rounded"
//         />

//         {/* Category */}
//         <select
//           name="category"
//           value={form.category}
//           onChange={handleChange}
//           className="w-full border p-2 mb-3 rounded"
//         >
//           <option value="">Select Category</option>
//           {categories.map((cat, idx) => (
//             <option key={idx} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         {/* Image Upload */}
//         <input
//           type="file"
//           name="image"
//           accept="image/*"
//           ref={fileInputRef}
//           onChange={handleChange}
//           className="w-full border p-2 mb-3 rounded"
//         />

//         {/* Preview */}
//         {form.imagePreview && (
//           <img
//             src={form.imagePreview}
//             alt="Preview"
//             className="w-32 h-32 object-cover rounded mb-3"
//           />
//         )}

//         {/* Buttons */}
//         <div className="flex justify-end gap-2 mt-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 border rounded hover:bg-gray-100"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
//           >
//             {loading ? "Adding..." : "Add"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddBikeModal;
"use client";
import React, { useState, useRef } from "react";
import { addProduct } from "@/api/product/addproducts";

function AddBikeModal({ onClose, onSubmit }) {
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    brand: "",
    model: "",
    price: "",
    color: "",
    category: "",
    image: null,
    imagePreview: null,
  });

  const [loading, setLoading] = useState(false);

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

  // Handle input changes
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

  // Handle Submit
  const handleSubmit = async () => {
    if (!form.brand || !form.model || !form.price || !form.image || !form.category) {
      alert("⚠️ Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      // ✅ prepare FormData
      const formData = new FormData();
      formData.append("brand", form.brand);
      formData.append("model", form.model);
      formData.append("price", form.price);
      formData.append("color", form.color || "-");
      formData.append("category", form.category);
      formData.append("productImage", form.image); // 👈 backend expects this key

      // ✅ Call API
      const response = await addProduct(formData);

      // ✅ Add to UI (parent state update)
      if (onSubmit) onSubmit(response);

      alert("✅ Bike added successfully!");
      onClose();
    } catch (error) {
      console.error("❌ Error adding bike:", error);
      alert(error.response?.data?.message || "Failed to add bike!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#08070731] backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white text-black p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Bike</h2>

        {/* Brand */}
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={form.brand}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Model */}
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={form.model}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Color */}
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={form.color}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Category */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        >
          <option value="">Select Category</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Image Upload */}
        <input
          type="file"
          name="image"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Preview */}
        {form.imagePreview && (
          <img
            src={form.imagePreview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded mb-3 border"
          />
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBikeModal;
