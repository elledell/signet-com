import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import BlogSection from '@/components/BlogSection';
import Testimonials from '@/components/Testimonials';
import ProjectInquiry from '@/components/ProjectInquiry';
import ContactSection from '@/components/ContactSection';
const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <Gallery />
      <WhyChooseUs />
      <BlogSection />
      
      {/* New Testimonials Section */}
      <Testimonials />
      
      <ProjectInquiry />
      <ContactSection />
    </div>
  );
};

export default Home;