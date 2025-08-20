import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import PortfolioShowcase from '@/components/sections/portfolio-showcase';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PortfolioShowcase />
      <Footer />
    </main>
  );
}