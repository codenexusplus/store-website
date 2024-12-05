
// components/NewProducts.js
import React from "react";

const NewProducts = () => {
  const products = [
    {
      name: "Breed Dry Dog Food",
      price: "$100",
      rating: 35,
      image: "/dog.svg",
    },
    {
      name: "CANON EOS DSLR Camera",
      price: "$360",
      rating: 95,
      image: "/camera.svg",
    },
    {
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 325,
      image: "/laptop.svg",
    },
    {
      name: "Curology Product Set",
      price: "$500",
      rating: 145,
      image: "/lotion.jpg",
    },
    {
      name: "Kids Electric Car",
      price: "$960",
      rating: 65,
      image: "/car.svg",
      badge: "NEW",
    },
    {
      name: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      rating: 35,
      image: "/shoes.svg",
      badge: "NEW",
    },
    {
      name: "GP11 Shooter USB Gamepad",
      price: "$860",
      rating: 55,
      image: "/move.svg",
    },
    {
      name: "Quilted Satin Jacket",
      price: "$860",
      rating: 55,
      image: "/jack.svg",
    },
  ];

  return (
    <div className="w-[1170px] mx-auto py-8 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        {/* Left Text */}
        <div className="space-y-1">
          <h2
            className="text-red-500 font-semibold"
            style={{ width: "143px", height: "40px" }}
          >
            New Products
          </h2>
          <h1
            className="text-black font-bold"
            style={{ width: "398px", height: "48px", fontSize: "32px" }}
          >
            Explore Our Products
          </h1>
        </div>

        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold"
            style={{ width: "100px", height: "46px" }}
          >
            Left
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold"
            style={{ width: "100px", height: "46px" }}
          >
            Right
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div
        className="bg-gray-50 p-4 rounded-lg grid grid-cols-4 gap-4"
        style={{ width: "1170px", height: "732px" }}
      >
        {/* Product Boxes */}
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg relative"
            style={{ width: "270px", height: "322px" }}
          >
            {/* Image Section */}
            <div
              className="w-full h-[250px] bg-gray-200 rounded-t-lg"
              style={{ width: "270px", height: "250px" }}
            >
              {/* Replace with actual product image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Icons Section */}
            <div className="flex flex-col space-y-2 absolute top-2 right-2">
              <div
                className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center"
                style={{ width: "24px", height: "24px" }}
              >
                ❤️
              </div>
              <div
                className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center"
                style={{ width: "24px", height: "24px" }}
              >
                👁️
              </div>
            </div>

            {/* Product Details */}
            <div className="p-2">
              <h3 className="font-medium text-gray-800 text-sm truncate">
                {product.name}
              </h3>
              <p className="text-red-500 text-sm font-semibold">{product.price}</p>
              <p className="text-gray-400 text-xs">({product.rating} ratings)</p>
            </div>
          </div>
        ))}

        {/* Central Button */}
        <div
          className="col-span-4 flex justify-center mt-4"
          style={{ height: "56px" }}
        >
          <button
            className="bg-red-500 text-white font-semibold text-center rounded-lg hover:bg-red-600"
            style={{ width: "234px", height: "56px" }}
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;