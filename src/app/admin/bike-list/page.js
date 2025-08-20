// // "use client";

// // import React, { useState } from "react";

// // const initialBikes = [
// //   {
// //     image: "/Hero-Xtreme-250R-launched-1.jpg",
// //     brand: "Giant",
// //     model: "Escape",
// //     price: 2100,
// //     color: "Black",
// //   },
// //   {
// //     image: "/images/trek-powerfly.jpg",
// //     brand: "Trek",
// //     model: "Powerfly",
// //     price: 3650,
// //     color: "Silver",
// //   },
// //   {
// //     image: "/images/turbo-vado-sl.jpg",
// //     brand: "Specialized",
// //     model: "Turbo Vado SL",
// //     price: 3500,
// //     color: "Gray",
// //   },
// //   {
// //     image: "/images/recumbent-trike.jpg",
// //     brand: "Recumbent",
// //     model: "Trike",
// //     price: 3650,
// //     color: "Orange",
// //   },
// //   {
// //     image: "/images/santa-cruz-hightower.jpg",
// //     brand: "Santa Cruz",
// //     model: "Hightower",
// //     price: 2350,
// //     color: "Red",
// //   },
// //   {
// //     image: "/images/specialized-allez-sprint.jpg",
// //     brand: "Specialized",
// //     model: "Allez Sprint",
// //     price: 2200,
// //     color: "White",
// //   },
// // ];

// // export default function BikeTable() {
// //   const [bikes, setBikes] = useState(initialBikes);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [currentBike, setCurrentBike] = useState(null);
// //   const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
// //   const [deleteIndex, setDeleteIndex] = useState(null);

// //   const openEditModal = (bike, index) => {
// //     setCurrentBike({ ...bike, index });
// //     setIsModalOpen(true);
// //   };

// //   const handleEditChange = (e) => {
// //     const { name, value } = e.target;
// //     setCurrentBike((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const saveEdit = () => {
// //     const updatedBikes = [...bikes];
// //     updatedBikes[currentBike.index] = {
// //       ...currentBike,
// //       price: parseFloat(currentBike.price),
// //     };
// //     delete updatedBikes[currentBike.index].index;
// //     setBikes(updatedBikes);
// //     setIsModalOpen(false);
// //   };

// //   const confirmDelete = (index) => {
// //     setDeleteIndex(index);
// //     setIsDeleteConfirmOpen(true);
// //   };

// //   const handleDelete = () => {
// //     const updatedBikes = [...bikes];
// //     updatedBikes.splice(deleteIndex, 1);
// //     setBikes(updatedBikes);
// //     setDeleteIndex(null);
// //     setIsDeleteConfirmOpen(false);
// //   };

// //   return (
// //     <div className="p-8">
// //       <h2 className="text-3xl text-gray-800 font-bold mb-6">Bikes</h2>
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full text-left border border-gray-200 rounded-xl">
// //           <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
// //             <tr>
// //               <th className="p-4">Image</th>
// //               <th className="p-4">Brand</th>
// //               <th className="p-4">Model</th>
// //               <th className="p-4">Price</th>
// //               <th className="p-4">Colour</th>
// //               <th className="p-4">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody className="divide-y divide-gray-200">
// //             {bikes.map((bike, index) => (
// //               <tr key={index} className="hover:bg-gray-50 transition duration-200">
// //                 <td className="p-4">
// //                   <img
// //                     src={bike.image}
// //                     alt={`${bike.brand} ${bike.model}`}
// //                     className="w-20 h-20 object-cover rounded-md border"
// //                   />
// //                 </td>
// //                 <td className="p-4 font-medium text-gray-700">{bike.brand}</td>
// //                 <td className="p-4 text-gray-600">{bike.model}</td>
// //                 <td className="p-4 font-semibold text-green-600">${bike.price.toFixed(2)}</td>
// //                 <td className="p-4 text-black">{bike.color}</td>
// //                 <td className="p-4  pt-10 flex   gap-2">
// //                   <button
// //                     onClick={() => openEditModal(bike, index)}
// //                     className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
// //                   >
// //                     Edit
// //                   </button>
// //                   <button
// //                     onClick={() => confirmDelete(index)}
// //                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
// //                   >
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //         <p className="text-sm text-gray-500 mt-4">
// //           Displayed records: 1-{bikes.length} of {bikes.length}
// //         </p>
// //       </div>

