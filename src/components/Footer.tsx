import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-gray-100 py-8 px-4 my-5">
    {/* Main Footer Content */}
    <div className="flex flex-col items-center space-y-6 text-center">
    {/* School Management System Logo and Details */}
    <div className="text-center">
    <img src="/logo.png" alt="School Management Logo" className="w-24 mx-auto mb-2" />
    <h2 className="text-2xl font-bold text-gray-900">School Management Kenya</h2>
    <p className="text-gray-600">Empowering Education for the Future</p>
    </div>
    
    {/* School Logos */}
    <div className="flex flex-wrap justify-center gap-4">
    <img src="/academia-hunters.png" alt="Academia Hunters" className="w-16 h-16" />
    <img src="/harrison-primary.png" alt="Mombasa Primary School" className="w-16 h-16" />
    <img src="/academia-hunters.png" alt="Kisumu International School" className="w-16 h-16" />
    <img src="/harrison-primary.png" alt="Eldoret Academy" className="w-16 h-16" />
    <img src="/academia-hunters.png" alt="Nakuru Day School" className="w-16 h-16" />
    </div>
    
    {/* Contact Information */}
    <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-8 space-y-4 md:space-y-0 text-gray-700 mt-4">
    <div className="flex items-center space-x-2">
    <MapPin className="text-red-500" />
    <p>15 Education Lane, Nairobi, Kenya</p>
    </div>
    <div className="flex items-center space-x-2">
    <Phone className="text-green-500" />
    <p>+254 712 345 678</p>
    </div>
    </div>
    
    {/* Social Media Icons */}
    <div className="flex space-x-4 mt-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-purple-600"><Facebook /></a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-purple-400"><Twitter /></a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-700"><Linkedin /></a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500"><Instagram /></a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500"><Youtube /></a>
    </div>
    
    {/* Footer Links */}
    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mt-6">
    <a href="/terms" className="hover:text-gray-900">Terms of Service</a>
    <a href="/privacy" className="hover:text-gray-900">Privacy Policy</a>
    <a href="/rate-us" className="hover:text-gray-900">Rate Us</a>
    <a href="/support" className="hover:text-gray-900">Support</a>
    <div className="relative">
    <button className="hover:text-gray-900">Select Language ▼</button>
    </div>
    </div>
    
    {/* Copyright */}
    <div className="text-gray-500 text-xs mt-6">
    © 2024 School Management Kenya. All Rights Reserved.
    </div>
    
    {/* Browser Compatibility */}
    <div className="text-gray-500 text-xs mt-2">
    Best viewed on Chrome 87, Firefox 78, Safari 14, and above.
    </div>
    </div>
    </footer>
  );
}
