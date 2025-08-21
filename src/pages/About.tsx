import React from 'react';
import Navigation from '@/components/Navigation';
import SocialLinks from '@/components/SocialLinks';
import { Card } from '@/components/ui/card';
import { Target, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize education and make quality learning accessible to everyone, everywhere.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building a supportive learning community where students and educators thrive together.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality educational content and learning experiences.'
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to create engaging and effective learning solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About EduLearn
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're passionate about transforming education through innovative technology and 
              personalized learning experiences that inspire growth and achievement.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-6 text-center hover:education-shadow transition-all duration-300 hover:scale-105 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 education-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:education-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2024, EduLearn emerged from a simple belief: every person deserves access to 
                quality education that adapts to their unique learning style and pace.
              </p>
              <p>
                Our team of educators, technologists, and designers work tirelessly to create learning 
                experiences that are not just informative, but truly transformative.
              </p>
              <p>
                Today, we're proud to serve thousands of learners worldwide, helping them achieve their 
                goals and unlock their full potential through the power of education.
              </p>
            </div>
          </div>
        </div>
      </main>

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

export default About;