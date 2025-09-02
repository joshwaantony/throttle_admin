
// "use client";

// import { getProducts } from "@/api/product/getproduct";
// import DeleteConfirmModal from "@/components/common/DeleteConfirmModal";

// import AddBikeModal from "@/components/products/AddProducts";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import EditBike from "@/components/products/EditBike";
// import { deleteproduct } from "@/api/product/deleteproduct";

// export default function BikeTable() {
//   const [editBike, setEditBike] = useState(null); // store clicked bike
//   const [bikes, setBikes] = useState([]);
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [deleteId, setDeleteId] = useState(null);


//   const searchParams = useSearchParams();
//   const category = searchParams.get("category") || "trending";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const data = await getProducts(category);
//         setBikes(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [category]);

//   const handleAddBike = (newBike) => {
//     setBikes((prev) => [...prev, newBike]);
//   };

//   // Delete handler
//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this product?")) return;

//     try {
//       await deleteproduct(id);

//       // remove from UI
//       setBikes((prev) => prev.filter((bike) => bike._id !== id));
//     } catch (error) {
//       console.error("Error deleting product:", error);
//       alert("Failed to delete product. Please try again.");
//     }
//   };

//   // Save edited bike
//   const handleSaveEdit = (updatedBike) => {
//     setBikes((prev) =>
//       prev.map((bike) => (bike._id === updatedBike._id ? updatedBike : bike))
//     );
//     setEditBike(null);
//   };

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl text-gray-800 font-bold">
//           {category.charAt(0).toUpperCase() + category.slice(1)} Bikes
//         </h2>
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
//                 <th className="p-4">Actions</th>
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
//                       src={bike.image || bike.productImage}
//                       alt={`${bike.brand} ${bike.model}`}
//                       className="w-20 h-20 object-cover rounded-md border"
//                     />
//                   </td>
//                   <td className="p-4 font-medium text-gray-700">
//                     {bike.brand}
//                   </td>
//                   <td className="p-4 text-gray-600">{bike.model}</td>
//                   <td className="p-4 font-semibold text-green-600">
//                     ${bike.price}
//                   </td>
//                   <td className="p-4 text-black">{bike.color}</td>
//                   <td className="p-4 flex gap-2">
//                     <button
//                       onClick={() => setEditBike(bike)} // set clicked bike
//                       className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(bike._id)} // ✅ pass real id
//                       className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Edit Popup */}
//       {editBike && (
//         <EditBike
//           bike={editBike}
//           onClose={() => setEditBike(null)}
//           onSubmit={handleSaveEdit}
//         />
//       )}

//       {/* Add Modal */}
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
import EditBike from "@/components/products/EditBike";
import { deleteproduct } from "@/api/product/deleteproduct";
import DeleteConfirmModal from "@/components/common/DeleteConfirmModel";

export default function BikeTable() {
  const [editBike, setEditBike] = useState(null);
  const [bikes, setBikes] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ for delete modal
  const [deleteId, setDeleteId] = useState(null);

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

  // ✅ Delete confirm handler
  const confirmDelete = async () => {
    try {
      await deleteproduct(deleteId);
      setBikes((prev) => prev.filter((bike) => bike._id !== deleteId));
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    } finally {
      setDeleteId(null); // close modal after action
    }
  };

  // Save edited bike
  const handleSaveEdit = (updatedBike) => {
    setBikes((prev) =>
      prev.map((bike) => (bike._id === updatedBike._id ? updatedBike : bike))
    );
    setEditBike(null);
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
                <th className="p-4">Actions</th>
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
                  <td className="p-4 font-medium text-gray-700">
                    {bike.brand}
                  </td>
                  <td className="p-4 text-gray-600">{bike.model}</td>
                  <td className="p-4 font-semibold text-green-600">
                    ${bike.price}
                  </td>
                  <td className="p-4 text-black">{bike.color}</td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => setEditBike(bike)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteId(bike._id)} // ✅ open modal
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Popup */}
      {editBike && (
        <EditBike
          bike={editBike}
          onClose={() => setEditBike(null)}
          onSubmit={handleSaveEdit}
        />
      )}

      {/* Add Modal */}
      {isAddModalOpen && (
        <AddBikeModal
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddBike}
        />
      )}

      {/* ✅ Delete Modal */}
      <DeleteConfirmModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
