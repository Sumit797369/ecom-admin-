import { useState } from "react";

const Add = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image1", image);

    const res = await fetch("http://localhost:4000/api/product/add", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    alert("Product Added ✅");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow w-[400px]"
    >
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-3"
      />

      <button className="bg-black text-white px-4 py-2 rounded w-full">
        Add Product
      </button>
    </form>
  );
};

export default Add;