'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/utils/constants';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      // Simulate form submission for now
      // Replace with actual EmailJS implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      /*
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formData,
        EMAILJS_CONFIG.publicKey
      );
      */
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {t('contact.title')}
          </CardTitle>
          <p className="text-center text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  name="name"
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <Input
                name="subject"
                placeholder={t('contact.form.subject')}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder={t('contact.form.message')}
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-center font-medium"
              >
                {t('contact.form.success')}
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-center font-medium"
              >
                {t('contact.form.error')}
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
              size="lg"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
                  />
                  {t('contact.form.sending')}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {t('contact.form.send')}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}