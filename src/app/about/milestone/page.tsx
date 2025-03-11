"use client";

const milestones = [
  {
    id: 1,
    title: "Years of Excellence",
    years: "2014",
    description: "First Opening and Serving quality coffee in 2014.",
  },
  {
    id: 2,
    title: "New 4 Branches In Yogya and Semarang",
    years: "2015",
    description: "Keep Expanding across major cities.",
  },
  {
    id: 3,
    title: "More than 10 Branches with almost 2 branches in big cities",
    years: "2020",
    description: "We have more than 70 branches in Indonesia.",
  },
  {
    id: 4,
    title: "Awarded from ACI (Association Coffee Indonesia)",
    years: "5M+",
    description:
      "We got an award from ACI (Association Coffee Indonesia as the biggest Coffe Shop in Indonesia and the high-quality coffee",
  },
];

const Milestone = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-8 text-brown-800">
        Our Journey in Numbers
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200"
          >
            <h3 className="text-4xl font-bold text-brown-700">
              {milestone.years}
            </h3>
            <p className="text-lg font-semibold text-brown-600">
              {milestone.title}
            </p>
            <p className="text-sm text-gray-500">{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestone;
