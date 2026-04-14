import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // agar tu token use karega future me
    localStorage.removeItem("token");

    navigate("/"); // ya login page
  };

  return (
    <div className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-6">
      
      {/* 🔥 Left side */}
      <h1 className="text-xl font-bold">Admin Panel</h1>

      {/* 🔥 Right side */}
      <div className="flex items-center gap-4">
        
        <p>Admin</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default Navbar;