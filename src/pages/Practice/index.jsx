import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import FlexUi from "./FlexUi";
import Question from "./Question";
import Statistics from './Statistics'
function Practice() {
  return (
    <div className="max-w-7xl mx-auto text-white py-6">
      <FlexUi
        title="Software Engineer Interview"
        p="Technical and behavioral questions"
      >
        <Link
          className="flex items-center gap-2 border-2 border-gray-200 rounded-sm px-3 py-1"
          to="/"
        >
          <FaArrowLeft />
          Back to Dashbord
        </Link>
      </FlexUi>
      <div className='flex gap-4 mt-4'>
        <Question />
        <Statistics />
      </div>
    </div>
  );
}

export default Practice;
