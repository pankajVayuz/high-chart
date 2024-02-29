import React from 'react';
import { Link } from 'react-router-dom';

const ChartNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">Dashboard</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/charts/chart1" className="text-white hover:text-gray-300">Chart 1</Link>
          <Link to="/charts/chart2" className="text-white hover:text-gray-300">Chart 2</Link>
          <Link to="/charts/chart3" className="text-white hover:text-gray-300">Chart 3</Link>
          <Link to="/charts/chart4" className="text-white hover:text-gray-300">Chart 4</Link>
          <Link to="/charts/chart5" className="text-white hover:text-gray-300">Chart 5</Link>
          <Link to="/charts/chart6" className="text-white hover:text-gray-300">Chart 6</Link>
          <Link to="/charts/chart7" className="text-white hover:text-gray-300">Chart 7</Link>
          <Link to="/charts/chart8" className="text-white hover:text-gray-300">Chart 8</Link>
        </div>
      </div>
    </nav>
  );
};

export default ChartNavbar;
