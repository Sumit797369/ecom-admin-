import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";

function App() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      
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

    </div>
  );
}

export default App;