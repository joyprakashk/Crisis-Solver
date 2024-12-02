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

  const progress = 0; // Progress bar is static here; can be modified as needed

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

      <div className="px-4 py-2 bg-gray-100">
        <p className="text-sm text-gray-500 mb-2">
          Goal: ₹{goal.toLocaleString()}
        </p>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Donated: ₹{progress} / ₹{goal.toLocaleString()}
        </p>
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
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DonatePage = () => {
  const disasters = [
    {
      title: "Turkey-Syria Earthquake Response",
      description:
        "A devastating 7.8 magnitude earthquake has caused widespread destruction in Turkey and Syria. Thousands of children and families are in urgent need of shelter, food, and medical care.",
      image:
        "https://disasterphilanthropy.org/wp-content/uploads/2023/02/Turkey-earthquake-@tcsavunma-7.jpeg",
      impact:
        "We're providing emergency shelter, food packages, and medical support to affected families. Your donation helps us reach more children in crisis.",
      goal: 5000000,
    },
    {
      title: "Assam Flood Relief",
      description:
        "Severe flooding in Assam has displaced thousands of families and children. Many have lost their homes and are struggling to access basic necessities.",
      image:
        "https://images.unsplash.com/photo-1547683905-f686c993aae5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      impact:
        "We're providing clean water, hygiene kits, and temporary shelters to affected communities. We're also setting up child-friendly spaces for displaced children.",
      goal: 2000000,
    },
    {
      title: "COVID-19 Emergency Response",
      description:
        "The pandemic continues to affect vulnerable communities. Children from marginalized families face increased risks of malnutrition and education disruption.",
      image:
        "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      impact:
        "We're supporting healthcare facilities, providing education support, and ensuring nutrition for vulnerable children and their families.",
      goal: 10000000,
    },
    {
      title: "Drought Relief in Maharashtra",
      description:
        "Severe drought conditions in Maharashtra have led to water scarcity and crop failure, affecting thousands of farming families and their children.",
      image:
        "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      impact:
        "We're providing water tankers, supporting sustainable farming practices, and ensuring children's education continues despite the crisis.",
      goal: 3000000,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Support Our Emergency Responses
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Your donation can make a real difference in the lives of children
            affected by disasters and emergencies.
          </p>

          <div className="space-y-6">
            {disasters.map((disaster, index) => (
              <DisasterCard key={index} {...disaster} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
