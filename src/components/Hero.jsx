import React from 'react';
import hero2 from '../assets/hero-trans.png';

const Hero = () => {
    return (
        <div>
            <div className='relative flex flex-col xs:flex-col md:flex-row md:justify-between 
                overflow-hidden md:min-h-[500px] xs:min-h-[00px] sm:min-h-[550px] md:gap-16 lg:min-h-[550px]
                bg-gray-100 items-center duration-200 p-4 xs:p-6 sm:p-10 md:p-20'>
                
                <div className='flex flex-col items-center md:items-start md:text-left md:-ml-12 xs:ml-0'>
                    <h2 className='text-3xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
                        Data Analyst & Data Science Enthusiast
                    </h2>
                    <p className='text-base xs:text-sm sm:text-lg md:text-xl lg:text-2xl font-sans mt-4 
                        md:mt-6 max-w-[90%] md:w-[400px] lg:w-[500px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                        Hi, I'm Suraj Singh — a passionate Computer Science student with expertise in Data Analysis, Business & Financial Analytics, Machine Learning, Deep Learning, and UI/UX Design. I specialize in transforming complex data into actionable insights and crafting intuitive, user-centered designs. My goal is to bridge the gap between data-driven decisions and design innovation.
                    </p>
                    <div className='mt-6 flex flex-col xs:flex-row xs:gap-4 md:flex-row gap-4'>
                        <a href="#data-analytics-projects">
                            <button className='w-[120px] xs:w-[130px] sm:w-[150px] h-[40px] xs:h-[45px] sm:h-[50px] text-white bg-primary/90 hover:bg-stone-200 hover:text-black hover:translate-y-2 duration-200 font-medium'>
                                Explore My Work
                            </button>
                        </a>

                        <a href="#contact">
                            <button className='w-[120px] xs:w-[130px] sm:w-[150px] h-[40px] xs:h-[45px] sm:h-[50px] text-black bg-white hover:bg-primary hover:translate-y-2 duration-200 hover:text-white font-medium'>
                                Get in Touch
                            </button>
                        </a>
                    </div>
                </div>



                <div className="overflow-hidden bg-secondary rounded-full mt-4 w-[40%] h-0 pb-[40%] relative">
                    <img 
                        src={hero2} 
                        alt="Hero Image" 
                        className="object-cover absolute top-0 left-0 w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
