import React from 'react';

const FeaturesHighlight: React.FC = () => {
    return (
        <section className="features py-24 bg-gradient-to-b from-white to-gray-50 text-gray-800">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    Unleash Your Professional Potential
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="feature-box bg-white p-8 rounded-3xl shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-70">
                        <div className="mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Instant AI-Powered Setup</h3>
                        <p className="text-gray-600">
                            Our advanced AI analyzes your resume in seconds, extracting key skills and experiences to craft a stunning portfolio instantly.
                        </p>
                    </div>
                    <div className="feature-box bg-white p-8 rounded-3xl shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-70">
                        <div className="mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Customizable Themes</h3>
                        <p className="text-gray-600">
                            Choose from a variety of professionally designed themes or customize colors, fonts, and layouts to match your personal brand.
                        </p>
                    </div>
                    <div className="feature-box bg-white p-8 rounded-3xl shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-70">
                        <div className="mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Responsive Across Devices</h3>
                        <p className="text-gray-600">
                            Your portfolio adapts flawlessly to all devices, ensuring a professional look on desktops, tablets, and smartphones.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesHighlight;