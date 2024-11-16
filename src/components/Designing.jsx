import React from 'react';

const Designing = () => {
    return (
        <section className="bg-card-container w-full h-auto py-20 flex items-center justify-center" id="about">
            <div className="text-center px-4 sm:px-8 md:px-12">
                <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mb-12">
                    Designing Data-Driven Experiences
                </h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-12 xl:gap-20">
                    {/* About Me Section */}
                    <div className="text-center md:text-start max-w-md p-6 rounded-xl bg-timber-green-100 text-timber-green-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold text-timber-green-900 mb-4">About Me</h2>
                        <p className="text-base text-gray-900 leading-relaxed">
                            I specialize in data science and analysis, merging insights with user-centered design to create impactful digital solutions. My goal is to bridge data with design, enhancing usability and value for users.
                        </p>
                    </div>

                    {/* Vision Section */}
                    <div className="text-center md:text-start max-w-md p-6 rounded-xl bg-timber-green-100 text-timber-green-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold text-timber-green-900 mb-4">My Vision</h2>
                        <p className="text-base text-gray-900 leading-relaxed">
                            I envision a future where data empowers personalized, intuitive digital experiences. By combining machine learning with UI/UX design, I aim to transform complex data into engaging and accessible interfaces.
                        </p>
                    </div>

                    {/* Services Section */}
                    <div className="text-center md:text-start max-w-md p-6 rounded-xl bg-timber-green-100 text-timber-green-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold text-timber-green-900 mb-4">My Services</h2>
                        <p className="text-base text-gray-900 leading-relaxed">
                            I offer expertise in data analytics, predictive modeling, and interactive UI/UX design. Whether developing dashboards or designing user flows, I ensure every project is informed by data and optimized for user experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Designing;
