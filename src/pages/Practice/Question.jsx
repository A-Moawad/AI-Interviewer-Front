import axios from "axios";
import { Mic } from "lucide-react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import FlexUi from "./FlexUi";
import ProgressBar from "./ProgressBar";

export default function Question() {
  const [question, setQuestion] = useState(1);
  const [index, setIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [responses, setResponses] = useState(["", "", "", "", ""]);

  const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

  const questions = [
    "Explain the difference between REST and GraphQL APIs, and when you would choose one over the other.",
    "What are the key principles of Object-Oriented Programming?",
    "How does JavaScript handle asynchronous operations?",
    "What are the advantages of using TypeScript over JavaScript?",
    "Explain the concept of closures in JavaScript.",
  ];

  const updateResponses = (text) => {
    setResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[question - 1] = text;
      return updatedResponses;
    });
  };

  const nextQuestion = () => {
    if (question < questions.length) {
      setQuestion((prev) => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (question > 1) {
      setQuestion((prev) => prev - 1);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const handleApiCall = async () => {
    const userAnswer = responses[question - 1];
    const currentQuestion = questions[question - 1];

    console.log("Question:", currentQuestion);
    console.log("User Answer:", userAnswer);

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful AI assistant." },
            {
              role: "user",
              content: `${currentQuestion}\n\nUser's Answer: ${userAnswer}`,
            },
          ],
          max_tokens: 100,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse =
        response.data.choices[0]?.message?.content || "No response";
      console.log("AI Response:", aiResponse);
    } catch (error) {
      console.error("API call error:", error);
    }
  };

  const isDisabled = responses[question - 1].trim() === "";

  return (
    <div className="border-2 border-gray-200 rounded-sm px-3 py-4 w-4/5 h-fit">
      <div>
        <FlexUi title={`Question ${question}`} p="Technical Question">
          <p className="text-gray-400">
            {question} of {questions.length}
          </p>
        </FlexUi>
      </div>
      <ProgressBar w={`w-${(question / questions.length) * 4}/4`} />
      <h2 className="pt-4 pb-5 text-xl">{questions[question - 1]}</h2>
      <div className="bg-gray-700 flex p-1 rounded-sm response">
        <button
          className={`px-4 py-2 ${
            index === 0 ? "bg-black text-white" : "bg-gray-500"
          }`}
          onClick={() => setIndex(0)}
        >
          Text Response
        </button>
        <button
          className={`px-4 py-2 ${
            index === 1 ? "bg-black text-white" : "bg-gray-500"
          }`}
          onClick={() => setIndex(1)}
        >
          Voice Response
        </button>
      </div>
      {!index ? (
        <textarea
          placeholder="Type your answer here..."
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
          {isRecording && <h1 className="text-gray-400">Recording...</h1>}
        </div>
      )}
      <p className="text-gray-400">
        &#169; Aim for a comprehensive answer that demonstrates your technical
        and practical experience.
      </p>
      <div className="flex justify-between items-center my-3">
        <button
          disabled={question === 1}
          className="w-fit py-1 px-2 cursor-pointer text-gray-400 border-2 border-gray-400 rounded-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={previousQuestion}
        >
          <FaArrowLeft /> Previous
        </button>
        <button
          disabled={question === questions.length}
          className="w-fit py-1 px-2 cursor-pointer text-gray-400 border-2 border-gray-400 rounded-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={nextQuestion}
        >
          Next <FaArrowRight />
        </button>
        <button
          className={`w-fit py-3 px-2 cursor-pointer text-black border-2 ${
            isDisabled ? "bg-gray-400" : "bg-white hover:bg-gray-500"
          } rounded-sm flex items-center gap-2`}
          onClick={handleApiCall}
          disabled={isDisabled}
        >
          Submit Answer
          <PiTelegramLogo />
        </button>
      </div>
    </div>
  );
}
