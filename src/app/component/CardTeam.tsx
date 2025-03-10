import Image from "next/image";

interface CardTeamProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const CardTeam: React.FC<CardTeamProps> = ({
  name,
  role,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center">
      <div className="relative w-28 h-28 mx-auto mb-4">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default CardTeam;
