import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import FeatureSection from '@/components/FeatureSection/FeatureSection';
import HighlightsSection from '@/components/HighlightsSection/HighlightsSection';
import ImmersiveSection from '@/components/ImmersiveSection/ImmersiveSection';
import BentoGridSection from '@/components/BentoGridSection/BentoGridSection';
import WhyImmersiveSection from '@/components/WhyImmersiveSection/WhyImmersiveSection';
import WhyGridSection from '@/components/WhyGridSection/WhyGridSection';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureSection />
      <HighlightsSection />
      <ImmersiveSection />
      <BentoGridSection />
      <WhyImmersiveSection />
      <WhyGridSection />
      <Footer />
    </main>
  );
}
