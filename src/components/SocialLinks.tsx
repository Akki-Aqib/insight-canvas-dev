import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          className="w-10 h-10 rounded-full bg-muted hover:bg-primary group transition-all duration-300 flex items-center justify-center hover:education-glow hover:scale-110"
          aria-label={label}
        >
          <Icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;