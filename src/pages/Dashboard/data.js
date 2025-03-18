export const questionsList = [
  {
    id: 1,
    question:
      "Tell me about a time you faced a conflict at work and how you handled it.",
    level: "Easy",
    type: "Behavioral",
    answer:
      "I once had a disagreement with a colleague over project priorities. I actively listened, acknowledged their concerns, and proposed a compromise that aligned with our goals.",
  },
  {
    id: 2,
    question: "How does JavaScript handle asynchronous operations?",
    level: "Medium",
    type: "Technical",
    answer:
      "JavaScript uses callbacks, promises, and async/await to handle asynchronous operations, allowing non-blocking execution of code.",
  },
  {
    id: 3,
    question:
      "What would you do if you had to meet a tight deadline with limited resources?",
    level: "Hard",
    type: "Situational",
    answer:
      "I would prioritize tasks, delegate responsibilities efficiently, and communicate with stakeholders to set realistic expectations while maximizing available resources.",
  },
  {
    id: 4,
    question: "Describe a time when you had to learn a new skill quickly.",
    level: "Medium",
    type: "Behavioral",
    answer:
      "When my team switched to a new project management tool, I took an online course, practiced daily, and helped my teammates transition smoothly.",
  },
  {
    id: 5,
    question: "What is the difference between SQL and NoSQL databases?",
    level: "Easy",
    type: "Technical",
    answer:
      "SQL databases are structured, use tables, and follow ACID properties, while NoSQL databases are flexible, store unstructured data, and scale horizontally.",
  },
];

export const jobTitle = [
  { id: 1, title: "Frontend Developer" },
  { id: 2, title: "Backend Developer" },
  { id: 3, title: "Full Stack Engineer" },
  { id: 4, title: "Software Architect" },
  { id: 5, title: "DevOps Engineer" },
  { id: 6, title: "Mobile App Developer" },
  { id: 7, title: "Machine Learning Engineer" },
  { id: 8, title: "Data Engineer" },
  { id: 9, title: "Embedded Software Engineer" },
  { id: 10, title: "QA Automation Engineer" },
];

export const interviewCategoriesList = [
  // Behavioral Questions (10)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    type: "behavioral",
    title: "Behavioral Questions",
    description:
      "Questions about your past experiences and how you handled specific situations.",
    question1: `Tell me about a time you faced a challenge ${i + 1}.`,
    question2: `Describe a situation where you showed leadership ${i + 1}.`,
    icon: "LuMessageSquare",
  })),

  // Technical Questions (10)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    type: "technical",
    title: "Technical Questions",
    description:
      "Questions to assess your technical skills and problem-solving abilities.",
    question1: `Explain how you would optimize a database query ${i + 1}.`,
    question2: `How would you handle a memory leak in a web application ${
      i + 1
    }?`,
    icon: "RiCodeLine",
  })),

  // Situational Questions (10)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 21,
    type: "situational",
    title: "Situational Questions",
    description:
      "Hypothetical scenarios to evaluate your problem-solving approach.",
    question1: `What would you do if you had a tight deadline and a bug ${
      i + 1
    }?`,
    question2: `How would you handle an uncooperative team member ${i + 1}?`,
    icon: "RiBrainLine",
  })),
];

