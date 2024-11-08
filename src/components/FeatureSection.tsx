'use client';

import { useState } from 'react';

const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState('Finance');
  
  const features: { [key: string]: string[] } = {
    Students: ["Student enrollment management", "Attendance tracking", "Parent communication portal"],
    Academics: ["Grade management", "Class scheduling", "Curriculum tracking"],
    Finance: [
      "Online fee payment gateway integration",
      "Automated invoice generation",
      "Payment reminder system",
      "Financial reporting and analytics",
      "Salary and payroll management",
      "Expense tracking and budgeting",
    ],
    Analytics: ["Student performance analytics", "Attendance trends", "Finance insights"],
  };
  
  return (
    <div className="container mx-auto px-6 py-16">
    {/* Header */}
    <div className="text-center mb-10">
    <span className="inline-block px-4 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-full">
    Additional Features
    </span>
    <h1 className="mt-4 text-4xl font-bold text-gray-900">All-in-One School Management Platform...</h1>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
    Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for modern educational institutions.
    </p>
    </div>
    
    {/* Tab Navigation */}
    <div className="flex justify-center space-x-10 mb-12">
    {Object.keys(features).map((tab) => (
      <button
      key={tab}
      className={`text-lg font-semibold px-4 py-2 rounded-md ${
        activeTab === tab ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'
      }`}
      onClick={() => setActiveTab(tab)}
      >
      {tab}
      </button>
    ))}
    </div>
    
    {/* Feature Content */}
    <div className="flex flex-col md:flex-row items-start md:space-x-8">
    {/* Feature List */}
    <div className="md:w-1/2">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    {activeTab} Management
    </h2>
    <p className="text-gray-600 mb-6">
    {activeTab === 'Finance'
      ? "Complete fee management system with online payments, invoicing, and comprehensive financial reporting."
      : `Detailed overview of ${activeTab.toLowerCase()} management and analytics.`}
      </p>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      {features[activeTab].map((feature, index) => (
        <div key={index} className="flex items-center mb-4 space-x-3">
        <div className="flex items-center justify-center w-8 h-8 text-white bg-purple-500 rounded-full">
        {index + 1}
        </div>
        <p className="text-gray-700">{feature}</p>
        </div>
      ))}
      </div>
      </div>
      
      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
      <img
      src="/path/to/your/image.jpg" // Replace with your image path
      alt={`${activeTab} Management`}
      className="rounded-lg shadow-lg object-cover w-full"
      />
      </div>
      </div>
      </div>
    );
  };
  
  export default FeatureSection;
  