import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

export default function Summary() {
  return (
    <div className="border-2 border-gray-400 p-2 rounded-sm h-fit w-full text-white summary">
      <h1 className="text-bold text-2xl ">Performance Summary</h1>
      <p className="text-gray-400">Your performance interview so far</p>
      <div className="flex items-center justify-between mt-4">
        <h3>Average Scare</h3>
        <h1 className="text-2xl font-bold">82%</h1>
      </div>
      <h2>Strengths</h2>
      <h3>
        <BiSolidLike color="green" /> Technical knowledge
      </h3>
      <h3>
        <BiSolidLike color="green" /> Clear comminication
      </h3>
      <h2 className="pt-4">Areas to improve</h2>
      <h3>
        <BiSolidDislike color="yellow" /> provide more examples
      </h3>
      <h3>
        <BiSolidDislike color="yellow" /> Discuss trade-offs in solutions
      </h3>
    </div>
  );
}
