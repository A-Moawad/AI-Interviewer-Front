import { FaStar } from "react-icons/fa6";

export default function Testimotion({ person }) {
  const { image, job, name, description } = person;
  return (
    <div className='bg-black p-3 rounded-sm w-80'>
      <div className="flex items-center gap-2">
        <img src={image} alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h1 className="text-white">{name}</h1>
          <p className="text-gray-400">{job}</p>
        </div>
      </div>
      <div className="flex gap-1 py-4">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} color="yellow" size="20" />
        ))}
      </div>
      <p className="text-gray-400">
        "{description}"
      </p>
    </div>
  );
}
