import React from "react";
import CauseCard from "./CauseCard";

const causes = [
  {
    title: "Chennai Flood Relief",
    description:
      "Help provide food, clothes and relocation facilities to the victims.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbAaSrTVq1gLiqRtnPIQeYLsbOgePB9H1aA&s",
    goal: 1000000,
    raised: 750000,
  },
  {
    title: "Tokyo Earthquake",
    description:
      "Ensure to provide all the basic amenities for the people who relocated.",
    image:
      "https://i.ndtvimg.com/i/2016-04/japan-earthquake-afp_650x400_51460873412.jpg?downsize=545:307",
    goal: 800000,
    raised: 420000,
  },
  {
    title: "Delhi Pollution",
    description:
      "Support provided in the form of air filters and oxygen cylinders.",
    image:
      "https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/9ea4cc7481e16ee9015c9a366e299c7e.jpg",
    goal: 500000,
    raised: 380000,
  },
];

const CausesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Causes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <CauseCard key={index} {...cause} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
