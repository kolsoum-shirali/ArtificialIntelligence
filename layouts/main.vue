<template>
  <div>
    <div id="preloader"></div>
    <AppHeader />
    <div id="main">
      <nuxt />
    </div>
    <AppFooter />
    <a
      href="#"
      class="back-to-top d-flex align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
export default {
  name: 'MainLayout',
  components: { AppHeader, AppFooter },
}
</script>
