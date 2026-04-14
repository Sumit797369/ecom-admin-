import React from 'react'
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Order from './pages/Order';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </div>
    </>
  )
}

export default App
