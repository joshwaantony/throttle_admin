



// "use client";

// import React, { useState } from "react";

// const initialBikes = [
//   {
//     image: "/images/giant-escape.jpg",
//     brand: "Giant",
//     model: "Escape",
//     price: 2100,
//     color: "Black",
//   },
//   {
//     image: "/images/trek-powerfly.jpg",
//     brand: "Trek",
//     model: "Powerfly",
//     price: 3650,
//     color: "Silver",
//   },
//   {
//     image: "/images/turbo-vado-sl.jpg",
//     brand: "Specialized",
//     model: "Turbo Vado SL",
//     price: 3500,
//     color: "Gray",
//   },
//   {
//     image: "/images/recumbent-trike.jpg",
//     brand: "Recumbent",
//     model: "Trike",
//     price: 3650,
//     color: "Orange",
//   },
//   {
//     image: "/images/santa-cruz-hightower.jpg",
//     brand: "Santa Cruz",
//     model: "Hightower",
//     price: 2350,
//     color: "Red",
//   },
//   {
//     image: "/images/specialized-allez-sprint.jpg",
//     brand: "Specialized",
//     model: "Allez Sprint",
//     price: 2200,
//     color: "White",
//   },
// ];

// export default function BikeTable() {
//   const [bikes, setBikes] = useState(initialBikes);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentBike, setCurrentBike] = useState(null);

//   const handleDelete = (index) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this bike?");
//     if (confirmDelete) {
//       const updatedBikes = [...bikes];
//       updatedBikes.splice(index, 1);
//       setBikes(updatedBikes);
//     }
//   };

//   const openEditModal = (bike, index) => {
//     setCurrentBike({ ...bike, index });
//     setIsModalOpen(true);
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentBike((prev) => ({ ...prev, [name]: value }));
//   };

//   const saveEdit = () => {
//     const updatedBikes = [...bikes];
//     updatedBikes[currentBike.index] = {
//       ...currentBike,
//       price: parseFloat(currentBike.price),
//     };
//     delete updatedBikes[currentBike.index].index;
//     setBikes(updatedBikes);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="p-8 bg-white rounded-xl shadow-lg">
//       <h2 className="text-3xl text-gray-800 font-bold mb-6">Bikes</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full text-left border border-gray-200 rounded-xl">
//           <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
//             <tr>
//               <th className="p-4">Image</th>
//               <th className="p-4">Brand</th>
//               <th className="p-4">Model</th>
//               <th className="p-4">Price</th>
//               <th className="p-4">Colour</th>
//               <th className="p-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {bikes.map((bike, index) => (
//               <tr key={index} className="hover:bg-gray-50 transition duration-200">
//                 <td className="p-4">
//                   <img
//                     src={bike.image}
//                     alt={`${bike.brand} ${bike.model}`}
//                     className="w-20 h-20 object-cover rounded-md border"
//                   />
//                 </td>
//                 <td className="p-4 font-medium text-gray-700">{bike.brand}</td>
//                 <td className="p-4 text-gray-600">{bike.model}</td>
//                 <td className="p-4 font-semibold text-green-600">${bike.price.toFixed(2)}</td>
//                 <td className="p-4 text-black">{bike.color}</td>
//                 <td className="p-4 flex gap-2">
//                   <button
//                     onClick={() => openEditModal(bike, index)}
//                     className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <p className="text-sm text-gray-500 mt-4">
//           Displayed records: 1-{bikes.length} of {bikes.length}
//         </p>
//       </div>

//       {/* Edit Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md">
//             <h3 className="text-xl font-bold mb-4 text-gray-800">Edit Bike</h3>
//             <div className="space-y-3">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Brand</label>
//                 <input
//                   type="text"
//                   name="brand"
//                   value={currentBike.brand}
//                   onChange={handleEditChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Model</label>
//                 <input
//                   type="text"
//                   name="model"
//                   value={currentBike.model}
//                   onChange={handleEditChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   value={currentBike.price}
//                   onChange={handleEditChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Color</label>
//                 <input
//                   type="text"
//                   name="color"
//                   value={currentBike.color}
//                   onChange={handleEditChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
//                 />
//               </div>
//             </div>
//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={saveEdit}
//                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




