import React from 'react';

const HowItWorks: React.FC = () => {
    const steps = [
        { number: "01", title: "Upload Resume", description: "Simply drag and drop your resume. We support PDF, DOCX, and more. Our AI instantly starts analyzing your unique skills and experiences." },
        { number: "02", title: "AI Crafts Portfolio", description: "Watch in real-time as our advanced AI transforms your resume into a stunning, professional portfolio tailored to your career goals." },
        { number: "03", title: "Customize & Launch", description: "Add your personal touch with our intuitive editor. Choose themes, add projects, and go live with your personalized domain in minutes." }
    ];

    return (
        <section className="how-it-works py-32 bg-gradient-to-b from-gray-100 to-white text-gray-800">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    Your Portfolio in 3 Simple Steps
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="step relative p-8 bg-white rounded-3xl shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-70 border border-gray-200 group hover:border-indigo-500 transition duration-300 ease-in-out">
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 transition duration-300 ease-in-out">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 mt-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 group-hover:from-indigo-600 group-hover:to-purple-600 transition duration-300 ease-in-out">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center justify-center">
                                    Learn more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;