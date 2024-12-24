<template>
  <div>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection />
    <PortfolioSection />
    <TestimonialsSection />
    <BlogSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';  // Ensure this is the correct path
import PortfolioSection from '@/components/PortfolioSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import BlogSection from '@/components/BlogSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    HeroSection,
    AboutSection,
    ServicesSection,
    PortfolioSection,
    TestimonialsSection,
    BlogSection,
    ContactSection,
    Footer
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
