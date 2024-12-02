import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "2M+", label: "Boomers Helped" },
  { number: "20", label: "States in India" },
  { number: "50+", label: "Years of Impact" },
  { number: "85%", label: "Funds to Programs" },
];

const ImpactStats = () => {
  return (
    <section className="bg-red-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
