'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function DaoSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: t('dao.features.transparency'),
      description: 'Toutes les transactions sont visibles sur la blockchain'
    },
    {
      icon: Users,
      title: t('dao.features.democracy'),
      description: 'Chaque membre vote sur les décisions importantes'
    },
    {
      icon: Zap,
      title: t('dao.features.innovation'),
      description: 'Technologie blockchain pour l\'immobilier de demain'
    }
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('dao.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('dao.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('dao.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" className="text-lg px-8 py-6 rounded-full">
            {t('dao.cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}