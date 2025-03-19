import { RiBrainLine } from "react-icons/ri";
import { GiHistogram } from "react-icons/gi";
import { MdOutlineLightbulb } from "react-icons/md";
import moshrif from '../../assets/moshrif.jpg'
import heba from '../../assets/heba.jpg'
import tariq from '../../assets/tariq.jpg'

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
export const cardsUI = [
  {
    title: "Free",
    btn: "Get Started",
    title2: "$0",
    subTitle: "Get started with basic practice",
    children: '<p className="text-gray-400">/month</p>',
    features: [
      "5 practice sessions per month",
      "Basic AI feedback",
      "Text-based responses only",
    ],
  },
  {
    title: "Pro",
    title2: "$15",
    btn: "Practice Now",
    subTitle: "For serious job seekers",
    children: '<p className="text-gray-400">/month</p>',
    features: [
      "Unlimited practice sessions",
      "Advanced AI feedback",
      "Voice response analysis",
      "Performance analytics",
      "Industry-specific questions",
    ],
  },
  {
    title: "Enterprise",
    title2: "Custom",
    btn: "Contact Sales",
    subTitle: "For teams and organizations",
    features: [
      "All Pro features",
      "Team management dashboard",
      "Custom question libraries",
      "Branded experience",
      "Dedicated support",
    ],
  },
];

export const testimotioUI = [
  {
    image: heba, 
    job : 'Product Manager.', 
    name : 'Belkacem H.', 
    description : `The behavioral question practice was a game-changer.
     The Al feedback helped me structure my responses using the STAR method, 
     which impressed my interviewers.
    `
  },
  {
    image: moshrif, 
    job : 'Software Engineer.', 
    name : 'Mohamed M', 
    description : `After practice with AI interview Prep for two weeks ,
    I felt so mush more confident in my technical interviews . I received offers
    from two top tech companies.
    `
  },
  {
    image: tariq, 
    job : 'Data Scientist.', 
    name : 'Tariq E.', 
    description : `The technical questions were spot-on for my data science interviews.
     I was asked almost identical questions in my actual interviews,
      and I was well-prepared thanks to this platform.
    `
  },
]
