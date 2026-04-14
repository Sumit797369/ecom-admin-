import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-gray-100 p-5">
      <Link to="/add">Add Product</Link>
      <br />
      <Link to="/list">List Product</Link>
      <br />
      <Link to="/orders">Orders</Link>
    </div>
  );
};

export default Sidebar;