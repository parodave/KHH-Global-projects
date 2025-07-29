'use client';

import Link from 'next/link';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '@/utils/constants';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">KHH Global Projects</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t('common.contact')}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <div className="space-y-2 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                {t('footer.privacy')}
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} KHH Global Projects. {t('footer.rights')}.
        </div>
      </div>
    </footer>
  );
}