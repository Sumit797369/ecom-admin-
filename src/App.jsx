import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import { useState } from "react";
import Login from "./components/Login";

export const backendUrl = import.meta.env.VITE_BACKEND_URL

function App() {
  const[token,setToken] = useState('');

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      {token == "" ? <Login/> : 
 <>
<Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-8">
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </div>

      </>
      
}
     

    </div>
      
  );
}

export default App;