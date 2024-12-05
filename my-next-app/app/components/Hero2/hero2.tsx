// components/NewSection.js
import React from "react";

const NewSection = () => {
  const products = [
    {
      id: 1,
      image: "/coat.svg",
      name: "The North Coat",
      price: "$260",
      originalPrice: "$360",
      rating: 65,
    },
    {
      id: 2,
      image: "/bag.svg",
      name: "Gucci Duffle Bag",
      price: "$960",
      originalPrice: "$1160",
      rating: 65,
    },
    {
      id: 3,
      image: "/cpu.svg",
      name: "RGB Liquid CPU Cooler",
      price: "$160",
      originalPrice: "$170",
      rating: 65,
    },
    {
      id: 4,
      image: "/shelf.svg",
      name: "Small Bookshelf",
      price: "$380",
      originalPrice: "$400",
      rating: 85,
    },
  ];

  return (
    <div className="bg-white py-8">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-gray-200 rounded-lg"
        style={{ width: "1170px", height: "auto" }}
      >
        {/* Header Row */}
        <div className="flex justify-between items-center mb-6">
          <h2
            className="text-lg font-bold text-red-500"
            style={{ width: "125px", height: "40px" }}
          >
            This Month
          </h2>
          <div className="flex items-center">
            <h3
              className="text-black font-semibold text-xl"
              style={{ width: "400px", height: "48px" }}
            >
              Best Selling Products
            </h3>
            <button
              className="ml-6 bg-red-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-600"
              style={{ width: "159px", height: "56px" }}
            >
              View All
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ padding: "60px 0" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-300 rounded-lg shadow-md"
              style={{ width: "270px", height: "350px" }}
            >
              {/* Image */}
              <div
                className="relative"
                style={{ width: "270px", height: "250px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button
                    className="bg-white p-1 rounded-full shadow hover:shadow-md"
                    style={{ width: "24px", height: "24px" }}
                  >
                    ❤️
                  </button>
                  <button
                    className="bg-white p-1 rounded-full shadow hover:shadow-md"
                    style={{ width: "24px", height: "24px" }}
                  >
                    👁️
                  </button>
                </div>
              </div>

              {/* Text Section */}
              <div className="p-4 text-center">
                <h3 className="text-gray-700 font-medium mb-1">
                  {product.name}
                </h3>
                <div className="text-red-500 font-bold">
                  {product.price}{" "}
                  <span className="text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                </div>
                <div className="text-yellow-500 text-sm mt-2">
                  {"★".repeat(5)} ({product.rating})
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewSection;