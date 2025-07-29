'use client';

import { motion } from 'framer-motion';
import { MapPin, Users, Bed, Bath } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Property } from '@/data/properties';
import { useTranslation } from 'react-i18next';

interface PropertyCardProps {
  property: Property;
  index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
        <div className="relative h-64 overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          {property.featured && (
            <Badge className="absolute top-4 left-4 bg-primary">
              Premium
            </Badge>
          )}
          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {property.pricePerNight}€ {t('properties.perNight')}
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            {property.city}
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {property.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                {property.bedrooms}
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                {property.bathrooms}
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {property.maxGuests}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}