import Card from "./Card";
import { FaArrowRight } from "react-icons/fa";
import Testimotion from './Testimotion'
import {cardsUI} from '../data'
import {testimotioUI} from '../data'
function Testimonials() {
  return (
    <div className="test py-4 pb-3">
      <div className="py-10">
        <h1 className="text-center text-3xl text-white font-bold">What Our Users Say</h1>
        <p className="text-center  text-gray-400 pt-3 ">
          Thousands of job seekers have improved their interview skills with our
          platform
        </p>
      </div>
      <div className="bg-black py-4">
        <div className="flex items-center gap-4 justify-center">
          {cardsUI.map((item) => (
            <Card key={item} props={item} />
          ))}
        </div>
      </div>
      <div className="py-16 test flex flex-col justify-center items-center gap-3">
        <h1 className=" text-white text-4xl font-bold">
          Ready to Ace Your Next Interview ?{" "}
        </h1>
        <p className="text-gray-400">
          Start pricing today and gain the confidence you need to land your
          dream job
        </p>
        <button className="bg-white w-fit px-4 py-2 rounded-sm cursor-pointer text-black flex items-center gap-2">
          Get Started Free <FaArrowRight size="17" />{" "}
        </button>
      </div>
      <div className='flex  justify-center gap-5 pb-16'>
        {testimotioUI.map(person =>  <Testimotion person ={person} key={person}/>)}
      </div>
    </div>
  );
}

export default Testimonials;
