import { FaStar } from "react-icons/fa6";

export default function Testimonial({ person }) {
  const { image, job, name, description } = person;

  return (
    <div className="bg-black p-3 rounded-lg w-full">
      <div className="flex items-center gap-2">
        <img
          src={image || "/default-avatar.png"}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h1 className="text-white">{name}</h1>
          <p className="text-gray-400">{job}</p>
        </div>
      </div>
      <div className="flex gap-1 py-4">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} className="text-yellow-400" size="20" />
        ))}
      </div>
      <p className="text-gray-400">"{description}"</p>
    </div>
  );
}
