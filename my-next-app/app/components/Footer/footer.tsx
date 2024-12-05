
// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full bg-black text-white"
      style={{ width: "1440px", height: "440px" }}
    >
      <div className="max-w-[1170px] mx-auto py-8 grid grid-cols-5 gap-4">
        {/* Exclusive Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Exclusive</h3>
          <p className="mb-4">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-lg text-black"
            />
          </form>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <p className="mb-2">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
          <p className="mb-2">exclusive@gmail.com</p>
          <p className="mb-2">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Account</h3>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Download App</h3>
          <p className="mb-4">Save $3 with App New User Only</p>
          <div className="flex space-x-4 mb-4">
            <img
              src="/GooglePlay.svg"
              alt="Google Play"
              className="w-24"
            />
            <img
              src="/AppStore.svg"
              alt="App Store"
              className="w-24"
            />
            <img
              src="/Qr Code.svg"
              alt="QrCode"
              className="w-24"
            />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-sm mt-8">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;