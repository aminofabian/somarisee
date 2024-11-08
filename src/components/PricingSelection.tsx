'use client';
import { useState } from "react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  
  return (
    <div className="container mx-auto flex flex-col items-center p-8 bg-gray-50">
    {/* Heading */}
    <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center mb-8"
    >
    <h2 className="text-3xl font-bold text-gray-900">Transparent, Per-Student Pricing</h2>
    <p className="text-gray-600 mt-2">Simple, predictable pricing that grows with your institution. All features included, no hidden fees. Special discounts available for large institutions.</p>
    </motion.div>
    
    {/* Toggle Button */}
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.5 }}
    className="flex items-center justify-center mb-8 space-x-2"
    >
    <button
    onClick={() => setIsMonthly(true)}
    className={`px-4 py-2 rounded-lg ${isMonthly ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}
    >
    Monthly
    </button>
    <button
    onClick={() => setIsMonthly(false)}
    className={`px-4 py-2 rounded-lg ${!isMonthly ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}
    >
    Annually (Save 17%)
    </button>
    </motion.div>
    
    {/* Pricing Card */}
    <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl"
    >
    {/* Left Column */}
    <div className="p-8 flex-1">
    <h3 className="text-xl font-semibold text-gray-900">Monthly School License</h3>
    <p className="text-gray-600 mt-2">Get complete access to our comprehensive school management system with all features included. Perfect for schools of any size with flexible scaling options.</p>
    <div className="grid grid-cols-2 gap-4 mt-6 text-purple-600 font-medium">
    <div>✓ Complete Student Management System</div>
    <div>✓ Academic & Examination Tools</div>
    <div>✓ Parent-Teacher Communication Platform</div>
    <div>✓ Basic Financial Management</div>
    <div>✓ Attendance Tracking System</div>
    <div>✓ Real-time Notifications</div>
    <div>✓ 24/7 Customer Support</div>
    <div>✓ Regular System Updates</div>
    </div>
    </div>
    
    {/* Right Column */}
    <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.7, duration: 0.5 }}
    className="bg-gray-100 p-8 flex-1 flex flex-col items-center justify-center text-center"
    >
    <p className="text-gray-500">Simple per-student pricing</p>
    <h4 className="text-4xl font-bold text-gray-900 mt-2">
    ${isMonthly ? "4" : "3.33"} <span className="text-lg text-gray-500">/student/month</span>
    </h4>
    <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition duration-200">
    Start Free Trial
    </button>
    <p className="text-gray-500 mt-4 text-sm">14-day free trial • No credit card required • Volume discounts available</p>
    </motion.div>
    </motion.div>
    </div>
  );
}
