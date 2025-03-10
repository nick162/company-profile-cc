"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CardTeam from "../component/CardTeam";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const roles = [
  "Founder & CEO",
  "Operational Manager",
  "Product Designer",
  "Supervisor",
  "Product Manager",
  "Barista 1",
  "Barisata 2",
  "Customer Handler",
];

const descriptions = [
  "Fomer co-fonder at Warkop Santai and Member of ACI",
  "Experience in Operational Manager for 3 years, and handle the team operational",
  "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
  "Former Supervisior at Filosofi Kopi for 2 years",
  "Expert in product strategy and execution at top firms.",
  "Specialized in a brew coffee and also the winner of barista championship.",
  "Experience as a barista for more than 5 years, and specialized create Indo Coffe.",
  "Ensuring top-tier customer experience across the company.",
];

const Team = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const members = [];
      for (let i = 0; i < roles.length; i++) {
        const response = await axios.get("https://randomuser.me/api/");
        const user = response.data.results[0];
        members.push({
          name: `${user.name.first} ${user.name.last}`,
          role: roles[i],
          description: descriptions[i],
          imageUrl: user.picture.large,
        });
      }
      setTeam(members);
    };
    fetchTeam();
  }, []);

  return (
    <section className="py-16 bg-[#4e4d4f]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white">
          We are the people who make up Our Coffee Shop
        </h2>
        <p className="text-white text-center max-w-2xl mx-auto mt-2">
          Our philosophy is simple: hire great people and give them the
          resources and support to do their best work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {team.map((member, index) => (
            <CardTeam key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
