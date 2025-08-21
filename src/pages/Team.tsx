import React from 'react';
import Navigation from '@/components/Navigation';
import SocialLinks from '@/components/SocialLinks';
import { Card } from '@/components/ui/card';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Former Google engineer with 10+ years of experience in educational technology.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@edulearn.com'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer passionate about creating scalable educational platforms.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@edulearn.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'UX/UI designer focused on creating intuitive and accessible learning experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@edulearn.com'
      }
    },
    {
      name: 'David Park',
      role: 'Head of Content',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Educational content strategist with expertise in curriculum development.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@edulearn.com'
      }
    },
    {
      name: 'Dr. Lisa Wang',
      role: 'Head of Research',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
      bio: 'PhD in Education Technology, researching personalized learning algorithms.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'lisa@edulearn.com'
      }
    },
    {
      name: 'Alex Thompson',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      bio: 'React specialist building the next generation of interactive learning tools.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alex@edulearn.com'
      }
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
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate group of educators, technologists, and creators dedicated to 
              revolutionizing the way people learn and grow.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="p-6 text-center hover:education-shadow transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden group-hover:education-glow transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <a 
                    href={member.social.linkedin}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary group/social transition-all duration-300 flex items-center justify-center hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover/social:text-white transition-colors duration-300" />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary group/social transition-all duration-300 flex items-center justify-center hover:scale-110"
                  >
                    <Twitter className="w-5 h-5 text-muted-foreground group-hover/social:text-white transition-colors duration-300" />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary group/social transition-all duration-300 flex items-center justify-center hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-muted-foreground group-hover/social:text-white transition-colors duration-300" />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Join Our Team Section */}
          <div className="mt-20 text-center fade-in-up">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Join Our Team</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for talented individuals who share our passion for education 
                and innovation. If you'd like to be part of our mission, we'd love to hear from you.
              </p>
              <a 
                href="#"
                className="inline-flex items-center px-8 py-3 education-gradient text-white font-medium rounded-lg hover:education-glow transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </a>
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

export default Team;