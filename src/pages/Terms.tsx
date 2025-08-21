import React from 'react';
import Navigation from '@/components/Navigation';
import SocialLinks from '@/components/SocialLinks';
import { Card } from '@/components/ui/card';

const Terms = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using EduLearn ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      title: '2. Description of Service',
      content: `EduLearn is an online educational platform that provides courses, resources, and learning materials. We reserve the right to modify, suspend, or discontinue the service at any time without notice.`
    },
    {
      title: '3. User Accounts',
      content: `To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.`
    },
    {
      title: '4. Content and Intellectual Property',
      content: `All content provided through EduLearn, including but not limited to courses, videos, text, graphics, and software, is owned by EduLearn or its content suppliers and is protected by copyright and other intellectual property laws.`
    },
    {
      title: '5. User Conduct',
      content: `You agree not to use the Service to: (a) violate any laws or regulations; (b) infringe on the rights of others; (c) distribute spam, malware, or other harmful content; (d) interfere with the proper functioning of the Service.`
    },
    {
      title: '6. Payment and Refunds',
      content: `Some courses and features may require payment. All payments are processed securely through our payment partners. Refund policies vary by course and are clearly stated at the time of purchase.`
    },
    {
      title: '7. Privacy Policy',
      content: `Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your personal information.`
    },
    {
      title: '8. Limitation of Liability',
      content: `EduLearn shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.`
    },
    {
      title: '9. Termination',
      content: `We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.`
    },
    {
      title: '10. Changes to Terms',
      content: `We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated terms.`
    },
    {
      title: '11. Governing Law',
      content: `These terms shall be governed and construed in accordance with the laws of the jurisdiction in which EduLearn operates, without regard to its conflict of law provisions.`
    },
    {
      title: '12. Contact Information',
      content: `If you have any questions about these Terms and Conditions, please contact us at legal@edulearn.com or through our contact page.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12 fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our service.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Last updated: January 1, 2024</p>
            </div>
          </div>

          {/* Introduction */}
          <Card className="p-8 mb-8 hover:education-shadow transition-all duration-300">
            <div className="prose max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Welcome to EduLearn. These Terms and Conditions ("Terms", "Terms and Conditions") govern your 
                relationship with EduLearn operated by EduLearn Inc. ("us", "we", or "our").
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please read these Terms and Conditions carefully before using our Service. Your access to and 
                use of the Service is conditioned on your acceptance of and compliance with these Terms.
              </p>
            </div>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card 
                key={section.title}
                className="p-6 hover:education-shadow transition-all duration-300 hover:scale-[1.01]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h2 className="text-xl font-semibold mb-4 text-foreground">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <Card className="mt-12 p-8 education-gradient text-white">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
              <p className="mb-6 opacity-90">
                If you have any questions or concerns about these Terms and Conditions, 
                please don't hesitate to contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:legal@edulearn.com"
                  className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-all duration-300 font-medium"
                >
                  Email Legal Team
                </a>
                <a 
                  href="/contact"
                  className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-medium"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </Card>

          {/* Navigation Links */}
          <div className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
              <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>
              <a href="/contact" className="text-primary hover:underline">Contact Us</a>
              <a href="/about" className="text-primary hover:underline">About EduLearn</a>
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

export default Terms;