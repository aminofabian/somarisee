'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Building2, School, LibraryBig, Trophy } from 'lucide-react';

const TrustedBySection = () => {
  // Reduced number of logos and added variety of icons
  const logoData = [
    { icon: School, name: 'University of Excellence', type: 'University' },
    { icon: Building2, name: 'Institute of Technology', type: 'Institute' },
    { icon: LibraryBig, name: 'National Academy', type: 'Academy' },
    { icon: Trophy, name: 'Elite School', type: 'School' },
  ];
  
  // Animation for continuous scrolling
  const marqueeVariantsLeft = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        },
      },
    },
  };
  
  const marqueeVariantsRight = {
    animate: {
      x: [0, 1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
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
    className="container mx-auto text-center py-16 px-5 border my-5 rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 shadow-lg backdrop-blur-lg overflow-hidden"
    >
    {/* Title Section */}
    <div className="mb-12 relative">
    <button className="px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-full shadow-sm hover:bg-purple-100 transition-colors">
    Trusted Partners
    </button>
    <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
    Empowering <span className="text-purple-600">50,000+</span> Educational Institutions
    </h2>
    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
    Join the growing community of educational institutions transforming learning with our platform
    </p>
    </div>
    
    {/* Carousel Section */}
    <div className="space-y-16 mt-10 relative">
    {/* Animated Wavy Line */}
    <svg className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2" preserveAspectRatio="none">
    <motion.path
    d="M 0 32 C 250 0, 750 64, 1000 32"
    stroke="url(#gradient-line)"
    strokeWidth="2"
    fill="none"
    initial={{ pathLength: 0 }}
    animate={{
      d: [
        "M 0 32 C 250 0, 750 64, 1000 32",
        "M 0 32 C 250 64, 750 0, 1000 32",
        "M 0 32 C 250 0, 750 64, 1000 32"
      ]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    />
    <defs>
    <linearGradient id="gradient-line" x1="0" y1="0" x2="100%" y2="0">
    <stop offset="0%" stopColor="#C084FC" />
    <stop offset="50%" stopColor="#8B5CF6" />
    <stop offset="100%" stopColor="#C084FC" />
    </linearGradient>
    </defs>
    </svg>
    
    {/* First Row of Logos */}
    <div className="overflow-hidden w-full relative">
    <motion.div
    className="flex space-x-16"
    variants={marqueeVariantsLeft}
    animate="animate"
    >
    {[...logoData, ...logoData].map((item, index) => (
      <motion.div
      key={`logo-top-${index}`}
      className="relative flex flex-col items-center justify-center min-w-[200px] h-32 text-gray-700 font-medium p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
      whileHover={{ y: -5 }}
      >
      <item.icon className="text-purple-600 mb-3" size={28} />
      <p className="text-sm">{item.name}</p>
      <span className="text-xs text-purple-500 mt-1">{item.type}</span>
      </motion.div>
    ))}
    </motion.div>
    </div>
    
    {/* Second Row of Logos */}
    <div className="overflow-hidden w-full relative">
    <motion.div
    className="flex space-x-16"
    variants={marqueeVariantsRight}
    animate="animate"
    >
    {[...logoData.reverse(), ...logoData].map((item, index) => (
      <motion.div
      key={`logo-bottom-${index}`}
      className="relative flex flex-col items-center justify-center min-w-[200px] h-32 text-gray-700 font-medium p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
      whileHover={{ y: -5 }}
      >
      <item.icon className="text-purple-600 mb-3" size={28} />
      <p className="text-sm">{item.name}</p>
      <span className="text-xs text-purple-500 mt-1">{item.type}</span>
      </motion.div>
    ))}
    </motion.div>
    </div>
    </div>
    </motion.div>
  );
};

export default TrustedBySection;