import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AllHostelsSection from '@/components/AllHostelsSection';
import FilterSection from '@/components/FilterSection';
import { setRequestLocale } from 'next-intl/server';

interface PageProps {
  params: { locale: string };
}

export default function HostelsPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <FilterSection />
        <AllHostelsSection />
      </div>
      <Footer />
    </main>
  );
}