import React from 'react';
import { Coffee, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const { t } = useLanguage();

  return (
    <footer className={`${isDarkMode ? 'bg-stone-950' : 'bg-stone-800'} text-stone-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Coffee className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold text-white">Alto Coffee</span>
            </div>
            <p className="text-stone-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-stone-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">{t('nav.gallery')}</a></li>
              <li><a href="#locations" className="hover:text-amber-400 transition-colors">{t('nav.locations')}</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <span className="text-sm">+381 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <span className="text-sm">info@altocoffee.rs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-12 pt-8 text-center">
          <p className="text-stone-400">
            &copy; 2024 Alto Coffee. {t('footer.copyright')} 
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-amber-400 transition-colors">{t('footer.terms')}</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-amber-400 transition-colors">{t('footer.privacy')}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;