// //       {/* Edit Modal */}
// //       {isModalOpen && (
// //         <div className="fixed inset-0 bg-[#08070731]  backdrop-blur-xs flex items-center justify-center z-50">
// //           <div className="bg-white border border-gray-300 rounded-lg p-6 w-full max-w-md">
// //             <h3 className="text-xl font-bold mb-4 text-gray-800">Edit Bike</h3>
// //             <div className="space-y-3">
// //               {["brand", "model", "price", "color"].map((field) => (
// //                 <div key={field}>
// //                   <label className="block text-sm font-medium text-gray-700 capitalize">
// //                     {field}
// //                   </label>
// //                   <input
// //                     type={field === "price" ? "number" : "text"}
// //                     name={field}
// //                     value={currentBike[field]}
// //                     onChange={handleEditChange}
// //                     className="mt-1  text-black  px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
// //                   />
// //                 </div>
// //               ))}
// //             </div>
// //             <div className="mt-6 flex justify-end gap-3">
// //               <button
// //                 onClick={() => setIsModalOpen(false)}
// //                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={saveEdit}
// //                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
// //               >
// //                 Save
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Delete Confirmation Modal */}
// //       {isDeleteConfirmOpen && (
// //         <div className="fixed inset-0 bg-[#08070731]  backdrop-blur-xs flex items-center justify-center z-50">
// //           <div className="bg-white border border-[#D0D5DB] p-6 rounded-xl max-w-sm w-full shadow-xl text-center">
// //             <h3 className="text-lg font-semibold text-gray-800 mb-3">Delete Bike</h3>
// //             <p className="text-gray-600 mb-6">Are you sure you want to delete this bike?</p>
// //             <div className="flex justify-center gap-4">
// //               <button
// //                 onClick={() => setIsDeleteConfirmOpen(false)}
// //                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleDelete}
// //                 className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
// //               >
// //                 Yes, Delete
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // "use client";

// // import React, { useState } from "react";

// // const initialBikes = [
// //   {
// //     image: "/Hero-Xtreme-250R-launched-1.jpg",
// //     brand: "Giant",
// //     model: "Escape",
// //     price: 2100,
// //     color: "Black",
// //   },
// //   {
// //     image: "/images/trek-powerfly.jpg",
// //     brand: "Trek",
// //     model: "Powerfly",
// //     price: 3650,
// //     color: "Silver",
// //   },
// //   {
// //     image: "/images/turbo-vado-sl.jpg",
// //     brand: "Specialized",
// //     model: "Turbo Vado SL",
// //     price: 3500,
// //     color: "Gray",
// //   },
// //   {
// //     image: "/images/recumbent-trike.jpg",
// //     brand: "Recumbent",
// //     model: "Trike",
// //     price: 3650,
// //     color: "Orange",
// //   },
// //   {
// //     image: "/images/santa-cruz-hightower.jpg",
// //     brand: "Santa Cruz",
// //     model: "Hightower",
// //     price: 2350,
// //     color: "Red",
// //   },
// //   {
// //     image: "/images/specialized-allez-sprint.jpg",
// //     brand: "Specialized",
// //     model: "Allez Sprint",
// //     price: 2200,
// //     color: "White",
// //   },
// // ];

// // export default function BikeTable() {
// //   const [bikes, setBikes] = useState(initialBikes);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [currentBike, setCurrentBike] = useState(null);
// //   const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
// //   const [deleteIndex, setDeleteIndex] = useState(null);

