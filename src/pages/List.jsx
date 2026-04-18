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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse"
            >
              <div className="h-40 md:h-52 bg-gray-200"></div>
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-8 bg-gray-200 rounded mt-3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        /* 🔥 EMPTY STATE */
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-xl font-semibold text-gray-600">
            No Products Found 😕
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Start by adding your first product
          </p>
        </div>
      ) : (
        /* 🔹 Product Grid */
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm 
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative"
            >
              {/* 🔹 Image */}
              <div className="overflow-hidden relative">
                <img
                  src={`http://localhost:4000${item.image[0]}`}
                  className="w-full h-40 md:h-52 object-cover 
                  group-hover:scale-110 transition-transform duration-500"
                />

                {/* 🔥 Hover Full Preview */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <img
                    src={`http://localhost:4000${item.image[0]}`}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* 🔹 Content */}
              <div className="p-4">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {item.name}
                </p>

                <p className="mt-1 text-base font-semibold text-black">
                  ₹ {item.price}
                </p>

                {/* 🔹 Actions */}
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => deleteProduct(item._id)}
                    className="flex-1 bg-red-500 text-white py-1.5 rounded-lg text-sm hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
