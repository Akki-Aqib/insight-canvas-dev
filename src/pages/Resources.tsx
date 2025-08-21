import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import SocialLinks from '@/components/SocialLinks';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, BookOpen, Video, FileText, ExternalLink } from 'lucide-react';

const Resources = () => {
  const [selectedType, setSelectedType] = useState('all');

  const resourceTypes = [
    { id: 'all', name: 'All Resources' },
    { id: 'ebook', name: 'E-books' },
    { id: 'video', name: 'Video Tutorials' },
    { id: 'template', name: 'Templates' },
    { id: 'guide', name: 'Study Guides' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Complete Web Development Guide',
      type: 'ebook',
      format: 'PDF',
      size: '2.4 MB',
      downloads: 1250,
      description: 'Comprehensive guide covering HTML, CSS, JavaScript, and modern frameworks.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop',
      author: 'Sarah Johnson',
      free: true
    },
    {
      id: 2,
      title: 'React Hooks Masterclass',
      type: 'video',
      format: 'Video Series',
      duration: '4h 30m',
      downloads: 890,
      description: 'Learn React Hooks from basics to advanced patterns with practical examples.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
      author: 'Alex Thompson',
      free: false
    },
    {
      id: 3,
      title: 'Data Science Project Templates',
      type: 'template',
      format: 'ZIP',
      size: '15.2 MB',
      downloads: 650,
      description: 'Ready-to-use templates for data analysis, visualization, and machine learning projects.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      author: 'Michael Chen',
      free: true
    },
    {
      id: 4,
      title: 'UI/UX Design Principles',
      type: 'guide',
      format: 'PDF',
      size: '1.8 MB',
      downloads: 1100,
      description: 'Essential design principles and best practices for creating user-friendly interfaces.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=200&fit=crop',
      author: 'Emily Rodriguez',
      free: true
    },
    {
      id: 5,
      title: 'Python Cheat Sheet Collection',
      type: 'guide',
      format: 'PDF',
      size: '800 KB',
      downloads: 2100,
      description: 'Quick reference guides for Python syntax, libraries, and common patterns.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop',
      author: 'Dr. Lisa Wang',
      free: true
    },
    {
      id: 6,
      title: 'Digital Marketing Toolkit',
      type: 'template',
      format: 'ZIP',
      size: '8.5 MB',
      downloads: 750,
      description: 'Templates for social media posts, email campaigns, and marketing analytics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      author: 'David Park',
      free: false
    }
  ];

  const filteredResources = selectedType === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === selectedType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'ebook': return BookOpen;
      case 'video': return Video;
      case 'template': return FileText;
      case 'guide': return BookOpen;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'ebook': return 'bg-blue-100 text-blue-800';
      case 'video': return 'bg-red-100 text-red-800';
      case 'template': return 'bg-green-100 text-green-800';
      case 'guide': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12 fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Learning Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of free and premium resources to accelerate your learning journey.
            </p>
          </div>

          {/* Resource Type Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {resourceTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedType === type.id ? "default" : "outline"}
                onClick={() => setSelectedType(type.id)}
                className="transition-all duration-200 hover:scale-105"
              >
                {type.name}
              </Button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => {
              const TypeIcon = getTypeIcon(resource.type);
              
              return (
                <Card 
                  key={resource.id}
                  className="overflow-hidden hover:education-shadow transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getTypeColor(resource.type)}>
                        <TypeIcon className="w-3 h-3 mr-1" />
                        {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      {resource.free ? (
                        <Badge className="bg-green-100 text-green-800">Free</Badge>
                      ) : (
                        <Badge className="bg-blue-100 text-blue-800">Premium</Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-200">
                      {resource.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>By {resource.author}</span>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{resource.downloads}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                      <span>{resource.format}</span>
                      <span>
                        {resource.size || resource.duration}
                      </span>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button 
                        className="flex-1 education-gradient text-white hover:education-glow transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-accent/10 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-muted/30 rounded-lg p-8 fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Resource Statistics</h2>
              <p className="text-muted-foreground">Our resources have helped thousands of learners worldwide</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Free Resources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Premium Resources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Total Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
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

export default Resources;