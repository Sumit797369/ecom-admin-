import { useEffect, useState } from "react";

const List = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:4000/api/product/list");
    const data = await res.json();
    setProducts(data.products);
  };

  const deleteProduct = async (id) => {
    await fetch("http://localhost:4000/api/product/remove", {
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

      {/* 🔹 Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white p-3 md:p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={`http://localhost:4000${item.image[0]}`}
              className="h-32 md:h-40 w-full object-cover rounded-lg"
            />

            <h3 className="mt-2 font-semibold text-sm md:text-base line-clamp-1">
              {item.name}
            </h3>

            <p className="text-gray-500 text-sm md:text-base">
              ₹{item.price}
            </p>

            <button
              onClick={() => deleteProduct(item._id)}
              className="mt-2 md:mt-3 bg-red-500 text-white w-full py-1.5 rounded-lg text-sm hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;