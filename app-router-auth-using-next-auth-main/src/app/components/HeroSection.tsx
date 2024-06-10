import React from 'react';

const HeroSection = () => {
  const imageSources = [
    '/ig7.jpg',
    '/ig3.jpg',
    '/ig4.jpg',
  ];

  return (
    <section className="hero min-h-screen bg-white text-gray-800 flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-8" style={{ width: '100%', boxSizing: 'border-box' }}>
      <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          A new way to <span className="text-purple-600">showcase</span> your work.
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-6">
          Turn your resume into a personalized portfolio website in just seconds.
        </p>
        <button className="bg-black text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105">
          Upload Resume
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center items-center relative">
        <div className="fidget-spinner">
          {imageSources.map((src, index) => (
            <div key={index} className={`image-frame ${index === 0 ? 'big-frame' : ''} animate-slide`}>
              <img
                className="w-24 h-24 object-cover rounded-full"
                src={src}
                alt={`Art ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;





