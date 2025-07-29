'use client';

import { motion } from 'framer-motion';
import { PropertyCard } from '@/components/property-card';
import { properties } from '@/data/properties';
import { useTranslation } from 'react-i18next';

export function PropertiesSection() {
  const { t } = useTranslation();

  return (
    <section id="properties" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('properties.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('properties.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}