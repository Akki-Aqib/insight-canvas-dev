import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group" onClick={scrollToNext}>
      <div className="flex flex-col items-center space-y-2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
        </div>
        <ChevronDown className="w-5 h-5 text-muted-foreground bounce-scroll group-hover:text-primary transition-colors duration-200" />
        <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200">
          Scroll Down
        </span>
      </div>
    </div>
  );
};

export default ScrollIndicator;