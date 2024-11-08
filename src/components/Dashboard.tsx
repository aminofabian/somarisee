'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="container mx-auto flex justify-center items-center h-screen bg-gray-100 px-5 py-10"
    >
    <motion.div
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="w-full max-w-6xl rounded-lg shadow-lg bg-white overflow-hidden"
    >
    <div className="flex">
    {/* Sidebar */}
    <div className="w-1/4 p-4 bg-gray-50">
    <h2 className="text-xl font-semibold mb-6">School Management</h2>
    <nav>
    <ul>
    <li className="mb-4 text-purple-500 font-medium">Dashboard</li>
    <li className="mb-4">Students</li>
    <li className="mb-4">Teachers</li>
    <li className="mb-4">Classes</li>
    <li className="mb-4">Attendance</li>
    <li className="mb-4">Events</li>
    </ul>
    </nav>
    </div>
    
    {/* Main Content */}
    <div className="w-3/4 p-6">
    <h1 className="text-2xl font-semibold mb-6">Welcome back!</h1>
    
    {/* Statistics Cards */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
    <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-medium">Total Students</h2>
    <p className="text-3xl font-bold">1,234</p>
    <p className="text-sm text-indigo-500">+5% since last month</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-medium">New Admissions</h2>
    <p className="text-3xl font-bold">98</p>
    <p className="text-sm text-indigo-500">+12% since last month</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-medium">Total Teachers</h2>
    <p className="text-3xl font-bold">45</p>
    <p className="text-sm text-indigo-500">+3% since last month</p>
    </div>
    {/* Add more cards as needed */}
    </div>
    
    {/* Event Log */}
    <div className="bg-gray-50 p-4 rounded-lg shadow">
    <h2 className="text-lg font-medium mb-4">Event Log</h2>
    <ul>
    <li className="flex justify-between mb-2">
    <span>New student added: john.doe@example.com</span>
    <span className="text-gray-500">5 mins ago</span>
    </li>
    <li className="flex justify-between mb-2">
    <span>Attendance marked for Class 10</span>
    <span className="text-gray-500">2 hours ago</span>
    </li>
    <li className="flex justify-between mb-2">
    <span>Scheduled event: School Sports Day</span>
    <span className="text-gray-500">1 day ago</span>
    </li>
    {/* Add more events as needed */}
    </ul>
    </div>
    </div>
    </div>
    </motion.div>
    </motion.div>
  );
};

export default Dashboard;