"use client";

import React, { useState } from "react";

const initialBikes = [
  {
    image: "/images/giant-escape.jpg",
    brand: "Giant",
    model: "Escape",
    price: 2100,
    color: "Black",
  },
  {
    image: "/images/trek-powerfly.jpg",
    brand: "Trek",
    model: "Powerfly",
    price: 3650,
    color: "Silver",
  },
  {
    image: "/images/turbo-vado-sl.jpg",
    brand: "Specialized",
    model: "Turbo Vado SL",
    price: 3500,
    color: "Gray",
  },
  {
    image: "/images/recumbent-trike.jpg",
    brand: "Recumbent",
    model: "Trike",
    price: 3650,
    color: "Orange",
  },
  {
    image: "/images/santa-cruz-hightower.jpg",
    brand: "Santa Cruz",
    model: "Hightower",
    price: 2350,
    color: "Red",
  },
  {
    image: "/images/specialized-allez-sprint.jpg",
    brand: "Specialized",
    model: "Allez Sprint",
    price: 2200,
    color: "White",
  },
];

export default function BikeTable() {
  const [bikes, setBikes] = useState(initialBikes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBike, setCurrentBike] = useState(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const openEditModal = (bike, index) => {
    setCurrentBike({ ...bike, index });
    setIsModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentBike((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = () => {
    const updatedBikes = [...bikes];
    updatedBikes[currentBike.index] = {
      ...currentBike,
      price: parseFloat(currentBike.price),
    };
    delete updatedBikes[currentBike.index].index;
    setBikes(updatedBikes);
    setIsModalOpen(false);
  };

  const confirmDelete = (index) => {
    setDeleteIndex(index);
    setIsDeleteConfirmOpen(true);
  };

  const handleDelete = () => {
    const updatedBikes = [...bikes];
    updatedBikes.splice(deleteIndex, 1);
    setBikes(updatedBikes);
    setDeleteIndex(null);
    setIsDeleteConfirmOpen(false);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl text-gray-800 font-bold mb-6">Bikes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-200 rounded-xl">
          <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Brand</th>
              <th className="p-4">Model</th>
              <th className="p-4">Price</th>
              <th className="p-4">Colour</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bikes.map((bike, index) => (
              <tr key={index} className="hover:bg-gray-50 transition duration-200">
                <td className="p-4">
                  <img
                    src={bike.image}
                    alt={`${bike.brand} ${bike.model}`}
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                </td>
                <td className="p-4 font-medium text-gray-700">{bike.brand}</td>
                <td className="p-4 text-gray-600">{bike.model}</td>
                <td className="p-4 font-semibold text-green-600">${bike.price.toFixed(2)}</td>
                <td className="p-4 text-black">{bike.color}</td>
                <td className="p-4  pt-10 flex   gap-2">
                  <button
                    onClick={() => openEditModal(bike, index)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => confirmDelete(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-gray-500 mt-4">
          Displayed records: 1-{bikes.length} of {bikes.length}
        </p>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#08070731]  backdrop-blur-xs flex items-center justify-center z-50">
          <div className="bg-white border border-gray-300 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Edit Bike</h3>
            <div className="space-y-3">
              {["brand", "model", "price", "color"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "price" ? "number" : "text"}
                    name={field}
                    value={currentBike[field]}
                    onChange={handleEditChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteConfirmOpen && (
        <div className="fixed inset-0 bg-[#08070731]  backdrop-blur-xs flex items-center justify-center z-50">
          <div className="bg-white border border-[#D0D5DB] p-6 rounded-xl max-w-sm w-full shadow-xl text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Delete Bike</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this bike?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsDeleteConfirmOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
