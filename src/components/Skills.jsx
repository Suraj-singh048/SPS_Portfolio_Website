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
  'SQL': 4,
  'MySQL': 4,
  'PostgreSQL': 4,
  'R Language': 3,
  'Machine Learning': 4,
  'Data Visualization': 5,
  'Tableau': 4,
  'Power BI': 4,
  'Deep Learning': 3,
  'NLP, CNN': 3,
  'Computer Vision': 3,
  'TensorFlow': 3,
  'PyTorch': 3,
  'Microsoft Excel': 5,
  'UI/UX Design': 4,
  'Figma': 4,
  'Adobe XD': 3,
  'AWS (S3, EC2)': 3
};

const nonTechnicalRatings = {
  'Effective Communication': 5,
  'Collaborative Teamwork': 5,
  'Strategic Leadership': 4,
  'Advanced Problem-Solving': 5,
  'Human-Centered Design Thinking': 4,
  'Comprehensive User Research': 4,
  'Agile Project Management': 4,
  'Data-Driven Decision Making': 5
};


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
                <SkillContainer key={idx} rating={nonTechnicalRatings[skill]}>
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
