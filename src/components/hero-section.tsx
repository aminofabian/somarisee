'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Star, MessageCircle, Bell, Award } from 'lucide-react';
import { PropsWithChildren } from 'react';




type IconType = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  effect: string;
  message: string;
  description: string;
  gradient: string;
};

type ExpandableFeaturesProps = {
  icons: IconType[];
  isReversed?: boolean;
};


interface Feature {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  message: string;
  description: string;
  gradient: string;
  effect: string;
}



const FloatingElement = ({ children, initialX, initialY }: PropsWithChildren<{ initialX: number; initialY: number }>) => {
  return (
    <motion.div
    initial={{ x: initialX, y: initialY, opacity: 0 }}
    animate={{ 
      x: [initialX - 10, initialX + 10, initialX],
      y: [initialY - 10, initialY + 5, initialY],
      opacity: [0.3, 0.7, 0.3]
    }}
    transition={{ 
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
    className="absolute text-purple-500/20 font-bold text-2xl select-none pointer-events-none"
    >
    {children}
    </motion.div>
  );
};

const BackgroundElements = () => {
  const elements = [
    { content: "∑", x: "10%", y: "20%" },
    { content: "π", x: "85%", y: "15%" },
    { content: "÷", x: "75%", y: "65%" },
    { content: "∫", x: "15%", y: "75%" },
    { content: "=", x: "90%", y: "40%" },
    { content: "√", x: "5%", y: "45%" },
    { content: "×", x: "80%", y: "85%" },
  ];
  
  return (
    <div className="absolute inset-0 overflow-hidden">
    {elements.map((el, i) => (
      <FloatingElement 
      key={i} 
      initialX={parseFloat(el.x) / 100} // convert string to number
      initialY={parseFloat(el.y) / 100}
      >
      {el.content}
      </FloatingElement>
    ))}
    </div>
  );
};

const FloatingDot = ({ delay = 0 }) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  
  return (
    <motion.div
    className="absolute w-[800px] h-[100px] bg-purple-200/10 rounded-full"
    initial={{ x: `${randomX}%`, y: "100%", opacity: 0 }}
    animate={{
      y: ["100%", "0%"],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
    />
  );
};

const FloatingDots = ({ count = 20 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: count }).map((_, i) => (
      <FloatingDot key={i} delay={i * 0.8} />
    ))}
    </div>
  );
};


<div id="ts-ignore"></div>
const FeatureCard = ({ feature, isReversed = false }: { feature: Feature; isReversed?: boolean }) => {
  const { Icon, message, description, gradient } = feature;
  
  return (
    <motion.div
    initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.02 }}
    className={`flex items-center gap-6 ${isReversed ? 'flex-row-reverse' : ''}`}
    >
    <motion.div
    className={`
          w-16 h-16 rounded-xl flex items-center justify-center
          bg-gradient-to-br ${gradient} shadow-lg
        `}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, 5, -5, 0],
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.95 }}
      >
      <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <motion.div 
      className={`text-${isReversed ? 'right' : 'left'}`}
      whileHover={{ y: -2 }}
      >
      <h3 className="font-bold text-gray-800">{message}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      </motion.div>
      </motion.div>
    );
  };
  
  const ExpandableFeatures = ({ icons, isReversed = false }: ExpandableFeaturesProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
      <motion.div
      className="space-y-6"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      >
      <AnimatePresence>
      {icons.map((icon: Feature, index: number) => (       
        <motion.div
        key={icon.effect}
        initial={false}
        animate={{ 
          opacity: isExpanded || index === 0 ? 1 : 0,
          height: isExpanded || index === 0 ? 'auto' : 0,
          marginTop: isExpanded || index === 0 ? 24 : 0
        }}
        transition={{ duration: 0.2 }}
        style={{ overflow: 'hidden' }}
        >
        <FeatureCard feature={icon} isReversed={isReversed} />
        </motion.div>
      ))}
      </AnimatePresence>
      </motion.div>
    );
  };
  
  const featuredIcons = [
    {
      Icon: Sparkles,
      color: 'text-yellow-400',
      effect: 'spark',
      message: 'Student Engagement',
      description: 'Interactive learning tracking',
      gradient: 'from-yellow-400 via-orange-300 to-amber-500',
    },
    {
      Icon: Zap,
      color: 'text-purple-400',
      effect: 'zap',
      message: 'Quick Enrollment',
      description: 'Lightning-fast admissions',
      gradient: 'from-purple-400 via-cyan-300 to-teal-500',
    },
    {
      Icon: Star,
      color: 'text-purple-400',
      effect: 'star',
      message: 'Achievement Tracking',
      description: 'Performance monitoring',
      gradient: 'from-purple-400 via-fuchsia-300 to-pink-500',
    },
  ];
  
  const additionalIcons = [
    {
      Icon: MessageCircle,
      color: 'text-green-400',
      effect: 'message',
      message: 'Communication Hub',
      description: 'Parent-teacher connection',
      gradient: 'from-green-400 via-emerald-300 to-teal-500',
    },
    {
      Icon: Bell,
      color: 'text-red-400',
      effect: 'notification',
      message: 'Smart Alerts',
      description: 'Real-time updates',
      gradient: 'from-red-400 via-rose-300 to-pink-500',
    },
    {
      Icon: Award,
      color: 'text-indigo-400',
      effect: 'award',
      message: 'Recognition System',
      description: 'Student achievements',
      gradient: 'from-indigo-400 via-violet-300 to-purple-500',
    },
  ];
  
  const B2BLeadGenHero = () => {
    return (
      <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container  mx-auto relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 my-5 rounded-3xl shadow-lg"
      >
      <BackgroundElements />
      <FloatingDots />
      
      <div className="container mx-auto px-4 py-16 relative">
      <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-center mb-16"
      >
      <motion.h1
      className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      >
      Transform Your School Management
      </motion.h1>
      <motion.p
      className="text-xl text-gray-600 max-w-2xl mx-auto"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      >
      Streamline operations, enhance communication, and elevate student success
      </motion.p>
      </motion.div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-1">
      <ExpandableFeatures icons={featuredIcons} />
      </div>
      
      <div className="md:col-span-1 flex flex-col items-center gap-6">
      <motion.div
      className="space-y-4 w-full max-w-xs"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4 }}
      >
      <motion.button
      className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.5)"
      }}
      whileTap={{ scale: 0.98 }}
      >
      Get Started Today
      </motion.button>
      
      <motion.button
      className="w-full px-6 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.2)"
      }}
      whileTap={{ scale: 0.98 }}
      >
      Open Demo
      </motion.button>
      </motion.div>
      </div>
      
      <div className="md:col-span-1">
      <ExpandableFeatures icons={additionalIcons} isReversed={true} />
      </div>
      </div>
      </div>
      </motion.section>
    );
  };
  
  export default B2BLeadGenHero;