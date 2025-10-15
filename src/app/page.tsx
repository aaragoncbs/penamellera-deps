import HeroSection from '@/components/pages/home/hero-section';
import AboutSection from '@/components/pages/home/about-section';
import DisciplinesSection from '@/components/pages/home/disciplines-section';
import AgendaSection from '@/components/pages/home/agenda-section';
import ContactSection from '@/components/pages/home/contact-section';
import GallerySection from '@/components/pages/home/gallery-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DisciplinesSection />
      <GallerySection />
      <AgendaSection />
      <ContactSection />
    </>
  );
}
