import { FaArrowRight } from "react-icons/fa";
import { cardsUI, testimotioUI } from "../data";
import Card from "./Card";
import Testimonial from "./Testimotion";
import { Link } from "react-router-dom";
function Testimonials() {
  return (
    <div className="test py-4 pb-3">
      {/* header  */}
      <div className="px-6 md:px-16 py-10 lg:py-20">
        <h1 className="text-center text-3xl text-white font-bold">
          What Our Users Say
        </h1>
        <p className="text-center  text-gray-400 pt-3 ">
          Thousands of job seekers have improved their interview skills with our
          platform
        </p>
      </div>
      {/* pricing  */}
      <div className="bg-black py-4">
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-center px-6 md:px-16 py-10 lg:py-20">
          {cardsUI.map((item) => (
            <Card key={item} props={item} />
          ))}
        </div>
      </div>

      {/* testimonials header  */}
      <div className="px-6 md:px-16 py-10 lg:py-20 test flex flex-col justify-center items-center gap-3">
        <h1 className=" text-white text-4xl font-bold">
          Ready to Ace Your Next Interview ?{" "}
        </h1>
        <p className="text-gray-400">
          Start pricing today and gain the confidence you need to land your
          dream job
        </p>
        <Link to="/practice" className="bg-white w-fit px-4 py-2 rounded-sm cursor-pointer text-black flex items-center gap-2">
          Get Started Free <FaArrowRight size="17" />{" "}
        </Link>
      </div>
      {/* testimonials  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-5 px-6 md:px-16 py-10 lg:py-20 ">
        {testimotioUI.map((person) => (
          <Testimonial person={person} key={person.name} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
