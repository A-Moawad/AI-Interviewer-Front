import { RiGeminiLine } from "react-icons/ri";

export default function Coach() {
  return (
    <div className="border-2 border-gray-400 p-2 rounded-sm h-fit w-full text-white mt-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-500">
          <RiGeminiLine />
        </div>
        <div>
          <h1 className="text-2xl font-bold">AI Interview Coach</h1>
          <p className="text-gray-300">Here to help you improve</p>
        </div>
      </div>
      <p className="bg-gray-700 p-2 rounded-sm my-3">
        when discussing technical differences between APIs , try to include
        specific implementation details and performance considerations , This
        show depth of knowledge beyond just the basics.
      </p>
    </div>
  );
}
