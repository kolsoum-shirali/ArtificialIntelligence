<template>
  <div>
    <div id="preloader"></div>
    <AppHeader />
    <div id="main">
      <HeroSection />
      <AboutSection />
      <WhyUs />
      <ServicesSection />
      <CtaSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
      <AppFooter />
    </div>
    <a
      href="#"
      class="back-to-top d-flex align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>
  </div>
</template>

<script>
import AppHeader from '@/components/page/home/AppHeader.vue'
import HeroSection from '@/components/page/home/HeroSection.vue'
import AboutSection from '@/components/page/home/AboutSection.vue'
import WhyUs from '@/components/page/home/WhyUs.vue'
import ServicesSection from '@/components/page/home/ServicesSection.vue'
import CtaSection from '@/components/page/home/CtaSection.vue'
import PortfolioSection from '@/components/page/home/PortfolioSection.vue'
import TeamSection from '@/components/page/home/TeamSection.vue'
import ContactSection from '@/components/page/home/ContactSection.vue'
import AppFooter from '@/components/page/home/AppFooter.vue'
export default {
  name: 'IndexPage',
  components: {
    AppHeader,
    HeroSection,
    AboutSection,
    WhyUs,
    ServicesSection,
    CtaSection,
    PortfolioSection,
    TeamSection,
    ContactSection,
    AppFooter,
  },
}
</script>
