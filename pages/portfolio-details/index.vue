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
        caption: 'Pox Detection from Images',
        category: 'Deployed Deep Learning',
        client: 'medium',
        projectDate: '28 July, 2022',
        projectURL: 'Link',
        content: {
          title:
            'The World Health Organization has declared Monkey Pox a global health emergency',
          description:
            'There are different kinds of pox — Chicken pox, smallpox, measles, and now monkeypox. We have leveraged Pytorch deep neural networks to detect different types of pox and train models, making them capable of detecting pox type from images.',
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