// //   const openEditModal = (bike, index) => {
// //     setCurrentBike({ ...bike, index });
// //     setIsModalOpen(true);
// //   };

// //   const handleEditChange = (e) => {
// //     const { name, value } = e.target;
// //     setCurrentBike((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const imageURL = URL.createObjectURL(file);
// //       setCurrentBike((prev) => ({ ...prev, image: imageURL }));
// //     }
// //   };

// //   const saveEdit = () => {
// //     const updatedBikes = [...bikes];
// //     updatedBikes[currentBike.index] = {
// //       ...currentBike,
// //       price: parseFloat(currentBike.price),
// //     };
// //     delete updatedBikes[currentBike.index].index;
// //     setBikes(updatedBikes);
// //     setIsModalOpen(false);
// //   };

// //   const confirmDelete = (index) => {
// //     setDeleteIndex(index);
// //     setIsDeleteConfirmOpen(true);
// //   };

// //   const handleDelete = () => {
// //     const updatedBikes = [...bikes];
// //     updatedBikes.splice(deleteIndex, 1);
// //     setBikes(updatedBikes);
// //     setDeleteIndex(null);
// //     setIsDeleteConfirmOpen(false);
// //   };

// //   return (
// //     <div className="p-8">
// //       <h2 className="text-3xl text-gray-800 font-bold mb-6">Bikes</h2>
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full text-left border border-gray-200 rounded-xl">
// //           <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
// //             <tr>
// //               <th className="p-4">Image</th>
// //               <th className="p-4">Brand</th>
// //               <th className="p-4">Model</th>
// //               <th className="p-4">Price</th>
// //               <th className="p-4">Colour</th>
// //               <th className="p-4">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody className="divide-y divide-gray-200">
// //             {bikes.map((bike, index) => (
// //               <tr
// //                 key={index}
// //                 className="hover:bg-gray-50 transition duration-200"
// //               >
// //                 <td className="p-4">
// //                   <img
// //                     src={bike.image}
// //                     alt={`${bike.brand} ${bike.model}`}
// //                     className="w-20 h-20 object-cover rounded-md border"
// //                   />
// //                 </td>
// //                 <td className="p-4 font-medium text-gray-700">{bike.brand}</td>
// //                 <td className="p-4 text-gray-600">{bike.model}</td>
// //                 <td className="p-4 font-semibold text-green-600">
// //                   ${bike.price.toFixed(2)}
// //                 </td>
// //                 <td className="p-4 text-black">{bike.color}</td>
// //                 <td className="p-4 pt-10 flex gap-2">
// //                   <button
// //                     onClick={() => openEditModal(bike, index)}
// //                     className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
// //                   >
// //                     Edit
// //                   </button>
// //                   <button
// //                     onClick={() => confirmDelete(index)}
// //                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
// //                   >
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //         <p className="text-sm text-gray-500 mt-4">
// //           Displayed records: 1-{bikes.length} of {bikes.length}
// //         </p>
// //       </div>

// //       {/* Edit Modal */}
// //       {isModalOpen && (
// //         <div className="fixed inset-0 bg-[#08070731] backdrop-blur-xs flex items-center justify-center z-50">
// //           <div className="bg-white border border-gray-300 rounded-lg p-6 w-full max-w-md">
// //             <h3 className="text-xl font-bold mb-4 text-gray-800">Edit Bike</h3>
// //             <div className="space-y-3">
// //               {["brand", "model", "price", "color"].map((field) => (
// //                 <div key={field}>
// //                   <label className="block text-sm font-medium text-gray-700 capitalize">
// //                     {field}
// //                   </label>
// //                   <input
// //                     type={field === "price" ? "number" : "text"}
// //                     name={field}
// //                     value={currentBike[field]}
// //                     onChange={handleEditChange}
// //                     className="mt-1 text-black px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
// //                   />
// //                 </div>
// //               ))}
// //               {/* Image Upload */}

// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">
// //                   Upload Image
// //                 </label>

