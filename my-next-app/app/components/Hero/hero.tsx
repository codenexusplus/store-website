// components/FlashSales.tsx
import React from "react";
import { FaHeart, FaEye } from "react-icons/fa"; // Import the heart and eye icons

const FlashSales = () => {
  const products = [
    {
      name: "HAVIT HV-G92 Gamepad",
      originalPrice: "$200",
      discountedPrice: "$120",
      discount: "-40%",
      ratings: 88,
      image: "/game.svg", // Add game.svg as the first image
    },
    {
      name: "AK-900 Wired Keyboard",
      originalPrice: "$246",
      discountedPrice: "$160",
      discount: "-35%",
      ratings: 75,
      image: "/key.svg", // Add image path here
    },
    {
      name: "IPS LCD Gaming Monitor",
      originalPrice: "$1200",
      discountedPrice: "$960",
      discount: "-30%",
      ratings: 99,
      image: "/monitor.svg", // Add image path here
    },
    {
      name: "S-Series Comfort Chair",
      originalPrice: "$1600",
      discountedPrice: "$1160",
      discount: "-25%",
      ratings: 99,
      image: "/chair.svg", // Add image path here
      size: "20px",
    },
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Today's <span className="text-red-500">Flash Sales</span>
          </h2>
          <div className="flex justify-center mt-4 space-x-2 text-lg font-medium">
            <div className="text-gray-800">Days</div>
            <div className="text-gray-800">Hours</div>
            <div className="text-gray-800">Minutes</div>
            <div className="text-gray-800">Seconds</div>
          </div>
          <div className="flex justify-center space-x-8 text-2xl font-semibold text-red-500 mt-1">
            <div>03</div>
            <div>23</div>
            <div>19</div>
            <div>56</div>
          </div>
        </div>

        {/* Flexbox container */}
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-lg w-[270px] h-[350px] flex flex-col justify-between relative"
            >
              {/* Image Section */}
              <div className="h-40 w-full mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-md"
                />
                {/* Heart and Eye Icons */}
                <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
                  {/* Heart Icon */}
                  <FaHeart className="text-2xl text-black hover:text-red-600 cursor-pointer w-[30px] h-[30px] stroke-2 fill-none stroke-black" />
                  {/* Eye Icon */}
                  <FaEye className="text-2xl text-black hover:text-blue-600 cursor-pointer w-[30px] h-[30px] stroke-2 fill-none stroke-black" />
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.discount}</p>
                <div className="flex items-center mt-2">
                  <span className="text-lg font-bold text-red-500">
                    {product.discountedPrice}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.ratings / 20)
                            ? "fill-current"
                            : "fill-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 17.27L18.18 21 15.64 13.97l6.36-6.18h-7.72l-2.27-7.2L8.54 7.8H.82l6.36 6.18L5.82 21z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">({product.ratings})</span>
                </div>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-10">
        </div>
    </div>
  );
};

export default FlashSales;
