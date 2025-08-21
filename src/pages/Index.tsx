import React from 'react';
import Navigation from '@/components/Navigation';
import RotatingQuotes from '@/components/RotatingQuotes';
import ScrollIndicator from '@/components/ScrollIndicator';
import SocialLinks from '@/components/SocialLinks';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import educationHero from '@/assets/education-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Hero Content */}
          <div className="relative">
            {/* Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 education-gradient rounded-full opacity-10 animate-pulse"></div>
            </div>
            
            {/* Hero Image */}
            <div className="relative z-10 mb-8">
              <div className="w-80 h-80 mx-auto rounded-full education-shadow overflow-hidden group hover:education-glow transition-all duration-500">
                <img 
                  src={educationHero}
                  alt="Education illustration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 fade-in-up">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                EduLearn
              </span>
            </h1>
            
            {/* Rotating Quotes */}
            <div className="mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <RotatingQuotes />
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button className="education-gradient text-white hover:education-glow transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="hover:bg-accent/10 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
                Explore Courses
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 EduLearn. All rights reserved.
            </p>
            <SocialLinks />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
