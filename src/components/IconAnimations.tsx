import React, { useState } from 'react';
import { Sparkles, Zap, Star, MessageCircle, Bell, Flame, Award, Heart, TrendingUp } from 'lucide-react';

interface IconObj {
  Icon: React.ComponentType<any>;
  color: string;
  effect: string;
}

export const icons = [
  { Icon: Sparkles, color: 'text-yellow-500', effect: 'spark' },
  { Icon: Zap, color: 'text-blue-500', effect: 'zap' },
  { Icon: Star, color: 'text-purple-500', effect: 'star' },
  { Icon: MessageCircle, color: 'text-green-500', effect: 'message' },
  { Icon: Bell, color: 'text-red-500', effect: 'notification' },
  { Icon: Flame, color: 'text-orange-500', effect: 'fire' },
  { Icon: Award, color: 'text-indigo-500', effect: 'award' },
  { Icon: TrendingUp, color: 'text-cyan-500', effect: 'trend' },
  { Icon: Heart, color: 'text-pink-500', effect: 'heart' },
];

export const IconContainer = ({ IconObj, index, activeIcon, setActiveIcon }: { 
  IconObj: IconObj, 
  index: number, 
  activeIcon: string, 
  setActiveIcon: (effect: string | null) => void 
}) => {
  const { Icon, color, effect } = IconObj;
  
  return (
    <div 
    className="aspect-w-1 aspect-h-1 cursor-pointer"
    onMouseEnter={() => setActiveIcon(effect)}
    onMouseLeave={() => setActiveIcon(null)}
    >
    <div className={`
        rounded-full w-12 h-12 flex items-center justify-center
        transition-all duration-300 transform
        ${activeIcon === effect ? `${color} scale-125` : 'bg-gray-200'}
      `}>
      <Icon className={`w-6 h-6 ${activeIcon === effect ? 'text-white' : 'text-gray-400'}`} />
      </div>
      </div>
    );
  };
  
  export const AnimationEffects = ({ activeIcon }: { activeIcon: string | null }) => {
    if (!activeIcon) return null;
    
    return (
      <div className="fixed inset-0 pointer-events-none">
      {activeIcon === 'spark' && <SparklesEffect />}
      {activeIcon === 'zap' && <ZapEffect />}
      {activeIcon === 'star' && <StarEffect />}
      </div>
    );
  };
  
  const SparklesEffect = () => (
    <div className="absolute inset-0 flex items-center justify-center">
    {[...Array(20)].map((_, i) => (
      <div
      key={i}
      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `sparkle ${0.5 + Math.random() * 1}s linear infinite`
      }}
      />
    ))}
    </div>
  );
  
  const ZapEffect = () => (
    <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-px h-px relative">
    {[...Array(5)].map((_, i) => (
      <div
      key={i}
      className="absolute w-px h-16 bg-blue-500 origin-bottom"
      style={{
        transform: `rotate(${i * 72}deg)`,
        animation: 'zapLine 0.5s ease-out infinite'
      }}
      />
    ))}
    </div>
    </div>
  );
  
  const StarEffect = () => (
    <div className="absolute inset-0 flex items-center justify-center">
    {[...Array(12)].map((_, i) => (
      <div
      key={i}
      className="absolute"
      style={{
        animation: `starRotate ${2 + Math.random() * 2}s linear infinite`
      }}
      >
      <div
      className="w-1 h-1 bg-green-500 rounded-full"
      style={{
        transform: `translateY(${50 + Math.random() * 100}px)`
      }}
      />
      </div>
    ))}
    </div>
  );
  
  export const styles = `
  @keyframes sparkle {
    0% { transform: scale(0) rotate(0deg); opacity: 1; }
    100% { transform: scale(1) rotate(180deg); opacity: 0; }
  }
  
  @keyframes zapLine {
    0% { transform: scaleY(0); opacity: 1; }
    100% { transform: scaleY(1); opacity: 0; }
  }
  
  @keyframes starRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;