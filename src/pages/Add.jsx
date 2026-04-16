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
    <div className="flex justify-center items-start md:items-center min-h-[80vh] px-3">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 md:p-6 rounded-2xl shadow w-full max-w-md"
      >
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-center">
          Add Product
        </h2>

        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-2.5 mb-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2.5 mb-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full mb-4 text-sm"
        />

        <button className="bg-black text-white py-2.5 rounded-lg w-full hover:bg-gray-800 transition">
          Add Product
        </button>
      </form>

    </div>
  );
};

export default Add;