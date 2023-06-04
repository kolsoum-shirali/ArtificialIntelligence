<template>
  <div>
    <div id="main">
      <HeroSection />
      <AboutSection />
      <WhyUs />
      <ServicesSection />
      <CtaSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
    </div>
  </div>
</template>

<script>
import HeroSection from '@/components/page/home/HeroSection.vue'
import AboutSection from '@/components/page/home/AboutSection.vue'
import WhyUs from '@/components/page/home/WhyUs.vue'
import ServicesSection from '@/components/page/home/ServicesSection.vue'
import CtaSection from '@/components/page/home/CtaSection.vue'
import PortfolioSection from '@/components/page/home/PortfolioSection.vue'
import TeamSection from '@/components/page/home/TeamSection.vue'
import ContactSection from '@/components/page/home/ContactSection.vue'
export default {
  name: 'IndexPage',
  layout:'main',
  components: {
    HeroSection,
    AboutSection,
    WhyUs,
    ServicesSection,
    CtaSection,
    PortfolioSection,
    TeamSection,
    ContactSection,
  },
}
</script>
