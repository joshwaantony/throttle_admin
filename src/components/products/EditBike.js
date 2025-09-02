




// "use client";

// import React, { useState } from "react";
// import {
//   FaBicycle,
//   FaTag,
//   FaRupeeSign,
//   FaPalette,
//   FaUpload,
//   FaTimes,
//   FaSave,
// } from "react-icons/fa";

// export default function EditBike({ bike, onClose, onSubmit }) {
//   const [form, setForm] = useState({
//     brand: bike.brand || "",
//     model: bike.model || "",
//     price: bike.price || "",
//     color: bike.color || "",
//     image: bike.image || bike.productImage || "",
//     imageFile: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setForm((prev) => ({
//         ...prev,
//         imageFile: file,
//         image: URL.createObjectURL(file), // Preview
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ ...bike, ...form });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
//           <FaBicycle className="text-blue-600" /> Edit Bike
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Brand */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//               <FaTag /> Brand
//             </label>
//             <input
//               type="text"
//               name="brand"
//               value={form.brand}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Model */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//               <FaBicycle /> Model
//             </label>
//             <input
//               type="text"
//               name="model"
//               value={form.model}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Price */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//               <FaRupeeSign /> Price
//             </label>
//             <input
//               type="number"
//               name="price"
//               value={form.price}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Color */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//               <FaPalette /> Color
//             </label>
//             <input
//               type="text"
//               name="color"
//               value={form.color}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Image Upload */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
//               <FaUpload /> Upload Image
//             </label>

//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="hidden"
//                 id="imageUpload"
//               />
//               <label
//                 htmlFor="imageUpload"
//                 className="flex flex-col items-center justify-center cursor-pointer"
//               >
//                 {form.image ? (
//                   <img
//                     src={form.image}
//                     alt="Preview"
//                     className="w-32 h-32 object-cover rounded-lg border mb-2"
//                   />
//                 ) : (
//                   <>
//                     <FaUpload className="text-gray-400 text-3xl mb-2" />
//                     <span className="text-gray-500 text-sm">
//                       Click to upload
//                     </span>
//                   </>
//                 )}
//               </label>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-3 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
//             >
//               <FaTimes /> Cancel
//             </button>
//             <button
//               type="submit"
//               className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               <FaSave /> Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }







// "use client";

// import React, { useState } from "react";
// import {
//   FaBicycle,
//   FaTag,
//   FaRupeeSign,
//   FaPalette,
//   FaUpload,
//   FaTimes,
//   FaSave,
// } from "react-icons/fa";

// export default function EditBike({ bike, onClose, onSubmit }) {
//   const [form, setForm] = useState({
//     brand: bike.brand || "",
//     model: bike.model || "",
//     price: bike.price || "",
//     color: bike.color || "",
//     image: bike.image || bike.productImage || "",
//     imageFile: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setForm((prev) => ({
//         ...prev,
//         imageFile: file,
//         image: URL.createObjectURL(file), // Preview
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ ...bike, ...form });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 backdrop-blur-2xl flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
//           <FaBicycle className="text-blue-600" /> Edit Bike
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Brand */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//               <FaTag /> Brand
//             </label>
//             <input
//               type="text"
//               name="brand"
//               value={form.brand}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Model */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//               <FaBicycle /> Model
//             </label>
//             <input
//               type="text"
//               name="model"
//               value={form.model}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Price */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//               <FaRupeeSign /> Price
//             </label>
//             <input
//               type="number"
//               name="price"
//               value={form.price}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Color */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//               <FaPalette /> Color
//             </label>
//             <input
//               type="text"
//               name="color"
//               value={form.color}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Image Upload */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
//               <FaUpload /> Upload Image
//             </label>

//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="hidden"
//                 id="imageUpload"
//               />
//               <label
//                 htmlFor="imageUpload"
//                 className="flex flex-col items-center justify-center cursor-pointer"
//               >
//                 {form.image ? (
//                   <img
//                     src={form.image}
//                     alt="Preview"
//                     className="w-32 h-32 object-cover rounded-lg border mb-2"
//                   />
//                 ) : (
//                   <>
//                     <FaUpload className="text-gray-400 text-3xl mb-2" />
//                     <span className="text-gray-500 text-sm">
//                       Click to upload
//                     </span>
//                   </>
//                 )}
//               </label>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-3 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
//             >
//               <FaTimes /> Cancel
//             </button>
//             <button
//               type="submit"
//               className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               <FaSave /> Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }




"use client";
import { editproducts } from "@/api/product/editproduct";
import React, { useState } from "react";

export default function EditBike({ bike, onClose, onSubmit }) {
  const [form, setForm] = useState({
    brand: bike.brand || "",
    model: bike.model || "",
    price: bike.price || "",
    color: bike.color || "",
    image: bike.image || bike.productImage || "",
    imageFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({
        ...prev,
        imageFile: file,
        image: URL.createObjectURL(file), // preview only
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBike = await editproducts(bike._id, form);
      onSubmit(updatedBike); // update parent state
      onClose();
    } catch (error) {
      console.error("Error updating bike:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Bike</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Brand */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              className="mt-1 w-full border rounded p-2"
              required
            />
          </div>

          {/* Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Model
            </label>
            <input
              type="text"
              name="model"
              value={form.model}
              onChange={handleChange}
              className="mt-1 w-full border rounded p-2"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="mt-1 w-full border rounded p-2"
              required
            />
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Color
            </label>
            <input
              type="text"
              name="color"
              value={form.color}
              onChange={handleChange}
              className="mt-1 w-full border rounded p-2"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-1 block w-full text-sm text-gray-600"
            />
            {form.image && (
              <img
                src={form.image}
                alt="Preview"
                className="mt-2 w-20 h-20 object-cover rounded border"
              />
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
