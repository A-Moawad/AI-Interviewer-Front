import { RiBrainLine } from "react-icons/ri";
import { GiHistogram } from "react-icons/gi";
import { MdOutlineLightbulb } from "react-icons/md";


export const AchievmentsList = [
  {
    id: 1,
    title: "User Practicing",
    value: "10,000+",
  },
  {
    id: 2,
    title: "Job Roles Covered",
    value: "500+",
  },
  {
    id: 3,
    title: "User Satisfaction",
    value: "95%",
  },
  {
    id: 4,
    title: "Interview Success Rate",
    value: "2X",
  },
];



export const FeaturesList = [
  {
    id: 1,
    title: "AI-Generated Questions",
    description:
      "Get tailored questions based on your target role, experience level, and industry.",
    feat1: "Role-specific technical questions",
    feat2: "Behavioral interview scenarios",
    feat3: "Situational judgment questions",
    icon: RiBrainLine,
  },
  {
    id: 2,
    title: "Instant AI Feedback",
    description:
      "Receive detailed feedback on your answers with specific improvement suggestions.",
    feat1: "Strengths and areas for improvement",
    feat2: "Sample strong responses",
    feat3: "Personalized coaching tips",
    icon: MdOutlineLightbulb,
  },
  {
    id: 3,
    title: "Progress Tracking",
    description:
      "Monitor your improvement over time with detailed performance analytics.",
    feat1: "Performance trends and insights",
    feat2: "Skill gap analysis",
    feat3: "Personalized practice recommendations.",
    icon: GiHistogram,
  },
];
