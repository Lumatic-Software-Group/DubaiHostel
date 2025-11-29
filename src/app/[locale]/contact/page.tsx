import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { setRequestLocale } from 'next-intl/server';

interface PageProps {
  params: { locale: string };
}

export default function ContactPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}