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
  plugins: [
    '~/plugins/marquee/Vue3Marquee.client',
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
    // sanctum: {
    //     baseUrl: 'http://127.0.0.1:8000', // Laravel API
    //     origin: 'http://localhost:3000', // Nuxt app
    // },
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
