import { Eye, MessageCircle, Heart } from "lucide-react";

const newsData = [
  {
    title: "Somerise SELECTED AS FIELD GLOBAL IMMERSION...",
    views: 236,
    comments: 0,
    likes: 9,
    image: "/path/to/image1.jpg",
  },
  {
    title: "How Somerise Learning Helped Me Improve From D to A- in...",
    views: 696,
    comments: 0,
    likes: 18,
    image: "/path/to/image2.jpg",
  },
  {
    title: "The 5 Best Cybersecurity Tips To Ensure Data Security for...",
    views: 763,
    comments: 0,
    likes: 10,
    image: "/path/to/image3.jpg",
  },
];

export default function LatestNews() {
  return (
    <section className="container mx-auto my-5 bg-gray-100 py-12 px-6">
    {/* Title */}
    <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-gray-900">LATEST NEWS</h2>
    <div className="bg-green-500 w-1 h-1 mx-auto mt-2"></div>
    </div>
    
    {/* News Cards */}
    <div className="flex flex-wrap justify-center gap-6">
    {newsData.map((news, index) => (
      <div
      key={index}
      className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg"
      >
      <img
      src={news.image}
      alt={news.title}
      className="w-full h-48 object-cover"
      />
      <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">
      {news.title}
      </h3>
      <div className="flex items-center justify-between text-gray-600 mt-4">
      <div className="flex items-center space-x-2">
      <Eye className="w-5 h-5" />
      <span>{news.views}</span>
      </div>
      <div className="flex items-center space-x-2">
      <MessageCircle className="w-5 h-5" />
      <span>{news.comments}</span>
      </div>
      <div className="flex items-center space-x-2">
      <Heart className="w-5 h-5" />
      <span>{news.likes}</span>
      </div>
      </div>
      </div>
      </div>
    ))}
    </div>
    
    {/* View More Button */}
    <div className="text-center mt-8">
    <button className="border border-gray-800 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition">
    View More
    </button>
    </div>
    </section>
  );
}
