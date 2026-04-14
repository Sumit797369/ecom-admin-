import { useEffect, useState } from "react";

const List = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:4000/api/product/list");
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    await fetch("http://localhost:4000/api/product/remove", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    fetchProducts(); // refresh list
  };
  return (
    <div className="p-5">
      <h2>All Products</h2>

      {products.map((item) => (
        <div key={item._id}>
          <img src={`http://localhost:4000${item.image[0]}`} width="100" />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button onClick={() => deleteProduct(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;
