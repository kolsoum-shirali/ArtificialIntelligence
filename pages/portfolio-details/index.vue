<template>
  <div>
    <BreadCrumbs title="Portfolio Details" />
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <PortfolioSwiper :images="images" />
          </div>
          <div class="col-lg-4">
            <PortfolioDetails :info="info" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/common/BreadCrumbs.vue'
import PortfolioDetails from '@/components/page/portfolioDetails/portfolioDetails'
import PortfolioSwiper from '@/components/page/portfolioDetails/portfolioSwiper'
export default {
  name: 'portfolioDetails',
  layout: 'main',
  components: {
    BreadCrumbs,
    PortfolioDetails,
    PortfolioSwiper,
  },
  data() {
    return {
      info: {
        caption: 'Patient Readmission Prediction',
        category: 'Machine Learning',
        client: 'Hamad Medical Corporation',
        projectDate: '12 August, 2022',
        projectURL: 'Link',
        content: {
          title:
            'A smart machine learning-based solution to patient re-admission problems for Hamad Medical Corporation (HMC).',
          description:
            'Developed at the CodeCamp22 Hackathon organized by the Digital Incubation Center (DIC) under the patronage of the Ministry of Communications and Information Technolog',
        },
      },
      images: [
        { title: 'portfolio-1.jpg' },
        { title: 'portfolio-1-0.jpg' },
        { title: 'portfolio-1-2.jpg' },
        { title: 'portfolio-1-1.gif' },
      ],
    }
  },
}
</script>