// //                 <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
// //                   <span className="text-gray-500 text-sm">
// //                     Click or drag image to upload
// //                   </span>
// //                   <input
// //                     type="file"
// //                     accept="image/*"
// //                     onChange={handleImageUpload}
// //                     className="hidden"
// //                   />
// //                 </label>

// //                 {currentBike.image && (
// //                   <img
// //                     src={currentBike.image}
// //                     alt="Preview"
// //                     className="mt-3 w-32 h-32 object-cover border rounded"
// //                   />
// //                 )}
// //               </div>
// //             </div>
// //             <div className="mt-6 flex justify-end gap-3">
// //               <button
// //                 onClick={() => setIsModalOpen(false)}
// //                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={saveEdit}
// //                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
// //               >
// //                 Save
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Delete Confirmation Modal */}
// //       {isDeleteConfirmOpen && (
// //         <div className="fixed inset-0 bg-[#08070731] backdrop-blur-xs flex items-center justify-center z-50">
// //           <div className="bg-white border border-[#D0D5DB] p-6 rounded-xl max-w-sm w-full shadow-xl text-center">
// //             <h3 className="text-lg font-semibold text-gray-800 mb-3">
// //               Delete Bike
// //             </h3>
// //             <p className="text-gray-600 mb-6">
// //               Are you sure you want to delete this bike?
// //             </p>
// //             <div className="flex justify-center gap-4">
// //               <button
// //                 onClick={() => setIsDeleteConfirmOpen(false)}
// //                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleDelete}
// //                 className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
// //               >
// //                 Yes, Delete
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // "use client";

// // import AddBikeModal from "@/components/products/AddProducts";
// // import React, { useState } from "react";


// // const initialBikes = [
// //   {
// //     image: "/Hero-Xtreme-250R-launched-1.jpg",
// //     brand: "Giant",
// //     model: "Escape",
// //     price: 2100,
// //     color: "Black",
// //   },
// //   {
// //     image: "/images/trek-powerfly.jpg",
// //     brand: "Trek",
// //     model: "Powerfly",
// //     price: 3650,
// //     color: "Silver",
// //   },
// //   {
// //     image: "/images/turbo-vado-sl.jpg",
// //     brand: "Specialized",
// //     model: "Turbo Vado SL",
// //     price: 3500,
// //     color: "Gray",
// //   },
// // ];

// // export default function BikeTable() {
// //   const [bikes, setBikes] = useState(initialBikes);
// //   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

// //   // ✅ Add new product to state
// //   const handleAddBike = (newBike) => {
// //     setBikes((prev) => [...prev, newBike]);
// //   };

// //   return (
// //     <div className="p-8">
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="text-3xl text-gray-800 font-bold">Bikes</h2>
// //         <button
// //           onClick={() => setIsAddModalOpen(true)}
// //           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// //         >
// //           + Add Product
// //         </button>
// //       </div>

// //       <div className="overflow-x-auto">
// //         <table className="min-w-full text-left border border-gray-200 rounded-xl">
// //           <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
// //             <tr>
// //               <th className="p-4">Image</th>
// //               <th className="p-4">Brand</th>
// //               <th className="p-4">Model</th>
// //               <th className="p-4">Price</th>
// //               <th className="p-4">Colour</th>
// //             </tr>
// //           </thead>
// //           <tbody className="divide-y divide-gray-200">
// //             {bikes.map((bike, index) => (
// //               <tr key={index} className="hover:bg-gray-50 transition duration-200">
// //                 <td className="p-4">
// //                   <img
// //                     src={bike.image}
// //                     alt={`${bike.brand} ${bike.model}`}
// //                     className="w-20 h-20 object-cover rounded-md border"
// //                   />
// //                 </td>
// //                 <td className="p-4 font-medium text-gray-700">{bike.brand}</td>
// //                 <td className="p-4 text-gray-600">{bike.model}</td>
// //                 <td className="p-4 font-semibold text-green-600">
// //                   ${bike.price}
// //                 </td>
// //                 <td className="p-4 text-black">{bike.color}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* ✅ Add Bike Modal */}
// //       {isAddModalOpen && (
// //         <AddBikeModal
// //           onClose={() => setIsAddModalOpen(false)}
// //           onSubmit={handleAddBike}
// //         />
// //       )}
// //     </div>
// //   );
// // }















