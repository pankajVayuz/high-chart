import React from 'react';
import { Link } from 'react-router-dom';

const GridNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">Dashboard</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/grids/grid1" className="text-white hover:text-gray-300">Grid 1</Link>
          <Link to="/grids/grid2" className="text-white hover:text-gray-300">Grid 2</Link>
          <Link to="/grids/grid3" className="text-white hover:text-gray-300">Grid 3</Link>
          <Link to="/grids/grid4" className="text-white hover:text-gray-300">Grid 4</Link>
          <Link to="/grids/grid5" className="text-white hover:text-gray-300">Grid 5</Link>
          <Link to="/grids/grid6" className="text-white hover:text-gray-300">Grid 6</Link>
          <Link to="/grids/grid7" className="text-white hover:text-gray-300">Grid 7</Link>
          <Link to="/grids/grid8" className="text-white hover:text-gray-300">Grid 8</Link>
        </div>
      </div>
    </nav>
  );
};

export default GridNavbar;
