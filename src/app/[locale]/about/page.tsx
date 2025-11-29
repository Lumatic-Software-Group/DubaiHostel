import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { setRequestLocale } from 'next-intl/server';

interface PageProps {
  params: { locale: string };
}

export default function AboutPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}