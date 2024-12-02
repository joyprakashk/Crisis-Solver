import React from 'react';
import { motion } from 'framer-motion';

interface CauseCardProps {
  title: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
}

const CauseCard: React.FC<CauseCardProps> = ({ title, description, image, goal, raised }) => {
  const progress = (raised / goal) * 100;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-red-600 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Raised: ₹{raised.toLocaleString()}</span>
            <span>Goal: ₹{goal.toLocaleString()}</span>
          </div>
        </div>

        <button className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition-colors">
          Donate Now
        </button>
      </div>
    </motion.div>
  );
};

export default CauseCard;