// "use client";

// import { getProducts } from "@/api/product/getproduct";
// import AddBikeModal from "@/components/products/AddProducts";
// import React, { useState, useEffect } from "react";


// export default function BikeTable() {
//   const [bikes, setBikes] = useState([]);
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch bikes from API on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const data = await getProducts();
//         setBikes(data); // API response replaces local initialBikes
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);
  

//   // ✅ Add new product to state
//   const handleAddBike = (newBike) => {
//     setBikes((prev) => [...prev, newBike]);
//   };

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl text-gray-800 font-bold">Bikes</h2>
//         <button
//           onClick={() => setIsAddModalOpen(true)}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           + Add Product
//         </button>
//       </div>

//       {/* Loading State */}
//       {loading ? (
//         <p className="text-gray-500">Loading products...</p>
//       ) : bikes.length === 0 ? (
//         <p className="text-gray-500">No bikes found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-left border border-gray-200 rounded-xl">
//             <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
//               <tr>
//                 <th className="p-4">Image</th>
//                 <th className="p-4">Brand</th>
//                 <th className="p-4">Model</th>
//                 <th className="p-4">Price</th>
//                 <th className="p-4">Colour</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {bikes.map((bike, index) => (
//                 <tr
//                   key={index}
//                   className="hover:bg-gray-50 transition duration-200"
//                 >
//                   <td className="p-4">
//                     <img
//                       src={bike.image || bike.productImage} // 👈 check backend key
//                       alt={`${bike.brand} ${bike.model}`}
//                       className="w-20 h-20 object-cover rounded-md border"
//                     />
//                   </td>
//                   <td className="p-4 font-medium text-gray-700">{bike.brand}</td>
//                   <td className="p-4 text-gray-600">{bike.model}</td>
//                   <td className="p-4 font-semibold text-green-600">
//                     ${bike.price}
//                   </td>
//                   <td className="p-4 text-black">{bike.color}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* ✅ Add Bike Modal */}
//       {isAddModalOpen && (
//         <AddBikeModal
//           onClose={() => setIsAddModalOpen(false)}
//           onSubmit={handleAddBike}
//         />
//       )}
//     </div>
//   );
// }
"use client";

import { getProducts } from "@/api/product/getproduct";
import AddBikeModal from "@/components/products/AddProducts";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function BikeTable() {
  const [bikes, setBikes] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "trending";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getProducts(category);
        setBikes(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  const handleAddBike = (newBike) => {
    setBikes((prev) => [...prev, newBike]);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl text-gray-800 font-bold">
          {category.charAt(0).toUpperCase() + category.slice(1)} Bikes
        </h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Product
        </button>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-gray-500">Loading products...</p>
      ) : bikes.length === 0 ? (
        <p className="text-gray-500">No bikes found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-200 rounded-xl">
            <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Brand</th>
                <th className="p-4">Model</th>
                <th className="p-4">Price</th>
                <th className="p-4">Colour</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bikes.map((bike, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="p-4">
                    <img
                      src={bike.image || bike.productImage}
                      alt={`${bike.brand} ${bike.model}`}
                      className="w-20 h-20 object-cover rounded-md border"
                    />
                  </td>
                  <td className="p-4 font-medium text-gray-700">{bike.brand}</td>
                  <td className="p-4 text-gray-600">{bike.model}</td>
                  <td className="p-4 font-semibold text-green-600">
                    ${bike.price}
                  </td>
                  <td className="p-4 text-black">{bike.color}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isAddModalOpen && (
        <AddBikeModal
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddBike}
        />
      )}
    </div>
  );
}
