// https://nuxt.com/docs/api/configuration/nuxt-config



export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/scss/global.scss',
  ],
  modules: [
    'nuxt-bootstrap-icons',
    'nuxt-swiper',
    '@nuxt/image',
  ],
  components: true,
  plugins: [
    //'~/plugins/Vue3Marquee.client.ts',
  ],
  image: {
    quality: 80,
    // format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },

    domains: [
      'admin.garnierbbdo.com'
    ],
    alias: {
      unsplash: 'https://admin.garnierbbdo.com'
    }
  },
  swiper: {
    modules: ['grid', 'autoplay', 'pagination']
  }
})
