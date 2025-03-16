import ProgressBar from "./ProgressBar";

export default function Progress() {
  return (
    <div className="border-2 border-gray-400 p-2 rounded-sm h-fit w-full text-white mb-3">
      <h1 className="text-bold text-2xl ">Interview Progress</h1>
      <p className="text-gray-400">
        Track your progress through the interview
      </p>
      <div className="flex items-center justify-between mt-4">
        <h2>Overall Progress</h2>
        <h2>1/3 Questions</h2>
      </div>
      <ProgressBar />
      <h2 className="pt-4">Questions Types</h2>
      <div className="flex items-center justify-between mt-4">
        <h2>Technical</h2>
        <h2>2/3</h2>
      </div>
      <ProgressBar w="w-2/3" />
      <div className="flex items-center justify-between mt-4 ">
        <h2>Behavioral</h2>
        <h2>1/1</h2>
      </div>
      <ProgressBar w="w-full" />
      <div className="flex items-center justify-between mt-4 ">
        <h2>Setuational</h2>
        <h2>0/1</h2>
      </div>
      <ProgressBar w="w-0" />
    </div>
  );
}
