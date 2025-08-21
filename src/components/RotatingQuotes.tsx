import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quotes = [
  {
    text: "Education is the passport to the future.",
    author: "Malcolm X"
  },
  {
    text: "Knowledge is power.",
    author: "Francis Bacon"
  },
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci"
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    text: "Education is not preparation for life; education is life itself.",
    author: "John Dewey"
  }
];

const RotatingQuotes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextQuote = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
        setIsAnimating(false);
      }, 150);
    }
  };

  const prevQuote = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
        setIsAnimating(false);
      }, 150);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextQuote, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="relative max-w-2xl mx-auto text-center">
      <div className="flex items-center justify-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevQuote}
          className="opacity-70 hover:opacity-100 transition-opacity duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex-1 min-h-[120px] flex flex-col justify-center">
          <div 
            className={`transition-all duration-300 ${
              isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}
          >
            <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-4 leading-relaxed">
              "{quotes[currentIndex].text}"
            </blockquote>
            <cite className="text-lg text-muted-foreground font-medium">
              — {quotes[currentIndex].author}
            </cite>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={nextQuote}
          className="opacity-70 hover:opacity-100 transition-opacity duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Quote indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-primary w-8' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingQuotes;