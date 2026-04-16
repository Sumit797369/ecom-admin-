import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-transparent md:bg-white md:shadow">

      {/* 🔹 Mobile = Centered Floating Nav */}
      <div className="flex md:flex-col md:h-screen md:w-64 
        p-2 md:p-6 gap-2 md:gap-3 
        overflow-x-auto 
        justify-center md:justify-start
        mx-auto mt-3 md:mt-0
        w-fit md:w-full
        bg-white md:bg-transparent
        rounded-full md:rounded-none
        shadow md:shadow-none
      ">

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `px-4 py-2 md:p-3 rounded-full md:rounded-lg whitespace-nowrap transition ${
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
            `px-4 py-2 md:p-3 rounded-full md:rounded-lg whitespace-nowrap transition ${
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
            `px-4 py-2 md:p-3 rounded-full md:rounded-lg whitespace-nowrap transition ${
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