import { useState } from "react";
import toast from "react-hot-toast";
import { backendUrl } from "../App";

const Add = ({ token }) => {
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Men",
    subCategory: "Topwear",
    price: "",
    sizes: [],
    bestseller: false,
  });

  const [images, setImages] = useState([null, null, null, null]);
  const [loading, setLoading] = useState(false); // 🔥 shimmer state

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSize = (size) => {
    setData((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const handleImage = (index, file) => {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 🔥 start shimmer

    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        if (key === "sizes") {
          formData.append("sizes", JSON.stringify(data.sizes));
        } else {
          formData.append(key, data[key]);
        }
      });

      images.forEach((img, i) => {
        if (img) formData.append(`image${i + 1}`, img);
      });

      const res = await fetch(backendUrl + "/api/product/add", {
        method: "POST",
        headers: {
          token: token,
        },
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Product Added ✅");
        setData({
          name: "",
          description: "",
          category: "Men",
          subCategory: "Topwear",
          price: "",
          sizes: [],
        });
        setImages([null, null, null, null]);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

    setLoading(false); // 🔥 stop shimmer
  };

  return (
    <div className="w-full px-3 md:px-8 py-6">
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      {/* 🔥 SHIMMER */}
      {loading ? (
        <div className="space-y-6 max-w-4xl animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/3"></div>

          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-24 bg-gray-200 rounded"></div>

          <div className="grid grid-cols-3 gap-4">
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>

          <div className="flex gap-3">
            <div className="h-10 w-16 bg-gray-200 rounded-full"></div>
            <div className="h-10 w-16 bg-gray-200 rounded-full"></div>
            <div className="h-10 w-16 bg-gray-200 rounded-full"></div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>

          <div className="h-12 bg-gray-300 rounded w-40"></div>
        </div>
      ) : (
        /* 🔹 FORM */
        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
          {/* Name */}
          <div>
            <label className="font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              placeholder="e.g. Cotton Oversized T-Shirt"
              onChange={handleChange}
              className="w-full mt-2 border p-3 rounded-lg focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-medium">Description</label>
            <textarea
              name="description"
              value={data.description}
              rows="4"
              placeholder="Write product details..."
              onChange={handleChange}
              className="w-full mt-2 border p-3 rounded-lg focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Category */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <select
              name="category"
              value={data.category}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            >
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>

            <select
              name="subCategory"
              value={data.subCategory}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            >
              <option>Topwear</option>
              <option>Bottomwear</option>
              <option>Winterwear</option>
            </select>

            <input
              type="number"
              name="price"
              value={data.price}
              placeholder="e.g. 999"
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
          </div>

          {/* Sizes */}
          <div>
            <label className="font-medium">Sizes</label>
            <div className="flex gap-3 mt-2 flex-wrap">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => handleSize(size)}
                  className={`px-4 py-1 border rounded-full ${
                    data.sizes.includes(size)
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <label
                key={index}
                className="border rounded-lg h-32 flex items-center justify-center cursor-pointer bg-gray-50 text-gray-400 text-sm"
              >
                {img ? (
                  <img
                    src={URL.createObjectURL(img)}
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  `Image ${index + 1}`
                )}
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleImage(index, e.target.files[0])}
                />
              </label>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="bestSeller"
              checked={data.bestSeller}
              onChange={(e) =>
                setData({ ...data, bestSeller: e.target.checked })
              }
              className="w-5 h-5 cursor-pointer"
            />
            <label htmlFor="bestSeller" className="font-medium cursor-pointer">
              Add to Best Seller
            </label>
          </div>
          {/* Button */}
          <button
            disabled={loading}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Add Product
          </button>
        </form>
      )}
    </div>
  );
};

export default Add;
