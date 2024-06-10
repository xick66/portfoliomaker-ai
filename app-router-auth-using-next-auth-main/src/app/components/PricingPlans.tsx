import React from 'react';

const PricingPlans: React.FC = () => {
    return (
        <section className="pricing py-32 bg-gradient-to-b from-white to-gray-100 text-gray-800">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                    Invest in Your Future
                </h2>
                <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                    Choose a plan that fits your career stage. Whether you're a student or a seasoned pro, we've got you covered.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="plan relative bg-white p-8 rounded-3xl shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-70 border border-gray-200 hover:border-indigo-500 transition duration-300 ease-in-out">
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-6 rounded-full font-semibold shadow-lg">
                            Most Popular
                        </div>
                        <h3 className="text-3xl font-bold mb-4 mt-8 text-gray-800">Student Plan</h3>
                        <p className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            $9.99<span className="text-2xl font-normal text-gray-500">/month</span>
                        </p>
                        <ul className="text-left space-y-4 mb-8">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Unlimited Portfolio Generation</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Custom Domain (youname.com)</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Premium Themes</span>
                            </li>
                        </ul>
                        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
                            Get Started
                        </button>
                    </div>
                    <div className="plan bg-white p-8 rounded-3xl shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-70 border border-gray-200 hover:border-indigo-500 transition duration-300 ease-in-out">
                        <h3 className="text-3xl font-bold mb-4 text-gray-800">Professional Plan</h3>
                        <p className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            $29.99<span className="text-2xl font-normal text-gray-500">/month</span>
                        </p>
                        <ul className="text-left space-y-4 mb-8">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Everything in Student Plan</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Advanced Analytics</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Priority Support</span>
                            </li>
                        </ul>
                        <button className="bg-black text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
                            Upgrade Now
                        </button>
                    </div>
                </div>
                <p className="mt-16 text-sm text-gray-500">Prices are in USD. Billed annually. 14-day money-back guarantee.</p>
            </div>
        </section>
    );
}

export default PricingPlans;