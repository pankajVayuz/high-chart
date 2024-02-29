import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">Home</Link>
        <div className="hidden md:flex space-x-4">

          <Link to="/grids" className="text-white hover:text-gray-300">Grid Dashboard</Link>
          <Link to="/charts" className="text-white hover:text-gray-300">Chart Dashboard</Link>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
