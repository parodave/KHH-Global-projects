'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function HeroSection() {
  const { t } = useTranslation();

  const scrollToProperties = () => {
    const element = document.getElementById('properties');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToProperties}
              className="text-lg px-8 py-6 rounded-full"
            >
              {t('hero.cta')}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 rounded-full"
            >
              {t('hero.ctaSecondary')}
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={scrollToProperties}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}