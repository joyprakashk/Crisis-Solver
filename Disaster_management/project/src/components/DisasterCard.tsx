import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DisasterCardProps {
  title: string;
  description: string;
  image: string;
  impact: string;
  goal: number;
}

const DisasterCard: React.FC<DisasterCardProps> = ({
  title,
  description,
  image,
  impact,
  goal,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden bg-white mb-4">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-4">
          <img
            src={image}
            alt={title}
            className="w-16 h-16 object-cover rounded"
          />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // Handle donation logic
            }}
          >
            Donate Now
          </button>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t"
          >
            <div className="p-4 bg-gray-50">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">About this Crisis</h4>
                  <p className="text-gray-600">{description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Our Impact</h4>
                  <p className="text-gray-600">{impact}</p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Goal: ₹{goal.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DisasterCard;
