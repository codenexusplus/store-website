
// components/MusicExperience.js
import React from "react";

const MusicExperience = () => {
  return (
    <div
      className="bg-gradient-to-r from-gray-900 to-black p-2"
      style={{ width: "1170px", height: "500px" }}
    >
      {/* Left Section */}
      <div className="flex justify-between items-center h-full">
        {/* Text Section */}
        <div className="space-y-2">
          {/* Categories */}
          <h2
            className="bg-green-500 text-center text-sm font-semibold text-white"
            style={{ width: "90px", height: "20px" }}
          >
            Categories
          </h2>

          {/* Title */}
          <h1
            className="text-white font-bold leading-tight"
            style={{ fontSize: "48px", width: "443px", height: "120px" }}
          >
            Enhance your <br /> Music Experience
          </h1>

          {/* Countdown Timer */}
          <div
            className="flex items-center justify-between space-x-3"
            style={{ width: "320px", height: "62px" }}
          >
            {["23 Hours", "5 Days", "59 Minutes", "35 Seconds"].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-white rounded-full text-black font-medium"
                  style={{ width: "62px", height: "62px" }}
                >
                  {item}
                </div>
              )
            )}
          </div>

          {/* Buy Now Button */}
          <button
            className="bg-green-500 text-white font-semibold text-center rounded-lg hover:bg-green-600"
            style={{ width: "171px", height: "56px", padding: "1rem" }}
          >
            Buy Now!
          </button>
        </div>

        {/* Right Section */}
        <div>
          <div
            className="bg-gray-300 rounded-lg shadow-lg"
            style={{ width: "600px", height: "420px" }}
          >
            {/* Replace with your image */}
            <img
              src="/music.svg"
              alt="Music Experience"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicExperience;