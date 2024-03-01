import React from 'react';

const Shimmer = () => {
  return (
    <div className="p-4">
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {[...Array(10).keys()].map((index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-md animate-pulse">
            <div className="flex items-center justify-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
            </div>
            <div className="text-center">
              <p className="font-semibold bg-gray-300 h-6 w-24 mb-2 rounded"></p>
              <p className="text-gray-600 bg-gray-300 h-4 w-20 mb-1 rounded"></p>
              <p className="text-gray-600 bg-gray-300 h-4 w-28 mb-1 rounded"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
