import FlexUi from "./FlexUi";
import ProgressBar from "./ProgressBar";
import { FaArrowLeft } from "react-icons/fa6";
import { Mic, MicOff } from "lucide-react";
import { PiTelegramLogo } from "react-icons/pi";
import { useState } from "react";
export default function Question() {
  const [question, setQuestion] = useState(1);
  const [index, setIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [responses, setResponses] = useState(["", "", "", "", ""]);
  const updateResponses = (text) => {
    setResponses(
      responses.map((item, i) => {
        if (i === question - 1) return text;
        return item;
      })
    );
  };
  const nextQuestion = () => {
    if (question < 5) {
      setQuestion((i) => i + 1);
      
    }
  };
  const previousQuestion = () => {
    if (question > 0) {
      setQuestion((i) => i - 1);
     
    }
  };
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Add recording logic here if needed
  };
  const isDisabled =
    (index == 0 && responses[question - 1].length === 0) ||
    (isRecording == false && index == 1) || question  === 5;
  return (
    <div className=" border-2 border-gray-200 rounded-sm px-3 py-4 w-4/5 h-fit">
      <div>
        <FlexUi title={`Question ${question}`} p="Technical Question">
          <p className="text-gray-400">{question} of 5</p>
        </FlexUi>
      </div>
      <ProgressBar />
      <h2 className="pt-4 pb-5  text-xl">
        Explain the diffrence between REST and GraphQL APIs , and when would
        choose <br />
        one over the other
      </h2>
      <div className="bg-gray-700 flex p-1 rounded-sm response">
        <button
          className={!index ? "bg-black" : ""}
          onClick={() => setIndex(0)}
        >
          Text Response
        </button>
        <button className={index ? "bg-black" : ""} onClick={() => setIndex(1)}>
          Voice Response
        </button>
      </div>
      {!index ? (
        <textarea
          placeholder="type your answer here .. "
          className="block h-40 w-full resize-none my-2 p-2 border-2 border-gray-400 rounded-sm"
          value={responses[question - 1]}
          onChange={(e) => updateResponses(e.target.value)}
        />
      ) : (
        <div className="h-40 w-full gap-2 my-2 p-2 border-2 border-gray-400 rounded-sm flex flex-col items-center justify-center">
          <button
            onClick={toggleRecording}
            className={`p-3 rounded-full text-white ${
              isRecording
                ? "bg-gray-500 animate-pulse"
                : "border-2 border-gray-400"
            }`}
          >
            <Mic size={24} />
          </button>
          {isRecording && (
            <h1 className="text-gray-400">
              Click to start recording your answer
            </h1>
          )}
        </div>
      )}
      <p className="text-gray-400">
        &#169; Aim for a comprehensive answer that demonstarates your technical
        and practical experience .
      </p>
      <div className="flex justify-between items-center my-3">
        <button
          disabled={question == 1}
          className="w-fit py-1 px-2 cursor-pointer text-gray-400 border-2 border-gray-400 rounded-sm flex items-center gap-2"
          onClick={previousQuestion}
        >
          <FaArrowLeft /> Previous
        </button>
        <button
          className={`w-fit py-3 px-2 cursor-pointer text-black border-2 ${
            isDisabled ? "bg-gray-400" : "bg-white hover:bg-gray-500"
          } rounded-sm flex items-center gap-2`}
          onClick={nextQuestion}
        >
          Submit Answer
          <PiTelegramLogo />
        </button>
      </div>
    </div>
  );
}
