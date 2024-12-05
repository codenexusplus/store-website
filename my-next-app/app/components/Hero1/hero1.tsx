
// components/Categories.js
import React from "react";

const Categories = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories Section */}
        <div className="flex justify-between items-center mb-6">
          <h2
            className="text-lg font-bold text-red-500"
            style={{ width: "126px", height: "40px" }}
          >
            Categories
          </h2>
          <div
            className="flex items-center text-black text-xl font-semibold"
            style={{ width: "379px", height: "48px" }}
          >
            Browse By Category
            <button className="ml-auto bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              ←
            </button>
            <button className="ml-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              →
            </button>
          </div>
        </div>

        {/* New Layout Section */}
        <div
          className="bg-gray-50 border border-gray-200 rounded-lg p-4"
          style={{ width: "1170px", height: "145px" }}
        >
          <div className="flex justify-between items-center">
            {[
              { icon: "📱", name: "Phone" },
              { icon: "💻", name: "Computer" },
              { icon: "⌚", name: "Smart Watch" },
              { icon: "📷", name: "Camera" },
              { icon: "🎧", name: "Headphones" },
              { icon: "🎮", name: "Gaming" },
            ].map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md"
                style={{
                  width: "170px",
                  height: "145px",
                  display: "flex",
                  padding: "30px",
                }}
              >
                <span className="text-4xl">{category.icon}</span>
                <span className="mt-2 text-sm font-medium text-gray-700">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;