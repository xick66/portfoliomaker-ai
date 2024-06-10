import React from 'react';

const SamplePortfolios: React.FC = () => {
    const portfolios = [
        { name: "Emily Chen", role: "UI/UX Designer", image: "/emily-chen.jpg" },
        { name: "Alex Rodriguez", role: "Software Engineer", image: "/alex-rodriguez.jpg" },
        { name: "Mia Thompson", role: "Data Scientist", image: "/mia-thompson.jpg" }
    ];

    return (
        <section className="samples py-32 bg-gradient-to-b from-gray-100 to-white text-gray-800">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    Portfolios That Get Noticed
                </h2>
                <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
                    See how our AI has transformed resumes into stunning portfolios, helping students and professionals stand out in their fields.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {portfolios.map((portfolio, index) => (
                        <div key={index} className="portfolio relative group">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img src={portfolio.image} alt={portfolio.name} className="w-full h-auto rounded-3xl transform group-hover:scale-105 transition duration-500 ease-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition duration-300 ease-in-out">
                                    <h3 className="text-2xl font-bold mb-2">{portfolio.name}</h3>
                                    <p className="text-lg">{portfolio.role}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                    View Portfolio
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-20">
                    <a href="#" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
                        Explore More Portfolios
                    </a>
                </div>
            </div>
        </section>
    );
}

export default SamplePortfolios;