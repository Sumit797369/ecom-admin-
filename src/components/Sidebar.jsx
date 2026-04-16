import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full flex justify-center mt-3 md:mt-5">

      <div className="flex gap-2 md:gap-4 
        bg-white px-3 py-2 md:px-5 md:py-3 
        rounded-full shadow 
        overflow-x-auto
      ">

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full whitespace-nowrap transition ${
              isActive
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Add Product
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full whitespace-nowrap transition ${
              isActive
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          List Product
        </NavLink>

        <NavLink
          to="/order"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full whitespace-nowrap transition ${
              isActive
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
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