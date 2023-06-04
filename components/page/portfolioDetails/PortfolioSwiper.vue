<template>
  <div class="portfolio-details-slider swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(img,index) in images" :key="index">
        <img
          :src="require(`assets/images/portfolio/${img.title}`)"
        />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Pagination } from 'swiper/core'
SwiperCore.use([Pagination])
export default {
  name: 'PortfolioSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  props:{
    images:{
      type:Array,
      default:()=>[]
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
}
</script>
