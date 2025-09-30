import React from 'react';

function Catalog() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="h-8 bg-gray-200 rounded-lg w-80 animate-pulse"></div>
        </div>

        <div className="flex gap-8">
          {/* Left Sidebar - Specialist Categories */}
          <div>
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-3 animate-pulse w-fit"
                >
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Doctor Cards Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 p-6 animate-pulse shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {/* Doctor Image Placeholder */}
                  <div className="w-full h-48 bg-gray-200 rounded-xl mb-4"></div>
                  
                  {/* Availability Status */}
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                  </div>
                  
                  {/* Doctor Name */}
                  <div className="h-6 bg-gray-200 rounded-lg w-full mb-2"></div>
                  
                  {/* Specialty */}
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;