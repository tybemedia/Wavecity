// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  nitro: {
    prerender: {
      routes: ['/'],
      failOnError: false
    }
  },
  app: {
    head: {
      title: 'Wavecity - Fine Burgers & Drinks',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Wavecity Fine Burgers & Drinks™ is a full-service restaurant and bar specializing in gourmet burgers, fresh-cut fries, tropical drinks, and great happy hour deals with a coastal spirit.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  googleFonts: {
    families: {
      'Open+Sans': [400, 600, 700],
      'Montserrat': [400, 600, 700]
    },
    display: 'swap'
  },
  // Enable static site generation
  ssr: false,
  // Configure static site generation
  target: 'static',
  // Ensure all pages are pre-rendered
  generate: {
    fallback: true
  }
})
