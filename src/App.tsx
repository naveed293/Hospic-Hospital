import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Departments } from '@/components/sections/Departments';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { Doctors } from '@/components/sections/Doctors';
import { Faq } from '@/components/sections/Faq';
import { Blog } from '@/components/sections/Blog';
import { Footer } from '@/components/sections/Footer';
import { BackToTop } from '@/components/ui/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Departments />
        <Pricing />
        <Testimonials />
        <Doctors />
        <Faq />
        <Blog />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
