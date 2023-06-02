export default {
  head: {
    title: 'ai',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: '/vendor/aos/aos.js' },
      { src: '/vendor/glightbox/js/glightbox.min.js' },
      { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js' },
      { src: '/vendor/isotope-layout/isotope.pkgd.min.js' },
      { src: '/vendor/swiper/swiper-bundle.min.js' },
      { src: '/vendor/waypoints/noframework.waypoints.js' },
      { src: '/vendor/php-email-form/validate.js' },
    ],
  },
  css: [
    '@/assets/css/main.css',
    '@/static/vendor/aos/aos.css',
    '@/static/vendor/bootstrap/css/bootstrap.min.css',
    '@/static/vendor/bootstrap-icons/bootstrap-icons.css',
    '@/static/vendor/boxicons/css/boxicons.min.css',
    '@/static/vendor/glightbox/css/glightbox.min.css',
    '@/static/vendor/remixicon/remixicon.css',
    '@/static/vendor/swiper/swiper-bundle.min.css',
  ],
  plugins: [{ src: '@/plugins/main.js', ssr: false }],
  components: false,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {
    baseURL: '/',
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  build: {},
}
