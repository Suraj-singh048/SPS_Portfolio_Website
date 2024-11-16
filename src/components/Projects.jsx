import React, { useRef, useState, useEffect } from "react";
import { MdiGithub } from "../icons/MdiGithub";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projectsData = {
  dataAnalytics: [
    { name: "User Engagement Tracking", description: "Analyzed user engagement data using SQL, Python, and Excel, providing insights on user behavior and platform", link: "https://github.com/Suraj-singh048/Tracking-User-Engagement-with-SQL--Excel--and-Python" },
    { name: "Customer Segmentation Analysis", description: "Implemented customer segmentation techniques to classify customers based on purchasing behavior.", link: "https://github.com/Suraj-singh048/Customer_Segmentation_Analysis" },
    { name: "Sales EDA", description: "Exploratory Data Analysis on sales datasets to derive insights into sales trends and seasonality.", link: "https://github.com/Suraj-singh048/Sales_EDA" },
    { name: "Excel Analytics Projects", description: "Various analytics projects using Excel for data manipulation, visualization, and business insights.", link: "https://github.com/Suraj-singh048/Excel-Analytics-Projects" },
    { name: "Industry-Based SQL Analytics", description: "SQL-based analytics on industry-specific datasets, providing valuable insights for decision-making.", link: "https://github.com/Suraj-singh048/Industry-Based-SQL-Analytics-Projects" },
    { name: "Bulldozer Price Prediction", description: "A machine learning model to predict bulldozer prices using multiple regression techniques.", link: "https://github.com/Suraj-singh048/Buldozer-price-prediction-model" },
    { name: "Automobile Price Prediction", description: "Predicted automobile prices with various regression models and feature engineering techniques.", link: "https://github.com/Suraj-singh048/Automobile_Price_Prediction_model" },
  ],
  mlDeepLearning: [
    { name: "Next Gen Recommendation Systems", description: "State-of-the-art recommendation engines using cross-domain, session-based and generative AI techniques.", link: "https://github.com/Suraj-singh048/Next_Gen_Recomendation_Systems" },
    { 
      name: "Heart Disease Predictor", 
      description: "Machine learning model for predicting heart disease with high accuracy based on various health parameters.", 
      link: "https://github.com/Suraj-singh048/Heart-Disease-Predictor" 
    },
    { name: "Dog Breed Recognition", description: "A deep learning model that classifies dog breeds using CNN architecture.", link: "https://github.com/Suraj-singh048/Dog-Breed-Recognition-Using-Deep-Learning" },
  ],
  uiUxDesign: [
    { name: "Project Placeholder", description: "UI/UX design projects coming soon.", link: "#" },
  ],
};

// Project card component with refined styling
function ProjectContainer({ project }) {
  return (
    <div className="p-6 w-full sm:w-[350px] md:w-[450px] bg-white bg-opacity-90 border-timber-green-200 border rounded-xl shadow-xl flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-timber-green-400">
      <h3 className="text-2xl font-semibold text-timber-green-900 mb-2">{project.name}</h3>
      <p className="text-gray-700 mb-6">{project.description}</p>
      <div className="flex justify-center">
        <a
          href={project.link}
          className="text-white bg-timber-green-700 flex items-center gap-2 font-medium p-3 rounded-lg w-fit hover:bg-timber-green-800 focus:outline-none focus:ring-2 focus:ring-timber-green-500 transition-all ease-in-out duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdiGithub />
          View on GitHub
        </a>
      </div>
    </div>
  );
}

// Category container with scrollable section and side arrows
function ProjectCategory({ id, title, projects }) {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  // Detect if the container is overflowing and set state for showing arrows
  useEffect(() => {
    const checkOverflow = () => {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      setShowArrows(scrollWidth > clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow); // Check on resize

    return () => window.removeEventListener("resize", checkOverflow);
  }, [projects]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="relative w-full mb-16 p-8 bg-timber-green-900 bg-opacity-80 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-white mb-6">{title}</h2>
      {/* Left Arrow */}
      {showArrows && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-3 bg-timber-green-700 rounded-full hover:bg-timber-green-800 focus:outline-none focus:ring-2 focus:ring-timber-green-500 z-10 transition-all duration-300 ease-in-out opacity-75 hover:opacity-100"
          aria-label="Scroll left"
        >
          <FaArrowLeft />
        </button>
      )}
      {/* Right Arrow */}
      {showArrows && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-3 bg-timber-green-700 rounded-full hover:bg-timber-green-800 focus:outline-none focus:ring-2 focus:ring-timber-green-500 z-10 transition-all duration-300 ease-in-out opacity-75 hover:opacity-100"
          aria-label="Scroll right"
        >
          <FaArrowRight />
        </button>
      )}
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-8 pb-4 hide-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, index) => (
          <ProjectContainer project={project} key={index} />
        ))}
      </div>
    </section>
  );
}

const Projects = () => {
  return (
    <div className="w-full bg-card-container p-10">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-white">My Projects</h1>
      <div className="space-y-16">
        <ProjectCategory id="data-analytics-projects" title="Data Analytics Projects" projects={projectsData.dataAnalytics} />
        <ProjectCategory id="machine-learning-projects" title="Machine Learning & Deep Learning Projects" projects={projectsData.mlDeepLearning} />
        <ProjectCategory id="ui-ux-projects" title="UI/UX & Design Projects" projects={projectsData.uiUxDesign} />
      </div>
    </div>
  );
};

export default Projects;
