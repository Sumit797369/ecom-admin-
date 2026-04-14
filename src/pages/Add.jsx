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
  };

  return (
    <form onSubmit={handleSubmit} className="p-5">
      <input
        type="text"
        placeholder="Product Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default Add;