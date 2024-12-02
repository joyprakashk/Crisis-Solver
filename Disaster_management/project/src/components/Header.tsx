import React from "react";
import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import logo from "../assets/logo.png";
import { ConnectButton } from '@mysten/dapp-kit';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
          <ConnectButton/>

            <Link to="/" className="flex items-center">
              <img src={logo} alt="Disaster charity" className="h-12" />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
          <a
  href="http://localhost:5173/"
  className="text-gray-700 hover:text-red-600"
>
  Track my Donation
</a>

            <Link
              to="/where-we-work"
              className="text-gray-700 hover:text-red-600"
            >
              Crisis areas
            </Link>
           
            <Link to="/about-us" className="text-gray-700 hover:text-red-600">
              About Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/donate"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700"
            >
              Donate Now
            </Link>
            <Search className="w-6 h-6 text-gray-600 cursor-pointer" />
            <Menu className="md:hidden w-6 h-6 text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
