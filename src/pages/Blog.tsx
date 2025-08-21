import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import SocialLinks from '@/components/SocialLinks';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'technology', name: 'Technology' },
    { id: 'education', name: 'Education' },
    { id: 'career', name: 'Career' },
    { id: 'tips', name: 'Study Tips' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Online Learning: Trends to Watch in 2024',
      category: 'education',
      excerpt: 'Explore the latest trends shaping the future of online education, from AI-powered personalization to immersive VR experiences.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Mastering React Hooks: A Complete Guide',
      category: 'technology',
      excerpt: 'Learn how to effectively use React Hooks to build more efficient and maintainable React applications.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      author: 'Alex Thompson',
      date: '2024-01-12',
      readTime: '12 min read',
      featured: false
    },
    {
      id: 3,
      title: '10 Essential Study Techniques for Better Learning',
      category: 'tips',
      excerpt: 'Discover proven study techniques that can help you learn more effectively and retain information longer.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Career Transition: From Developer to Tech Lead',
      category: 'career',
      excerpt: 'A comprehensive guide on making the transition from individual contributor to technical leadership roles.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      author: 'Michael Chen',
      date: '2024-01-08',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Building Your First Machine Learning Model',
      category: 'technology',
      excerpt: 'Step-by-step tutorial on creating your first machine learning model using Python and scikit-learn.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      author: 'Dr. Lisa Wang',
      date: '2024-01-05',
      readTime: '15 min read',
      featured: false
    },
    {
      id: 6,
      title: 'The Psychology of Learning: How Your Brain Processes Information',
      category: 'education',
      excerpt: 'Understanding the science behind learning can help you develop better study strategies and improve retention.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      author: 'David Park',
      date: '2024-01-03',
      readTime: '9 min read',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technology': return 'bg-blue-100 text-blue-800';
      case 'education': return 'bg-green-100 text-green-800';
      case 'career': return 'bg-purple-100 text-purple-800';
      case 'tips': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12 fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EduLearn Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and tips to help you on your learning journey.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === 'all' && (
            <Card className="mb-12 overflow-hidden hover:education-shadow transition-all duration-300 hover:scale-[1.02]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">Featured</Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className={`${getCategoryColor(featuredPost.category)} w-fit mb-4`}>
                    {featuredPost.category.charAt(0).toUpperCase() + featuredPost.category.slice(1)}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground hover:text-primary transition-colors duration-200">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="w-fit education-gradient text-white hover:education-glow transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          )}

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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="overflow-hidden hover:education-shadow transition-all duration-300 hover:scale-105 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.date)}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-200">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 text-center fade-in-up">
            <Card className="max-w-2xl mx-auto p-8 education-gradient text-white">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-6 opacity-90">
                Subscribe to our newsletter and get the latest articles delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-foreground bg-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </Card>
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

export default Blog;