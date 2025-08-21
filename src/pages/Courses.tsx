import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import SocialLinks from '@/components/SocialLinks';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, PlayCircle } from 'lucide-react';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'web', name: 'Web Development' },
    { id: 'data', name: 'Data Science' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      category: 'web',
      instructor: 'Sarah Johnson',
      duration: '40 hours',
      students: 1250,
      rating: 4.8,
      price: 99,
      level: 'Beginner',
      description: 'Learn HTML, CSS, JavaScript, React, and Node.js from scratch.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Data Science with Python',
      category: 'data',
      instructor: 'Michael Chen',
      duration: '35 hours',
      students: 890,
      rating: 4.9,
      price: 129,
      level: 'Intermediate',
      description: 'Master data analysis, visualization, and machine learning with Python.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      category: 'design',
      instructor: 'Emily Rodriguez',
      duration: '25 hours',
      students: 650,
      rating: 4.7,
      price: 79,
      level: 'Beginner',
      description: 'Learn the principles of user interface and user experience design.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      category: 'business',
      instructor: 'David Park',
      duration: '30 hours',
      students: 1100,
      rating: 4.6,
      price: 89,
      level: 'Intermediate',
      description: 'Build effective digital marketing campaigns and grow your business.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Advanced React Development',
      category: 'web',
      instructor: 'Alex Thompson',
      duration: '45 hours',
      students: 750,
      rating: 4.9,
      price: 149,
      level: 'Advanced',
      description: 'Master advanced React patterns, hooks, and state management.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'Machine Learning Fundamentals',
      category: 'data',
      instructor: 'Dr. Lisa Wang',
      duration: '50 hours',
      students: 920,
      rating: 4.8,
      price: 159,
      level: 'Intermediate',
      description: 'Understand the core concepts and algorithms of machine learning.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop'
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-purple-100 text-purple-800';
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
              Our Courses
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive collection of expert-led courses designed to advance your skills and career.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-200 hover:scale-105"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Card 
                key={course.id}
                className="overflow-hidden hover:education-shadow transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-200">
                    {course.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">${course.price}</span>
                    </div>
                    <Button className="education-gradient text-white hover:education-glow transition-all duration-300">
                      Enroll Now
                    </Button>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Instructor: <span className="font-medium">{course.instructor}</span>
                    </p>
                  </div>
                </div>
              </Card>
            ))}
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

export default Courses;