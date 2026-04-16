import { useNavigate } from "react-router-dom";

const Navbar = ({setToken}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-white shadow px-4 md:px-8 py-4 flex items-center justify-between">

      {/* Left (Empty for spacing on desktop) */}
      <div className="hidden md:block w-1/3"></div>

      {/* 🔹 Center Logo */}
      <h1 className="text-xl md:text-2xl font-bold tracking-wide text-center w-full md:w-1/3">
        URBAN <span className="text-gray-500">FASHION</span>
      </h1>

      {/* 🔹 Right */}
      <div className="flex items-center justify-end gap-3 md:gap-5 w-1/3">
        <p className="hidden sm:block text-gray-600">Admin</p>

        <button
          onClick={()=>setToken("")}
          className="bg-black text-white px-3 md:px-4 py-1 rounded-full text-sm md:text-base hover:bg-gray-800"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;