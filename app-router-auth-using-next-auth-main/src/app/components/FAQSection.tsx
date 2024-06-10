import React from 'react';

const FAQSection: React.FC = () => {
    return (
        <section className="faqs py-24 bg-gradient-to-b from-gray-50 to-white text-gray-800">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-8 text-left max-w-2xl mx-auto">
                    <details className="bg-white p-6 rounded-2xl shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-50">
                        <summary className="text-xl font-semibold mb-3 text-indigo-600 cursor-pointer">
                            How do I upload my resume?
                        </summary>
                        <p className="text-gray-700 mt-3">
                            Simply click the "Upload Resume" button on our intuitive dashboard. You can upload your resume in PDF, DOCX, or TXT formats. Our AI will instantly analyze your resume and start crafting your personalized portfolio.
                        </p>
                    </details>
                    <details className="bg-white p-6 rounded-2xl shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-50">
                        <summary className="text-xl font-semibold mb-3 text-indigo-600 cursor-pointer">
                            Is my data secure?
                        </summary>
                        <p className="text-gray-700 mt-3">
                            Absolutely. We take your privacy seriously. Your data is encrypted end-to-end and stored securely using industry-standard protocols. We never share your personal information with third parties. Your success is our priority, and that includes protecting your data.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
