import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto py-6 text-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Grid and Chart section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Grid box */}
        <Link to="/grids" className="bg-white shadow-md rounded-md p-6 hover:bg-gray-100 block">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Grid</h2>
          <div className="bg-gray-200 rounded-md p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Grid</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a eros nec leo efficitur dapibus.</p>
          </div>
        </Link>
        
        {/* Chart box */}
        <Link to="/charts" className="bg-white shadow-md rounded-md p-6 hover:bg-gray-100 block">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Chart</h2>
          <div className="bg-gray-200 rounded-md p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Chart</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a eros nec leo efficitur dapibus.</p>
          </div>
        </Link>
        <Link to="/users/userslist" className="bg-white shadow-md rounded-md p-6 hover:bg-gray-100 block">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Users</h2>
          <div className="bg-gray-200 rounded-md p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Users</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a eros nec leo efficitur dapibus.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
