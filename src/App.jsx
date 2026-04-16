import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import { useEffect, useState } from "react";
import Login from "./components/Login";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-[#f8f8f8] min-h-screen overflow-x-hidden">
      
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          {/* 🔹 Navbar */}
          <Navbar setToken={setToken} />

          {/* 🔹 Main Layout */}
          <div className="flex flex-col md:flex-row">

            {/* Sidebar */}
            <Sidebar />

            {/* Content */}
            <div className="p-3 md:p-6">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/order" element={<Order token={token} />} />
              </Routes>
            </div>

          </div>
        </>
      )}
    </div>
  );
}

export default App;