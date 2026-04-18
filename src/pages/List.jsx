import { useEffect, useState } from "react";
import { backendUrl } from "../App";

const List = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch(backendUrl + "/api/product/list");
    const data = await res.json();
    setProducts(data.products);
    setLoading(false);
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return; // 🔥 confirm

    await fetch(backendUrl + "/api/product/remove", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="px-3 md:px-6 py-4">
      <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
        All Products
      </h2>

      {/* 🔹 Shimmer Loading */}
      {loading ? (
  /* 🔹 Shimmer */
  <div className="space-y-3">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="h-12 bg-gray-200 rounded animate-pulse"
      ></div>
    ))}
  </div>
) : products.length === 0 ? (
  /* 🔥 Empty */
  <div className="text-center py-20 text-gray-500">
    No Products Found 😕
  </div>
) : (
  /* 🔥 TABLE */
  <div className="overflow-x-auto bg-white rounded-xl shadow">
    <table className="min-w-full text-sm text-left">
      
      {/* 🔹 Head */}
      <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
        <tr>
          <th className="px-4 py-3">Sr.</th>
          <th className="px-4 py-3">Image</th>
          <th className="px-4 py-3">Name</th>
          <th className="px-4 py-3">Category</th>
          <th className="px-4 py-3">Price</th>
          <th className="px-4 py-3 text-center">Action</th>
        </tr>
      </thead>

      {/* 🔹 Body */}
      <tbody>
        {products.map((item, index) => (
          <tr
            key={item._id}
            className="border-t hover:bg-gray-50 transition"
          >
            {/* Sr No */}
            <td className="px-4 py-3">{index + 1}</td>

            {/* Image */}
            <td className="px-4 py-3">
              <img
                src={`http://localhost:4000${item.image[0]}`}
                className="w-14 h-14 object-cover rounded-lg border"
              />
            </td>

            {/* Name */}
            <td className="px-4 py-3 font-medium text-gray-800">
              {item.name}
            </td>

            {/* Category */}
            <td className="px-4 py-3">
              {item.category}
            </td>

            {/* Price */}
            <td className="px-4 py-3 font-semibold">
              ₹ {item.price}
            </td>

            {/* Delete */}
            <td className="px-4 py-3 text-center">
              <button
                onClick={() => deleteProduct(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md text-xs hover:bg-red-600 transition"
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
    </div>
  );
};

export default List;
