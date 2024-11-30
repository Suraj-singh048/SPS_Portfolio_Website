import React from "react";

const experienceData = [
  {
    "role": "Analyst Intern",
    "company": "Uolo",
    "duration": "December 2024 – Ongoing",
    "responsibilities": [
      "Onboarding and familiarization with Uolo's data analytics processes and tools.",
      "Assisting in the initial stages of data collection and preparation for analytical tasks.",
      "Building foundational knowledge of Uolo's scholastic programs and analytics workflows."
    ]
  },
  
  {
    role: "Research Intern",
    company: "NIT Kurukshetra",
    duration: "July 2024 – August 2024",
    responsibilities: [
      "Designed and implemented cross-domain, session-based & Gen-AI recommendation systems.",
      "Improved recommendation accuracy by 15%, enhancing personalized user experiences.",
      "Conducted in-depth data analysis and model evaluations to refine AI recommendation models.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "ECom Express Limited",
    duration: "July 2023 – August 2023",
    responsibilities: [
      "Analyzed 1,000+ data points using Financial Modelling and Exploratory Data Analysis with Python.",
      "Identified trends & created visualizations that improved decision-making efficiency by 20%.",
      "Utilized Scikit-Learn, PyTorch, and TensorFlow to train Classification and Regression Models.",
    ],
  },
  {
    role: "Marketing Associate",
    company: "StockGro",
    duration: "Aug 2023 – Oct 2023",
    responsibilities: [
      "Gained expertise in social investing by leveraging online platforms to analyze and interpret market sentiments.",
      "Applied investment strategies to maximize returns with minimum risk.",
      "Utilized sentiment analysis to make informed investment decisions, aligning with market trends.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Aican Automate LLP",
    duration: "July 2022 – August 2022",
    responsibilities: [
      "Utilized Tableau and Power BI for visualization, improving data processing efficiency by 25%.",
      "Collaborated with the data science team to analyze 10,000+ data points and generate actionable insights.",
      "Contributed to data mining, SQL, and Microsoft Excel-based analytics for enhanced business decision-making.",
    ],
  },
  {
    role: "Freelance Data Analyst",
    company: "Self-Employed",
    duration: "August 2023 – February 2024",
    responsibilities: [
      "Utilized Excel and SQL to manipulate and analyze large datasets, improving data processing efficiency by 20%.",
      "Developed dynamic dashboards in Power BI, enabling stakeholders to visualize complex data and make informed decisions.",
      "Automated reporting processes, reducing manual effort by 25% and streamlining overall workflow.",
    ],
  },
];

function ExperienceCard({ experience }) {
  return (
    <div className="p-6 w-full sm:w-[350px] lg:w-[400px] bg-timber-green-800 border-timber-green-700 border rounded-xl shadow-lg flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-timber-green-600">
      <h3 className="text-xl font-bold text-white mb-2">{experience.role}</h3>
      <p className="text-sm text-timber-green-100 mb-1">{experience.company}</p>
      <p className="text-xs text-gray-300 mb-4">{experience.duration}</p>
      <ul className="text-left text-timber-green-100 list-disc list-inside space-y-2">
        {experience.responsibilities.map((task, index) => (
          <li key={index} className="text-sm">{task}</li>
        ))}
      </ul>
    </div>
  );
}

const Experience = () => {
  return (
    <section id="Experience" className="w-full bg-timber-green-50 p-10">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-timber-green-900">Experience</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {experienceData.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
