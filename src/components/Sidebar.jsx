import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white shadow">

      {/* 🔹 Mobile = Top Navbar */}
      <div className="flex md:flex-col md:h-screen md:w-64 p-3 md:p-6 gap-2 md:gap-3 overflow-x-auto">

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `px-4 py-2 md:p-3 rounded-lg whitespace-nowrap transition ${
              isActive
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          Add Product
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `px-4 py-2 md:p-3 rounded-lg whitespace-nowrap transition ${
              isActive
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          List Product
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `px-4 py-2 md:p-3 rounded-lg whitespace-nowrap transition ${
              isActive
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          Orders
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;