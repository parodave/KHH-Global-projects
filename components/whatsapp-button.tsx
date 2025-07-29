'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/utils/constants';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 text-white shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </motion.div>
  );
}