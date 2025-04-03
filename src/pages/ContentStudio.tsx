import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useElementOnScreen } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import AnimatedGradient from '@/components/AnimatedGradient';
import { Helmet } from 'react-helmet';

const ContentStudio: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });

  const features = [
    {
      title: "AI-Powered Content Creation",
      description: "Generate high-quality content using cutting-edge AI models",
      icon: "✨"
    },
    {
      title: "Multi-Format Support",
      description: "Create content in various formats including text, images, and videos",
      icon: "🎨"
    },
    {
      title: "Collaborative Workspace",
      description: "Work seamlessly with your team in real-time",
      icon: "👥"
    },
    {
      title: "Content Analytics",
      description: "Track performance and optimize your content strategy",
      icon: "📊"
    }
  ];

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#E6C88C" media="(prefers-color-scheme: light)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>
      <motion.div 
        className="relative bg-black min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <style>
          {`
            @supports (-webkit-touch-callout: none) {
              body {
                background-color: #000000;
              }
              .safari-top-bar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: env(safe-area-inset-top);
                background-color: #000000;
                z-index: 9999;
              }
              .safari-bottom-bar {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                height: env(safe-area-inset-bottom);
                background-color: #000000;
                z-index: 9999;
              }
            }
          `}
        </style>
        <div className="safari-top-bar" />
        <div className="safari-bottom-bar" />
        <AnimatedGradient />
        <Navbar />
        
        <main className="relative z-10 bg-black">
          {/* Hero Section */}
          <section className="section-padding relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                ref={containerRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={cn(
                  "max-w-4xl mx-auto text-center",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-[#E6C88C]">
                  Content Studio Suite
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 font-display max-w-2xl mx-auto">
                  Your all-in-one platform for creating, managing, and optimizing content
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/signup"
                    className="inline-block bg-[#E6C88C] text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-display font-medium shadow-lg shadow-[#E6C88C]/20 hover:bg-[#E6C88C]/90 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Get Started
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="section-padding relative pb-12 sm:pb-16 md:pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#E6C88C]/10 to-transparent p-4 sm:p-6 rounded-xl border border-[#E6C88C]/20 hover:border-[#E6C88C]/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#E6C88C] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 font-display">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </motion.div>
    </>
  );
};

export default ContentStudio; 