'use client';

import { motion } from 'framer-motion';
import {
  Users,
  GraduationCap,
  Calendar,
  Clock,
  Award,
  CheckCircle2,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const attendanceData = [
  { name: 'Mon', attendance: 95 },
  { name: 'Tue', attendance: 93 },
  { name: 'Wed', attendance: 96 },
  { name: 'Thu', attendance: 92 },
  { name: 'Fri', attendance: 94 },
];

const DashboardShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  return (
    <div className="w-full max-w-5xl mx-auto bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
    <div className="p-6">
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
    <div className="flex items-center space-x-3">
    <GraduationCap className="h-8 w-8 text-purple-600" />
    <h2 className="text-xl font-bold text-gray-800">EduManage Pro</h2>
    </div>
    <div className="flex items-center space-x-2">
    <motion.div
    whileHover={{ scale: 1.05 }}
    className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium cursor-pointer"
    >
    Live Demo
    </motion.div>
    </div>
    </div>
    
    {/* Stats Row */}
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
    >
    {[
      { 
        icon: Users,
        title: 'Students',
        value: '1,234',
        color: 'bg-blue-500'
      },
      {
        icon: GraduationCap,
        title: 'Teachers',
        value: '45',
        color: 'bg-purple-500'
      },
      {
        icon: Award,
        title: 'Avg Score',
        value: '87%',
        color: 'bg-green-500'
      },
      {
        icon: Clock,
        title: 'Attendance',
        value: '95%',
        color: 'bg-orange-500'
      }
    ].map((stat, index) => (
      <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
      >
      <div className={`${stat.color} bg-opacity-10 w-8 h-8 rounded-lg flex items-center justify-center mb-3`}>
      <stat.icon className={`h-4 w-4 ${stat.color.replace('bg-', 'text-')}`} />
      </div>
      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
      <p className="text-lg font-bold text-gray-800">{stat.value}</p>
      </motion.div>
    ))}
    </motion.div>
    
    {/* Chart and Activity */}
    <div className="grid md:grid-cols-2 gap-6">
    {/* Attendance Chart */}
    <motion.div
    variants={itemVariants}
    className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
    >
    <h3 className="text-sm font-bold text-gray-800 mb-4">Weekly Attendance</h3>
    <div className="h-48">
    <ResponsiveContainer width="100%" height="100%">
    <LineChart data={attendanceData}>
    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line 
    type="monotone" 
    dataKey="attendance" 
    stroke="#8B5CF6" 
    strokeWidth={2}
    dot={{ r: 3 }}
    activeDot={{ r: 5 }}
    />
    </LineChart>
    </ResponsiveContainer>
    </div>
    </motion.div>
    
    {/* Activity Feed */}
    <motion.div
    variants={itemVariants}
    className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
    >
    <h3 className="text-sm font-bold text-gray-800 mb-4">Recent Activity</h3>
    <div className="space-y-3">
    {[
      {
        icon: CheckCircle2,
        title: 'Attendance Marked',
        time: '5m ago',
        color: 'text-green-500'
      },
      {
        icon: AlertCircle,
        title: 'New Registration',
        time: '2h ago',
        color: 'text-blue-500'
      },
      {
        icon: TrendingUp,
        title: 'Results Published',
        time: '4h ago',
        color: 'text-purple-500'
      }
    ].map((activity, index) => (
      <motion.div
      key={index}
      whileHover={{ x: 5 }}
      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
      >
      <activity.icon className={`h-4 w-4 ${activity.color}`} />
      <div>
      <p className="text-sm font-medium text-gray-800">{activity.title}</p>
      <p className="text-xs text-gray-500">{activity.time}</p>
      </div>
      </motion.div>
    ))}
    </div>
    </motion.div>
    </div>
    </div>
    </div>
  );
};

export default DashboardShowcase;