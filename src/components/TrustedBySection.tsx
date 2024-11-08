'use client';

import { motion } from 'framer-motion';

const TrustedBySection = () => {
  // Animation variant for continuous scrolling in one direction
  const marqueeVariantsLeft = {
    animate: {
      x: [0, -2000], // Adjust based on total width of your content
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 60,
          ease: 'linear',
        },
      },
    },
  };
  
  // Animation variant for continuous scrolling in the opposite direction
  const marqueeVariantsRight = {
    animate: {
      x: [0, 2000], // Moves to the right
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 60,
          ease: 'linear',
        },
      },
    },
  };
  
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="container mx-auto text-center py-16 px-5 border my-5 rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 shadow-lg backdrop-blur-lg"
    >
    {/* Title Section */}
    <div className="mb-8">
    <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200">
    Who uses Our System?
    </button>
    <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
    Used by <span className="text-purple-600">50,000+</span> Schools & Institutions
    </h2>
    <p className="text-gray-600 mt-2">
    Our system is trusted by millions of users every single day.
    </p>
    </div>
    
    {/* Carousel Section */}
    <div className="space-y-6 mt-10">
    {/* First Row of Logos */}
    <div className="overflow-hidden w-full">
    <motion.div
    className="flex space-x-10"
    variants={marqueeVariantsLeft}
    animate="animate"
    >
    {Array.from({ length: 6 }).map((_, index) => (
      <motion.div
      key={`logo-top-${index}`}
      className="text-gray-500 text-lg font-semibold cursor-pointer p-4 bg-white rounded-lg shadow-md transform transition hover:scale-105"
      >
      Logo {index + 1}
      </motion.div>
    ))}
    {Array.from({ length: 6 }).map((_, index) => (
      <motion.div
      key={`logo-top-duplicate-${index}`}
      className="text-gray-500 text-lg font-semibold cursor-pointer p-4 bg-white rounded-lg shadow-md transform transition hover:scale-105"
      >
      Logo {index + 1}
      </motion.div>
    ))}
    </motion.div>
    </div>
    
    {/* Second Row of Logos */}
    <div className="overflow-hidden w-full">
    <motion.div
    className="flex space-x-10"
    variants={marqueeVariantsRight}
    animate="animate"
    >
    {Array.from({ length: 6 }).map((_, index) => (
      <motion.div
      key={`logo-bottom-${index}`}
      className="text-gray-500 text-lg font-semibold cursor-pointer p-4 bg-white rounded-lg shadow-md transform transition hover:scale-105"
      >
      Logo {index + 7}
      </motion.div>
    ))}
    {Array.from({ length: 6 }).map((_, index) => (
      <motion.div
      key={`logo-bottom-duplicate-${index}`}
      className="text-gray-500 text-lg font-semibold cursor-pointer p-4 bg-white rounded-lg shadow-md transform transition hover:scale-105"
      >
      Logo {index + 7}
      </motion.div>
    ))}
    </motion.div>
    </div>
    </div>
    </motion.div>
  );
};

export default TrustedBySection;
