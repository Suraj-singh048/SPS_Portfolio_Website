import React from "react";

const skillsData = {
  technical: [
    "Python",
    "SQL",
    "MySQL,",
    "PostgreSQL",
    "R Language",
    "Machine Learning",
    "Data Visualization",
    "Tableau",
    "Power BI",
    "Deep Learning",
    "NLP, CNN",
    "Computer Vision",
    "TensorFlow",
    "PyTorch",
    "Microsoft Excel",
    "UI/UX Design",
    "Figma, Adobe XD",
    "AWS (S3, EC2)",
  ],
  nonTechnical: [
    "Effective Communication", 
    "Collaborative Teamwork", 
    "Strategic Leadership", 
    "Advanced Problem-Solving", 
    "Human-Centered Design Thinking", 
    "Comprehensive User Research", 
    "Agile Project Management", 
    "Data-Driven Decision Making"
  ],
};

const technicalRatings = {
  'Python': 4,
  "SQL (MySQL, PostgreSQL)": 4,
  "Machine Learning": 4,
  "Data Visualization (Tableau, Power BI)": 4,
  "Deep Learning (NLP, Computer Vision)": 3,
  "TensorFlow & PyTorch": 4,
  "Microsoft Excel": 4,
  "UI/UX Design (Figma, Adobe XD)": 4,
  "AWS (S3, EC2)": 2,
}

function SkillContainer({ rating, children }) {
  const width = (rating / 5.0) * 100;

  return (
    <div className="bg-timber-green-100 rounded-lg text-timber-green-950 overflow-hidden shadow-lg flex flex-col justify-between h-full">
      <div className="py-2 px-3 font-semibold">{children}</div>
      <div
        className="h-1 bg-timber-green-600"
        style={{ width: `${width}%` }}
        aria-label={`${children} skill level: ${rating} out of 5`}
      ></div>
    </div>
  );
}

const Skills = () => {
  return (
    <section className="w-full bg-white p-8" id="skills">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Skills</h1>
      <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {/* Technical Skills */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {
              skillsData.technical.map((skill, idx) => (
                <SkillContainer key={idx} rating={technicalRatings[skill]}>
                  {skill}
                </SkillContainer>
              ))
            }
          </div>
        </div>

        {/* Non-Technical Skills */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">Non-Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {
              skillsData.nonTechnical.map((skill, idx) => (
                <SkillContainer key={idx} rating={4}>
                  {skill}
                </SkillContainer>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
