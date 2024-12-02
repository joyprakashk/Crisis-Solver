import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://lampkinfoundation.org/wp-content/uploads/2018/10/Indonesia-Rescue.jpg"
          alt="Disaster image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl font-bold mb-6">Help Those in Need Today</h1>
          <p className="text-xl mb-8">
            Your support can bring hope and help rebuild lives affected by
            disaster.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
            Donate Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
