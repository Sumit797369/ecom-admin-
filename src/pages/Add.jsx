import { useState } from "react";

const Add = () => {
const [image1,setImage1] = useState(false)
const [image2,setImage2] = useState(false)
const [image3,setImage3] = useState(false)
const [image4,setImage4] = useState(false)
  return (
    <div className="w-full px-3 md:px-8 py-6">

      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">

        {/* 🔹 Product Name */}
        <div>
          <label className="font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Cotton Oversized T-Shirt"
            onChange={handleChange}
            className="w-full mt-2 border p-3 rounded-lg focus:ring-2 focus:ring-black"
          />
        </div>

        {/* 🔹 Description */}
        <div>
          <label className="font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Write product details like fabric, fit, style, etc..."
            rows="4"
            onChange={handleChange}
            className="w-full mt-2 border p-3 rounded-lg focus:ring-2 focus:ring-black"
          />
        </div>

        {/* 🔹 Category */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="font-medium">Category</label>
            <select
              name="category"
              onChange={handleChange}
              className="w-full mt-2 border p-3 rounded-lg"
            >
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Sub Category</label>
            <select
              name="subCategory"
              onChange={handleChange}
              className="w-full mt-2 border p-3 rounded-lg"
            >
              <option>Topwear</option>
              <option>Bottomwear</option>
              <option>Winterwear</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Price</label>
            <input
              type="number"
              name="price"
              placeholder="e.g. 999"
              onChange={handleChange}
              className="w-full mt-2 border p-3 rounded-lg"
            />
          </div>
        </div>

        {/* 🔹 Sizes */}
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
                    : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* 🔹 Image Upload */}
        <div>
          <label className="font-medium">Upload Images</label>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {images.map((img, index) => (
              <label
                key={index}
                className="border rounded-lg h-32 flex items-center justify-center cursor-pointer bg-gray-50"
              >
                {img ? (
                  <img
                    src={URL.createObjectURL(img)}
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-gray-400">Upload</span>
                )}
                <input
                  type="file"
                  hidden
                  onChange={(e) =>
                    handleImage(index, e.target.files[0])
                  }
                />
              </label>
            ))}
          </div>
        </div>

        {/* 🔹 Submit */}
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
          Add Product
        </button>

      </form>
    </div>
  );
};

export default Add;