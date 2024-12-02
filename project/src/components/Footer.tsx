import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="../assets/logo.png"
              alt="Disaster charity logo"
              className="h-12 mb-4"
            />
            <p className="text-gray-400">
              Disaster charity has provided vital relief and support across
              numerous regions, helping rebuild lives and restore hope to
              millions affected by disasters since 2024.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/what-we-do"
                  className="text-gray-400 hover:text-white"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  to="/where-we-work"
                  className="text-gray-400 hover:text-white"
                >
                  Where We Work
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  className="text-gray-400 hover:text-white"
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              Plot no 91, Sector 44
              <br />
              Gurugram 122003
              <br />
              Haryana, India
              <br />
              <a href="tel:+911244752000" className="hover:text-white">
                +91 124 4752000
              </a>
              <br />
              <a
                href="mailto:support@disastercharity.in"
                className="hover:text-white"
              >
                support@disastercharity.in
              </a>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Disaster charity, India. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
