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
    <div>
      <h2 className="text-xl font-semibold mb-6">All Products</h2>

      <div className="grid grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={`http://localhost:4000${item.image[0]}`}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="mt-2 font-semibold">{item.name}</h3>
            <p className="text-gray-500">₹{item.price}</p>

            <button
              onClick={() => deleteProduct(item._id)}
              className="mt-3 bg-red-500 text-white w-full py-1 rounded"
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